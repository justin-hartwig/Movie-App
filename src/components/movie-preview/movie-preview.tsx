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
          <div class="row g-2 g-lg-3">
            <div class="col col-4 col-lg-3">
              <div class="p-3">
                <div class="feld"></div>
              </div>
            </div>
            <div class="col col-4 col-lg-3">
              <div class="p-3">
                <div class="feld"></div>
              </div>
            </div>
            <div class="col col-4 col-lg-3">
              <div class="p-3">
                <div class="feld"></div>
              </div>
            </div>
            <div class="col col-4 col-lg-3">
              <div class="p-3">
                <div class="feld"></div>
              </div>
            </div>
            <div class="col col-4 col-lg-3">
              <div class="p-3">
                <div class="feld"></div>
              </div>
            </div>
            <div class="col col-4 col-lg-3">
              <div class="p-3">
                <div class="feld"></div>
              </div>
            </div>
            <div class="col col-4 col-lg-3">
              <div class="p-3">
                <div class="feld"></div>
              </div>
            </div>
            <div class="col col-4 col-lg-3">
              <div class="p-3">
                <div class="feld"></div>
              </div>
            </div>
            <div class="col col-4 col-lg-3">
              <div class="p-3">
                <div class="feld"></div>
              </div>
            </div>
            <div class="col col-4 col-lg-3">
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
