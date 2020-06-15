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
      return fetch(`http://localhost:5002/potterss?email=${credentials.email}&password=${credentials.password}`).then((results) =>
        results.json()
      );
    }
},


export default API