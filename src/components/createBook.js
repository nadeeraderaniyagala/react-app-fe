import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './navbar';
import { Link } from 'react-router-dom';


const uri = `${process.env.REACT_APP_API_URI}/book`;

export default function CreateTask() {
  const [title, setOnChangeTitle] = useState(``);
  const [author, setOnChangeAuthor] = useState(``);
  const [description, setOnChangeDecription] = useState(``);

  const onSubmit = (e) => {
    e.preventDefault();
    let book = { title: title, author: author, description: description };

    axios
      .post(`${uri}/add`, book)
      .then((res) => {
        window.location = '/';
      });
  };

  return (
    // <div>
    //   <Navbar />

    //   <h3>Create New Task</h3>
    //   <form onSubmit={onSubmit}>
    //     <div className="form-group">
    //       <label>New Task: </label>
    //       <input
    //         type="text"
    //         required
    //         className="form-control"
    //         name="testactivity"
    //         value={activity}
    //         onChange={(e) => setOnChangeActivity(e.target.value)}
    //       />
    //     </div>
    //     <br></br>

    //     <div className="form-group">
    //       <input
    //         type="submit"
    //         value="Create Activity Log"
    //         className="btn btn-primary"
    //       />
    //     </div>
    //   </form>
    // </div>

    <div class="CreateBook">
      <div class="container">
        <div class="row">
          <div class="col-md-8 m-auto">
            <br /><a class="btn btn-info float-left" href="/">Show BooK List</a>
          </div>
          <div class="col-md-8 m-auto">
            <h1 class="display-4 text-center">Add Book</h1>
            <p class="lead text-center">Create new book</p>
            <form novalidate="" onSubmit={onSubmit}>
              <div class="form-group">
                <input
                  type="text"
                  placeholder="Title of the Book"
                  name="title"
                  class="form-control"
                  value={title}
                  spellcheck="false"
                  data-ms-editor="true"
                  onChange={(e) => setOnChangeTitle(e.target.value)}
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  placeholder="Author"
                  name="author"
                  class="form-control"
                  value={author}
                  spellcheck="false"
                  data-ms-editor="true"
                  onChange={(e) => setOnChangeAuthor(e.target.value)}
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  placeholder="Describe this book"
                  name="description"
                  class="form-control"
                  value={description}
                  spellcheck="false"
                  data-ms-editor="true"
                  onChange={(e) => setOnChangeDecription(e.target.value)}
                />
              </div>
              <input type="submit" class="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>

  );


}
