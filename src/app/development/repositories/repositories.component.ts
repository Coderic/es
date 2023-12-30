import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../github.service';
import { FirefunctionsService } from '../../firefunctions.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css'],
})
export class RepositoriesComponent implements OnInit {
  public repositories$: Observable<any>;

  constructor(private github: GithubService, private fn: FirefunctionsService) { }

  ngOnInit(): void {
    this.repositories$ = this.github.getRepositories();
  }
}
