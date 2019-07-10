import { Component, Prop, h, Element, Watch, Method, Host } from '@stencil/core'
import VirtualizedList from 'virtualized-list'

@Component({
  tag: 'v-list',
  styleUrl: 'v-list.css',
})
export class VList {
  @Element() el: HTMLElement
  @Prop() items: any[]
  @Prop() generator: Function

  // Responsible for rendering an item given it's index: ({index: number, style: Object}): HTMLElement. The returned element must handle key and style.
  @Prop() renderRow: Function
  // Number, Array or Function Either a fixed height, an array containing the heights of all the items in your list, or a function that returns the height of an item given its index: (index: number): number
  @Prop() rowHeight: any
  //	Height of List. This property will determine the number of rendered vs virtualized items
  @Prop() height: number
  //	The number of rows you want to render
  @Prop() rowCount: number

  // The initial scrollTop value (optional)
  @Prop() initialScrollTop: number
  // Initial item index to scroll to (by forcefully scrolling if necessary)
  @Prop() initialIndex: number
  // Number of extra buffer items to render above/below the visible items. Tweaking this can help reduce scroll flickering on certain browsers/devices. Defaults to 3
  @Prop() overscanCount: number
  // Used to estimate the total size of the list before all of its items have actually been measured. The estimated total height is progressively adjusted as items are rendered.
  @Prop() estimatedRowHeight: number

  // TODO dispatch events
  @Prop() onMount: Function // Event dispatched once the virtual list has mounted.
  @Prop() onRowsRendered: Function // Event dispatched with information about the range of rows just rendered
  // @Prop() onScroll: Function // ack invoked onScroll. function (scrollTop, event)

  private list: VirtualizedList

  componentDidLoad() {
    this.height = this.el.offsetHeight
    if (this.generator) {
      this.createList()
    }
  }

  @Watch('generator')
  createList() {
    const opts = {
      height: this.height,
      rowHeight: this.rowHeight || this.estimatedRowHeight,
      rowCount: this.items.length,
      renderRow: this.generator,
      estimatedRowHeight: this.estimatedRowHeight,
      overscanCount: this.overscanCount,
    }
    console.log(opts)
    this.list = new VirtualizedList(this.el, opts)
  }

  render() {
    return <Host />
  }

  // scrollToIndex (index: number, alignment: 'start' | 'center' | 'end')
  // This method scrolls to the specified index. The alignment param controls the alignment scrolled-to-rows. Use "start" to always align rows to the top of the list and "end" to align them bottom. Use "center" to align them in the middle of container.
  @Method()
  async scrollToIndex(index: number, alignment='start') {
    this.list.scrollToIndex(index, alignment)
  }

  // This method updates the total number of rows (rowCount) and will force the list to re-render.
  setRowCount(count: number) {
    this.list.setRowCount(count)
  }
}
