import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'movie-preview',
  styleUrl: 'movie-preview.scss',
  shadow: true,
})
export class MoviePreview {

  render() {
    return (
      <Host>
        <slot></slot>
        <div>Test</div>
      </Host>
    );
  }

}
