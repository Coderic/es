import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../youtube.service';

let apiLoaded = false;

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  private playlistItems: any;
  constructor(private yt: YoutubeService) {
    //this.yt.getItems('lipsum').subscribe(console.dir);
  }

  ngOnInit() {
    if (!apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      apiLoaded = true;
    }
  }
}
