import React, { Component, createRef } from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import { toast } from "react-toastify";
import { v4 } from "uuid";

import StudentCard from "../components/StudentCard/StudentCard";
import StudentForm from "../components/StudentForm/StudentForm";
import StudentHeader from "../components/StudentHeader/StudentHeader";
import Footer from "../components/footer/Footer";

export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.searchRef = createRef();
    this.nameRef = createRef();
    this.state = {
      activeTab: "all",
      todos: JSON.parse(localStorage.getItem("todos")) || [
        {
          firstname: "John",
          lastname: "Doe",
          age : 57 ,
          number: "1154154215421",
          email : "johndoe@gmail.com",
          category: "Family",
          isFavorite: "N32",
          id: 0,
        },
        {
          firstname: "Mary",
          lastname: "Adele",
          age : 99 ,
          number: "18545745245445",
          email : "maryadele@gmail.com",
          category: "Family",
          isFavorite: "N32",
          id: 0,
        },
        {
          firstname: "Alexander",
          lastname: "Smith",
          age : 88,
          number: "5185115615156",
          email : "alexander@gmail.com",
          category: "Friends",
          isFavorite: "N32",
          id: 0,
        },
        {
          firstname: "Stefan",
          lastname: "Eddie",
          age : 77 ,
          number: "6416341653415",
          email : "stefan@gmail.com",
          category: "Other",
          isFavorite: "N32",
          id: 0,
        },
      ],
      todo: {
        firstname: "",
        lastname: "",
        age: "",
        number: "",
        email: "",
        isFavorite: "other",
      },
      selected: null,
      search: "",
      isFavorite: "all",
      sorted: "Sort",
      validated: false,
    };
  }
  render() {
    const {
      activeTab,
      todos,
      todo,
      selected,
      search,
      isFavorite,
      validated,
      sorted,
    } = this.state; 
    const handleSearch = () => {
      this.setState({
        search: this.searchRef.current.value.trim().toLowerCase(),
      });
    };
    const changeTab = (key) => {
      this.setState({ activeTab: key });
    };
    const handleTodo = (e) => {
      this.setState({ todo: { ...todo, [e.target.id]: e.target.value } });
    };
    const submit = (e) => {
      e.preventDefault();
      if (e.target.checkValidity()) {
        let newTodos;
        let newTodo = { ...todo, id: v4() };
        if (selected === null) {
          newTodos = [...todos, newTodo];
          toast.success("Added successfully", { autoClose: 1000 });
        } else {
          newTodos = todos.map((todo) => {
            if (todo.id === selected) {
              return newTodo;
            }
            return todo;
          });
          toast.info("Edited successfully");
        }
        localStorage.setItem("todos", JSON.stringify(newTodos));
        this.nameRef.current.focus();
        this.setState({
          todos: newTodos,
          todo: {
            firstname: "",
            lastname: "",
            age : "",
            number: "",
            email : "",
            isFavorite: "Other",
            done: false,
          },
          selected: null,
          validated: false,
        });
      } else {
        this.setState({ validated: true });
      }
    };
    const doneTodo = (id) => {
      let newTodos = todos.map((todo) => {
        if (todo.id === id) {
          todo.done = true;
        }
        return todo;
      });
      this.setState({ todos: newTodos });
      localStorage.setItem("todos", JSON.stringify(newTodos));
    };
    const deleteTodo = (id) => {
      let newTodos = todos.filter((todo) => todo.id !== id);
      this.setState({ todos: newTodos });
      localStorage.setItem("todos", JSON.stringify(newTodos));
    };
    const editTodo = (id) => {
      const todo = todos.find((todo) => todo.id === id);
      this.setState({ todo, selected: id });
    };
    const handleImportance = (e) => {
      this.setState({ isFavorite: e.target.value });
    };
    let allTodos = todos.filter((todo) =>
      todo.lastname.toLowerCase().includes(search)
    );

    const handleSorted = (e) => {
      this.setState({ sorted: e.target.value });
      console.log(e.target.value);
    };

    if (isFavorite !== "all") {
      allTodos = allTodos.filter((todo) => todo.isFavorite === isFavorite);
    }
    if (sorted !== "sort") {
      if (sorted === "az") {
        allTodos = allTodos.sort((a, b) =>
          a.firstname > b.firstname ? 1 : -1
        );
      } else if (sorted === "za") {
        allTodos = allTodos.sort((a, b) =>
          a.firstname > b.firstname ? -1 : 1
        );
      }
    }

    const doneTodos = allTodos.filter((todo) => todo.done);
    return (
      <Container>
        <div className="row">
          <div className="col-8">
            <StudentHeader
              importance={isFavorite}
              handleImportance={handleImportance}
              handleSorted={handleSorted}
              searchRef={this.searchRef}
              handleSearch={handleSearch}
            />
            <Tabs
              activeKey={activeTab}
              onSelect={changeTab}
              className="mb-3"
              variant="pills"
              fill
            >
              <Tab eventKey="all" title={`All (${allTodos.length})`}>
                {allTodos.map((todo, i) => (
                  <StudentCard
                    editTodo={editTodo}
                    deleteTodo={deleteTodo}
                    doneTodo={doneTodo}
                    key={i}
                    {...todo}
                  />
                ))}
              </Tab>
              <Tab eventKey="done" title={`Favorite (${doneTodos.length})`}>
                {doneTodos.map((todo, i) => (
                  <StudentCard
                    editTodo={editTodo}
                    deleteTodo={deleteTodo}
                    key={i}
                    {...todo}
                  />
                ))}
              </Tab>
            </Tabs>
          </div>
          <StudentForm
            validated={validated}
            nameRef={this.nameRef}
            selected={selected}
            todo={todo}
            handleTodo={handleTodo}
            submit={submit}
            className="col-4"
          />
        </div>
        <Footer />
      </Container>
    );
  }
}

export default HomePage;
