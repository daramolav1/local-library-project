function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((account1, account2) =>
    account1.name.last.toLowerCase() > account2.name.last.toLowerCase() ? 1 : -1
  );
}

function getTotalNumberOfBorrows(account, books) {
  let count = 0;
  const { id } = account;

  books.forEach((book) => {
    for (let i = 0; i < book.borrows.length; i++) {
      if (book.borrows[i].id === id) count++;
    }
  });

  return count;
}

function getBooksPossessedByAccount(account, books, authors) {
  return books
    .filter((book) => {
      const currentBookBorrowed = book.borrows[0];
      return (
        !currentBookBorrowed.returned && currentBookBorrowed.id === account.id
      );
    })
    .map((book) => {
      const author = authors.find((item) => item.id === book.authorId);
      return { ...book, author };
    });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
