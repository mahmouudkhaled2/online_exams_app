import { createSlice } from "@reduxjs/toolkit";
import { Question } from "../../customs/customTypes";
import { setAnswersAfterCheck } from "../../Utilitize";

interface QuizState {
  correctAnswers: Question[], 
  IncorrectAnswers: Question[], 
}

const initialState: QuizState = {
  correctAnswers: [],
  IncorrectAnswers: [],
};


const quizSlice = createSlice({
  name: "quiz",
  initialState,

  reducers: {

    setCorrectAnswer: (state, action) => {
      setAnswersAfterCheck(state.correctAnswers , action.payload);
    },


    setInCorrectAnswer: (state, action) => {
      setAnswersAfterCheck(state.IncorrectAnswers , action.payload);
    },

    removeLastAnswer : (state, action) => {

      
      const findQuestionIndexAtCorrect = state.correctAnswers.findIndex((question) => question._id === action.payload);

      console.log("The QS ID: ", findQuestionIndexAtCorrect);

      if (findQuestionIndexAtCorrect !== -1) {
        state.correctAnswers.pop()
      } 
      else {
        state.IncorrectAnswers.pop()
      }
    }

  },
});

export const { setCorrectAnswer, setInCorrectAnswer, removeLastAnswer } = quizSlice.actions;
export default quizSlice.reducer;
