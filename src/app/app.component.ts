import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from './security/auth.service';

import { Observable } from 'rxjs';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  public categories$: Observable<any[]>;
  ngOnInit(): void {

  }

  logout(): void {
    
  }
}
