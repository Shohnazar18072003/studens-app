import React, { Component } from "react";
import { Form, InputGroup } from "react-bootstrap";

export class StudentHeader extends Component {
  constructor(props) { 
    super(props);
    this.state = {};
  }
  render() {
    const { handleSearch, searchRef, handleImportance, isFavorite, handleSorted, sorted } =
      this.props;
   
    return (
      <InputGroup className="my-3 ">
        <Form.Control
          onChange={handleSearch}
          ref={searchRef}
          placeholder="Searching contact..."
        />
        <InputGroup.Text>
          <Form.Select onChange={handleImportance} value={isFavorite}>
            <option value="all">All</option>
            <option value="N1">N1</option>
            <option value="N3">N3</option>
            <option value="N15">N15</option>
            <option value="N24">N24</option>
            <option value="N25">N25</option>
            <option value="N32">N32</option>
            <option value="N11">N11</option>
          </Form.Select>
        </InputGroup.Text>
        <InputGroup.Text>
          <Form.Select onChange={handleSorted} value={sorted}>
            <option value="sort">Sort</option>
            <option value="az">A-Z</option>
            <option value="za">Z-A</option>

          </Form.Select>
        </InputGroup.Text>
      </InputGroup>
    );
  }
}

export default StudentHeader;
