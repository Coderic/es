import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubService } from 'src/app/github.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  public projects$: Observable<any>;

  constructor(private github: GithubService) { }

  ngOnInit(): void {
    this.projects$ = this.github.getProjects();
  }
}
