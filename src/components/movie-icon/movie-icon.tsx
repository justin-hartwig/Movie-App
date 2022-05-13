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
                            {name: "favorit-add", fileName:"favourite.svg", altAttribute: "Zu den Favoriten hinzufügen", onClickFunction: this.onFavoritAddButtonClicked.bind(this)},
                            {name: "favorit-remove", fileName:"removefavourite.svg", altAttribute: "Von den Favoriten entfernen", onClickFunction: this.onFavoritRemoveButtonClicked.bind(this)},
                            {name: "detail", fileName:"arrowdowncircle.svg", altAttribute: "Details", onClickFunction: this.onShowDetailClicked.bind(this)}];
  @Prop() iconName : string;

  @Event({bubbles:true, composed:true}) addToWatchlist: EventEmitter<MovieIcon>;
  @Event({bubbles:true, composed:true}) removeFromWatchlist: EventEmitter<MovieIcon>;
  @Event({bubbles:true, composed:true}) addToFavorit: EventEmitter<MovieIcon>;
  @Event({bubbles:true, composed:true}) removeFromFavorit: EventEmitter<MovieIcon>;
  @Event({bubbles:true, composed:true}) showDetail: EventEmitter<MovieIcon>;

  @State() onWatchlist: boolean = false;
  @State() onFavorit: boolean = false;

  onWatchlistAddButtonClicked(){
    this.onWatchlist = true;
    this.addToWatchlist.emit(this);
  }

  onWatchlistRemoveButtonClicked(){
    this.onWatchlist = false;
    this.removeFromWatchlist.emit(this);
  }

  onFavoritAddButtonClicked(){
    this.onFavorit = true;
    this.addToFavorit.emit(this);
  }

  onFavoritRemoveButtonClicked(){
    this.onFavorit = false;
    this.removeFromFavorit.emit(this);
  }

  onShowDetailClicked(){
    this.showDetail.emit(this);
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
    } 
    else if(this.iconName === "favorit") {
      if(this.onFavorit){
        return(
          <button onClick={this.iconCategorieByName("favorit-remove").onClickFunction} class="btn button-icon">
            <img src={this.baseIconPath + this.iconCategorieByName("favorit-remove").fileName} alt={this.iconCategorieByName("favorit-remove").altAttribute}></img>
          </button>
        )
      } else {
        return(
          <button onClick={this.iconCategorieByName("favorit-add").onClickFunction} class="btn button-icon">
            <img src={this.baseIconPath + this.iconCategorieByName("favorit-add").fileName} alt={this.iconCategorieByName("favorit-add").altAttribute}></img>
          </button>
        )
      }
    }
    else {
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
