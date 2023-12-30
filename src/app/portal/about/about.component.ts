import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubService } from 'src/app/github.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  public members$: Observable<any[]>;
  constructor(private github: GithubService) {
    this.members$ = this.github.getMembers();
  }
}
