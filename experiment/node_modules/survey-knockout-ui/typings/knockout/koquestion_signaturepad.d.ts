import { QuestionSignaturePadModel } from "survey-core";
export declare class QuestionSignaturePad extends QuestionSignaturePadModel {
    private _implementor;
    constructor(name: string);
    koOnBlur(data: any, event: any): void;
    protected onBaseCreating(): void;
    dispose(): void;
}
