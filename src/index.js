import {createStore} from "redux";
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");
// we make a fixed variable not to make typo when coding
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

// we put only actions here. 
const addToDo = text => {
    return {
        type: ADD_TODO,
        text
    };
}

const deleteToDo = id => {
    return {
        type: DELETE_TODO,
        id
    };
}
// reducer is a nessasery when using redux, only in reducer function we change data. and the return value will be a state or action in the function and state should not be mutated . so we use spread function
const reducer = (state = [], action) => {
    
    switch (action.type){
        case ADD_TODO:
            return [ {text: action.text, id: Date.now() }, ...state];
        case DELETE_TODO:
            return state.filter(toDo => toDo.id !== action.id); // currently clicked element is not same as all the elements in the array  then create a new array without the clicked element.
        default:
            return state;
    }
};
// this is where we store the data
const store = createStore(reducer);

// If wants to listen the change we use subscribe.
store.subscribe(()=> console.log(store.getState()));

// this is where we call the action using dispatch.
const dispatchAddToDo = text => {
    store.dispatch(addToDo(text));
};

const dispatchDeleteToDo = e => {
    const id= parseInt(e.target.parentNode.id);
    store.dispatch(deleteToDo(id));
};


const paintToDos = () => {
    const toDos = store.getState();
    ul.innerHTML="";
    toDos.forEach(toDo => {
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.innerText="DEL";
        btn.addEventListener("click",dispatchDeleteToDo)
        li.id= toDo.id;
        li.innerText=toDo.text;
        li.appendChild(btn);
        ul.appendChild(li);
    });
}
// If wants to listen the change we use subscribe.
store.subscribe(paintToDos);



const onSubmit = e => {
    e.preventDefault();
    const toDo = input.value;
    input.value = "";
    dispatchAddToDo(toDo);
};

form.addEventListener("submit", onSubmit);