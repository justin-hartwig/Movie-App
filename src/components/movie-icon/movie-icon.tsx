import { Component, EventEmitter, h, Prop, Event, State } from '@stencil/core';

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

  @State() onWatchlist: boolean = false;

  onWatchlistAddButtonClicked(){
    this.onWatchlist = true;
    this.addToWatchlist.emit(this);
  }

  onWatchlistRemoveButtonClicked(){
    this.onWatchlist = false;
    this.removeFromWatchlist.emit(this);
  }

  iconCategorieByName(name : string) : iconCategorie {
    let foundCategory : iconCategorie;
    this.iconCategories.filter(categorie => {
      if(categorie.name === name) {
        foundCategory = categorie;
      }
    })
    return foundCategory;
  }

  render() {
    if(this.iconName === "watchlist") {
      if(this.onWatchlist){
        return(
          <button onClick={this.iconCategorieByName("watchlist-remove").onClickFunction} class="btn button-icon">
            <img src={this.baseIconPath + this.iconCategorieByName("watchlist-remove").fileName} alt={this.iconCategorieByName("watchlist-remove").altAttribute}></img>
          </button>
        )
      } else {
        return(
          <button onClick={this.iconCategorieByName("watchlist-add").onClickFunction} class="btn button-icon">
            <img src={this.baseIconPath + this.iconCategorieByName("watchlist-add").fileName} alt={this.iconCategorieByName("watchlist-add").altAttribute}></img>
          </button>
        )
      }
    } else {
      return (
        this.iconCategories.map((icon, index) => {
          if (icon.name === this.iconName) {
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
}
