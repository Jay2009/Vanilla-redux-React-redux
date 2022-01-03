import React from "react"
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { actionCreators } from "../store";


const Detail = ({toDo,onBtnClick}) => {
    const params = useParams();
        //console.log(params.id);
        //console.log(toDo);
    const toDoText = toDo.find(toDo => toDo.id === parseInt(params.id));
        console.log(toDoText);
        
        const clock = JSON.stringify(new Date(parseInt(params.id)));
        const date = clock.substring(1,11);
    return (
        <>  
            <h1>{toDoText.text}</h1>
            <h5>Created at : {date} </h5>
            <Link to={`/`}>
            <button onClick={onBtnClick}>Delete</button>
            </Link>
        </>
        );
}

const mapDispatchToProps = (dispatch, ownPorps) => {
    console.log(ownPorps.match.params.id);
    return {
        
        onBtnClick: () => dispatch(actionCreators.deleteToDo(ownPorps.match.params.id))
    }
}

const mapStateToProps = (state) => {
    
        return {  toDo: state  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
