import * as ko from "knockout";
import { ProgressButtons, IProgressButtonsViewModel, SurveyModel } from "survey-core";
export declare class ProgressButtonsViewModel implements IProgressButtonsViewModel {
    private model;
    private element;
    container: string;
    survey: SurveyModel;
    private respManager;
    private hasScroller;
    canShowHeader: ko.Observable<boolean>;
    canShowFooter: ko.Observable<boolean>;
    canShowItemTitles: ko.Observable<boolean>;
    constructor(model: ProgressButtons, element: HTMLElement, container: string, survey: SurveyModel);
    onResize(canShowItemTitles: boolean): void;
    onUpdateScroller(hasScroller: boolean): void;
    onUpdateSettings(): void;
    getScrollButtonCss(isLeftScroll: boolean): any;
    clickScrollButton(listContainerElement: Element, isLeftScroll: boolean): void;
    dispose(): void;
}
