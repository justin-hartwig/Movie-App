import { Component, h, Prop, State, Listen, Method } from '@stencil/core';
import { MovieIcon } from '../movie-icon/movie-icon';

@Component({
  tag: 'movie-output',
  shadow: false,
})

export class MovieOutput {
  newMovies: any[] = [];
  watchlistMovies: any[] = [];
  favoritMovies: any[] = [];
  searchedMovies: any[] = [];
  watchlisDisplayed: boolean = false;
  favoritDisplayed: boolean = false;
  currentDisplayedDetail: any;
  language: string = "&language=de";
  searchUrl: string = "https://api.themoviedb.org/3/search/movie?";

  @Prop() apiKey: string = 'api_key=e6ddd5d3d3a06af375cb7f8401967566';
  @Prop() baseURL: string = 'https://api.themoviedb.org/3';
  @Prop() imagePosterUrl: string = 'https://image.tmdb.org/t/p/w500';
  @Prop() imageBackdropUrl: string = 'https://image.tmdb.org/t/p/original';
  @Prop() apiURL: string = this.baseURL + '/discover/movie?sort_by=popularity.desc&' + this.apiKey + this.language;

  //The current displayed movies, used to rerender the list if changed.
  @State() currentDisplayedMovies: any[];
  //State to determin if the detail view shoul be rendert.
  @State() detailDisplayed: boolean = false;


  @Listen('addToWatchlist')
  /** 
   * Listens to the add watchlist icon click event. 
   * Adds the clicked movie to the watchlist.
   * 
   * @param {CustomEvent<MovieIcon>} event The listend event.
  */
  addToWatchlistHandler(event: CustomEvent<MovieIcon>){
    const targetElement : HTMLElement = event.target as HTMLElement;
    const movieToAdd : object = this.getMovieByTitle(targetElement.closest('movie-preview').movieTitle);
    if(!this.checkIfMovieInList(movieToAdd, this.watchlistMovies)){
      this.watchlistMovies.push(movieToAdd);
    }
  }

  @Listen('removeFromWatchlist')
  /** 
   * Listens to the remove watchlist icon click event. 
   * Removes the clicked movie from the watchlist.
   * Rerenders the list if the watchlist is displayed.
   * 
   * @param {CustomEvent<MovieIcon>} event The listend event.
  */
  removeFromWatchlistHandler(event: CustomEvent<MovieIcon>){
    const targetElement : HTMLElement = event.target as HTMLElement;
    const movieToRemove : object = this.getMovieByTitle(targetElement.closest('movie-preview').movieTitle);
    if(this.checkIfMovieInList(movieToRemove, this.watchlistMovies)){
      this.watchlistMovies = this.watchlistMovies.filter(movie => movie !== movieToRemove);
    }
    if(this.watchlisDisplayed){
      this.showWatchlist();
    }
  }

  @Listen('addToFavorit')
  /** 
   * Listens to the add favorit icon click event. 
   * Adds the clicked movie to the favorits.
   * 
   * @param {CustomEvent<MovieIcon>} event The listend event.
  */
  addToFavoritestHandler(event: CustomEvent<MovieIcon>){
    const targetElement : HTMLElement = event.target as HTMLElement;
    const movieToAdd : object = this.getMovieByTitle(targetElement.closest('movie-preview').movieTitle);
    if(!this.checkIfMovieInList(movieToAdd, this.favoritMovies)){
      this.favoritMovies.push(movieToAdd);
    }
  }

  @Listen('removeFromFavorit')
  /** 
   * Listens to the remove favorit icon click event. 
   * Removes the clicked movie from the favorits.
   * Rerenders the list if the favorits are displayed.
   * 
   * @param {CustomEvent<MovieIcon>} event The listend event.
  */
  removeFromFavoritesHandler(event: CustomEvent<MovieIcon>){
    const targetElement : HTMLElement = event.target as HTMLElement;
    const movieToRemove : object = this.getMovieByTitle(targetElement.closest('movie-preview').movieTitle);
    if(this.checkIfMovieInList(movieToRemove, this.favoritMovies)){
      this.favoritMovies = this.favoritMovies.filter(movie => movie !== movieToRemove);
    }
    if(this.favoritDisplayed){
      this.showFavorit();
    }
  }

