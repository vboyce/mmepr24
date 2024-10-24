export const CONSENT =
  ' <center><img width="300px" src="assets/stanford.png" /></center>' +
  '<div id="legal"></br>By answering the following questions, you are participating in a study being performed ' +
  "by cognitive scientists in the Stanford Department of Psychology. If you have questions about this " +
  'research, please contact us at  <a href="mailto://languagecoglab@gmail.com."> languagecoglab@gmail.com</a>.' +
  "You must be at least 18 years old to participate. Your participation in this research is voluntary. " +
  "You may decline to answer any or all of the following questions. You may decline further participation, " +
  "at any time, without adverse consequences. Your anonymity is assured; the researchers who have requested " +
  "your participation will not receive any personal information about you. </div></br>";

export const EVENT_INST =
  "<h1>Who do you think will be the US president in February 2025?</h1>" +
  "<p>Use the sliders below to indicate each candidate's chance of winning the election.</p>";

export const CLOZE_INST =
  "<h4>Below is a fragment of a sentence.  " +
  "Please guess how the sentence continued and use the text field to enter " +
  "the complete rest of the sentence.</h4>";

export const MAZE_INST =
  "<p>Now please place your left index finger on the 'e' key and your " +
  "right index finger on the 'i' key.</p>" +
  "<p> You will read sentences word by word. " +
  "On each screen you will see two options: one will be the next word in the sentence, " +
  "and one will not. Select the word that continues the sentence by pressing 'e' (left-hand)" +
  " for the word on the left or pressing 'i' (right-hand) for the word on the right.</p>" +
  "<p>Select the best word as quickly as you can, but without making too many errors.</p>";

export const POST_SURVEY_TEXT =
  "<h1>End of the experiment.</h1>" +
  "Before you go, we have a couple questions about your experience.</br>" +
  "We plan to run more similar experiments in the future, so your " +
  "thoughtful responses here will help us make the experience smoother.";

export const POST_SURVEY_QS = [
  {
    prompt:
      "Were the instructions and task clear? " +
      "Was there anything you found confusing?",
    name: "understand",
    rows: 4,
  },
  {
    prompt:
      "How was the task length? Would you have " +
      "preferred fewer or more items / a shorter or longer task? " +
      "(Assume time estimate and payment scale with length). ",
    name: "length",
    rows: 4,
  },
  {
    prompt: "Were there any problems or errors with the experiment?",
    name: "errors",
    rows: 4,
  },
  {
    prompt:
      "Is there anything that would make the interface better?" +
      " (ex. bigger text, or a different placement of text and buttons)",
    name: "interface",
    rows: 4,
  },
  { prompt: "Any other comments?", name: "other", rows: 4 },
];
export const DEBRIEF =
  "<h2>Many thanks for participating!</h2>" +
  "<h1>Press continue to be redirected to Prolific. </h1>";
