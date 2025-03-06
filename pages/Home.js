import "./Home.css";
import { cleanPage } from "../utils/cleanPage";
import { linkPage } from "../utils/linkPage";
import { Contact } from "../pages/Contact";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="home">
    <p>Hi<span>👋</span></p>
    <h1>I'm Antonio Montiel</h1>
    <a href="#" id="formlink">Tell me what do you have in mind →</a>
    </section>`;
    linkPage("#formlink", Contact);
};

