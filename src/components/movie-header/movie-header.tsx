import { Component, Host, h, Prop } from '@stencil/core';


@Component({
  tag: 'movie-header',
  styleUrl: 'movie-header.scss',
  shadow: false,
})

export class MovieHeader {
  @Prop() headerBGImage: string = "headerImage.jpeg";

  /** 
    * Calls the showNewMovielist() Method on the movie-output component on link clicked.
  */
  async onNewMoviesClicked(){
      await customElements.whenDefined('movie-output');
      const movieOutput = document.querySelector('movie-output');
      await movieOutput.showNewMovielist();
  }

  /** 
    * Calls the showWatchlist() Method on the movie-output component on link clicked.
  */
  async onWatchlistClicked(){
      await customElements.whenDefined('movie-output');
      const movieOutput = document.querySelector('movie-output');
      await movieOutput.showWatchlist();
  }

  /** 
    * Calls the showFavorit() Method on the movie-output component on link clicked.
  */
  async onFavoritesClicked(){
    await customElements.whenDefined('movie-output');
      const movieOutput = document.querySelector('movie-output');
      await movieOutput.showFavorit();
  }

  render() {
    return (
      <Host>
        <div class="container p-5 mt-5" id="header">
          <div class="row">
            <div class="col-12 col-lg-4 title-wrapper">
              <h1>
                The
                <img class="app-icon" src="/assets/images/icons/Logo_MovieApp.svg"></img>
                App
              </h1>
            </div>
            <div class="col-12 col-lg-4">
            </div>
            <div class="col-12 col-lg-4 menu-wrapper">
              <input type="text" id="search-movies" name="search-movies" placeholder="Suche nach Filmen"></input>
              <ul id="menu">
                <li>
                  <a onClick={this.onNewMoviesClicked.bind(this)}>Neuste Filme</a>
                </li>
                <li>
                  <a onClick={this.onWatchlistClicked.bind(this)}>Meine Watchlist</a>
                </li>
                <li>
                  <a onClick={this.onFavoritesClicked.bind(this)}>Favoriten</a>
                </li>
              </ul>  
            </div>
          </div>
        </div>
      </Host>
    );
  }

}
