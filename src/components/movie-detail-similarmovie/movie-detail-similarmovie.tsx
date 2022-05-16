import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'movie-detail-similarmovie',
  styleUrl: "movie-detail-similarmovie.scss",
  shadow: false,
})
export class MovieDetailSimilarmovie {

  render() {
    return (
      <Host>
        <div class="col-6 col-lg-2">
          <img src="/assets/images/sampleMoviePoster.jpg" class="imageSimilarMovie"></img>
          <div class="titleSimilarMovie">
            Name 1
          </div>
        </div>
      </Host>
    );
  }

}
