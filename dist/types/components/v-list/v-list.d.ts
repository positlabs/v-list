export declare class VList {
    generator: Function;
    renderRow: Function;
    rowHeight: any;
    height: number;
    rowCount: number;
    initialScrollTop: number;
    initialIndex: number;
    overscanCount: number;
    estimatedRowHeight: number;
    mount: any;
    rowsRendered: any;
    el: HTMLElement;
    private list;
    componentDidLoad(): void;
    readonly options: {
        height: number;
        rowHeight: any;
        rowCount: number;
        renderRow: Function;
        estimatedRowHeight: number;
        overscanCount: number;
        initialScrollTop: number;
        initialIndex: number;
    };
    initialize(): void;
    onChangedgenerator(): void;
    onChangedrenderRow(): void;
    onChangedrowHeight(): void;
    onChangedheight(): void;
    onChangedrowCount(): void;
    onChangedinitialScrollTop(): void;
    onChangedinitialIndex(): void;
    onChangedoverscanCount(): void;
    onChangedestimatedRowHeight(): void;
    updateOptions(): void;
    render(): any;
    scrollToIndex(index: number, alignment?: string): Promise<void>;
}
