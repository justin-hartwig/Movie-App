import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'movie-detail-actor',
  styleUrl: 'movie-detail-actor.scss',
  shadow: false,
})


export class MovieDetailActor {
  @Prop() personName: string;
  @Prop() personImg: string;

  profileImgUrl: string = 'https://image.tmdb.org/t/p/w500';

  render() {
    return (
      <Host>
        <div class="actor-card" style={{'background-image' : `url(${this.profileImgUrl + this.personImg})`}}>
        </div>
        <div class="nameActor">
          {this.personName}
        </div>
      </Host>
    );
  }
}
