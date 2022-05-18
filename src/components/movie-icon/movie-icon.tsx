import { Component, EventEmitter, h, Prop, Event } from '@stencil/core';

/** 
 * Data structure for icon categories.
 * With name for identification, 
 * fileName to display the right svg image,
 * altAttribute for accessibility
 * and the function with is called on click.
*/
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
  @Prop() baseIconPath : string = "/assets/images/icons/";
  //Initilization of the icon categories
  @Prop() iconCategories : iconCategorie[] = [{name: "watchlist-add", fileName:"watchlist.svg", altAttribute: "Zur Watchlist hinzufügen", onClickFunction: this.onWatchlistAddButtonClicked.bind(this)}, 
                            {name: "watchlist-remove", fileName:"removefromwatchlist.svg", altAttribute: "Von der Watchlist entfernen", onClickFunction: this.onWatchlistRemoveButtonClicked.bind(this)},
                            {name: "favorit-add", fileName:"favourite.svg", altAttribute: "Zu den Favoriten hinzufügen", onClickFunction: this.onFavoritAddButtonClicked.bind(this)},
                            {name: "favorit-remove", fileName:"removefavourite.svg", altAttribute: "Von den Favoriten entfernen", onClickFunction: this.onFavoritRemoveButtonClicked.bind(this)},
                            {name: "detail", fileName:"search.svg", altAttribute: "Details", onClickFunction: this.onShowDetailClicked.bind(this)}];
  @Prop() iconName : string;

  @Event({bubbles:true, composed:true}) addToWatchlist: EventEmitter<MovieIcon>;
  @Event({bubbles:true, composed:true}) removeFromWatchlist: EventEmitter<MovieIcon>;
  @Event({bubbles:true, composed:true}) addToFavorit: EventEmitter<MovieIcon>;
  @Event({bubbles:true, composed:true}) removeFromFavorit: EventEmitter<MovieIcon>;
  @Event({bubbles:true, composed:true}) showDetail: EventEmitter<MovieIcon>;

  /** 
   * Emits event on whatchlist button pressed to trigger rerendering and the coressponding listener in movie-output and movie-preview.
  */
  onWatchlistAddButtonClicked(){
    this.addToWatchlist.emit(this);
  }

  onWatchlistRemoveButtonClicked(){
    this.removeFromWatchlist.emit(this);
  }

  /** 
   * Emits event on favorit button pressed to trigger rerendering and the coressponding listener in movie-output and movie-preview.
  */
  onFavoritAddButtonClicked(){
    this.addToFavorit.emit(this);
  }

  onFavoritRemoveButtonClicked(){
    this.removeFromFavorit.emit(this);
  }

  /** 
   * Emits event on detail button pressed to trigger coressponding listener in movie-output.
  */
  onShowDetailClicked(){
    this.showDetail.emit(this);
  }

  /** 
   * Used to determin with icon categorie belongs to a given string.
   * 
   * @param {string} name Name of the icon categorie.
   * @returns {iconCategorie} The coresponding icon categorie.
  */
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
    //Watchlist icon
    if(this.iconName === "watchlist-remove"){
      return(
        <button onClick={this.iconCategorieByName("watchlist-remove").onClickFunction} class="btn button-icon">
          <img src={this.baseIconPath + this.iconCategorieByName("watchlist-remove").fileName} alt={this.iconCategorieByName("watchlist-remove").altAttribute}></img>
        </button>
      )
    } else if(this.iconName === "watchlist-add") {
      return(
        <button onClick={this.iconCategorieByName("watchlist-add").onClickFunction} class="btn button-icon">
          <img src={this.baseIconPath + this.iconCategorieByName("watchlist-add").fileName} alt={this.iconCategorieByName("watchlist-add").altAttribute}></img>
        </button>
      )
    }
    //Favorit icon
    else if(this.iconName === "favorit-remove") {
      return(
        <button onClick={this.iconCategorieByName("favorit-remove").onClickFunction} class="btn button-icon">
          <img src={this.baseIconPath + this.iconCategorieByName("favorit-remove").fileName} alt={this.iconCategorieByName("favorit-remove").altAttribute}></img>
        </button>
      )
    } else if(this.iconName === "favorit-add"){
      return(
        <button onClick={this.iconCategorieByName("favorit-add").onClickFunction} class="btn button-icon">
          <img src={this.baseIconPath + this.iconCategorieByName("favorit-add").fileName} alt={this.iconCategorieByName("favorit-add").altAttribute}></img>
        </button>
      )
    }
    //Other icon
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
