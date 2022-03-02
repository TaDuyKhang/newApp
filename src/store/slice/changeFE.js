import { createSlice } from "@reduxjs/toolkit";

export const FEData = createSlice({
  name: "FEData",
  initialState: {
    Column: {
      title: "VR's Surprising Benefits",
      subText:
        "Sample text. Click to select the text box. Click again or double click to start editing the text.",
      box: [
        {
          number: "1",
          text: "To reap the benefits of virtual reality in education, it is important for students to use VR equipment safely. VR users often spin around or stride blindly, ignoring their physical surroundings. A misstep could lead to injury. Educators should ensure their classrooms’ physical environments.",
        },
        {
          number: "2",
          text: "The benefits of virtual reality in education are embraced by many educators, but some are still reluctant to use it in their classrooms. Reasons range from high costs to pushback from school administrators. Others see the value of both VR and AR as entertainment, but not as effective teaching tools in the classroom.",
        },
        {
          number: "3",
          text: "Before looking into some of the benefits of virtual reality in education, let’s define what virtual reality is and how it differs from augmented reality. AR is used on a smart device to project a layer of educational text and lesson-appropriate content on top of a user’s actual surroundings",
        },
      ],
    },
    Technology: {
      smallTitle: "TECHNOLOGY",
      title: "Virtual Reality",
      subText:
        "There are only some symptoms such as dizziness, depression, and collapse that appear while the VR experience. The technology is still new and requires investigation and research.",
      name: "Freepik",
      boxText: [
        {
          icon: "",
          text: "Sample text. Click to select the text box. Click again or double click to start editing the text. Duis aute irure dolor.",
        },
        {
          icon: "",
          text: "Sample text. Click to select the text box. Click again or double click to start editing the text. Duis aute irure dolor.",
        },
      ],
    },
    Row_3: {
      title: "VR's Surprising Benefitsh",
      subText:
        "Sample text. Click to select the text box. Click again or double click to start editing the text.",
      box: [
        {
          title: "MENTAL HEALTH",
          subText:
            "Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident.",
          button: "Read More",
        },
        {
          title: "REALISTIC EXPERIENCE",
          subText:
            "Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident.",
          button: "Read More",
        },
        {
          title: "RELAX",
          subText:
            "Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident.",
          button: "Read More",
        },
      ],
    },
  },
  reducers: {
    setColumn: (state, action) => {
      state.column.title = action.payload.title;
    },
    setTechnology: (state, action) => {
      state.Technology.smallTitle = action.payload.smallTitle;
      state.Technology.title = action.payload.title;
      state.Technology.subText = action.payload.subText;
      state.Technology.name = action.payload.name;
      state.Technology.boxText = action.payload.boxText;
    },
    setRow_3: (state, action) => {
      console.log("action.payload", action.payload);
      state.title = action.payload.title;
      state.subText = action.payload.subText;
      state.box = action.payload.box;
    },
  },
});

export const { setColumn, setRow_3, setTechnology } = FEData.actions;

export default FEData.reducer;
