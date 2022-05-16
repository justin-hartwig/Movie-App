/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { iconCategorie } from "./components/movie-icon/movie-icon";
export namespace Components {
    interface MovieDetail {
        "apiKey": string;
        "appLanguage": string;
        "baseUrl": string;
        "imageBackdropUrl": string;
        "imagePosterUrl": string;
        "movieDescription": string;
        "movieId": string;
        "movieLength": number;
        "movieTitle": string;
    }
    interface MovieFooter {
    }
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
        "imageBackdropUrl": string;
        "imagePosterUrl": string;
        "showFavorit": () => Promise<void>;
        "showNewMovielist": () => Promise<void>;
        "showSearch": () => Promise<void>;
        "showWatchlist": () => Promise<void>;
    }
    interface MoviePreview {
        "imagePosterUrl": string;
        "movieTitle": string;
    }
}
declare global {
    interface HTMLMovieDetailElement extends Components.MovieDetail, HTMLStencilElement {
    }
    var HTMLMovieDetailElement: {
        prototype: HTMLMovieDetailElement;
        new (): HTMLMovieDetailElement;
    };
    interface HTMLMovieFooterElement extends Components.MovieFooter, HTMLStencilElement {
    }
    var HTMLMovieFooterElement: {
        prototype: HTMLMovieFooterElement;
        new (): HTMLMovieFooterElement;
    };
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
        "movie-detail": HTMLMovieDetailElement;
        "movie-footer": HTMLMovieFooterElement;
        "movie-header": HTMLMovieHeaderElement;
        "movie-icon": HTMLMovieIconElement;
        "movie-output": HTMLMovieOutputElement;
        "movie-preview": HTMLMoviePreviewElement;
    }
}
declare namespace LocalJSX {
    interface MovieDetail {
        "apiKey"?: string;
        "appLanguage"?: string;
        "baseUrl"?: string;
        "imageBackdropUrl"?: string;
        "imagePosterUrl"?: string;
        "movieDescription"?: string;
        "movieId"?: string;
        "movieLength"?: number;
        "movieTitle"?: string;
        "onCloseDetail"?: (event: CustomEvent<any>) => void;
    }
    interface MovieFooter {
    }
    interface MovieHeader {
        "headerBGImage"?: string;
    }
    interface MovieIcon {
        "baseIconPath"?: string;
        "iconCategories"?: iconCategorie[];
        "iconName"?: string;
        "onAddToFavorit"?: (event: CustomEvent<MovieIcon>) => void;
        "onAddToWatchlist"?: (event: CustomEvent<MovieIcon>) => void;
        "onRemoveFromFavorit"?: (event: CustomEvent<MovieIcon>) => void;
        "onRemoveFromWatchlist"?: (event: CustomEvent<MovieIcon>) => void;
        "onShowDetail"?: (event: CustomEvent<MovieIcon>) => void;
    }
    interface MovieOutput {
        "apiKey"?: string;
        "apiURL"?: string;
        "baseURL"?: string;
        "imageBackdropUrl"?: string;
        "imagePosterUrl"?: string;
    }
    interface MoviePreview {
        "imagePosterUrl"?: string;
        "movieTitle"?: string;
    }
    interface IntrinsicElements {
        "movie-detail": MovieDetail;
        "movie-footer": MovieFooter;
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
            "movie-detail": LocalJSX.MovieDetail & JSXBase.HTMLAttributes<HTMLMovieDetailElement>;
            "movie-footer": LocalJSX.MovieFooter & JSXBase.HTMLAttributes<HTMLMovieFooterElement>;
            "movie-header": LocalJSX.MovieHeader & JSXBase.HTMLAttributes<HTMLMovieHeaderElement>;
            "movie-icon": LocalJSX.MovieIcon & JSXBase.HTMLAttributes<HTMLMovieIconElement>;
            "movie-output": LocalJSX.MovieOutput & JSXBase.HTMLAttributes<HTMLMovieOutputElement>;
            "movie-preview": LocalJSX.MoviePreview & JSXBase.HTMLAttributes<HTMLMoviePreviewElement>;
        }
    }
}
