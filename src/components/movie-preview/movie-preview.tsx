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
          <div class="movie-card p-3" style={{'background-image' : `url(${this.imageUrl})`}}></div>
          <div class="movie-title">{this.movieTitle}</div>   
      </Host>
    );
  }

}
