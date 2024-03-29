const constants = {
  ERROR: {
    SURVEY_NAME: {
      ERROR: "SURVEY_NAME",
      TYPE: ["LENGTH"],
      MSG: "Survey name required and must greather than 6 in length",
    },
    QUESTION: {
      ERROR: "QUESTION",
      TYPE: ["LENGTH"],
      MSG: "Previous question must not be null",
    },
    ANSWER: {
      ERROR: "ANSWER",
      TYPE: ["LENGTH"],
      MSG: "Expected option should not be null",
    },
  },
  COLORS: ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"],
};

export default constants;
