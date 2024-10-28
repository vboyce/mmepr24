import {
  CONSENT,
  POST_SURVEY_QS,
  POST_SURVEY_TEXT,
  DEBRIEF,
  INSTRUCTIONS,
  EVENT_INST,
  CLOZE_INST,
} from "./instructions.js";

export function shuffle(arr) {
  var i = arr.length,
    j,
    temp;
  while (--i > 0) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
}
function pop_random(items) {
  let id = Math.floor(Math.random() * items.length);
  return items[id];
}

export function get_condition() {
  // order of conditions: cloze-event, event-cloze, maze-event, event-maze, spr-event, event-spr
  // add SPR if we do that
  // ratio for now -- again negotiable
  // 2/3 task first, 1/3 task second
  // 6:4:6 cloze:maze:spr
  // [.25, .375, .542, .625, .875, 1]
  let cuts = [0.25, 0.375, 0.542, 0.625, 0.875, 1];
  let conditions = [
    "cloze-event",
    "event-cloze",
    "maze-event",
    "event-maze",
    "spr-event",
    "event-spr",
  ];
  let value = Math.random();
  console.log(value);
  for (let i = 0; i < cuts.length; i++) {
    if (value < cuts[i]) {
      console.log(conditions[i]);
      return conditions[i];
    }
  }
}

export function build_maze(items, qs) {
  const types = [
    ["she", "she"],
    ["she", "he"],
    ["he", "he"],
    ["he", "she"],
    ["they", "they"],
  ];
  let options = ["1", "2", "3", "4", "5", "8", "9", "10", "11", "12"];
  shuffle(options);

  //choose a type
  let type = pop_random(types);
  let q = pop_random(options.slice(0, 2));
  let starter = items.find((i) => i.type == "start");
  let sent2 = items.find((i) => (i.type == type[0]) & (i.item == options[0]));
  let sent3 = items.find((i) => (i.type == type[1]) & (i.item == options[1]));
  let question = qs.find((i) => i.item == q);

  let together = {};
  together.type = sent2.type + "-" + sent3.type;
  together.item = sent2.item + "-" + sent3.item;
  together.sentence =
    starter.sentence + " " + sent2.sentence + " " + sent3.sentence;
  together.distractor =
    starter.distractor + " " + sent2.distractor + " " + sent3.distractor;
  together.qitem = question.item;
  together.question = "<p>" + question.q + "</p></br>";
  together.answer = question.a;
  return [together];
}

export function build_cloze(items) {
  let item = pop_random(items);
  item.partial = CLOZE_INST + item.partial + "%%";
  return [item];
}

export function build_event() {
  let questions = [
    [
      {
        name: "harris",
        prompt: "Kamala Harris",
        slider_start: 0,
        ticks: ["0%", "25%", "50%", "75%", "100%"],
      },
      {
        name: "trump",
        prompt: "Donald Trump",
        slider_start: 0,
        ticks: ["0%", "25%", "50%", "75%", "100%"],
      },
      {
        name: "other",
        prompt: "Someone else",
        slider_start: 0,
        ticks: ["0%", "25%", "50%", "75%", "100%"],
      },
    ],
    [
      {
        name: "trump",
        prompt: "Donald Trump",
        slider_start: 0,
        ticks: ["0%", "25%", "50%", "75%", "100%"],
      },
      {
        name: "harris",
        prompt: "Kamala Harris",
        slider_start: 0,
        ticks: ["0%", "25%", "50%", "75%", "100%"],
      },
      {
        name: "other",
        prompt: "Someone else",
        slider_start: 0,
        ticks: ["0%", "25%", "50%", "75%", "100%"],
      },
    ],
  ];
  return [{ questions: pop_random(questions) }];
}

export function test_maze(items, qs, type) {
  let subset = items.filter((i) => i.type == type);
  const output = subset.map((i) => {
    let question = qs.find((j) => j.item == i.item);
    return {
      type: i.type,
      item: i.item,
      sentence: i.sentence,
      distractor: i.distractor,
      qitem: i.item,
      question: question.q,
      answer: question.a,
    };
  });
  return output;
}
