import { data } from '/data.js';

const loadEvent = function() {

  const page = window.location.pathname.substring(1);
  
  console.log("data: ", data);
  console.log("page: ", page);
  
  const rootElement = document.getElementById("root");


showPages()

function showMovieByID(id){
  for(let movie of data.movies){
    if(movie.id == id){
      
      rootElement.appendChild(showMovie(movie))
    }
  }
}

function showMovie(movie){
    let div = document.createElement("div")

    const title = document.createElement("h2")
    title.textContent=movie.title
    div.appendChild(title)
    
    const year = document.createElement("h5")
    year.textContent= "release - date: " + movie.year
    div.appendChild(year)
    
    const runtime = document.createElement("h5")
    runtime.textContent= "runtime: " + movie.runtime
    div.appendChild(runtime)
    
    const genres = document.createElement("h5")
    genres.textContent= "Genres: " + movie.genres.join(", ");
    div.appendChild(genres)
    
    const storyline = document.createElement("h6")
    storyline.textContent= "storyline: " + movie.storyline;
    div.appendChild(storyline)
    
    return div
}


function showPages(){

    if(page.startsWith("movie/")){
      const movieID = parseInt(page.split("/")[1]);
      showMovieByID(movieID)
      return;
    }
  
    if (page == "movies") {
    for(let movie of data.movies){
      let div = document.createElement("div")

      div.appendChild(showMovie(movie))


      //Függvény meghívások
      let actors = createContributionList(movie, "actors", "Actors: ")
      div.appendChild(actors)

      let directors = createContributionList(movie, "directors", "Directors: ")
      div.appendChild(directors)

      let writers = createContributionList(movie, "writers", "Writers: ")
      div.appendChild(writers)

      rootElement.appendChild(div);
    }

  }

  //Függvény meghívások
  else if(page == "actors"){
        let actors = createProfessionalList("actor", "Actors: ")
        rootElement.appendChild(actors)
}
  
  else if(page == "directors"){
        let directors = createProfessionalList("director", "Directors: ")
        rootElement.appendChild(directors)
  }
  else if(page == "writers"){
        let writers = createProfessionalList("writer", "Writers: ")
        rootElement.appendChild(writers)
  }
  else if(page == "genres"){
        let genres = createGenreListWithMovie()
        rootElement.appendChild(genres)
  }
  
}


function createGenreListWithMovie(){
    let div = document.createElement("div")
    let h2 = document.createElement("h2")
    h2.textContent="Genres: "
    div.appendChild(h2)

    for(let genre of data.genres){
      let ul = document.createElement("ul")
      ul.textContent = genre.name+":"

    for(let movie of data.movies){
        if(movie.genres.includes(genre.name)){
          //console.log(movie)
          let li = document.createElement("li")
          li.textContent=movie.title
          ul.appendChild(li)
        }
    }
      div.appendChild(ul)
    }
    return div
}



function createContributionList(movie, key, title){
    let div = document.createElement("div")

        let professionElement = document.createElement("h4")
        professionElement.textContent = title
        div.appendChild(professionElement)
      for(let professional of data.professionals){
        if(movie[key].includes(professional.id)){
          let name = document.createElement("h6")
          name.textContent = professional.name
          div.appendChild(name)
        }
      }
      return div
  }

function createProfessionalList(profession, job){
    let div = document.createElement("div")
    let h1 = document.createElement("h1")
    
      h1.textContent = job
      rootElement.appendChild(h1)
    
    for(let professional of data.professionals){
      if(professional.roles.includes(profession)){

        let h5 = document.createElement("h5")
        h5.textContent=professional.name+":"
        div.appendChild(h5)


        div.appendChild(filmsBelongingToAProfessional(profession+"s", professional))
        // div.appendChild(filmsBelongingToAProfessional("writers", professional))
        // div.appendChild(filmsBelongingToAProfessional("directors", professional))

      }
    }
    return div
}



        function filmsBelongingToAProfessional(profession, professional){
          let div = document.createElement("div")
            for(let movie of data.movies){
              if(movie[profession].includes(professional.id)){
                    //console.log(movie.title)
                    let p = document.createElement("p")
                    p.textContent=movie.title
                    div.appendChild(p)
              }
            }
            return div
        }




}

window.addEventListener("load", loadEvent);
