import { Injectable, inject } from '@angular/core';
import { Observable, defer, from, map } from 'rxjs';
import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { HttpsCallableResult } from '@angular/fire/functions';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirefunctionsService {
  private firestore: Firestore = inject(Firestore);

  constructor(private func: AngularFireFunctions) {

    //let value ={ coolMsg: "hola MUNDO" };
    //this.fnMyUppercase2(value).subscribe(console.dir);
    //this.fnMyUppercase(value).subscribe(console.dir);
  }

  getPlaylists(): Observable<any> {
    const aCollection = collection(this.firestore, 'playlists')
    return collectionData(aCollection);
  }

  invite(invitee_id: number): Observable<HttpsCallableResult<any>> {
    return this.func.httpsCallable('invitee')(invitee_id);
  }
  fnMyUppercase(value: any): Observable<HttpsCallableResult> {
    return this.func.httpsCallable<HttpsCallableResult>('upper')(value);
  }
}
