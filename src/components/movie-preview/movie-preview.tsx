import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'movie-preview',
  styleUrl: 'movie-preview.scss',
  shadow: false,
})
export class MoviePreview {

  render() {
    return (
      <Host>
        <div class="container">

          <div class="feld">
            Column
          </div>
          <div class="feld">
            Column
          </div>
          <div class="feld">
            Column

          </div>
        </div>
      </Host>
    );
  }

}
