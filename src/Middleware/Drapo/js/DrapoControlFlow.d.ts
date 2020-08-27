/// <reference path="../typings/index.d.ts" />
declare class DrapoControlFlow {
    private _application;
    get Application(): DrapoApplication;
    constructor(application: DrapoApplication);
    ResolveControlFlowDocument(): Promise<void>;
    ResolveControlFlowSector(jQueryStart: JQuery, canResolveComponents?: boolean): Promise<void>;
    private ResolveControlFlowForParent;
    private ResolveControlFlowForRoot;
    ResolveControlFlowFor(forJQuery: JQuery, isIncremental?: boolean, canUseDifference?: boolean, type?: DrapoStorageLinkType, canResolveComponents?: boolean): Promise<void>;
    private InitializeContext;
    IsElementControlFlowTemplate(el: HTMLElement): boolean;
    private ResolveControlFlowForInternal;
    private ResolveControlFlowForIterationRender;
    private CanApplyConditional;
    private ResolveControlFlowForIterationRenderClass;
    IsControlFlowForIterationVisible(sector: string, context: DrapoContext, el: Element, elj: JQuery, renderContext: DrapoRenderContext): Promise<boolean>;
    private CreateList;
    private RemoveList;
    private RemoveListIndex;
    private IsControlFlowDataKeyIterator;
    private GetControlFlowDataKeyIterators;
    private GetTemplateVariables;
    private GetControlFlowExpressionsDataKey;
    private GetControlFlowConditionsDataKey;
    private CreateTemplateKey;
    private CreateTemplate;
    private GetTemplateFromTemplateKey;
    private AddTemplate;
    GetIteratorRange(iterator: string): DrapoRange;
    private GetIteratorRangeInternal;
    private GetIteratorRangeString;
    CleanIteratorRange(iterator: string): string;
    private IsValidRange;
    private IsValidRangeIndex;
    ApplyRange(data: any[], range: DrapoRange): any[];
    GetRangeIndex(data: any[], rangeIndex: string): number;
    ExecuteDataItem(sector: string, context: DrapoContext, expression: string, forText: string, ifText: string, all: boolean, datas: any[], dataKey: string, key: string): Promise<boolean>;
}