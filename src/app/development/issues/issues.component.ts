import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubService } from 'src/app/github.service';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent {
  public issues$: Observable<any>;

  constructor(private github: GithubService) { }

  ngOnInit(): void {
    this.issues$ = this.github.getIssues();
    this.issues$.subscribe(console.dir);
  }
}
