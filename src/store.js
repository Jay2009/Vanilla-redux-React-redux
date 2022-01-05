import { createStore } from "redux";
import {configureStore, createAction, createReducer, createSlice } from "@reduxjs/toolkit"


const localStorageTodo = JSON.parse(localStorage.getItem("todo"));
const currentState = localStorageTodo ? localStorageTodo : [];

// const addToDo = createAction ("ADD");
// const deleteToDo = createAction("DELETE");

// pure redux
/*const reducer = (state = currentState, action) => {
    switch(action.type){
        case addToDo.type:
            const newTodoObject = {text: action.payload, id: Date.now(), ...state};
            const addTodoResult = [newTodoObject, ...state];
            localStorage.setItem("todo", JSON.stringify(addTodoResult));
            return addTodoResult;
        case deleteToDo.type:
            const deleteTodoResult = state.filter(toDo => toDo.id !== action.payload);    
            localStorage.setItem("todo", JSON.stringify(deleteTodoResult));
            return deleteTodoResult
        default:
            return state;
    };
};
*/

// redux toolkit
/*
const reducer = createReducer ([], {
    [addToDo] : (state, action) => {
        state.push({text: action.payload, id: Date.now()});
    },
    [deleteToDo] : (state, action) =>
        state.filter(toDo => toDo.id !== action.payload)
})
*/


// createSlice

const toDos = createSlice({
    name: "toDosReducer",
    initialState: [],
    reducers: {
    add: (state, action) => {
        state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) => state.filter(toDo => toDo.id !== action.payload)
}
});

const store = configureStore({reducer: toDos.reducer});

export const  {add,remove} = toDos.actions;

export default store;