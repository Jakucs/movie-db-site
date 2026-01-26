import data from "./data.json" with { type: "json" };

const movieDB = {
	professionals: [],
	movies: [],
  genres: []
}

//Ha nincs a profession-be, hozzáadjuk új id-val

function createProfessionalObject(movie) {
	let idCounter;

	for (let i = movieDB.professionals.length + 1; i < movieDB.professionals.length; i++) {
		idCounter = i;
	}

	const professionalObject = {
         id: idCounter,
       name: "",
	   roles: []


	}

	const roles = [];

	roles.push(movie.writers, movie.actors, movie.directors);


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
