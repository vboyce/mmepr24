import { JsPsych, JsPsychPlugin, ParameterType, TrialType } from "jspsych";
declare const info: {
    readonly name: "survey-slider";
    readonly parameters: {
        readonly questions: {
            readonly type: ParameterType.COMPLEX;
            readonly array: true;
            readonly pretty_name: "Questions";
            readonly default: any;
            readonly nested: {
                /** The HTML string to be displayed */
                readonly stimulus: {
                    readonly type: ParameterType.HTML_STRING;
                    readonly pretty_name: "Stimulus";
                    readonly default: "";
                };
                readonly prompt: {
                    readonly type: ParameterType.STRING;
                    readonly pretty_name: "Prompt";
                    readonly default: any;
                    readonly description: "Content to be displayed below the stimulus and above the slider";
                };
                readonly labels: {
                    readonly type: ParameterType.STRING;
                    readonly pretty_name: "Labels";
                    readonly default: readonly [];
                    readonly array: true;
                    readonly description: "Labels of the sliders.";
                };
                /** Array containing the ticks to show along the slider. Ticks will be displayed at equidistant locations along the slider. Note this parameter is called Labels in the original plugin.*/
                readonly ticks: {
                    readonly type: ParameterType.HTML_STRING;
                    readonly pretty_name: "Ticks";
                    readonly default: readonly [];
                    readonly array: true;
                    readonly description: "Ticks of the sliders.";
                };
                readonly name: {
                    readonly type: ParameterType.STRING;
                    readonly pretty_name: "Question Name";
                    readonly default: "";
                    readonly description: "Controls the name of data values associated with this question";
                };
                readonly min: {
                    readonly type: ParameterType.INT;
                    readonly pretty_name: "Min slider";
                    readonly default: 0;
                    readonly description: "Sets the minimum value of the slider.";
                };
                readonly max: {
                    readonly type: ParameterType.INT;
                    readonly pretty_name: "Max slider";
                    readonly default: 100;
                    readonly description: "Sets the maximum value of the slider";
                };
                readonly slider_start: {
                    readonly type: ParameterType.INT;
                    readonly pretty_name: "Slider starting value";
                    readonly default: 50;
                    readonly description: "Sets the starting value of the slider";
                };
                readonly step: {
                    readonly type: ParameterType.INT;
                    readonly pretty_name: "Step";
                    readonly default: 1;
                    readonly description: "Sets the step of the slider";
                };
            };
        };
        readonly randomize_question_order: {
            readonly type: ParameterType.BOOL;
            readonly pretty_name: "Randomize Question Order";
            readonly default: false;
            readonly description: "If true, the order of the questions will be randomized";
        };
        readonly preamble: {
            readonly type: ParameterType.HTML_STRING;
            readonly pretty_name: "Preamble";
            readonly default: any;
            readonly description: "String to display at top of the page.";
        };
        readonly button_label: {
            readonly type: ParameterType.STRING;
            readonly pretty_name: "Button label";
            readonly default: "Continue";
            readonly description: "Label of the button.";
        };
        readonly autocomplete: {
            readonly type: ParameterType.BOOL;
            readonly pretty_name: "Allow autocomplete";
            readonly default: false;
            readonly description: "Setting this to true will enable browser auto-complete or auto-fill for the form.";
        };
        readonly require_movement: {
            readonly type: ParameterType.BOOL;
            readonly pretty_name: "Require movement";
            readonly default: false;
            readonly description: "If true, the participant will have to move the slider before continuing.";
        };
        readonly slider_width: {
            readonly type: ParameterType.INT;
            readonly pretty_name: "Slider width";
            readonly default: 500;
            readonly description: "Width of the slider in pixels.";
        };
    };
};
type Info = typeof info;
/**
 * **survey-slider**
 *
 * Add several analogue scales on the same page for use in questionnaires
 *
 * @author Dominique Makowski
 * @see {@link https://github.com/jspsych/jspsych-contrib/packages/plugin-survey-slider/README.md}}
 */
