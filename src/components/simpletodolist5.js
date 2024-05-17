import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './navbar';
import { Link } from 'react-router-dom';

const uri = `${process.env.REACT_APP_API_URI}/book`;

const Book = (props) => (
  // <tr className="d-flex">
  //   <td className="col-10">{props.todo}</td>
  //   <td className="col-2" style={{ textAlign: 'right' }}>
  //     <button
  //       onClick={() => {
  //         props.editBook(props.keyt);
  //       }}
  //     >
  //       Edit
  //     </button>
  //     {'  '}
  //     <button
  //       onClick={() => {
  //         props.deleteBook(props.keyt);
  //       }}
  //     >
  //       delete
  //     </button>
  //   </td>
  // </tr>

  <div class="card-container">
    <img
      src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
      alt="Books"
      height="200"
    />
    <div class="desc">
      <h2>
        {/* <a href="/show-book/123id">{props.title}</a> */}
        <Link to="/create" className="nav-link">
          {props.title}
        </Link>
      </h2>
      <h3>{props.author}</h3>
      <p>{props.description}</p>

      <input
        type="button"
        value="Delete"
        onClick={() => {
          props.deleteBook(props.keyt);
        }}
        style={{ backgroundColor: 'red', marginRight: '5px' }}
      />

      <input
        type="button"
        value="Edit"
        onClick={() => {
          props.editBook(props.keyt);
        }}
        style={{ backgroundColor: 'blue' }}
      />
    </div>
  </div>
);

export default function BookList() {
  const [books, setBooksList] = useState([]);
  useEffect(() => {
    axios
      .get(uri)
      .then((response) => {
        setBooksList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteBook = (id) => {
    axios
      .delete(`${uri}/delete/${id}`)
      .then((response) => {
        console.log(response.data);
      });

    setBooksList(books.filter((el) => el._id !== id));
  };

  // const editBook = (id) => {
  //   axios
  //   .post(`${uri}/update/${id}`)
  //   .then((response) => {
  //     console.log(response.data);
  //   });

  // setBooksList(books.filter((el) => el._id !== id));
  // };  
  const editBook = (id) => {
    window.location = '/update/' + id;
  };

  return (
    // <div>
    //   <Navbar />

    //   <h3>Logged Books</h3>
    //   <table className="table">
    //     <thead className="thead-light">
    //       <tr>
    //         <th>Activity</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {books.map((todo) => {
    //         return (
    //           <Book
    //             todo={todo.activity}
    //             key={todo._id}
    //             keyt={todo._id}
    //             deleteBook={deleteBook}
    //             editBook={editBook}
    //           />
    //         );
    //       })}
    //     </tbody>
    //   </table>
    // </div>

    <div className='BookList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Books List</h2>
          </div>

          <div className='col-md-11'>
            <Link
              to='/create'
              className='btn btn-outline-warning float-right'
            >
              + Add New Book
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div class="list">
          {books.map((book) => {
            return (
              <Book
                title={book.title}
                author={book.author}
                description={book.description}
                key={book._id}
                keyt={book._id}
                deleteBook={deleteBook}
                editBook={editBook}
              />
            );
          })}
        </div>
      </div>
    </div>
  );

}
