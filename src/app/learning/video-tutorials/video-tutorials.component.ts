import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-video-tutorials',
    templateUrl: './video-tutorials.component.html',
    styleUrls: ['./video-tutorials.component.css'],
    standalone: false
})
export class VideoTutorialsComponent implements OnInit {
  public playlists$: Observable<any>;
  constructor() {

  }
  ngOnInit(): void {
    //this.playlists$ = this.ffSrv.getPlaylists();
  }
}
