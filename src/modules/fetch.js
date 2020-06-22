const API = {
  createNew(potterObject) {
    return fetch("http://localhost:5002/potters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(potterObject),
    }).then((results) => results.json());
  },
  createNewPot(newPot) {
    return fetch("http://localhost:5002/pots", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPot),
    }).then((results) => results.json());
  },
  getArtistName(potterId) {
    return fetch (
      `http://localhost:5002/potters/${potterId}`
    ).then((results) => results.json());
  },
  getPotter(credentials) {
    return fetch(
      `http://localhost:5002/potters?email=${credentials.email}&password=${credentials.password}`
    ).then((results) => results.json());
  },

  getPot(id) {
    return fetch(`http://localhost:5002/pots/${id}`).then((result) =>
      result.json()
    );
  },
  getAllPots() {
    return fetch("http://localhost:5002/pots").then((result) => result.json());
  },
  getPotWithDetails(id) {
    return fetch(
      `http://localhost:5002/pots/${id}?_expand=clay&_expand=firingEnvironment&_expand=technique&_expand=potter`
    ).then((result) => result.json());
  },
  getPotsByPotter(potterId) {
    return fetch ( `http://localhost:5002/pots?potterId=${potterId}`
    ).then((results) => results.json());
  },
  
  getGlaze(glazeId) {
    return fetch(
      `http://localhost:5002/glazes/${glazeId}`
    ).then((result) => result.json());
  },
  deletePot(id) {
    return fetch(`http://localhost:5002/pots/${id}`, {
      method: "DELETE",
    }).then((result) => result.json());
  },
  updateExistingPot(editedPot) {
    return fetch(`http://localhost:5002/pots/${editedPot.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedPot),
    }).then((result) => result.json());
  },

  getClays() {
    return fetch("http://localhost:5002/clays").then((result) => result.json());
  },
  getTechniques() {
    return fetch("http://localhost:5002/techniques").then((result) =>
      result.json()
    );
  },
  getFiringEnvironments() {
    return fetch("http://localhost:5002/firingEnvironments").then((result) =>
      result.json()
    );
  },
  getGlazes() {
    return fetch("http://localhost:5002/glazes").then((result) =>
      result.json()
    );
  },
  addImage(newImage) {
    return fetch("http://localhost:5002/pots", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newImage),
    }).then((data) => data.json());
  },

search(searchInput) {
  return fetch(`http://localhost:5002/pots?_${searchInput}`)
    .then(results => results.json())
}
}
export default API;
