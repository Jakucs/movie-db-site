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
        let actors = createProfessionalList("actor")
        rootElement.appendChild(actors)
}
  
  else if(page == "directors"){
        let directors = createProfessionalList("director")
        rootElement.appendChild(directors)
  }
  else if(page == "writers"){
        let writers = createProfessionalList("writer")
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
    
/*     else if(profession=="actor"){
        let profession = document.createElement("h4")
        profession.textContent = "actors: "
        div.appendChild(profession)
        for(let professional of data.professionals){
        if(movie.actors.includes(professional.id)){
          let actors = document.createElement("h6")
          actors.textContent = professional.name
          div.appendChild(actors)
        }
      }
      }

    else if(profession=="writer"){
        let profession = document.createElement("h4")
        profession.textContent = "writers: "
        div.appendChild(profession)
        for(let professional of data.professionals){
        if(movie.writers.includes(professional.id)){
          let writers = document.createElement("h6")
          writers.textContent = professional.name
          div.appendChild(writers)
        }
      }
    } */
      return div
  }

function createProfessionalList(profession){
    let ul = document.createElement("ul")
    let h1 = document.createElement("h1")
    if(profession=="writer"){
      h1.textContent = "Writers: "
      rootElement.appendChild(h1)
    } else if (profession=="director"){
      h1.textContent = "Directors: "
      rootElement.appendChild(h1)
    } else if (profession=="actor"){
      h1.textContent = "Actors: "
      rootElement.appendChild(h1)
    }
//profession mellé role
//nemkéne else if, variable legyen = role
//profession==role
//
    for(let professional of data.professionals){
      if(professional.roles.includes(profession)){
        let li = document.createElement("li")
        li.textContent=professional.name
        ul.appendChild(li)
      }
    }
    return ul
}





}

window.addEventListener("load", loadEvent);
