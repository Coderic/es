import { Component, OnInit } from '@angular/core';
import { PusherService } from '../pusher.service';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {
  constructor(private githubSrv: GithubService, private pusherSrv: PusherService) {}

  ngOnInit(): void {
  }
}
