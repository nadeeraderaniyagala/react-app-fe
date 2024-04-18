import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './navbar';

const uri = `${process.env.REACT_APP_API_URI}/book`;

export default function CreateTask() {
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  const [title, setOnChangeTitle] = useState(``);
  const [author, setOnChangeAuthor] = useState(``);
  const [description, setOnChangeDecription] = useState(``);

  useEffect(() => {
    axios
      .get(`${uri}/${id}`)
      .then((response) => {
        setOnChangeTitle(response.data.title);
        setOnChangeAuthor(response.data.author);
        setOnChangeDecription(response.data.description);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const onSubmit = (e) => {
    e.preventDefault();
    const bookvar =  { title: title, author: author, description: description };
    console.log(bookvar);

    console.log(`${uri}/update/${id}`);
    // console.log(e)

    axios
      .post(`${uri}/update/${id}`, bookvar)
      .then((res) => {
        window.location = '/';
      });
  };

  return (
    <div class="CreateBook">
    <div class="container">
      <div class="row">
        <div class="col-md-8 m-auto">
          <br /><a class="btn btn-info float-left" href="/">Show BooK List</a>
        </div>
        <div class="col-md-8 m-auto">
          <h1 class="display-4 text-center">Edit Book</h1>
          <p class="lead text-center">Edit existing book</p>
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
