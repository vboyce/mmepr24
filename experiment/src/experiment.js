/**
 * @title expt1
 * @description
 * @version 0.1.0
 *
 * @assets assets/
 */

// You can import stylesheets (.scss or .css).

import "../styles/main.scss";
import MazePlugin from "./maze.js";

import { initJsPsych } from "jspsych";
import SprPlugin from "./spr.js";
import HtmlButtonResponsePlugin from "@jspsych/plugin-html-button-response";
import CallFunctionPlugin from "@jspsych/plugin-call-function";
import cloze from "./cloze.js";
import jsPsychSurveySlider from "@jspsych-contrib/plugin-survey-slider";
import survey from "@jspsych/plugin-survey";
import { proliferate } from "./proliferate.js";

import {
  build_maze,
  build_cloze,
  build_event,
  test_maze,
  get_condition,
} from "./custom_helper.js";

import { CLOZE_STIM } from "./cloze_stim.js";
import { COMP_Q } from "./comp_q.js";
import { MAZE_STIM } from "./maze_stim.js";

import {
  CONSENT,
  POST_SURVEY_QS,
  SPR_INST,
  DEBRIEF,
  EVENT_INST,
  MAZE_INST,
} from "./instructions.js";

const maze_item = build_maze(MAZE_STIM, COMP_Q);
const cloze_item = build_cloze(CLOZE_STIM);
const event_item = build_event();

const she_items = test_maze(MAZE_STIM, COMP_Q, "she");
const he_items = test_maze(MAZE_STIM, COMP_Q, "he");
const they_items = test_maze(MAZE_STIM, COMP_Q, "they");
const start_maze = MAZE_STIM.filter((i) => i.item == "start");

let condition = get_condition();
/**
 * This function will be executed by jsPsych Builder and is expected to run the jsPsych experiment
 *
 * @type {import("jspsych-builder").RunFunction}
 */

