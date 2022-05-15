import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'movie-detail',
  shadow: false,
  styleUrl: 'movie-detail.scss',
})

export class MovieDetail {
  @Prop() movieId: string;
  @Prop() movieTitle: string;
  @Prop() movieDescription: string;
  @Prop() movieLength: number;
  @Prop() imageBackdropUrl: string;
  @Prop() apiKey: string;
  @Prop() baseUrl: string;

  youTubeBaseUrl: string = "https://www.youtube.com/embed/";
  
  movieRuntinme: number;
  movieGenres: string = "";
  movieCast: string = "";
  movieTrailerUrl: string = "";

  @Event({bubbles:true, composed:true}) closeDetail: EventEmitter;

  onCloseButtonClicked(){
    this.closeDetail.emit(this);
  }

  async fetchAdditionalContent(){
    let fetchDataUrl = this.baseUrl + "/movie/" + this.movieId + "?" + this.apiKey;
    let fetchVideoUrl = this.baseUrl + "/movie/" + this.movieId + "/videos?" + this.apiKey;
    let fetchCreditsUrl = this.baseUrl + "/movie/" + this.movieId + "/credits?" + this.apiKey;

    let responseData = await fetch(fetchDataUrl).then(response => response.json());
    let responseVideo = await fetch(fetchVideoUrl).then(response => response.json());
    let responseCredits = await fetch(fetchCreditsUrl).then(response => response.json());

    this.movieRuntinme = responseData.runtime;
    this.movieGenres = this.stringifyApiData(responseData, "genres", 5);
    this.movieTrailerUrl = this.youTubeBaseUrl + responseVideo.results[0].key;
    this.movieCast = this.stringifyApiData(responseCredits, "cast", 3);
  }

  stringifyApiData(data : any, key : string, length : number) : string {
    let result : string = "";
    let index = 0;
    for(let subCategory of data[key]){
      index ++;
      result += subCategory.name;
      if(index < data[key].length && index < length){
        result += ", ";
      }
      if(index >= length){
        break;
      }
    }
    return result;
  }

  //InitalLoad
  componentWillLoad(){
    return this.fetchAdditionalContent();
  }

  render() {
    console.log("rendert")
    return (
      <Host>
        <div class="container my-5 px-5 containerMovieDetail">
          <button class="btn button-close" onClick={this.onCloseButtonClicked.bind(this)}>
            <img src="/assets/images/icons/close.svg"></img>
          </button>
          <div class="pt-3">
            <div id="movieTitle">{this.movieTitle}</div>
          </div>
          <div class="headerMovieDetail">
            <div class="col-12 col-lg-4 title-wrapper" style={{'background-image' : `url(${this.imageBackdropUrl})`}}>
          </div>
          </div>
          <div class="my-5 container2-MovieDetails">
            <div class="row">
              <div class="col-12 col-lg-4">
                Trailer
                <div class="my-5">
                <iframe width="100%" height="220" src={this.movieTrailerUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
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
                  <div class="mainActorsFromApi">{this.movieCast}</div>
                  <div class="infoTitle">
                    Regie
                  </div>
                  <div class="directorFromApi">Todd Phillips</div>
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
              <div class="col-6 col-lg-2">
              <img src="/assets/images/actorSample.jpg" class="imageActor"></img>
              <div class="nameActor">
                Name 1
              </div>
              </div>
              <div class="col-6 col-lg-2">
              <img src="/assets/images/actorSample.jpg" class="imageActor"></img>
              <div class="nameActor">
              Name 2
              </div>
              </div>
              <div class="col-6 col-lg-2">
              <img src="/assets/images/actorSample.jpg" class="imageActor"></img>
              <div class="nameActor">
              Name 3
              </div>
              </div>
              <div class="col-6 col-lg-2">
              <img src="/assets/images/actorSample.jpg" class="imageActor"></img>
              <div class="nameActor">
              Name 4
              </div>
              </div>
              <div class="col-6 col-lg-2">
              <img src="/assets/images/actorSample.jpg" class="imageActor"></img>
              <div class="nameActor">
              Name 5
              </div>
              </div>
              <div class="col-6 col-lg-2">
              <img src="/assets/images/actorSample.jpg" class="imageActor"></img>
              <div class="nameActor">
              Name 6
              </div>
              </div>
            </div>
            <div class="row">Ähnliche Titel</div>
            <div class="row my-5 similarMovies">
              <div class="col-6 col-lg-2">
              <img src="/assets/images/sampleMoviePoster.jpg" class="imageSimilarMovie"></img>
              <div class="titleSimilarMovie">
                Name 1
              </div>
              </div>
              <div class="col-6 col-lg-2">
              <img src="/assets/images/sampleMoviePoster.jpg" class="imageSimilarMovie"></img>
              <div class="titleSimilarMovie">
              Name 2
              </div>
              </div>
              <div class="col-6 col-lg-2">
              <img src="/assets/images/sampleMoviePoster.jpg" class="imageSimilarMovie"></img>
              <div class="titleSimilarMovie">
              Name 3
              </div>
              </div>
              <div class="col-6 col-lg-2">
              <img src="/assets/images/sampleMoviePoster.jpg" class="imageSimilarMovie"></img>
              <div class="titleSimilarMovie">
              Name 4
              </div>
              </div>
              <div class="col-6 col-lg-2">
              <img src="/assets/images/sampleMoviePoster.jpg" class="imageSimilarMovie"></img>
              <div class="titleSimilarMovie">
              Name 5
              </div>
              </div>
              <div class="col-6 col-lg-2">
              <img src="/assets/images/sampleMoviePoster.jpg" class="imageSimilarMovie"></img>
              <div class="titleSimilarMovie">
              Name 6
              </div>
              </div>
            </div>
          </div>
        </div>

      </Host>
    );
  }

}
