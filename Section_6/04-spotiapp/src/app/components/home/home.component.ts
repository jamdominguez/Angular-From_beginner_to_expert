import { Component } from '@angular/core';

import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  newReleases: any[] = [];

  constructor(private spotify: SpotifyService) {
    this.spotify.getNewReleases().subscribe((resp: any) => {
      this.newReleases = resp.albums.items;
      console.log(this.newReleases);
    });
  }
}