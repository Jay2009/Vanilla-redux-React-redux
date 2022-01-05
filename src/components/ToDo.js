import React from "react"
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { remove } from "../store";


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
        onBtnClick: () => dispatch(remove(ownPorps.id))
    }
}


export default connect(null, mapDispatchToProps) (ToDo);