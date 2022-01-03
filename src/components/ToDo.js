import React from "react"
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "../store";
import storage from "redux-persist/lib/storage";

const ToDo = ({text, onBtnClick, id}) => {
    return(
        <li>
            <Link id={id}text={text} to={`/${id}`}>
                {text} 
            </Link>
            &nbsp; &nbsp;
            <button onClick={onBtnClick}>DEL</button>
        </li>
    ); 
}

const mapDispatchToProps = (dispatch, ownPorps) => {
    return {
        onBtnClick: () => dispatch(actionCreators.deleteToDo(ownPorps.id))
    }
}


export default connect(null, mapDispatchToProps) (ToDo);