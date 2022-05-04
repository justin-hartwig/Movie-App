import { Component, Host, h, Prop } from '@stencil/core';


@Component({
  tag: 'movie-header',
  styleUrl: 'movie-header.scss',
  shadow: false,
  assetsDirs: ['assets'],
})

export class MovieHeader {

  @Prop() headerBGImage: string = "headerImage.jpeg";

  render() {
    return (
      <Host>

        <div class="container col-l-10 col-m-10 col-s-10 col-xs-10 col-10 my-5" id="header">
          <p id="titleApp">
            The
            <br>
            </br>
            Movie
            <br></br>
            App</p>
            
            <input class="col-4" type="text" id="searchMovies" name="searchMovies" placeholder="Suche nach Filmen"></input>
            <p></p>
            <div id="menu">
            <ul>
              <li>Neuste Filme</li>
              <li>Meine Watchlist</li>
              <li>Filme A-Z</li>
            </ul>
          </div>
        </div>

      </Host>
    );
  }

}
