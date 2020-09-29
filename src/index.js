// MOVIE SEARCH CODE -> GET REQUEST

const fetchResults = (keyword) => {
  fetch(`http://www.omdbapi.com/?s=${keyword}&apikey=adf1f2d7`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);

      data.Search.forEach((result) => {
        const movie = `<li class="list-inline-item">
          <img src="${result.Poster}" alt="">
          <p>${result.Title}</p>
        </li>`;

        results.insertAdjacentHTML("beforeend", movie);
      });
    });
}

const myResults = document.querySelector("#results");

const myForm = document.querySelector('#search-movies')

myForm.addEventListener('submit', (event) => {
  event.preventDefault();
  // see the user input(keyword)
  const userInput = document.querySelector('#keyword').value
  // Empty the list
  results.innerHTML = '';
  // Do a fetch request based on the keyword
  // Update the HTML
  fetchResults(userInput);
})

// ALGOLIA PLACES -> POST REQUEST

const searchAlgoliaPlaces = (event) => {
  fetch("https://places-dsn.algolia.net/1/places/query", {
    method: "POST",
    body: JSON.stringify({ query: event.currentTarget.value })
  })
    .then(response => response.json())
    .then((data) => {
      console.log(data.hits); // Look at local_names.default
    });
};

const input = document.querySelector("#search");
input.addEventListener("keyup", searchAlgoliaPlaces);
