export async function run({
  assetPaths,
  input = {},
  environment,
  title,
  version,
}) {
  const jsPsych = initJsPsych({
    show_progress_bar: false,
    auto_update_progress_bar: false,
    on_close: function () {
      var data = jsPsych.data.get().values();
      proliferate.submit({ trials: data });
    },
  });

  let consent = {
    type: HtmlButtonResponsePlugin,
    stimulus: CONSENT,
    choices: ["Continue"],
    response_ends_trial: true,
  };

  let post_test_questions = {
    type: survey,
    preamble:
      "Now please answer a couple of questions about your background.  This information will be stored in anonymous form and it will be impossible to link it to you.",
    survey_json: POST_SURVEY_QS,
  };

  let end_experiment = {
    type: HtmlButtonResponsePlugin,
    stimulus: DEBRIEF,
    choices: ["Continue"],
  };

  let send_data = {
    type: CallFunctionPlugin,
    async: true,
    func: function (done) {
      proliferate.submit({ trials: jsPsych.data.get().values() });
    },
  };

  let maze_instructions = {
    type: HtmlButtonResponsePlugin,
    stimulus: MAZE_INST,
    choices: ["Continue"],
    response_ends_trial: true,
  };

  let spr_instructions = {
    type: HtmlButtonResponsePlugin,
    stimulus: SPR_INST,
    choices: ["Continue"],
    response_ends_trial: true,
  };

  let maze_trial = {
    type: MazePlugin,
    correct: jsPsych.timelineVariable("sentence"),
    distractor: jsPsych.timelineVariable("distractor"),
    css_classes: ["maze-display"],
    prompt: "",
    data: {
      condition: condition,
      type: jsPsych.timelineVariable("type"),
      item: jsPsych.timelineVariable("item"),
      sentence: jsPsych.timelineVariable("sentence"),
      distractor: jsPsych.timelineVariable("distractor"),
    },
  };

  let cloze_trial = {
    type: cloze,
    text: jsPsych.timelineVariable("partial"),
    button_text: "Continue",
    allow_blanks: false,
    mistake_fn: function () {
      alert("Please complete the sentence.");
    },
    data: {
      condition: condition,
      item: jsPsych.timelineVariable("item"),
    },
  };

  let event_expectation = {
    type: jsPsychSurveySlider,
    preamble: EVENT_INST,
    require_movement: true,
    questions: jsPsych.timelineVariable("questions"),
    data: {
      condition: condition,
    },
  };

  let spr_trial = {
    type: SprPlugin,
    prompt: "",
    style: "word",
    //css_classes: ["tangram-display"],
    stimulus: jsPsych.timelineVariable("sentence"),
    feedback: "",
  };

  let spr_practice = {
    type: SprPlugin,
    prompt: "",
    style: "word",
    stimulus: "Press space in order to reveal the next word.",
    feedback: "",
  };
  let spr_practice_q = {
    type: HtmlButtonResponsePlugin,
    stimulus: "Did the sentence you just read contain the word 'reveal'?",
    choices: ["Yes", "No"],
  };

  let recall = {
    type: HtmlButtonResponsePlugin,
    stimulus:
      "<p>Think about the writer of the sentences you read on the previous page. " +
      "Who does the writer believe will be the US president in February 2025?</p></br>",
    choices: function () {
      return Math.random() > 0.5
        ? [
            "Kamala Harris",
            "Donald Trump",
            "Writer is unsure",
            "I don't remember",
          ]
        : [
            "Donald Trump",
            "Kamala Harris",
            "Writer is unsure",
            "I don't remember",
          ];
    },
    data: {
      condition: condition,
    },
  };

  let maze_practice = {
    type: MazePlugin,
    prompt: "",
    correct:
      "This sentence is for practice. Here is another practice item. Now the actual task will begin.",
    distractor:
      "x-x-x treating okay guys suggests. x-x-x pre percent partners cops. x-x-x lord caused sing anti weird.",
    css_classes: ["maze-display"],
  };

  let comprehension_q = {
    type: HtmlButtonResponsePlugin,
    stimulus: jsPsych.timelineVariable("question"),
    choices: ["Yes", "No"],
    data: {
      condition: condition,
      item: jsPsych.timelineVariable("qitem"),
    },
  };

  function getTimeline() {
    //////////////// timeline /////////////////////////////////
    let timeline = [];

    timeline.push(consent);
    let maze_timeline = {
      timeline: [maze_instructions, maze_practice, maze_trial, comprehension_q],
      timeline_variables: maze_item,
    };
    let cloze_timeline = {
      timeline: [cloze_trial],
      timeline_variables: cloze_item,
    };
    let event_timeline = {
      timeline: [event_expectation],
      timeline_variables: event_item,
    };
    let spr_timeline = {
      timeline: [
        spr_instructions,
        spr_practice,
        spr_practice_q,
        spr_trial,
        comprehension_q,
      ],
      timeline_variables: maze_item,
    };
    let timeline_test_maze_start = {
      timeline: [maze_instructions, maze_practice, maze_trial],
      timeline_variables: start_maze,
    };
    let timeline_test_maze_she = {
      timeline: [maze_trial, comprehension_q],
      timeline_variables: she_items,
    };
    let timeline_test_maze_he = {
      timeline: [maze_trial, comprehension_q],
      timeline_variables: he_items,
    };
    let timeline_test_maze_they = {
      timeline: [maze_trial, comprehension_q],
      timeline_variables: they_items,
    };
    switch (condition) {
      case "cloze-event":
        timeline.push(cloze_timeline);
        timeline.push(event_timeline);
        break;
      case "event-cloze":
        timeline.push(event_timeline);
        timeline.push(cloze_timeline);
        break;
      case "maze-event":
        timeline.push(maze_timeline);
        timeline.push(event_timeline);
        break;
      case "event-maze":
        timeline.push(event_timeline);
        timeline.push(maze_timeline);
        timeline.push(recall);
        break;
      case "spr-event":
        timeline.push(spr_timeline);
        timeline.push(event_timeline);
        break;
      case "event-spr":
        timeline.push(event_timeline);
        timeline.push(spr_timeline);
        timeline.push(recall);
        break;
    }
    timeline.push(post_test_questions);
    timeline.push(end_experiment);
    timeline.push(send_data);
    return timeline;
  }

  let timeline = getTimeline();
  await jsPsych.run(timeline);
}
