/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from './stencil.core';


export namespace Components {
  interface VList {
    'estimatedRowHeight': number;
    'generator': Function;
    'height': number;
    'initialIndex': number;
    'initialScrollTop': number;
    'overscanCount': number;
    'renderRow': Function;
    'rowCount': number;
    'rowHeight': any;
    'scrollToIndex': (index: number, alignment?: string) => Promise<void>;
  }
}

declare global {


  interface HTMLVListElement extends Components.VList, HTMLStencilElement {}
  var HTMLVListElement: {
    prototype: HTMLVListElement;
    new (): HTMLVListElement;
  };
  interface HTMLElementTagNameMap {
    'v-list': HTMLVListElement;
  }
}

declare namespace LocalJSX {
  interface VList extends JSXBase.HTMLAttributes<HTMLVListElement> {
    'estimatedRowHeight'?: number;
    'generator'?: Function;
    'height'?: number;
    'initialIndex'?: number;
    'initialScrollTop'?: number;
    'onMount'?: (event: CustomEvent<any>) => void;
    'onRowsRendered'?: (event: CustomEvent<any>) => void;
    'overscanCount'?: number;
    'renderRow'?: Function;
    'rowCount'?: number;
    'rowHeight'?: any;
  }

  interface IntrinsicElements {
    'v-list': VList;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}

