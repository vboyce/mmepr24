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
export function build_maze(items, qs) {
  const types = [
    ["she", "she"],
    ["she", "he"],
    ["he", "he"],
    ["he", "she"],
    ["they", "they"],
  ];
  let options = ["1", "2", "3", "4", "5", "6", "8", "9", "10", "11", "12"];
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
      { prompt: "Kamala Harris", ticks: ["0%", "100%"] },
      { prompt: "Donald Trump", ticks: ["0%", "100%"] },
      { prompt: "Someone else", ticks: ["0%", "100%"] },
    ],
    [
      { prompt: "Donald Trump", ticks: ["0%", "100%"] },
      { prompt: "Kamala Harris", ticks: ["0%", "100%"] },
      { prompt: "Someone else", ticks: ["0%", "100%"] },
    ],
  ];
  return [{ questions: pop_random(questions) }];
}
