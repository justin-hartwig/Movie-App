import { Component, h, Prop } from '@stencil/core';

export interface iconCategorie {
  name : string;
  fileName : string;
}

@Component({
  tag: 'movie-icon',
  styleUrl: 'movie-icon.scss',
  shadow: false,
})

export class MovieIcon {
  @Prop() baseIconPath : string = "/assets/images/icons/"
  @Prop() iconCategories : iconCategorie[] = [{name: "watchlist-add", fileName:"watchlist.svg"}, 
                            {name: "watchlist-remove", fileName:"removefromwatchlist.svg"},
                            {name: "favourite-add", fileName:"favourite.svg"},
                            {name: "detail", fileName:"arrowdowncircle.svg"}
                          ];
  @Prop() iconName : string;

  render() {
    return(
      this.iconCategories.map((icon, index) => {
        if (this.iconName === icon.name) {
          return (
            <button key={index} class="button-icon">
              <img src={this.baseIconPath + icon.fileName} class="btn" alt="Zur Watchlist hinzufügen"></img>
            </button>
          )
        }
      })  
    )
  }
}
