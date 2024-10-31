export const CONSENT =
  ' <center><img width="300px" src="assets/mit.png" /></center>' +
  '<div id="legal"></br>This study is part of a MIT scientific research project. Your decision to complete this study is ' +
  "voluntary. There is no way for us to identify you. The only information we will have, in addition " +
  "to your responses, is the demographic information you provided to Prolific and the time at " +
  "which you completed the survey. The results of the research may be presented at scientific " +
  "meetings or published in scientific journals. Clicking on the link below indicates that you are at " +
  "least 18 years of age and agree to complete this study voluntarily.</div></br>";

export const EVENT_INST =
  "<h2>Who do you think will be <br> the US president in February 2025?</h2>" +
  "<p>Use the sliders below to indicate each candidate's chance of winning the election.</p>";

export const CLOZE_INST =
  "<h4>Below is a fragment of a sentence.  " +
  "Please guess how the sentence continues and use the text field to enter " +
  "the complete rest of the sentence.</h4>";

export const MAZE_INST =
  "<h3>Please read these instructions carefully!</h3> </br>" +
  "<p>For the next part, please place your <b>left index finger on the 'e' key</b> and" +
  " your <b>right index finger on the 'i' key</b>.</p>" +
  "<p> You will read sentences word by word. " +
  "However, you will have to guess which word comes next. " +
  "On each screen you will see two options: one will be the next word in the sentence, and one will not. </p>" +
  "<p><b>Select the word that continues the sentence by pressing 'e' (left-hand) for the word on the left or <br>" +
  "pressing 'i' (right-hand) for the word on the right.</b></p>" +
  "<p>Select the best word as quickly as you can, but without making too many errors. </p>";

export const SPR_INST =
  "<p> On the next page you will read sentences word by word. " +
  "Press the SPACE key to reveal the first word and then SPACE again" +
  " for each subsequent word. " +
  " Make sure to read the sentences carefully since you will be " +
  "asked questions about them afterwards.</p>";
export const POST_SURVEY_TEXT =
  "<h2>End of the experiment.</h2>" +
  "Before you go, we have a couple questions about your experience.</br>" +
  "We plan to run more similar experiments in the future, so your " +
  "thoughtful responses here will help us make the experience smoother.";

export const POST_SURVEY_QS_1 = {
  showQuestionNumbers: false,
  elements: [
    {
      type: "expression",
      name: "intro",
      title:
        "Now please answer a couple of questions about your background.  This information will be stored in anonymous form and it will be impossible to link it to you.",
      expression: "",
    },
    {
      type: "radiogroup",
      title:
        "How often do you hear or read about the presidential race for the White House?",
      name: "news",
      choices: ["Daily", "Weekly", "Monthly", "Less than monthly", "Never"],
    },
    {
      type: "radiogroup",
      title:
        "Who would you PREFER to win the upcoming US presidential election?",
      choices: [
        "Kamala Harris",
        "Donald Trump",
        "I don't care",
        "I'd rather not say",
      ],
      name: "prefer",
    },
    {
      type: "text",
      title: "How old are you?",
      name: "age",
    },
    {
      type: "radiogroup",
      title: "Please select your gender.",
      name: "gender",
      choices: ["Female", "Male", "Non-binary", "Other", "Rather not say"],
    },
    {
      type: "dropdown",
      title: "Please select your home state:",
      name: "state",
      choices: [
        "other",
        "AL",
        "AK",
        "AS",
        "AZ",
        "AR",
        "CA",
        "CO",
        "CT",
        "DE",
        "DC",
        "FM",
        "FL",
        "GA",
        "GU",
        "HI",
        "ID",
        "IL",
        "IN",
        "IA",
        "KS",
        "KY",
        "LA",
        "ME",
        "MH",
        "MD",
        "MA",
        "MI",
        "MN",
        "MS",
        "MO",
        "MT",
        "NE",
        "NV",
        "NH",
        "NJ",
        "NM",
        "NY",
        "NC",
        "ND",
        "MP",
        "OH",
        "OK",
        "OR",
        "PW",
        "PA",
        "PR",
        "RI",
        "SC",
        "SD",
        "TN",
        "TX",
        "UT",
        "VT",
        "VI",
        "VA",
        "WA",
        "WV",
        "WI",
        "WY",
      ],
    },
    {
      type: "radiogroup",
      title: "Please select the highest level of education you have attained:",
      choices: [
        "Less than high school",
        "High school graduate",
        "Some college",
        "2-year college degree",
        "4-year college degree",
        "Professional degree",
        "Doctorate",
      ],
      name: "education",
    },
    {
      type: "radiogroup",
      title: "What is your political affiliation?",
      name: "political_aff",
      choices: [
        "Democrat",
        "Republican",
        "Independent",
        "Other",
        "None",
        "Rather not say",
      ],
    },
    {
      type: "radiogroup",
      title: "Are you a citizen of the United States?",
      name: "citizen",
      choices: ["Yes", "No"],
      isRequired: true,
    },
    {
      type: "radiogroup",
      title: "Are you a native speaker of English?",
      name: "english",
      choices: ["Yes", "No"],
      isRequired: true,
    },
    {
      type: "radiogroup",
      title: "Do you currently reside in the United States?",
      name: "residence",
      choices: ["Yes", "No"],
      isRequired: true,
    },
  ],
};

