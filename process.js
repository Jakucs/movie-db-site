import data from "./data.json" with { type: "json" };

const movieDB = {
	professionals: [],
	movies: [],
  genres: []
}
createProfessionalObject(getAllNames(), makeRoles())


function createGenreObject(){
	let genres = [];
	for(let movie of data.movies){
		movie.genres.forEach(genre => {
			if (!genres.includes(genre)){
				genres.push(genre)
			}
		});
	}
	
	for(let genre of genres){
		let genreID = movieDB.genres.length + 1;
		let genreObject = {
			id: genreID,
			name: genre
		}
		movieDB.genres.push(genreObject)
	}
	console.log(movieDB.genres)
}

createGenreObject()


function createMovieObject(){
	//console.log(movies)
	for(let movie of data.movies){
		let movieObject = {
			title: movie.title,
			year: movie.year,
			runtime: movie.runtime,
			genres: movie.genres,
			storyline: movie.storyline,
			writers: movie.writers.map(getId),
			directors: movie.directors.map(getId),
			actors: movie.actors.map(getId)
		}
		movieDB.movies.push(movieObject)
	}
	//console.log(movieDB.movies)
}

createMovieObject()


function createProfessionalObject(names, roles) {
	for(let name of names){
		let idCounter = movieDB.professionals.length+1
		let professionalObject = {
			id: idCounter,
			name: "",
			roles: []
		}
		
		if(roles.writers.includes(name)){
			professionalObject.roles.push("writer")
		}
		if(roles.actors.includes(name)){
			professionalObject.roles.push("actor")
		}
		if(roles.directors.includes(name)){
			professionalObject.roles.push("director")
		}
		professionalObject.id = idCounter;
		professionalObject.name = name;
		
		movieDB.professionals.push(professionalObject)
		
	}
	
	//console.log(writersArray)
	/* 	professionalObject.roles.writers = roles.writers
	professionalObject.roles.directors = roles.directors
	professionalObject.roles.actors = roles.actors */
	
	//console.log(movieDB.professionals)
	
}
function getId(name) {
	const profession = movieDB.professionals.find(exactID => exactID.name === name)
	//console.log(profession)
	return profession.id
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
	//console.log(names)
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
	let manyDirectors=[];
	for(let i of professionals.directors){
		if(!manyDirectors.includes(i)){
			manyDirectors.push(i)
		}
	}
	let nestedDirectors = manyDirectors.flat()
	professionals.directors = nestedDirectors

	let manyActors=[];
		for(let i of professionals.actors){
		if(!manyActors.includes(i)){
			manyActors.push(i)
		}
	}
	let nestedActors = manyActors.flat();
	professionals.actors = nestedActors

		let manyWriters=[];
		for(let i of professionals.writers){
		if(!manyWriters.includes(i)){
			manyWriters.push(i)
		}
	}
	let nestedWriters = manyWriters.flat()
	professionals.writers = nestedWriters

/* 	let directorsArray=[]
	for(let director of professionals.directors){
		if(director.length>1){
			for(let directors of director){
				directorsArray.push(directors)
			}
		}else{
			directorsArray.push(director)
		}
	}

	let writersArray=[]
	for(let writer of professionals.writers){
		if(writer.length>1){
			for(let writers of writer){
				writersArray.push(writers)
			}
		}else{
			writersArray.push(writer)
		}
	}

	let actorsArray=[]
	for(let actor of professionals.actors){
		if(actor.length>1){
			for(let actors of actor){
				actorsArray.push(actors)
			}
		}else{
			actorsArray.push(actor)
		}
	}
	//console.log(manyDirectors)
	//console.log(array5)
	console.log(professionals.actors)


	professionals.directors = directorsArray
	professionals.writers = writersArray
	professionals.actors = actorsArray */
	//console.log(professionals.writers)
	
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
