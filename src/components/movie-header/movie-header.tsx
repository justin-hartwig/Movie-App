import { Component, Host, h, Prop } from '@stencil/core';


@Component({
  tag: 'movie-header',
  styleUrl: 'movie-header.scss',
  shadow: false,
})

export class MovieHeader {

  @Prop() headerBGImage: string = "headerImage.jpeg";

  render() {
    return (
      <Host>
        <div class="container p-5 mt-5" id="header">
          <div class="row">
            <div class="col-12 col-lg-4 title-wrapper">
              <h1>
                The
                <br></br>
                Movie
                <br></br>
                App
              </h1>
            </div>
            <div class="col-12 col-lg-4">
            </div>
            <div class="col-12 col-lg-4 menu-wrapper">
              <input type="text" id="search-movies" name="search-movies" placeholder="Suche nach Filmen"></input>
              <ul id="menu">
                <li>
                  <a>Neuste Filme</a>
                </li>
                <li>
                  <a>Meine Watchlist</a>
                </li>
                <li>
                  <a>Filme A-Z</a>
                </li>
              </ul>  
            </div>
          </div>
        </div>
      </Host>
    );
  }

}
