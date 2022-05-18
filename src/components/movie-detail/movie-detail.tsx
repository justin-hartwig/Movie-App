import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'movie-detail',
  shadow: false,
  styleUrl: 'movie-detail.scss',
})

export class MovieDetail {
  @Prop() movieId: string;
  @Prop() movieTitle: string = "Keine Angabe";
  @Prop() movieDescription: string = "Keine Angabe";
  @Prop() movieLength: number = 0;
  @Prop() imagePosterUrl: string = "Keine Angabe";
  @Prop() imageBackdropUrl: string = "Keine Angabe";
  @Prop() apiKey: string;
  @Prop() baseUrl: string;
  @Prop() appLanguage: string;

  youTubeBaseUrl: string = "https://www.youtube.com/embed/";

  movieRuntinme: number;
  movieGenres: string = "Keine Angabe";
  movieCastNames: string = "Keine Angabe";
  movieCast: any;
  movieTrailerUrl: string = "Keine Angabe";
  movieDirection: string = "Keine Angabe";
  similarMovies: any;


  @Event({ bubbles: true, composed: true }) closeDetail: EventEmitter;

  /** 
   * Emits event on close button pressed to trigger closing of detail view.
  */
  onCloseButtonClicked() {
    this.closeDetail.emit(this);
  }

  /** 
   * Fetches additional data for the detial view and stores them in variables.
  */
  async fetchAdditionalContent() {
    //Fetch URLs
    let fetchDataUrl = this.baseUrl + "/movie/" + this.movieId + "?" + this.apiKey + this.appLanguage;
    let fetchVideoUrl = this.baseUrl + "/movie/" + this.movieId + "/videos?" + this.apiKey + this.appLanguage;
    let fetchCreditsUrl = this.baseUrl + "/movie/" + this.movieId + "/credits?" + this.apiKey + this.appLanguage;
    let similarMoviesUrl = this.baseUrl + "/movie/" + this.movieId + "/similar?" + this.apiKey + this.appLanguage;

    //Fetch call
    let responseData = await fetch(fetchDataUrl).then(response => response.json());
    let responseVideo = await fetch(fetchVideoUrl).then(response => response.json());
    let responseCredits = await fetch(fetchCreditsUrl).then(response => response.json());
    let responseSimilarMovies = await fetch(similarMoviesUrl).then(response => response.json());
    let responseDirection = this.filterDirection(responseCredits.crew);


    //Format and store result
    this.movieRuntinme = responseData.runtime;
    this.movieGenres = this.stringifyApiData(responseData, "genres", 5);
    if(responseVideo.results.length > 0){
      this.movieTrailerUrl = this.youTubeBaseUrl + responseVideo.results[0].key;
    }
    this.movieCastNames = this.stringifyApiData(responseCredits, "cast", 3);
    this.movieDirection = this.stringifyDirectorData(responseDirection);
    this.movieCast = responseCredits.cast.slice(0, 6);
    this.similarMovies = responseSimilarMovies.results.slice(0, 6);
  }

  /** 
   * Formats data providet by the movie db api to a string with comma seperation.
   * 
   * @param {any} data Data providet by the movie db api.
   * @param {string} key A key to access subcategorys on the data object.
   * @param {number} length How many entries the result has.
   * @returns {string} The formated string.
  */
  stringifyApiData(data: any, key: string, length: number): string {
    let result: string = "";
    let index = 0;
    if(key === ""){
      return "keine Daten";
    }
    for (let subCategory of data[key]) {
      index++;
      result += subCategory.name;
      if (index < data[key].length && index < length) {
        result += ", ";
      }
      if (index >= length) {
        break;
      }
    }
    return result;
  }

  /** 
   * Filters the credits data for the directors.
   * 
   * @param {any} data The provides credits data by the movie db api.
   * @returns {any} data The found creditentries with the department "Directing".
  */
  filterDirection(data: any) {
    return data.filter(entry => entry.known_for_department === "Directing");
  }

  /** 
   * Similiar to stringifyApiData this function uses no key and legth to stringify the cast data for directors.
   * 
   * @param {any} data Data providet by the movie db api.
   * @returns {string} data The formated string.
  */
  stringifyDirectorData(data: any): string {
    let result: string = "";
    let index = 0;
    for (let subCategory of data) {
      index++;
      result += subCategory.name;
      if (index < data.length && index < length) {
        result += ", ";
      }
      if (index >= length) {
        break;
      }
    }
    return result;
  }

  //Fetch data on load
  componentWillLoad() {
    return this.fetchAdditionalContent();
  }

  /** 
   * Returns a Youtube IFrame with the movie URL if it is set.
   * 
   * @return The Youtube IFrame.
  */
  displayTrailer(){
    if(!(this.movieTrailerUrl === "Keine Angabe")){
      return <iframe width="100%" height="220" class="trailer" src={this.movieTrailerUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
    }
  }

  render() {
    return (
        <div class="container my-5 px-5 containerMovieDetail">
          <button class="btn button-close" onClick={this.onCloseButtonClicked.bind(this)}>
            <img src="/assets/images/icons/close.svg"></img>
          </button>
          <div class="pt-3">
            <div id="movieTitle">{this.movieTitle}</div>
          </div>
          <div class="headerMovieDetail">
            <div class="col-12 col-lg-4 title-wrapper" style={{ 'background-image': `url(${this.imageBackdropUrl})` }}>
            </div>
          </div>
          <div class="my-5 container2-MovieDetails">
            <div class="row">
              <div class="col-12 col-lg-4">
                Trailer
                <div class="my-5">
                  {this.displayTrailer()}
                </div>
              </div>
              <div class="col-12 col-lg-4">
                Kurz Info
                <div class="my-5">
                  <div class="infoTitle">
                    Länge
                  </div>
                  <div class="lengthFromApi">{this.movieRuntinme} min</div>
                  <div class="infoTitle">
                    Genre
                  </div>
                  <div class="genreFromApi">{this.movieGenres}</div>
                  <div class="infoTitle">
                    Hauptdarsteller
                  </div>
                  <div class="mainActorsFromApi">{this.movieCastNames}</div>
                  <div class="infoTitle">
                    Regie
                  </div>
                  <div class="directorFromApi">{this.movieDirection}</div>
                </div>
              </div>
              <div class="col-12 col-lg-4">
                Beschreibung
                <div class="my-5 descriptionMovie">
                  {this.movieDescription}
                </div>
              </div>
            </div>
            <div class="row my-5">
              Besetzung
            </div>
            <div class="row my-5 actorsList">
              {//Generate a movie-detail-actor component for each person in the data.
                this.movieCast?.map((person) => {
                return(<movie-detail-actor class="col-12 col-sm-6 col-lg-3 col-xl-2" person-name={person.name} person-img={person.profile_path}></movie-detail-actor>)  
                })
              }
            </div>
            <div class="row">Ähnliche Titel</div>
            <div class="row my-5 similarMovies">
              {//Generate a movie-detail-similarmovie component for each movie in the data.
                this.similarMovies?.map((movie) => {
                return(<movie-detail-similarmovie class="col-12 col-sm-6 col-lg-3 col-xl-2" movie-title={movie.title} image-poster-url={this.imagePosterUrl + movie.poster_path}></movie-detail-similarmovie>)  
                })
              }
            </div>
          </div>
        </div>
    );
  }

}
