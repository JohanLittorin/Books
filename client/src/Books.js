import React, { useState } from "react";
import { useQuery, useMutation, gql } from "@apollo/client";

const QUERY_ALL_BOOKS = gql`
  query GetAllBooks {
    books {
      id
      title
      author
      release
    }
  }
`;

const CREATE_BOOK_MUTATION = gql`
  mutation CreateBook($input: CreateBookInput!) {
    createBook(input: $input) {
      id
      title
      author
      release
    }
  }
`;

const UPDATE_BOOK_MUTATION = gql`
  mutation UpdateBook($input: UpdateBookInput!) {
    updateBook(input: $input) {
      id
      newTitle
    }
  }
`;

const DELETE_BOOK_MUTATION = gql`
  mutation DeleteBook($input: ID!) {
    deleteBook(input: $input) {
      id
    }
  }
`;

function Books() {
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [release, setRelease] = useState("");
  const { data, loading, refetch } = useQuery(QUERY_ALL_BOOKS);
  const [createBook] = useMutation(CREATE_BOOK_MUTATION);
  const [updateBook] = useMutation(UPDATE_BOOK_MUTATION);
  const [deleteBook] = useMutation(DELETE_BOOK_MUTATION);

  return (
    <div>
      <div>
        {/* <input
        type="number"
        placeholder="id"
        onChange={(e) => {
          setId(e.target.value);
        }}
      /> */}
        <input
          type="text"
          placeholder="title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="author"
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="release"
          onChange={(e) => {
            setRelease(e.target.value);
          }}
        />
        <button
          onClick={() => {
            createBook({
              variables: {
                input: {
                  id,
                  title,
                  author,
                  release,
                },
              },
            });
          }}
        >
          Save
        </button>
      </div>
      <div>
        <input
          type="number"
          placeholder="id"
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        {/* <input
          type="text"
          placeholder="author"
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="release"
          onChange={(e) => {
            setRelease(e.target.value);
          }}
        /> */}
        <button
          onClick={() => {
            updateBook({
              variables: {
                input: {
                  id,
                  title,
                },
              },
            });
          }}
        >
          Update
        </button>
      </div>
      <div>
        <input
          type="number"
          placeholder="id"
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <button
          onClick={() => {
            deleteBook({
              variables: {
                input: {
                  id,
                },
              },
            });
          }}
        >
          Save
        </button>
      </div>
      <div>
        {data &&
          data.books.map((book) => {
            return (
              <div key={book.id}>
                <h6>{book.id}</h6>
                <h1>{book.title}</h1>
                <h3>{book.author}</h3>
                <h3>{book.release}</h3>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Books;
