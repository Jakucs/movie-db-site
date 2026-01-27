import { data } from '/data.js';

const loadEvent = function() {

  const page = window.location.pathname.substring(1);
  
  console.log("data: ", data);
  console.log("page: ", page);
  
  const rootElement = document.getElementById("root");
  if (page == "movies") {
    let root = document.getElementById("root")
    let ul = document.createElement("ul")
    ul.textContent="Actors:"
    for(let name of data.professionals){
      let li = document.createElement("li")
      li.textContent=name.name
      ul.appendChild(li)
    }
    root.appendChild(ul)

  }else if(page == "actors"){

  }else if(page == "directors"){

  }else if(page == "writers"){
    
  }
  


}

window.addEventListener("load", loadEvent);
