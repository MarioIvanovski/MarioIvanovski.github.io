let book = {
    title: '',
    author: '',
    readingStatus: false,

    alreadyRead: function () {
        if (this.readingStatus) {
            console.log(`Already read '${this.title}' by ${this.author}.`);
          } else {
            console.log(`You still need to read '${this.title}' by ${this.author}.`);
          }
        }
      };
    book.title = prompt("Enter the book's title:");
    book.author = prompt("Enter the book's author:");
    book.readingStatus = confirm("Have you already read this book? Click OK for Yes, Cancel for No.");

    book.alreadyRead();