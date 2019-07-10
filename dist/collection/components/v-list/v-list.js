import { h, Host } from '@stencil/core';
import VirtualizedList from 'virtualized-list';
export class VList {
    componentDidLoad() {
        // auto init if conditions are met (e.g. within a component lib that can pass values via attributes)
        this.initialize();
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
        };
    }
    initialize() {
        // check requirements
        if (!this.list && this.generator) {
            const opts = this.options;
            // try grabbing the height if it's not defined
            this.height = this.height || this.el.offsetHeight;
            this.list = new VirtualizedList(this.el, opts);
            this.list.onMount = (e) => this.mount.emit(e);
            this.list.onRowsRenderer = (e) => this.rowsRendered.emit(e);
            // console.log(this.list, opts)
        }
    }
    onChangedgenerator() { this.updateOptions(); }
    onChangedrenderRow() { this.updateOptions(); }
    onChangedrowHeight() { this.updateOptions(); }
    onChangedheight() { this.updateOptions(); }
    onChangedrowCount() {
        this.list.setRowCount(this.rowCount);
        this.updateOptions();
    }
    onChangedinitialScrollTop() { this.updateOptions(); }
    onChangedinitialIndex() { this.updateOptions(); }
    onChangedoverscanCount() { this.updateOptions(); }
    onChangedestimatedRowHeight() { this.updateOptions(); }
    updateOptions() {
        if (this.list) {
            Object.assign(this.list, this.options);
        }
        else {
            this.initialize();
        }
    }
    render() {
        return h(Host, null);
    }
    // scrollToIndex (index: number, alignment: 'start' | 'center' | 'end')
    // This method scrolls to the specified index. The alignment param controls the alignment scrolled-to-rows. Use "start" to always align rows to the top of the list and "end" to align them bottom. Use "center" to align them in the middle of container.
    async scrollToIndex(index, alignment = 'start') {
        this.list.scrollToIndex(index, alignment);
    }
    static get is() { return "v-list"; }
    static get originalStyleUrls() { return {
        "$": ["v-list.css"]
    }; }
    static get styleUrls() { return {
        "$": ["v-list.css"]
    }; }
    static get properties() { return {
        "generator": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "Function",
                "resolved": "Function",
                "references": {
                    "Function": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        },
        "renderRow": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "Function",
                "resolved": "Function",
                "references": {
                    "Function": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        },
        "rowHeight": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "row-height",
            "reflect": false
        },
        "height": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "height",
            "reflect": false
        },
        "rowCount": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "row-count",
            "reflect": false
        },
        "initialScrollTop": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "initial-scroll-top",
            "reflect": false
        },
        "initialIndex": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "initial-index",
            "reflect": false
        },
        "overscanCount": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "overscan-count",
            "reflect": false
        },
        "estimatedRowHeight": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "estimated-row-height",
            "reflect": false
        }
    }; }
    static get events() { return [{
            "method": "mount",
            "name": "mount",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "rowsRendered",
            "name": "rowsRendered",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get methods() { return {
        "scrollToIndex": {
            "complexType": {
                "signature": "(index: number, alignment?: string) => Promise<void>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }, {
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "generator",
            "methodName": "onChangedgenerator"
        }, {
            "propName": "renderRow",
            "methodName": "onChangedrenderRow"
        }, {
            "propName": "rowHeight",
            "methodName": "onChangedrowHeight"
        }, {
            "propName": "height",
            "methodName": "onChangedheight"
        }, {
            "propName": "rowCount",
            "methodName": "onChangedrowCount"
        }, {
            "propName": "initialScrollTop",
            "methodName": "onChangedinitialScrollTop"
        }, {
            "propName": "initialIndex",
            "methodName": "onChangedinitialIndex"
        }, {
            "propName": "overscanCount",
            "methodName": "onChangedoverscanCount"
        }, {
            "propName": "estimatedRowHeight",
            "methodName": "onChangedestimatedRowHeight"
        }]; }
}
