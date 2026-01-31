import { data } from '/data.js';

const loadEvent = function() {

  const page = window.location.pathname.substring(1);
  
  console.log("data: ", data);
  console.log("page: ", page);
  
  const rootElement = document.getElementById("root");


showPages()



function showPages(){
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

        //listFilms(professional)
        
        //EBBŐL 3AT CSINÁLNI
        if(professional.roles=="actor"){
          for(let movie of data.movies){
            if(movie.actors.includes(professional.id)){
                  console.log(movie.title)
                  let p = document.createElement("p")
                  p.textContent=movie.title
                  div.appendChild(p)
            }
          }
        }


        if(professional.roles=="writer"){
          for(let movie of data.movies){
            if(movie.writers.includes(professional.id)){
                  console.log(movie.title)
                  let p = document.createElement("p")
                  p.textContent=movie.title
                  div.appendChild(p)
            }
          }
        }

        if(professional.roles=="director"){
          for(let movie of data.movies){
            if(movie.directors.includes(professional.id)){
                  console.log(movie.title)
                  let p = document.createElement("p")
                  p.textContent=movie.title
                  div.appendChild(p)
            }
          }
        }


      }
    }

    return div
}




}

window.addEventListener("load", loadEvent);
