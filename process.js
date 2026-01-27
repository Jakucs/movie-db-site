import data from "./data.json" with { type: "json" };

const movieDB = {
	professionals: [],
	movies: [],
  genres: []
}


function createProfessionals(names){
	for(let name of names){

	
	let idCounter = movieDB.professionals.length+1;

	let professionalObject = {
		
		id: idCounter,
		name: " ",
		roles: [ ]
	}
	professionalObject.id = idCounter;
	professionalObject.name = name;
	let names = [];
	let roles = [
		{type: "writer"},
		{type: "actor"},
		{type: "director"}
	];
	//addig ne pusholjuk bele amig nem jó a professionalObject
	movieDB.professionals.push(professionalObject)
}
return professionalObject;

}


for(let i of data.movies){
	//console.log(i)
	console.log(createProfessionals(i.actors))
}


export {movieDB};
