import { Component, Host, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'movie-output',
  shadow: false,
})
export class TmdbCall {
  @Prop() apiKey: string = 'api_key=e6ddd5d3d3a06af375cb7f8401967566';
  @Prop() baseURL: string = 'https://api.themoviedb.org/3';
  @Prop() imageURL: string = 'https://image.tmdb.org/t/p/w500';
  
  @Prop() apiURL: string = this.baseURL + '/discover/movie?sort_by=popularity.desc&' + this.apiKey;
  
  @State() newMovies: any[];

  //Get movies and save them in movies array
  getMovies(url:string):void {
    fetch(url).then(res => res.json()).then(data => {
      this.newMovies = data.results;
    });
  }

  //InitalLoad
  componentWillLoad(){
    this.getMovies(this.apiURL);
  }

  render() {
    return (
      <Host>
          {this.newMovies?.map((movie) =>
            <movie-preview class="col-12 col-sm-6 col-lg-3 col-xl-2 mt-5" movie-title={movie.title} image-url={this.imageURL + movie.poster_path}></movie-preview>
          )}
      </Host>
    );
  }

}