import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'movie-detail-actor',
  styleUrl: 'movie-detail-actor.scss',
  shadow: false,
})
export class MovieDetailActor {
  render() {
    return (
      <Host>
        <div class="col-6 col-lg-2">
          <img src="/assets/images/actorSample.jpg" class="imageActor"></img>
          <div class="nameActor">
            Name 1
          </div>
        </div>
      </Host>
    );
  }
}