export const POST_SURVEY_QS_2 = {
  showQuestionNumbers: false,
  elements: [
    {
      type: "expression",
      name: "intro",
      title:
        "Now please answer a couple of questions about your background.  This information will be stored in anonymous form and it will be impossible to link it to you.",
      expression: "",
    },
    {
      type: "radiogroup",
      title:
        "How often do you hear or read about the presidential race for the White House?",
      name: "news",
      choices: ["Daily", "Weekly", "Monthly", "Less than monthly", "Never"],
    },
    {
      type: "radiogroup",
      title:
        "Who would you PREFER to win the upcoming US presidential election?",
      choices: [
        "Donald Trump",
        "Kamala Harris",
        "I don't care",
        "I'd rather not say",
      ],
      name: "prefer",
    },
    {
      type: "text",
      title: "How old are you?",
      name: "age",
    },
    {
      type: "radiogroup",
      title: "Please select your gender.",
      name: "gender",
      choices: ["Female", "Male", "Non-binary", "Other", "Rather not say"],
    },
    {
      type: "dropdown",
      title: "Please select your home state:",
      name: "state",
      choices: [
        "other",
        "AL",
        "AK",
        "AS",
        "AZ",
        "AR",
        "CA",
        "CO",
        "CT",
        "DE",
        "DC",
        "FM",
        "FL",
        "GA",
        "GU",
        "HI",
        "ID",
        "IL",
        "IN",
        "IA",
        "KS",
        "KY",
        "LA",
        "ME",
        "MH",
        "MD",
        "MA",
        "MI",
        "MN",
        "MS",
        "MO",
        "MT",
        "NE",
        "NV",
        "NH",
        "NJ",
        "NM",
        "NY",
        "NC",
        "ND",
        "MP",
        "OH",
        "OK",
        "OR",
        "PW",
        "PA",
        "PR",
        "RI",
        "SC",
        "SD",
        "TN",
        "TX",
        "UT",
        "VT",
        "VI",
        "VA",
        "WA",
        "WV",
        "WI",
        "WY",
      ],
    },
    {
      type: "radiogroup",
      title: "Please select the highest level of education you have attained:",
      choices: [
        "Less than high school",
        "High school graduate",
        "Some college",
        "2-year college degree",
        "4-year college degree",
        "Professional degree",
        "Doctorate",
      ],
      name: "education",
    },
    {
      type: "radiogroup",
      title: "What is your political affiliation?",
      name: "poltical_aff",
      choices: [
        "Democrat",
        "Republican",
        "Independent",
        "Other",
        "None",
        "Rather not say",
      ],
    },
    {
      type: "radiogroup",
      title: "Are you a citizen of the United States?",
      name: "citizen",
      choices: ["Yes", "No"],
      isRequired: true,
    },
    {
      type: "radiogroup",
      title: "Are you a native speaker of English?",
      name: "english",
      choices: ["Yes", "No"],
      isRequired: true,
    },
    {
      type: "radiogroup",
      title: "Do you currently reside in the United States?",
      name: "residence",
      choices: ["Yes", "No"],
      isRequired: true,
    },
  ],
};

export const DEBRIEF =
  "<h2>Many thanks for participating!</h2>" +
  "<h1>Press continue to be redirected to Prolific. </h1>";
