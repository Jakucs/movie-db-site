import data from "./data.json" with { type: "json" };

const movieDB = {
	professionals: [],
	movies: [],
  genres: []
}

function makeRoles(){
	let professionals = {
		directors: [],
		actors: [],
		writers: [],
	}
	for(let movie of data.movies){
	
		if(movie.directors){
			professionals.directors.push(movie.directors)
		}
		if(movie.actors){
			professionals.actors.push(movie.actors)
		}
		if(movie.writers){
			professionals.writers.push(movie.writers)
		}
	}
	let array=[];
	for(let i of professionals.directors){
		if(!array.includes(i)){
			array.push(i)
		}
	}
	professionals.directors = array

	let array2=[];
		for(let i of professionals.actors){
		if(!array2.includes(i)){
			array2.push(i)
		}
	}
	professionals.actors = array2

		let array3=[];
		for(let i of professionals.writers){
		if(!array3.includes(i)){
			array3.push(i)
		}
	}
	professionals.writers = array3
	return professionals
}

console.log(makeRoles())



export {movieDB};
