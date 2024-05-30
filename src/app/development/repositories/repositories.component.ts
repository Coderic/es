import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../github.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css'],
})
export class RepositoriesComponent implements OnInit {
  public repositories$: Observable<any>;

  constructor(private github: GithubService) { }

  ngOnInit(): void {
    //this.repositories$ = this.github.getRepositories();
  }
}
