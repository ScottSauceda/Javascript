//GENRE VOTING APP

//const genres = ["action", "adventure", "animation", "biography", "comedy", "crime", "drama", "family", "horror", "musical", "mystery", "romance", "scifi", "sports", "thriller"];

const votes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

const stars = ["Jackie Chan", "Harrison Ford", "Paddington Bear"];

const movies = ["Rush Hour", "Indiana Jones", "Paddington Bear"];

const Action = {
    name: "action",
    star: "Jackie Chan",
    movie: "Rush Hour",
}
alert(Action.star);

var genres = [
  {genre: "action", votes: 0},
  {genre: "adventure", votes: 0},
  {genre: "animation", votes: 0},
  {genre: "biography", votes: 0},
  {genre: "comedy", votes: 0},
  {genre: "crime", votes: 0},
  {genre: "drama", votes: 0},
  {genre: "family", votes: 0},
  {genre: "horror", votes: 0},
  {genre: "musical", votes: 0},
  {genre: "mystery", votes: 0},
  {genre: "romance", votes: 0},
  {genre: "scifi", votes: 0},
  {genre: "sports", votes: 0},
  {genre: "thriller", votes: 0},
];

genres[0].genre = "action";
genres[4].votes = 0;
genres[10].genre = "mystery";

for(let i = 0; i < genres.length; i++) {
    var genreDiv = document.getElementById("div"); // make div object
    genreDiv.id = genres[i].genre; // assign id ("action")
    genreDiv.indx = i; // assign custom property
    genreDiv.className = "genre-btn"; // assign css
    genre.style.gridArea = genre[i].genre; // assign to CSS Grid
    genreDiv.addEventListener("click", logVote); // make clickable
    genreDiv.addEventListener("mouseover", swapImage);
    genreDiv.addEventListener("mouseout", restoreImage);
    wrapper.appendChild(genreDiv); // output div to the DOM
} // end for