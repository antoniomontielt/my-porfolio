import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => `
<h2>Contact</h2>
<div>
${Button("/icons/github.jpeg", "GitHub", "https://github.com/antoniomontielt")}
${Button("/icons/linkedin.jpeg", "Linkedin", "https://www.linkedin.com/in/antonio-montiel-terrones-25747b161/?originalSubdomain=es")}
${Button("/icons/telegram.png", "Telegram", "https://t.me/antoniocullum")}
${Button("/icons/correo.png", "Mail", "mailito:antoniomontielterrones@gmail.com" )}
</div>
`;