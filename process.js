import data from "./data.json" with { type: "json" };

const movieDB = {
	professionals: [], //rendező színész író külön tömbbe kerül
	movies: [],
  genres: []
}

createProfessionalObject(getAllNames(), makeRoles())

function createProfessionalObject (names, roles) {
	let idCounter = movieDB.professionals.length+1
	let professionalObject = {
		id: idCounter,
		name: "",
		roles: []
	}
	

	//console.log(writersArray)
	console.log(professionalObject)

	movieDB.professionals.push(professionalObject)
}


function getAllNames(){
	let names=[];
	for(let movie of data.movies){

		for(let name of movie.writers){
			if(!names.includes(name)){
				names.push(name)
			}
		}
		
		for(let name of movie.actors){
			if(!names.includes(name)){
				names.push(name)
			}
		}
		
		for(let name of movie.directors){
			if(!names.includes(name)){
				names.push(name)
			}
		}
		
	}
	console.log(names)
	return names
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




/* function makeRolesArray(){
		//Write tömböt létrehozzuk, csak a writerek lesznek benne.
	let writersArray = [];
	for(let writers of roles.writers){
		for(let writer of writers){
			if(!writersArray.includes(writer)){
				writersArray.push(writer)
			}
			professionalObject.roles.push(writersArray)
		}
	}
	//Actors tömböt létrehozzuk, csak a writerek lesznek benne.
	let actorsArray = [];
	for(let actors of roles.actors){
		for(let actor of actors){
			if(!actorsArray.includes(actor)){
			actorsArray.push(actor)
			}
			professionalObject.roles.push(actorsArray)
		}
	}
	//Director tömböt létrehozzuk, csak a writerek lesznek benne.
	let directorsArray = [];
	for(let directors of roles.directors){
		for(let director of directors){
			if(!directorsArray.includes(director)){
			directorsArray.push(director)
			}
			professionalObject.roles.push(directorsArray)
		}
	}
} */

export {movieDB};
