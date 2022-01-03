import { createStore } from "redux";

const ADD ="ADD";
const DELETE = "DELETE";
const localStorageTodo = JSON.parse(localStorage.getItem("todo"));
const currentState = localStorageTodo ? localStorageTodo : [];

const addToDo = text => {
    return {
        type: ADD,
        text
    };
};


const deleteToDo = id => {
    return {
        type: DELETE,
        id: parseInt(id)
    };
};

const reducer = (state = currentState, action) => {
    switch(action.type){
        case ADD:
            const newTodoObject = {text: action.text, id: Date.now(), ...state};
            const addTodoResult = [newTodoObject, ...state];
            localStorage.setItem("todo", JSON.stringify(addTodoResult));
            return addTodoResult;
        case DELETE:
            const deleteTodoResult = state.filter(toDo => toDo.id !== action.id);    
            localStorage.setItem("todo", JSON.stringify(deleteTodoResult));
            return deleteTodoResult
        default:
            return state;
    };
};

const store = createStore(reducer);

export const actionCreators = {
    addToDo,
    deleteToDo
}

export default store;