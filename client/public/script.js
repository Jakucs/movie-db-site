import { data } from '/data.js';

const loadEvent = function() {

  const page = window.location.pathname.substring(1);
  
  console.log("data: ", data);
  console.log("page: ", page);
  
  const rootElement = document.getElementById("root");
  if (page == "movies") {
    for(let movie of data.movies){
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

      let actorsSub = document.createElement("h4")
      actorsSub.textContent = "actors: "
      div.appendChild(actorsSub)


      for(let professional of data.professionals){
        if(movie.actors.includes(professional.id)){
          let actors = document.createElement("h6")
          actors.textContent = professional.name
          div.appendChild(actors)
        }
      }

      let writersSub = document.createElement("h4")
      writersSub.textContent = "writers: "
      div.appendChild(writersSub)

      for(let professional of data.professionals){
        if(movie.writers.includes(professional.id)){
          let writer = document.createElement("h6")
          writer.textContent = professional.name
          div.appendChild(writer)
        }
      }

      let directorsSub = document.createElement("h4")
      directorsSub.textContent = "directors: "
      div.appendChild(directorsSub)

      for(let professional of data.professionals){
        if(movie.directors.includes(professional.id)){
          let directors = document.createElement("h6")
          directors.textContent = professional.name
          div.appendChild(directors)
        }
      }


      rootElement.appendChild(div);
    }
  }


  
  
  else if(page == "actors"){
    let ul = document.createElement("ul")
    let h1 = document.createElement("h1")
    h1.textContent = "Actors: "
    rootElement.appendChild(h1)
        for(let professional of data.professionals){
          if(professional.roles.includes("actor")){
            let li = document.createElement("li")
            li.textContent=professional.name
            ul.appendChild(li)
          }
        }
        rootElement.appendChild(ul)
}
  
  else if(page == "directors"){
    let ul = document.createElement("ul")
    let h1 = document.createElement("h1")
    h1.textContent = "Directors: "
    rootElement.appendChild(h1)
        for(let professional of data.professionals){
          if(professional.roles.includes("director")){
            let li = document.createElement("li")
            li.textContent=professional.name
            ul.appendChild(li)
          }
        }
        rootElement.appendChild(ul)
  }
  else if(page == "writers"){
    let ul = document.createElement("ul")
    let h1 = document.createElement("h1")
    h1.textContent = "Writers: "
    rootElement.appendChild(h1)
        for(let professional of data.professionals){
          if(professional.roles.includes("writer")){
            let li = document.createElement("li")
            li.textContent=professional.name
            ul.appendChild(li)
          }
        }
        rootElement.appendChild(ul)
  }
  


}

window.addEventListener("load", loadEvent);
