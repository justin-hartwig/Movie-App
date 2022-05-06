import { Component, h, Prop } from '@stencil/core';

export interface iconCategorie {
  name : string;
  fileName : string;
  altAttribute : string;
}

@Component({
  tag: 'movie-icon',
  styleUrl: 'movie-icon.scss',
  shadow: false,
})

export class MovieIcon {
  @Prop() baseIconPath : string = "/assets/images/icons/"
  @Prop() iconCategories : iconCategorie[] = [{name: "watchlist-add", fileName:"watchlist.svg", altAttribute: "Zur Watchlist hinzufügen"}, 
                            {name: "watchlist-remove", fileName:"removefromwatchlist.svg", altAttribute: "Von der Watchlist entfernen"},
                            {name: "favourite-add", fileName:"favourite.svg", altAttribute: "Zu den Favoriten hinzufügen"},
                            {name: "detail", fileName:"arrowdowncircle.svg", altAttribute: "Details"}];
  @Prop() iconName : string;

  render() {
    return(
      this.iconCategories.map((icon, index) => {
        if (this.iconName === icon.name) {
          return (
            <button key={index} class="btn button-icon">
              <img src={this.baseIconPath + icon.fileName} alt={icon.altAttribute}></img>
            </button>
          )
        }
      })  
    )
  }
}
