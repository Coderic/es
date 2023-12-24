import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export const httpOptions = {
  reportProgress: true,
  withCredentials: false,
  headers: new HttpHeaders({
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json',
      'Accept': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(private http: HttpClient) {

  }
  getItems(playlistId: string) {
    return this.http.get('https://www.googleapis.com/youtube/v3/playlistItems?playlistId=PLZ2ovOgdI-kWDh3jDh-GvgToRlVfwIUFw');
  }
}
