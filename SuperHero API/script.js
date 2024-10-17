const access_token = "84df431c328b77bc144ae80f9e0879fb";
const base_url = `https://superheroapi.com/api.php/${access_token}`;
const button = document.getElementById("Hero_button");
const Hero_container = document.getElementById("Hero_div");
const Serach_button = document.getElementById("Search_button");
const Stats = document.getElementById("Stats");

button.onclick = () => {
  let Random_Hero = Math.floor(Math.random() * 731 + 1);
  getRandomSuperHero(Random_Hero);
};

Serach_button.onclick = () => {
  let hero_name = document.getElementById("Hero_name").value;
  getSearchSuperHero(hero_name);
};

const getRandomSuperHero = (id) => {
  fetch(`${base_url}/${id}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      ShowHeroInfo(data);
      // document.querySelector(
      //   "body"
      // ).innerHTML += `<img src=${data.image.url} alt="" height=400px width=400px/>`;
    });
};

const getSearchSuperHero = (name) => {
  fetch(`${base_url}/search/${name}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.results.map((number) => {
        return ShowHeroInfo(number);
      });
    })
    .catch((error) => {
      console.log(" Super Hero's name not Found ", error);
    });
};

const statToEmoji = {
  combat: "⚔️",
  intelligence: "🧠",
  strength: "💪",
  speed: "⚡",
  durability: "🏋️‍♀️",
  power: "📊",
};

const ShowHeroInfo = (info) => {
  const Hero_name = `<h2 style="margin-left: 34%;margin-right: 20%;">${info.name}</h2>`;
  const img = `<img src=${info.image.url} alt="" height=400px width=400px/>`;
  const Stats = Object.keys(info.powerstats)
    .map((stat) => {
      return `<h2 style="margin-left:15%">${
        statToEmoji[stat]
      } ${stat.toUpperCase()}: ${info.powerstats[stat]}</h2>`;
    })
    .join(" ");
  Hero_container.innerHTML = `${Hero_name}${img}${Stats}`;
};
