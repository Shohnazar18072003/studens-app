import React, { Component } from "react";
import { Alert, Button } from "react-bootstrap";
import like from "../../assets/images/heart.png"

export class StudentCard extends Component {
  render() {
    const colors = {
      N1: "bg-danger",
      N32: "bg-warning",
      N24: "bg-secondary",
      other: "bg-primary",
    }; 
    const {
      firstname,
      lastname,
      age,
      number,
      email,
      isFavorite,
      done,
      id,
      doneTodo,
      deleteTodo,
      editTodo,
    } = this.props;
    return (
      <Alert
        variant="primary"
        className="d-flex justify-content-between align-items-center"
      >
        <div>
          <h4>
            {firstname} {lastname}
          </h4>
         Phone number : + <span>{number}</span> <br />
         Age :  <span>{age}</span> years old <br /> 
         Email :  <span>{email}</span> <br />
         Group : <span className={`ms-2 badge ${colors[isFavorite]}`} variant='colors[isFavorite]'>{isFavorite}</span>
        </div>
        <div className="d-flex">
          <Button
            onClick={() => editTodo(id)}
            className="me-3"
            variant="primary"
          >
            
            Edit
          </Button>
          {done ? (
            <div className="d-flex justify-content-between align-items-center">
              <Button onClick={() => deleteTodo(id)} variant="danger">
              Delete
            </Button>
            <img className="ms-2 w-100 h-100" src={like} alt="" />
            </div>
          ) : (
            <Button onClick={() => doneTodo(id)} variant="success">
              Favorite
            </Button>
          )}
        </div>
      </Alert>
    );
  }
}

export default StudentCard;
