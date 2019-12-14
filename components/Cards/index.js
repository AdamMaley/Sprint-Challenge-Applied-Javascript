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




dataTopicsObj.forEach((item) => {
    axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
      .then((res) => {
          console.log(res);
        });
  })
    .catch((err) => console.log(err));

    function articleCardCreator() {

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
        author.appendChild(name);


        // add class
        card.classList.add('card');
        headline.classList.add('headline');
        author.classList.add('author');
        imageContainer.classList.add('img-container');

        // add object properties to elements
        headline.textContent = item.headline;
        image.src = item. //insert URL
        name.textContent = `By ${item.name}`

    }

    articleCardCreator();


