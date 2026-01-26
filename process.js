import data from "./data.json" with { type: "json" };

const movieDB = {
	professionals: [],
	movies: [],
  genres: []
}





//Ha nincs a profession-be, hozzáadjuk új id-val

function createProfessionalObject(movie) {
	//ha i=length+1 akkor i<length nemlesz igaz
	const idCounter = movieDB.professionals.length + 1;
	//mert mindig létrehozunk egy új professionalObjectet
/* 	for (let i = movieDB.professionals.length + 1; i < movieDB.professionals.length; i++) {
		idCounter = i;
		console.log("hello")
	} */

	const professionalObject = {
         id: idCounter,
       name: "",
	   roles: []
	}

	const roles = [];

	roles.push(movie.writers, movie.actors, movie.directors);
	//console.log(roles)
	//roles = [...movie.writers, ...movie.actors, ...movie.directors];

		for (const role of roles) {
			professionalObject.name = getName(role);
		}

	return professionalObject;
}

function getName(role) {
	
	for (const name of role) {
		if (isValidProfessionalObject(name)) {
			return name;
		}
	}

}

function isValidProfessionalObject(name) {
	for (const profession of movieDB.professionals) {
		if (profession.name === name) {
			return false;
		}
	}
	return true;
}

for (const movie of data.movies) {
	movieDB.professionals.push(createProfessionalObject(movie));
}
console.log(movieDB.professionals)

export {movieDB};
