import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubService } from 'src/app/github.service';
import { PusherService } from 'src/app/pusher.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  public event$: Observable<any>;
  public events$: Observable<any>;
  constructor(private githubSrv: GithubService, private pusherSrv: PusherService) {}

  ngOnInit(): void {
    this.events$ = this.githubSrv.getEvents();
    this.event$ = this.pusherSrv.getEvents('repository');
    this.events$.subscribe(console.dir);
  }
}
