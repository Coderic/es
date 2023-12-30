import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FirefunctionsService } from 'src/app/firefunctions.service';

@Component({
  selector: 'app-video-tutorials',
  templateUrl: './video-tutorials.component.html',
  styleUrls: ['./video-tutorials.component.css']
})
export class VideoTutorialsComponent implements OnInit {
  public playlists$: Observable<any>;
  constructor(private ffSrv: FirefunctionsService) {

  }
  ngOnInit(): void {
    this.playlists$ = this.ffSrv.getPlaylists();
  }
}
