import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'movie-footer',
  styleUrl: 'movie-footer.scss',
  shadow: false,
})
export class MovieFooter {

  render() {
    return (
      <Host>
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <p>The Movie App</p>
              <img src="/assets/images/icons/Logo_MovieApp.svg"></img>
              
            </div>
            <div class="col-md-4">
              <h5>Unser Team </h5>
              <p>Justin Hartwig <br/> Maximilian Dacho <br/> Sophie Portillo Scheer <br/> Jacqueline Teufel <br/> Rober Reifschneider</p>
            
            </div>
            <div class="col-md-4">
            <h5>Verwendete Daten </h5>
            <a href="https://www.themoviedb.org/" title="The Movie DB"><img src="/assets/images/icons/TheMovieDB.svg"></img></a>
            </div>
          </div>
        </div>
      </Host>
    );
  }

}
