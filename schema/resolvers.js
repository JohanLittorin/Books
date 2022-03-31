const { BookList } = require("../BookList");
const _ = require("lodash");

const resolvers = {
  Query: {
    books: () => {
      return BookList;
    },
    book: (parent, args) => {
      const id = args.id;
      const book = _find(BookList, { id: Number(id) });
      return book;
    },
  },

  Mutation: {
    createBook: (parent, args) => {
      const book = args.input;
      const lastId = BookList[BookList.length - 1].id;
      book.id = lastId + 1;
      BookList.push(book);
      return book;
    },
    updateBook: (parent, args) => {
      const { id, newTitle } = args.input;
      let updatedBook;
      // BookList.forEach((book) => {
      if (book.id === Number(id)) {
        book.title = newTitle;
        updatedBook = book;
        return updatedBook;
      }

      // const id = args.input.id;
      // // let updatedBook;
      // let newBookName = args.input.newTitle;
      // BookList.forEach((book) => {
      //   if (book.id === id) {
      //     book.title = newBookName;
      //   }
      // });
      // return newBookName;
    },
    deleteBook: (parent, args) => {
      const id = args.id;
      _.remove(BookList, (book) => {
        book.id === Number(id);
        return null;
      });
    },
  },
};
module.exports = { resolvers };
