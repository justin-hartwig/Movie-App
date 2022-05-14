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
  
  movieRuntinme: number;
  movieGenres: string = "";

  @Event({bubbles:true, composed:true}) closeDetail: EventEmitter;

  onCloseButtonClicked(){
    this.closeDetail.emit(this);
  }

  async fetchAdditionalContent() {
    let fetchUrl = this.baseUrl + "/movie/" + this.movieId + "?" + this.apiKey;
    return(
      fetch(fetchUrl)
      .then((response) => response.json())
      .then((responseJson) => {
          console.log(responseJson)
          this.movieRuntinme = responseJson.runtime;
          let index = 0;
          responseJson.genres.forEach(genre => {
            index ++;
            this.movieGenres += genre.name;
            if(index < responseJson.genres.length){
              this.movieGenres += ", ";
            }
          });
      })
    )
  }

  //InitalLoad
  async componentWillLoad(){
    await this.fetchAdditionalContent();
  }

  render() {
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
                  <img src={this.imageBackdropUrl} class="imageTrailer"></img>
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
                  <div class="mainActorsFromApi">Joaquin Phoenix, Robert de Niro</div>
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
