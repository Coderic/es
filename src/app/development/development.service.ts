import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { httpOptions } from '../app.interface';

@Injectable({
  providedIn: 'root'
})
export class DevelopmentService {

  constructor(private http: HttpClient) { }

  getRepositories(): Observable<any> {
    let url = environment.githubApi + '/repos';
    return this.http.get<any>(url, httpOptions);
  }

  getEvents(): Observable<any> {
    let url = environment.githubApi + '/events';
    return this.http.get<any>(url, httpOptions);
  }

  getIssues(): Observable<any> {
    let url = environment.githubApi + '/issues';
    return this.http.get<any>(url, httpOptions);
  }
}
