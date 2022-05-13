import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'movie-detail',
  shadow: false,
  styleUrl: 'movie-detail.scss',
})

export class MovieDetail {
  @Prop() movieTitle: string;
  @Prop() movieDescription: string;
  @Prop() movieLength: number;
  @Prop() imageBackdropUrl: string;

  render() {
    return (
      <Host>
        <div class="container my-5 containerMovieDetail">
          <div class="container pt-3">
            <div id="movieTitle">{this.movieTitle}</div>
          </div>
          <div class="container headerMovieDetail" style={{'background-image' : `url(${this.imageBackdropUrl})`}}>
            <div class="row">
              <div class="col-12 col-lg-4 title-wrapper">
              </div>
            </div>
          </div>
          <div class="container my-5 container2-MovieDetails">
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
                  <div class="lengthFromApi">132min</div>
                  <div class="infoTitle">
                    Genre
                  </div>
                  <div class="genreFromApi">Thriller</div>
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
