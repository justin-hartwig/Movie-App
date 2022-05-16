import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'movie-detail-similarmovie',
  styleUrl: "movie-detail-similarmovie.scss",
  shadow: false,
})
export class MovieDetailSimilarmovie {
  @Prop() movieTitle: string;
  @Prop() imagePosterUrl: string;


  render() {
    return (
      <Host>
          <div class="movie-card" style={{'background-image' : `url(${this.imagePosterUrl})`}}>
          </div>
          <div class="titleSimilarMovie">
            {this.movieTitle}
          </div>
      </Host>
    );
  }

}