  @Listen('showDetail')
  /** 
   * Listens to the show detail icon click event.
   * Sets the movie that is displayed in detail.
   * Uses State to display detail view.
   * 
   * @param {CustomEvent<MovieIcon>} event The listend event.
  */
  showDetailHandler(event: CustomEvent<MovieIcon>){
    const targetElement : HTMLElement = event.target as HTMLElement;
    this.currentDisplayedDetail = this.getMovieByTitle(targetElement.closest('movie-preview').movieTitle);
    this.detailDisplayed = true;
  }

  @Listen('closeDetail')
  /** 
   * Listens to the show detail icon click event.
   * Uses State to hide detail view.
   * 
   * @param {CustomEvent<MovieIcon>} event The listend event.
  */
  closeDetailHandler(){
    this.detailDisplayed = false;
  }

  /** 
   * Seraches the displayed movies for the name. And returns the corresponding movie object.
   * 
   * @param {string} title The searched movie name.
   * @returns {object}  The found movie object.
  */
  getMovieByTitle(title : string) : object {
    let foundMovie : object;
    this.currentDisplayedMovies.filter(movie => {
      if(movie.title === title) {
        foundMovie = movie;
      }
    })
    return foundMovie;
  }

  /** 
   * Fetches currently relevant movies from the movie db api.
   * 
   * @param {string} url The movie db url.
   * @returns The fetched results for the movies.
  */
  async fetchNewMovies(url : string) {
    return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.results;
    });
  }

  /** 
   * Searches if a movie is in a movie list.
   * 
   * @param movie The searched movie object.
   * @param {any[]} movie The list with is searched.
   * @returns {boolean} The result of the search.
  */
  checkIfMovieInList(movie, list :any[]) : boolean {
    let result : boolean = false;
    list.filter(entry => {
      if(entry.title === movie.title) {
        result = true;
      }
    })
    return result;
  }

  /** 
   * Displayes watchlist with states, hides all other lists.
  */
  @Method()
  async showWatchlist(){
    this.watchlisDisplayed = true;
    this.favoritDisplayed = false;
    this.detailDisplayed = false;
    this.currentDisplayedMovies = this.watchlistMovies;
  }

  /** 
   * Displayes new movies with states, hides all other lists.
  */
  @Method()
  async showNewMovielist(){
    this.watchlisDisplayed = false;
    this.favoritDisplayed = false;
    this.detailDisplayed = false;
    this.currentDisplayedMovies = this.newMovies;
  }

  /** 
   * Displayes favorits with states, hides all other lists.
  */
  @Method()
  async showFavorit(){
    this.watchlisDisplayed = false;
    this.favoritDisplayed = true;
    this.detailDisplayed = false;
    this.currentDisplayedMovies = this.favoritMovies;
  }

  @Method()
  async showSearch(querry : string){
    if(querry === "") {
      this.showNewMovielist();
    }
    else {
      await this.fetchSearchedMovies(querry);
      this.watchlisDisplayed = false;
      this.favoritDisplayed = false;
      this.detailDisplayed = false;
      this.currentDisplayedMovies = this.searchedMovies;
    }
  }

  async fetchSearchedMovies(querry : string) {
    let searchMovieUrl = this.searchUrl + this.apiKey + this.language + "&query=" + querry + "&page=1&include_adult=false";
    let responseSearch = await fetch(searchMovieUrl).then(response => response.json());
    this.searchedMovies = responseSearch.results;
  }

  //Fetch data on load, display new movies.
  async componentWillLoad(){
    this.newMovies = await this.fetchNewMovies(this.apiURL);
    this.showNewMovielist();
  }

  render() {
    return(
      //Detail displayed
      this.detailDisplayed
      ?
      <movie-detail base-url={this.baseURL} api-key={this.apiKey} movie-id={this.currentDisplayedDetail.id} movie-title={this.currentDisplayedDetail.title} movie-description={this.currentDisplayedDetail.overview} image-backdrop-url={this.imageBackdropUrl + this.currentDisplayedDetail.backdrop_path} image-poster-url={this.imagePosterUrl} app-language={this.language}></movie-detail>
      :
      (this.currentDisplayedMovies.length > 0
        ? 
          //Generate a movie-preview component for each movie in the list.
          this.currentDisplayedMovies?.map((movie) => {
            return( 
              <movie-preview class="col-12 col-sm-6 col-lg-3 col-xl-2 mt-5" movie-title={movie.title} image-poster-url={this.imagePosterUrl + movie.poster_path}> </movie-preview>
            )
          })
        :
          //No movies in list
          <p id="no-movies-message">Auf dieser Liste befinden sich momentan keine Filme. Wechsel zu einer anderen Liste um Filme zu dieser Liste hinzufügen.</p>
      )
    )
  }
}