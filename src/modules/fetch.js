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

  getPotter(credentials) {
    return fetch(
      `http://localhost:5002/potterss?email=${credentials.email}&password=${credentials.password}`
    ).then((results) => results.json());
  },
  getPot(id) {
    return fetch(`http://localhost:5002/pots/${id}`).then((result) => result.json());
  },
  getAllPots() {
    return fetch("http://localhost:5002/pots").then((result) => result.json());
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
};

export default API;
