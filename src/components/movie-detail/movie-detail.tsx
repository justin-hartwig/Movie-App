import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'movie-detail',
  shadow: false,
  styleUrl: 'movie-detail.scss',
})

export class MovieDetail {

  render() {
    return (
      <Host>
        <div id="headerMovieDetail">
          <div class="row">
            <div class="col-12 col-lg-4 title-wrapper">
              
            </div>
          </div>
        </div>
      </Host>
    );
  }

}
