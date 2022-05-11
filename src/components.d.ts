/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MovieDetail {
    }
    interface MovieHeader {
        "headerBGImage": string;
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
    }
}
declare global {
    interface HTMLMovieDetailElement extends Components.MovieDetail, HTMLStencilElement {
    }
    var HTMLMovieDetailElement: {
        prototype: HTMLMovieDetailElement;
        new (): HTMLMovieDetailElement;
    };
    interface HTMLMovieHeaderElement extends Components.MovieHeader, HTMLStencilElement {
    }
    var HTMLMovieHeaderElement: {
        prototype: HTMLMovieHeaderElement;
        new (): HTMLMovieHeaderElement;
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
        "movie-header": HTMLMovieHeaderElement;
        "movie-output": HTMLMovieOutputElement;
        "movie-preview": HTMLMoviePreviewElement;
    }
}
declare namespace LocalJSX {
    interface MovieDetail {
    }
    interface MovieHeader {
        "headerBGImage"?: string;
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
    }
    interface IntrinsicElements {
        "movie-detail": MovieDetail;
        "movie-header": MovieHeader;
        "movie-output": MovieOutput;
        "movie-preview": MoviePreview;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "movie-detail": LocalJSX.MovieDetail & JSXBase.HTMLAttributes<HTMLMovieDetailElement>;
            "movie-header": LocalJSX.MovieHeader & JSXBase.HTMLAttributes<HTMLMovieHeaderElement>;
            "movie-output": LocalJSX.MovieOutput & JSXBase.HTMLAttributes<HTMLMovieOutputElement>;
            "movie-preview": LocalJSX.MoviePreview & JSXBase.HTMLAttributes<HTMLMoviePreviewElement>;
        }
    }
}
