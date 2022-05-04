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
          <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
            <div class="col">
              <div class="p-3">
                <div class="feld"></div>
              </div>
            </div>
            <div class="col">
              <div class="p-3">
                <div class="feld"></div>
              </div>
            </div>
            <div class="col">
              <div class="p-3">
                <div class="feld"></div>
              </div>
            </div>
            <div class="col">
              <div class="p-3">
                <div class="feld"></div>
              </div>
            </div>
            <div class="col">
              <div class="p-3">
                <div class="feld"></div>
              </div>
            </div>
            <div class="col">
              <div class="p-3">
                <div class="feld"></div>
              </div>
            </div>
            <div class="col">
              <div class="p-3">
                <div class="feld"></div>
              </div>
            </div>
            <div class="col">
              <div class="p-3">
                <div class="feld"></div>
              </div>
            </div>
            <div class="col">
              <div class="p-3">
                <div class="feld"></div>
              </div>
            </div>
            <div class="col">
              <div class="p-3">
                <div class="feld"></div>
              </div>
            </div>
          </div>
        </div>
      </Host>
    );
  }

}
