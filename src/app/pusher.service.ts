import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import Pusher from 'pusher-js';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PusherService {
  private pusher: any;
  public webhooks: any;

  constructor(private http: HttpClient) {
    this.pusher = new Pusher(environment.pusher.key, {
      cluster: environment.pusher.cluster
    });

    this.webhooks = this.pusher.subscribe('webhooks');
  }

  getEvents(eventName: string): Observable<any> {
    return new Observable<string>(observer => {
      this.webhooks.bind(eventName, (data: any) => {
        observer.next(data)
      });
    });
  }
}
