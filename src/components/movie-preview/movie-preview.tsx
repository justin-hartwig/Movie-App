import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'movie-preview',
  styleUrl: 'movie-preview.scss',
  shadow: false,
})
export class MoviePreview {
  @Prop() movieTitle: string;
  @Prop() imagePosterUrl: string;

  render() {
    return (
      <Host>
        <div class="movie-preview-wrapper">
          <div class="movie-card" style={{'background-image' : `url(${this.imagePosterUrl})`}}>
              <div class="movie-card-overlay d-flex flex-column align-items-center justify-content-center">
                <movie-icon icon-name="detail"></movie-icon>
                <movie-icon icon-name="watchlist"></movie-icon>
                <movie-icon icon-name="favourite-add"></movie-icon>
              </div>
            </div>
          <div class="movie-title">{this.movieTitle}</div>   
        </div>   
      </Host>
    );
  }

}
