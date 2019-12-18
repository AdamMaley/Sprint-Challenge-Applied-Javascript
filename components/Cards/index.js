// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.





axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
    .then(res => {
        console.log(res);


        const articlesObj = res.data.articles;
            const bootstrap = res.bootstrap;
            const javascript = res.javascript;
            const jquery = res.jquery;
            const node = res.node;
            const technology = res.technology;

            const allArticles = [].concat(bootstrap, javascript, jquery, node, technology);


        allArticles.forEach(article => {
            let card = articleCardCreator(article);
            cardContainer.appendChild(card);


            console.log('allArticles');


        });

    })
    .catch((err) => console.log(err));

    const cardsContainer = document.querySelector('.cards-container');


function articleCardCreator(obj) {

    // create elements
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const authorDiv = document.createElement('div');
    const imageContainer = document.createElement('div');
    const image = document.createElement('img');
    const name = document.createElement('span');

    // append
    card.appendChild(headline);
    card.appendChild(authorDiv);
    authorDiv.appendChild(imageContainer);
    imageContainer.appendChild(image);
    authorDiv.appendChild(name);


    // add class
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imageContainer.classList.add('img-container');

    // add object properties to elements
    headline.textContent = obj.headline;
    image.src = obj.authorPhoto;
    name.textContent = obj.authorName;

    return card;
}



