import "./About.css";
import { cleanPage } from "../utils/cleanPage";
import { Divider } from "../components/Divider/Divider";

export const About = () => {
    const main = document.querySelector("main");
    cleanPage(main);
    main.innerHTML = `
    <section class="about">
    <h2>About me</h2>
    ${Divider()}
    <article class="about-container">
        <div>
            <h3>I'm Antonio Montiel</h3>
            <p>I have a deep passion for discovering new interests, and when something captures my attention, I dive into it completely, learning everything I can. This curiosity drives me to seek solutions—not just for existing problems, but also for those people don't even realize they have yet. I love helping others by connecting ideas, solving challenges, and thinking ahead.</p>

            <p>Currently, I'm studying Full Stack Development, gaining expertise in technologies like SQL, Java, JavaScript, HTML, and CSS. My goal is to become a well-rounded developer capable of building efficient, scalable, and user-friendly applications. By the time I finish my studies, I expect to be proficient in both frontend and backend development, problem-solving, and system architecture, always keeping a strong focus on clean and maintainable code.</p>

            <p>Beyond programming, music is a big part of my life. I'm a fan of rock and blues, and I play the guitar—though I'm already looking for time to learn the piano as well. I also have a deep appreciation for cinema, especially films that explore human stories. I enjoy stepping into the shoes of the characters and experiencing their journeys throughout the film.</p>

            <p>Theater has been another passion of mine. As an amateur actor, I've been part of several theater companies and have performed in productions like Hoy No Me Puedo Levantar, Mamma Mia, Arlequín: Servidor de Dos Patrones, Capitulación de Lorca, and, every October 31st, I take on the iconic role of Don Juan Tenorio.</p>

            <p>Academically, I hold a degree in Political Science, Government, and Administration, with a special mention in Electoral Politics and International Politics. I also have a Cambridge B2 English certification.</p>

            <p>Oh, and I'm a devoted Atleti fan—which means I know what it's like to fall and get back up again. No matter what, I never stop believing.</p>
        </div>
        <img src="./public/icons/Florencia - Antonio.jpg" alt="Drawn face">
    </article>
    </section>
    `
}