import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface QuestionState {
    allQuestions: string[] | [],
    activeQuestion: number,
}

const initialState: QuestionState = {
    allQuestions: [],
    activeQuestion: 0,
}

export const getAllQuestions = createAsyncThunk('quiz/getAllQuestions', async function (payload : {examId: string, token: string | undefined}) {
    return axios.get(`https://exam.elevateegy.com/api/v1/questions?exam=${payload.examId}`, {headers: {token: payload.token}})
    .then(res => res.data)
    .catch(error => error);
})

const questionsSlice = createSlice({

    initialState,
    
    name: 'questions',

    reducers: {
        nextQuestion: (state) => {
            state.activeQuestion += 1
        },

        prevQuestion: (state) => {
            state.activeQuestion -= 1
        },
    },

    extraReducers: function (builder) {

        builder.addCase(getAllQuestions.fulfilled, function (state, action) {
            if (action.payload.message === "success") 
            state.allQuestions = action.payload.questions
        });

        builder.addCase(getAllQuestions.rejected, function (state, action) {
            // console.log("Payload From Rejected ==> ", action.payload)
        });

        builder.addCase(getAllQuestions.pending, function (state, action) {
            // console.log("Payload From Pending ==> ", action)
        });
    }
})

export const {nextQuestion, prevQuestion} = questionsSlice.actions

export default questionsSlice.reducer