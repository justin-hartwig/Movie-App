import { Component, h, Prop, State, Listen, Method } from '@stencil/core';
import { MovieIcon } from '../movie-icon/movie-icon';

@Component({
  tag: 'movie-output',
  shadow: false,
})
export class MovieOutput {
  @Prop() apiKey: string = 'api_key=e6ddd5d3d3a06af375cb7f8401967566';
  @Prop() baseURL: string = 'https://api.themoviedb.org/3';
  @Prop() imageURL: string = 'https://image.tmdb.org/t/p/w500';
  @Prop() apiURL: string = this.baseURL + '/discover/movie?sort_by=popularity.desc&' + this.apiKey;

  @State() currentDisplayedMovies: any[];
  
  newMovies: any[] = [];
  watchlistMovies: any[] = [];
  watchlisDisplayed: boolean = false;

  @Listen('addToWatchlist')
  addToWatchlistHandler(event: CustomEvent<MovieIcon>){
    const targetElement : HTMLElement = event.target as HTMLElement;
    const movieToAdd : object = this.getMovieByTitle(targetElement.closest('movie-preview').movieTitle);
    if(!this.checkIfMovieInList(movieToAdd, this.watchlistMovies)){
      this.watchlistMovies.push(movieToAdd);
    }
  }

  @Listen('removeFromWatchlist')
  removeFromWatchlist(event: CustomEvent<MovieIcon>){
    const targetElement : HTMLElement = event.target as HTMLElement;
    const movieToRemove : object = this.getMovieByTitle(targetElement.closest('movie-preview').movieTitle);
    if(this.checkIfMovieInList(movieToRemove, this.watchlistMovies)){
      this.watchlistMovies = this.watchlistMovies.filter(movie => movie !== movieToRemove);
    }
    if(this.watchlisDisplayed){
      this.showWatchlist();
    }
  }

  getMovieByTitle(title : string) : object {
    let foundMovie : object;
    this.currentDisplayedMovies.filter(movie => {
      if(movie.title === title) {
        foundMovie = movie;
      }
    })
    return foundMovie;
  }

  //Get movies and save them in movies array
  async fetchNewMovies(url:string) {
    return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.results;
    });
  }

  checkIfMovieInList(movie, list :any[]) : boolean {
    let result : boolean = false;
    list.filter(entry => {
      if(entry.title === movie.title) {
        result = true;
      }
    })
    return result;
  }

  @Method()
  async showWatchlist(){
    this.watchlisDisplayed = true;
    this.currentDisplayedMovies = this.watchlistMovies;
  }

  @Method()
  async showNewMovielist(){
    this.watchlisDisplayed = false;
    this.currentDisplayedMovies = this.newMovies;
  }

  //InitalLoad
  async componentWillLoad(){
    this.newMovies = await this.fetchNewMovies(this.apiURL);
    this.showNewMovielist();
  }

  render() {
    return(
      this.currentDisplayedMovies.length > 0
        ? 
          this.currentDisplayedMovies?.map((movie) => {
            return(
              <movie-preview class="col-12 col-sm-6 col-lg-3 col-xl-2 mt-5" movie-title={movie.title} image-url={this.imageURL + movie.poster_path}> </movie-preview>
            )
          })
        :
          <p id="no-movies-message">Auf dieser Liste befinden sich momentan keine Filme. Wechsel zu einer anderen Liste um Filme zu dieser Liste hinzufügen.</p>
    )
  }
}