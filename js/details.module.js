import { Ui } from "./ui.module.js";


export class Details {
   constructor(id) {
      this.ui = new Ui();

      document.getElementById("closeBtn").addEventListener("click", () => {
         document.getElementById("games").classList.remove("d-none");
         document.getElementById("details").classList.add("d-none");
      });
      this.getDetails(id);
   }

   getDetails(idForGame) {

      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '6f9d6f96b0msh4e6caedef077d84p15dbe4jsn7e1e846a97ee',
          'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
      };

      fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idForGame}`, options)
         .then((response) => response.json())
         .then((response) => this.ui.displayDetails(response))
         .catch((err) => console.error(err))
         
   }
}
