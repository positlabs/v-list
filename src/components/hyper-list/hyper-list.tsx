import { Component, Prop, h, Element, Watch, Host } from '@stencil/core'
import { default as _HyperList } from 'hyperlist'

@Component({
  tag: 'hyper-list',
  styleUrl: 'hyper-list.css',
})
export class HyperList {
  @Prop() items: any[]
  @Prop() itemHeight: number
  /**
   * Wire up the data to the index. The index is then mapped to a Y position in the container, using some height.
      generate(index) {
        const el = document.createElement('div');
        el.innerHTML = `ITEM ${index + 1}`;
        return { element: el, height: Math.random() * 1000 };
      }
   */
  @Prop() generate: Function
  @Prop() reverse: boolean // This will render items from the bottom of the container instead of the top. This works much better for chat and notifications experiences. This option will automatically scroll the container to the bottom every time the refresh method is called and during instantiation.
  @Prop() horizontal: boolean // Change the rendering orientation to horizontal
  @Prop() width: number // The container width as a number or string (defaults to 100%)
  @Prop() height: number // The container height as a number or string (defaults to 100%)
  @Prop() scrollerTagName: string // Is a TR by default which works fine in most cases. If you need a different element tag name, specify it here.
  @Prop() rowClassName: string // Any custom classes to add to the row.
  @Prop() overrideScrollPosition: boolean // Pull the scrollTop value from somewhere else, this allows for binding range elements to the scroll position.
  @Prop() applyPatch: Function // Is called with the container element and the DocumentFragment which contains all the items being added. You can implement Virtual DOM patching with this hook.
  @Prop() afterRender: Function // Triggered after applyPatch has returned.
  @Prop() scroller: HTMLElement // Specify an element to be in the place of the scroller.
  @Prop() useFragment: boolean // Determines if a fragment is used internally or not, defaults to true.

  @Element() el: HTMLElement
  get total() { return this.items.length }
  get config() {
    return {

    }
  }
  private list

  constructor() {
    console.dir(this)
    // if all required props exist, create the list
    this.invalidateList()
    this.list
  }

  // TODO watch for other properties and pass them along
  // this.list.refresh(this.el, newConfig)

  @Watch('items')
  invalidateList() {
    console.log('invalidateList')
    if (this.generate && this.items && this.itemHeight) {
      console.log(this.generate, this.items, this.itemHeight)
      this.list = _HyperList.create(this.el, {
        generate: this.generate,
        items: this.items,
        itemHeight: this.itemHeight,
        total: this.total,
      })
    }
  }

  render() {
    return <Host />
  }
}
