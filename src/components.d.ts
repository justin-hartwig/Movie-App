/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { iconCategorie } from "./components/movie-icon/movie-icon";
export namespace Components {
    interface MovieHeader {
        "headerBGImage": string;
    }
    interface MovieIcon {
        "baseIconPath": string;
        "iconCategories": iconCategorie[];
        "iconName": string;
    }
    interface MovieOutput {
        "apiKey": string;
        "apiURL": string;
        "baseURL": string;
        "imageURL": string;
    }
    interface MoviePreview {
        "imageUrl": string;
        "movieTitle": string;
        "onWatchlist": boolean;
    }
}
declare global {
    interface HTMLMovieHeaderElement extends Components.MovieHeader, HTMLStencilElement {
    }
    var HTMLMovieHeaderElement: {
        prototype: HTMLMovieHeaderElement;
        new (): HTMLMovieHeaderElement;
    };
    interface HTMLMovieIconElement extends Components.MovieIcon, HTMLStencilElement {
    }
    var HTMLMovieIconElement: {
        prototype: HTMLMovieIconElement;
        new (): HTMLMovieIconElement;
    };
    interface HTMLMovieOutputElement extends Components.MovieOutput, HTMLStencilElement {
    }
    var HTMLMovieOutputElement: {
        prototype: HTMLMovieOutputElement;
        new (): HTMLMovieOutputElement;
    };
    interface HTMLMoviePreviewElement extends Components.MoviePreview, HTMLStencilElement {
    }
    var HTMLMoviePreviewElement: {
        prototype: HTMLMoviePreviewElement;
        new (): HTMLMoviePreviewElement;
    };
    interface HTMLElementTagNameMap {
        "movie-header": HTMLMovieHeaderElement;
        "movie-icon": HTMLMovieIconElement;
        "movie-output": HTMLMovieOutputElement;
        "movie-preview": HTMLMoviePreviewElement;
    }
}
declare namespace LocalJSX {
    interface MovieHeader {
        "headerBGImage"?: string;
    }
    interface MovieIcon {
        "baseIconPath"?: string;
        "iconCategories"?: iconCategorie[];
        "iconName"?: string;
        "onAddToWatchlist"?: (event: CustomEvent<MovieIcon>) => void;
        "onRemoveFromWatchlist"?: (event: CustomEvent<MovieIcon>) => void;
    }
    interface MovieOutput {
        "apiKey"?: string;
        "apiURL"?: string;
        "baseURL"?: string;
        "imageURL"?: string;
    }
    interface MoviePreview {
        "imageUrl"?: string;
        "movieTitle"?: string;
        "onWatchlist"?: boolean;
    }
    interface IntrinsicElements {
        "movie-header": MovieHeader;
        "movie-icon": MovieIcon;
        "movie-output": MovieOutput;
        "movie-preview": MoviePreview;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "movie-header": LocalJSX.MovieHeader & JSXBase.HTMLAttributes<HTMLMovieHeaderElement>;
            "movie-icon": LocalJSX.MovieIcon & JSXBase.HTMLAttributes<HTMLMovieIconElement>;
            "movie-output": LocalJSX.MovieOutput & JSXBase.HTMLAttributes<HTMLMovieOutputElement>;
            "movie-preview": LocalJSX.MoviePreview & JSXBase.HTMLAttributes<HTMLMoviePreviewElement>;
        }
    }
}
