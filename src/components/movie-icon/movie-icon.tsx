import { Component, EventEmitter, h, Prop, Event } from '@stencil/core';

export interface iconCategorie {
  name : string;
  fileName : string;
  altAttribute : string;
  onClickFunction: () => void;
}

@Component({
  tag: 'movie-icon',
  styleUrl: 'movie-icon.scss',
  shadow: false,
})

export class MovieIcon {
  @Prop() baseIconPath : string = "/assets/images/icons/"
  @Prop() iconCategories : iconCategorie[] = [{name: "watchlist-add", fileName:"watchlist.svg", altAttribute: "Zur Watchlist hinzufügen", onClickFunction: this.onWatchlistAddButtonClicked.bind(this)}, 
                            {name: "watchlist-remove", fileName:"removefromwatchlist.svg", altAttribute: "Von der Watchlist entfernen", onClickFunction: this.onWatchlistRemoveButtonClicked.bind(this)},
                            {name: "favourite-add", fileName:"favourite.svg", altAttribute: "Zu den Favoriten hinzufügen", onClickFunction: {}},
                            {name: "detail", fileName:"arrowdowncircle.svg", altAttribute: "Details", onClickFunction: {}}];
  @Prop() iconName : string;

  @Event({bubbles:true, composed:true}) addToWatchlist: EventEmitter<MovieIcon>;
  @Event({bubbles:true, composed:true}) removeFromWatchlist: EventEmitter<MovieIcon>;

  onWatchlistAddButtonClicked(){
    this.addToWatchlist.emit(this);
  }

  onWatchlistRemoveButtonClicked(){
    this.removeFromWatchlist.emit(this);
  }

  render() {
    return(
      this.iconCategories.map((icon, index) => {
        if (this.iconName === icon.name) {
          return (
            <button onClick={icon.onClickFunction} key={index} class="btn button-icon">
              <img src={this.baseIconPath + icon.fileName} alt={icon.altAttribute}></img>
            </button>
          )
        }
      })  
    )
  }
}
