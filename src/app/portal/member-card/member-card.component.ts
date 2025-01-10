import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubService } from 'src/app/github.service';

@Component({
    selector: 'app-member-card',
    templateUrl: './member-card.component.html',
    styleUrls: ['./member-card.component.css'],
    standalone: false
})
export class MemberCardComponent implements OnInit {
  @Input('username') public username: string;

  public member$: Observable<any>;
  constructor(private github: GithubService) { }
  ngOnInit(): void {
    this.member$ = this.github.getMember(this.username);
  }
}
