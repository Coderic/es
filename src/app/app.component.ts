import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from './security/auth.service';

import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { RemoteConfig } from '@angular/fire/remote-config';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  private remoteConfig: RemoteConfig = inject(RemoteConfig);
  public categories$: Observable<any[]>;
  public user$: Observable<firebase.User | null> = this.auth.user;
  constructor(public auth: AngularFireAuth, private router: Router) {
    /*
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        this.router.navigate(['dashboard'])
      }
      else {
        //this.router.navigate(['login']);
      }
    });
*/
  }

  ngOnInit(): void {

  }

  loginGithub(): void {
    this.auth.signInWithRedirect(new firebase.auth.GithubAuthProvider());
  }

  loginGoogle(): void {
    this.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  loginFacebook(): void {
    this.auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider());
  }

  logout(): void {
    this.auth.signOut();
  }
}
