import { Component } from '@angular/core';
import { DevelopmentService } from '../development.service';
@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent {
  constructor(private dev: DevelopmentService) {
    this.dev.getRepositories().subscribe(console.dir);
  }
}
