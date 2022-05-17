import { Component, Host, h, Prop, State, Listen } from '@stencil/core';

@Component({
  tag: 'movie-preview',
  styleUrl: 'movie-preview.scss',
  shadow: false,
})
export class MoviePreview {

  @Prop() movieTitle: string;
  @Prop() imagePosterUrl: string;

  @State() onWatchlist: boolean = false;
  @State() onFavorit: boolean = false;
  
  @Listen('addToWatchlist')
  /** 
   * Listens to the add watchlist icon click event. 
   * Changes the watchlist state to trigger rerendering of the icon.
  */
  toggleWatchlistHandler(){
    this.onWatchlist = !this.onWatchlist;
  }

  /** 
   * Listens to the remove from watchlist icon click event. 
   * Changes the watchlist state to trigger rerendering of the icon.
  */
  @Listen('removeFromWatchlist')
  removeFromWatchlistHandler(){
    this.onWatchlist = !this.onWatchlist;
  }

  /** 
   * Listens to the add to favorits icon click event. 
   * Changes the favorit state to trigger rerendering of the icon.
  */
  @Listen('addToFavorit')
  addToFavoritestHandler(){
    this.onWatchlist = !this.onWatchlist;
  }

  /** 
   * Listens to the remove favorits icon click event. 
   * Changes the favorit state to trigger rerendering of the icon.
  */
  @Listen('removeFromFavorit')
  removeFromFavoritesHandler(){
    this.onWatchlist = !this.onWatchlist;
  }

  /** 
   * Generates a movie-icon component depending on the current watchlist state.
   * 
   * @return The movie-icon component.
  */
  displayWatchlist() {
    if(this.onWatchlist){
      return <movie-icon icon-name="watchlist-remove"></movie-icon>
    } else return <movie-icon icon-name="watchlist-add"></movie-icon>
  }

  /** 
   * Generates a movie-icon component depending on the current favorits state.
   * 
   * @return The movie-icon component.
  */
  displayFavorit() {
    if(this.onFavorit){
      return <movie-icon icon-name="favorit-remove"></movie-icon>
    } else return <movie-icon icon-name="favorit-add"></movie-icon>
  }

  render() {
    console.log(this.movieTitle + " " + this.onWatchlist)
    return (
      <Host>
        <div class="movie-preview-wrapper">
          <div class="movie-card" style={{'background-image' : `url(${this.imagePosterUrl})`}}>
              <div class="movie-card-overlay d-flex flex-column align-items-center justify-content-center">
                <movie-icon icon-name="detail"></movie-icon>
                {this.displayWatchlist()}
                {this.displayFavorit()}
              </div>
            </div>
          <div class="movie-title">{this.movieTitle}</div>
        </div>
      </Host>
    );
  }

}
