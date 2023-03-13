/*
BDD: 
Feature - Displaying random advice on the click of a button or when page reloads

As a user, I want to see a random advice displayed on the webpage

Scenario: User visits the webpage and sees a random advice
    Given that the user is on the webpage, when they click on the button, they should 
    see a new advice displayed on the webpage which contains a unique advice ID and text

PSEUDOCODE: 
    - Define a function called fetchAdvice.
    - Call the fetch method with the URL "https://api.adviceslip.com/advice".
    - Use the first then method to extract the JSON data from the response object 
    by calling the json method on the response object.
    - Use the second then method to handle the parsed data by passing a callback function that:
    a. Selects the HTML elements with the class "title" and "text" using the querySelector method.
    b. Sets the innerHTML property of the title element to display the advice ID obtained from the data object.
    c. Sets the innerHTML property of the text element to display the advice text obtained from the data object.
    - Use the catch method to handle any errors that may occur during the process of fetching and displaying advice from the API.
    - Call the fetchAdvice function to start the process of fetching and displaying advice from the API.
*/


const fetchAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then(res => res.json())
      .then(json => {
        const title = document.querySelector(".title");
        const text = document.querySelector(".text");
        title.innerHTML = `Advice #${json.slip.id}`;
        text.innerHTML = `"${json.slip.advice}"`;
      })
      .catch(err => console.error(err));
  };
  
  fetchAdvice();
  


// alternatively, use async/await

// const fetchAdvice = async () => {
//     const res = await fetch("https://api.adviceslip.com/advice")
//     const json = await res.json()
  
//     document.querySelector(".title").innerHTML = `Advice #${json.slip.id}`
//     document.querySelector(".text").innerHTML = `"${json.slip.advice}"`
// }
  
// fetchAdvice()