declare class SurveySliderPlugin implements JsPsychPlugin<Info> {
    private jsPsych;
    static info: {
        readonly name: "survey-slider";
        readonly parameters: {
            readonly questions: {
                readonly type: ParameterType.COMPLEX;
                readonly array: true;
                readonly pretty_name: "Questions";
                readonly default: any;
                readonly nested: {
                    /** The HTML string to be displayed */
                    readonly stimulus: {
                        readonly type: ParameterType.HTML_STRING;
                        readonly pretty_name: "Stimulus";
                        readonly default: "";
                    };
                    readonly prompt: {
                        readonly type: ParameterType.STRING;
                        readonly pretty_name: "Prompt";
                        readonly default: any;
                        readonly description: "Content to be displayed below the stimulus and above the slider";
                    };
                    readonly labels: {
                        readonly type: ParameterType.STRING;
                        readonly pretty_name: "Labels";
                        readonly default: readonly [];
                        readonly array: true;
                        readonly description: "Labels of the sliders.";
                    };
                    /** Array containing the ticks to show along the slider. Ticks will be displayed at equidistant locations along the slider. Note this parameter is called Labels in the original plugin.*/
                    readonly ticks: {
                        readonly type: ParameterType.HTML_STRING;
                        readonly pretty_name: "Ticks";
                        readonly default: readonly [];
                        readonly array: true;
                        readonly description: "Ticks of the sliders.";
                    };
                    readonly name: {
                        readonly type: ParameterType.STRING;
                        readonly pretty_name: "Question Name";
                        readonly default: "";
                        readonly description: "Controls the name of data values associated with this question";
                    };
                    readonly min: {
                        readonly type: ParameterType.INT;
                        readonly pretty_name: "Min slider";
                        readonly default: 0;
                        readonly description: "Sets the minimum value of the slider.";
                    };
                    readonly max: {
                        readonly type: ParameterType.INT;
                        readonly pretty_name: "Max slider";
                        readonly default: 100;
                        readonly description: "Sets the maximum value of the slider";
                    };
                    readonly slider_start: {
                        readonly type: ParameterType.INT;
                        readonly pretty_name: "Slider starting value";
                        readonly default: 50;
                        readonly description: "Sets the starting value of the slider";
                    };
                    readonly step: {
                        readonly type: ParameterType.INT;
                        readonly pretty_name: "Step";
                        readonly default: 1;
                        readonly description: "Sets the step of the slider";
                    };
                };
            };
            readonly randomize_question_order: {
                readonly type: ParameterType.BOOL;
                readonly pretty_name: "Randomize Question Order";
                readonly default: false;
                readonly description: "If true, the order of the questions will be randomized";
            };
            readonly preamble: {
                readonly type: ParameterType.HTML_STRING;
                readonly pretty_name: "Preamble";
                readonly default: any;
                readonly description: "String to display at top of the page.";
            };
            readonly button_label: {
                readonly type: ParameterType.STRING;
                readonly pretty_name: "Button label";
                readonly default: "Continue";
                readonly description: "Label of the button.";
            };
            readonly autocomplete: {
                readonly type: ParameterType.BOOL;
                readonly pretty_name: "Allow autocomplete";
                readonly default: false;
                readonly description: "Setting this to true will enable browser auto-complete or auto-fill for the form.";
            };
            readonly require_movement: {
                readonly type: ParameterType.BOOL;
                readonly pretty_name: "Require movement";
                readonly default: false;
                readonly description: "If true, the participant will have to move the slider before continuing.";
            };
            readonly slider_width: {
                readonly type: ParameterType.INT;
                readonly pretty_name: "Slider width";
                readonly default: 500;
                readonly description: "Width of the slider in pixels.";
            };
        };
    };
    constructor(jsPsych: JsPsych);
    trial(display_element: HTMLElement, trial: TrialType<Info>): void;
}
export default SurveySliderPlugin;
