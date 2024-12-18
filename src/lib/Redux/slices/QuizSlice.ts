import { createSlice } from "@reduxjs/toolkit";

type QuizState = {
  quizResults: {
    userAnswers: string[] | [];
    correct: number;
    incorrect: number;
  };

  activeQuestion: number;
};

const initialState: QuizState = {
  quizResults: { userAnswers: ["d", "dd", "dsd"], correct: 0, incorrect: 0 },

  activeQuestion: 0,
};




const quizSlice = createSlice({
  name: "quiz",
  initialState,

  reducers: {
    // setSelectedAnswer: (state, {payload} : {payload: string}) => {
    //   console.log(payload);
      
    //   // state.quizResults.userAnswers.push(payload);
    //   if (!state.quizResults.userAnswers.includes(payload)) {
    //     console.log("La Mish Mawgood");
    //     state.quizResults.userAnswers.push(payload)
        
    //   }else {
    //     console.log("Aywa Mawgood")
    //     console.log("MY Results", state.quizResults.userAnswers);
    //   }

      
    // } ,

    correctAnswers: (state) => {
      state.quizResults.correct += 1;
    },

    InCorrectAnswers: (state) => {
      state.quizResults.incorrect += 1;
    },

    incrementActiveQuestion: (state) => {
      state.activeQuestion += 1;
    },

    decrementActiveQuestion: (state) => {
      state.activeQuestion -= 1;
    },
  },
});

export const {
  correctAnswers,
  InCorrectAnswers,
  incrementActiveQuestion,
  decrementActiveQuestion,
  // setSelectedAnswer,
} = quizSlice.actions;
export default quizSlice.reducer;
