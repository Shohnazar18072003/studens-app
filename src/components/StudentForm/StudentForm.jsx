import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

export class StudentForm extends Component {
  render() {
    const { todo, handleTodo, submit, selected, nameRef, validated } =
      this.props;
    return ( 
      <Form
        validated={validated}
        noValidate
        onSubmit={submit}
        className="col-3 position-fixed top-0 end-0 me-5 mt-5 m-auto p-3 bg-info bg-opacity-10 border border-info rounded mt-3"
      >
        {/* FIRSTNAME */}

        <Form.Group className="mb-3" controlId="firstname">
          <Form.Label>FirstName*</Form.Label>
          <Form.Control placeholder="Enter your firstname"
            ref={nameRef}
            onChange={handleTodo}
            value={todo.firstname}
            required
            type="text"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please fill !
          </Form.Control.Feedback>
        </Form.Group>

        {/* LASTNAME */}

        <Form.Group className="mb-3" controlId="lastname">
          <Form.Label>LastName*</Form.Label>
          <Form.Control placeholder="Enter your lastname"
            ref={nameRef}
            onChange={handleTodo}
            value={todo.lastname}
            required
            type="text"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please fill !
          </Form.Control.Feedback>
        </Form.Group>

        {/* AGE */}

        <Form.Group className="mb-3" controlId="age">
          <Form.Label>Age*</Form.Label>
          <Form.Control placeholder="Enter your age"
            ref={nameRef}
            onChange={handleTodo}
            value={todo.age}
            required
            type="text"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please fill !
          </Form.Control.Feedback>
        </Form.Group>

        {/* PHONE NUMBER */}

        <Form.Group className="mb-3" controlId="number">
          <Form.Label>Phone number*</Form.Label>
          <Form.Control placeholder="Enter your phone number"
            onChange={handleTodo}
            value={todo.number}
            required
            type="number"
          />
        </Form.Group>

        {/* EMAIL */}

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email*</Form.Label>
          <Form.Control placeholder="Enter your email"
            ref={nameRef}
            onChange={handleTodo}
            value={todo.email}
            required
            type="email"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please fill !
          </Form.Control.Feedback>
        </Form.Group>

        {/* GROUPS */}

        <Form.Group className="mb-3" controlId="isFavorite">
          <Form.Label>Groups*</Form.Label>
          <Form.Select onChange={handleTodo} value={todo.isFavorite}>
            <option value="Other">Other</option>
            <option value="N1">N1</option>
            <option value="N3">N3</option>
            <option value="N15">N15</option>
            <option value="N24">N24</option>
            <option value="N25">N25</option>
            <option value="N32">N32</option>
            <option value="N11">N11</option>
          </Form.Select>
        </Form.Group>
        <Button type="submit" className="w-100">
          {selected === null ? "Add" : "Save"} Student
        </Button>
      </Form>
    );
  }
}

export default StudentForm;
