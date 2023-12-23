import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  dtOptions: DataTables.Settings = {
    language: {
      url: './assets/es-ES.json'
    }
  };
}
