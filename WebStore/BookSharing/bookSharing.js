fetch('book.json')
    .then(response => response.json())
    .then(data => {

        const bookList = document.getElementById('book-list');

        data.books.forEach(book => {
            const bookItem = document.createElement('div');


            bookItem.innerHTML = `
        <div class="card border-info mb-3" style="max-width: 18rem;">
          <div class="card-header"><h4>${book.title}</h4></div>
          <div class="card-body">
            <h5 class="card-title">${book.author}</h5>
            <h4 class="card-title">${book.genre}</h4>
            <img src="${book.image}" class="card-img-top" height="300px" alt="${book.title}">
            <p class="card-text">${book.description}</p>
            
          </div>
          
        </div>
      `;


            bookList.appendChild(bookItem);
        });
    })