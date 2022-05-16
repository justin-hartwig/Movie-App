import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'movie-search',
  styleUrl: 'movie-search.scss',
  shadow: false,
})
export class MovieSearch {
  /** 
    * Calls the showSearch() Method on the movie-output component on link clicked.
  */
   async onSearch(event){
    await customElements.whenDefined('movie-search');
    const movieOutput = document.querySelector('movie-output');
    await movieOutput.showSearch(event.target.value);
}

  render() {
    return (
      <Host>
        <input type="text" id="search-movies" name="search-movies" placeholder="Suche nach Filmen" onChange={(event : UIEvent) => this.onSearch(event)}></input>
      </Host>
    );
  }

}
