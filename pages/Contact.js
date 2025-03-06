import "./Contact.css";
import { cleanPage } from "../utils/cleanPage";

export const Contact = () => {
    const main = document.querySelector("main");
    cleanPage(main);
    main.innerHTML = `
    <div class="contactHeader">
        <h2>Let's find a solution</h2>
        <img src="/icons/Florencia - Antonio.jpg" alt="profile-picture">
    </div>
    <section class="contact">
        <article class="contactFormClass">
        <form id="contactForm" action="mailito:antoniomontielterrones@gmail.com" method="post">
            <div class="formDiv">
                <h5>01</h5>
                <label for="name">What's your name?</label>
                <input type="text" name="name" id="name" placeholder="Luke Skywalker *" required>
            </div>
            <div class="formDiv">
                <h5>02</h5>
                <label for="email">What's your email?</label>
                <input type="email" name="email" id="email" placeholder="luke@rebels.com *" required>
            </div>
            <div class="formDiv">
                 <h5>03</h5>
                <label for="company">What's the name of your organization?</label>
                <input type="text" name="company" id="company" placeholder="Rebel Alliance">
            </div>
            <div class="formDiv">
                <h5>04</h5>
                <label for="services">What services are you looking for?</label>
                <input type="text" name="services" id="services" placeholder="Web Development, Web Design...">
            </div>
            <div class="formDiv">
                <h5>05</h5>
                <label for="message">Your message</label>
                <textarea type="text" name="message" id="message" rows="8" placeholder="Hello Antonio, let's start to work together... *"></textarea>
            </div> 
            <input type="submit" value="Send it!">
        </form>
        </article>
        <article class="contactDetails">
            <div class="contactDetailsDiv">
                <h3>Contact Details</h3>
                <ul>
                    <li><a href="mailito:antoniomontielterrones@gmail.com">antoniomontielterrones@gmail.com</a></li>
                    <li><a href="tel:+34606768315">+34606768315</a></li>
                    <li>Lorca (Murcia)</li>
                    <li>España</li>
                </ul>
            </div>
            <div class="contactDetailsDiv">
                <h3>Socials</h3>
                <ul>
                    <li><a href="">Instagram</a></li>
                    <li><a href="">Twitter</a></li>
                    <li><a href="">Linkedin</a></li>
                    <li><a href="">Pinterest</a></li>
                </ul>
            </div>
        </article>
    </section>
    `
}