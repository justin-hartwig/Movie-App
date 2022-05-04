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
        <div class="d-flex">Test</div>
        <button type="button" class="btn btn-success">Success</button>
      </Host>
    );
  }

}
