document.addEventListener('DOMContentLoaded', () => {
    // Find buttons by their id
    const createBtn = document.getElementById("createBtn");
    const readBtn = document.getElementById("readBtn");
    const updateBtn = document.getElementById("updateBtn");
    const deleteBtn = document.getElementById("deleteBtn");
  
    // Function to create a new book
    const createBook = () => {
      fetch('/api/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: 'New Book', description: 'Book Description', published: false }),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Book created:', data);
      })
      .catch(error => {
        console.error('Error creating book:', error);
      });
    };
  
    // Function to read all books
    const readBooks = () => {
      fetch('/api/books')
      .then(response => response.json())
      .then(data => {
        console.log('Books:', data);
      })
      .catch(error => {
        console.error('Error reading books:', error);
      });
    };
  
    // Function to update a book
    const updateBook = () => {
      // Replace bookId with the actual ID of the book you want to update
      const bookId = '65b185b8ddf07a0014b97b40';
      
      fetch(`/api/books/${bookId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: 'Updated Book Title', description: 'Updated Book Description', published: true }),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Book updated:', data);
      })
      .catch(error => {
        console.error('Error updating book:', error);
      });
    };
  
    // Function to delete a book
    const deleteBook = () => {
      // Replace bookId with the actual ID of the book you want to delete
      const bookId = '65b185b8ddf07a0014b97b40';
  
      fetch(`/api/books/${bookId}`, {
        method: 'DELETE',
      })
      .then(response => response.json())
      .then(data => {
        console.log('Book deleted:', data);
      })
      .catch(error => {
        console.error('Error deleting book:', error);
      });
    };
  
    // Add event listeners to buttons
    createBtn.addEventListener("click", createBook);
    readBtn.addEventListener("click", readBooks);
    updateBtn.addEventListener("click", updateBook);
    deleteBtn.addEventListener("click", deleteBook);
  });
  