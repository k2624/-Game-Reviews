import { Ui } from "./ui.module.js";
import { Details } from "./details.module.js";

export class GamesView {
  constructor() {
    this.getGamesPage("mmorpg");
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click" , () => {
        document.querySelector("nav .active").classList.remove("active");
        link.classList.add('active')
       const cat = link.dataset.category;
       const catDat = this.getGamesPage(cat)
        console.log(catDat);
      });
    });
    this.ui = new Ui()
  }
  async getGamesPage(category) {
    
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "6f9d6f96b0msh4e6caedef077d84p15dbe4jsn7e1e846a97ee",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,options);
    const response = await api.json();
    this.ui.displayDataGame(response);
    this.startEvent();

    return response;
  }
  startEvent() {
    document.querySelectorAll('.card').forEach(card => {
      card.addEventListener('click' , ()=> {
        const id = card.dataset.id;
        this.showDetails(id)
      })
    })
  }
  showDetails(idForGame){
    const details = new Details(idForGame);
    document.getElementById('games').classList.add('d-none')
    document.getElementById('details').classList.remove('d-none')
  }
}
