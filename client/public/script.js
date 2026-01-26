import { data } from '/data.js';

const loadEvent = function() {

  const page = window.location.pathname.substring(1);
  
  console.log("data: ", data);
  console.log("page: ", page);
  
  const rootElement = document.getElementById("root");
  if (page = "movies") {
    
  }else if(page = "actors"){

  }else if(page = "directors"){

  }else if(page = "writers"){
    
  }
  

}

window.addEventListener("load", loadEvent);
