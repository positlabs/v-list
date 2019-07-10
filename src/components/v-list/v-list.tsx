import { Component, Prop, h, Element, Watch, Method, Host, Event } from '@stencil/core'
import VirtualizedList from 'virtualized-list'

@Component({
  tag: 'v-list',
  styleUrl: 'v-list.css',
})
export class VList {
  @Prop() generator: Function
  // Responsible for rendering an item given it's index: ({index: number, style: Object}): HTMLElement. The returned element must handle key and style.
  @Prop() renderRow: Function
  // Number, Array or Function Either a fixed height, an array containing the heights of all the items in your list, or a function that returns the height of an item given its index: (index: number): number
  @Prop() rowHeight: any
  // Height of List. This property will determine the number of rendered vs virtualized items
  @Prop() height: number
  // The number of rows you want to render
  @Prop() rowCount: number

  // The initial scrollTop value (optional)
  @Prop() initialScrollTop: number
  // Initial item index to scroll to (by forcefully scrolling if necessary)
  @Prop() initialIndex: number
  // Number of extra buffer items to render above/below the visible items. Tweaking this can help reduce scroll flickering on certain browsers/devices. Defaults to 3
  @Prop() overscanCount: number
  // Used to estimate the total size of the list before all of its items have actually been measured. The estimated total height is progressively adjusted as items are rendered.
  @Prop() estimatedRowHeight: number

  // Event dispatched once the virtual list has mounted.
  @Event() mount
  // Event dispatched with information about the range of rows just rendered
  @Event() rowsRendered

  @Element() el: HTMLElement
  private list: VirtualizedList

  componentDidLoad() {
    // auto init if conditions are met (e.g. within a component lib that can pass values via attributes)
    this.initialize()
  }

  get options() {
    return {
      height: this.height,
      rowHeight: this.rowHeight || this.estimatedRowHeight,
      rowCount: this.rowCount,
      renderRow: this.generator,
      estimatedRowHeight: this.estimatedRowHeight,
      overscanCount: this.overscanCount,
      initialScrollTop: this.initialScrollTop,
      initialIndex: this.initialIndex,
    }
  }

  initialize() {
    // check requirements
    if (!this.list && this.generator) {
      const opts = this.options
      // try grabbing the height if it's not defined
      this.height = this.height || this.el.offsetHeight
      this.list = new VirtualizedList(this.el, opts)
      this.list.onMount = (e) => this.mount.emit(e)
      this.list.onRowsRenderer = (e) => this.rowsRendered.emit(e)
      // console.log(this.list, opts)
    }
  }

  @Watch('generator') onChangedgenerator(){ this.updateOptions() }
  @Watch('renderRow') onChangedrenderRow(){ this.updateOptions() }
  @Watch('rowHeight') onChangedrowHeight(){ this.updateOptions() }
  @Watch('height') onChangedheight(){ this.updateOptions() }
  @Watch('rowCount') onChangedrowCount() {
    this.list.setRowCount(this.rowCount)
    this.updateOptions()
  }
  @Watch('initialScrollTop') onChangedinitialScrollTop(){ this.updateOptions() }
  @Watch('initialIndex') onChangedinitialIndex(){ this.updateOptions() }
  @Watch('overscanCount') onChangedoverscanCount(){ this.updateOptions() }
  @Watch('estimatedRowHeight') onChangedestimatedRowHeight(){ this.updateOptions() }

  updateOptions() {
    if (this.list) {
      Object.assign(this.list, this.options)
    } else {
      this.initialize()
    }
  }

  render() {
    return <Host />
  }

  // scrollToIndex (index: number, alignment: 'start' | 'center' | 'end')
  // This method scrolls to the specified index. The alignment param controls the alignment scrolled-to-rows. Use "start" to always align rows to the top of the list and "end" to align them bottom. Use "center" to align them in the middle of container.
  @Method()
  async scrollToIndex(index: number, alignment:string='start') {
    this.list.scrollToIndex(index, alignment)
  }
}
