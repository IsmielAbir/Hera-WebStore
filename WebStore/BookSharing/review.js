fetch('review.json')
    .then(res => res.json())
    .then(data => {
        const bookReview = document.getElementById('review');
        data.reviewRating.forEach(book => {
            const reviewItem = document.createElement('div');

            let reviewHTML = `
                <div class="card border-info mb-3" style="max-width: 18rem;">
                    <div class="card-header"><h4>${book.title}</h4></div>
                    <div class="card-body">
                        <h5 class="card-title">${book.author}</h5>
                        <img src="${book.image}" class="card-img-top" height="300px" alt="${book.title}">
                        <p class="card-text">${book.description}</p>
                        <ul class="list-group list-group-flush">
            `;

            book.reviews.forEach(review => {
                reviewHTML += `
                    <li class="list-group-item">
                    <p>Reviewer</p>
                        <h5>Name: ${review.username}</h5>
                        <p>Rating: ${review.rating}</p>
                        <p>${review.comment}</p>
                    </li>
                `;
            });

            reviewHTML += `
                        </ul>
                    </div>
                </div>
            `;

            reviewItem.innerHTML = reviewHTML;
            bookReview.appendChild(reviewItem);
        })
    })