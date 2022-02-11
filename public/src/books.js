function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  const checkedOutBooks = [];
  const returnedBooks = [];

  books.forEach((book) => {
    book.borrows[0].returned
      ? returnedBooks.push(book)
      : checkedOutBooks.push(book);
  });

  return [checkedOutBooks, returnedBooks];
}

function getBorrowersForBook(book, accounts) {
  let arr = [];

  accounts.forEach((account) => {
    for (let i = 0; i < book.borrows.length; i++) {
      if (account.id === book.borrows[i].id) {
        account.returned = book.borrows[i].returned;
        arr.push(account);
      }
    }
  });

  return arr.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
