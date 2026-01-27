import { data } from '/data.js';

const loadEvent = function() {

  const page = window.location.pathname.substring(1);
  
  console.log("data: ", data);
  console.log("page: ", page);
  
  const rootElement = document.getElementById("root");
  if (page == "movies") {
    let root = document.getElementById("root")
    let ulActors = document.createElement("ul")
    let ulWriters = document.createElement("ul")
    ulActors.textContent="Actors:"
    ulWriters.textContent=""//.......................................
    for(let name of data.professionals){
      if(name.roles.includes("actor")){
        let li = document.createElement("li")
        li.textContent=name.name
        ulActors.appendChild(li)
      }
    }
    root.appendChild(ulActors)

  }else if(page == "actors"){

  }else if(page == "directors"){

  }else if(page == "writers"){
    
  }
  


}

window.addEventListener("load", loadEvent);
