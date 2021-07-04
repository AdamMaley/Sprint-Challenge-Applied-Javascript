// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
  .then((res) => {
    console.log(res);


    res.data.topics.forEach(topic => {

      let tab = createTab(topic);
      topics.appendChild(tab);
    });
    
  })
    .catch((err) => console.log(err));

    const topics = document.querySelector('.topics');

    function createTab(res) {
          // create 
          const topicDiv = document.createElement('div');
            
          // add class
          topicDiv.classList.add('tab');

          // add content
          topicDiv.textContent = `${res}`;

          // append
          topics.appendChild(topicDiv);

          return topicDiv;
                
      }

  



    




