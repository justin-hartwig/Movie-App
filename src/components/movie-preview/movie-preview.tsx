import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'movie-preview',
  styleUrl: 'movie-preview.scss',
  shadow: false,
})
export class MoviePreview {
  @Prop() movieTitle: string;
  @Prop() imageUrl: string;

  render() {
    return (
      <Host>
        <div class="movie-preview-wrapper">
          <div class="movie-card" style={{'background-image' : `url(${this.imageUrl})`}}>
              <div class="movie-card-overlay d-flex">
                <button class="button-icon button-detail"></button>
                <button class="button-icon button-add-watchlist"></button>
                <button class="button-icon button-add-favorits"></button>
              </div>
            </div>
          <div class="movie-title">{this.movieTitle}</div>   
        </div>   
      </Host>
    );
  }

}
