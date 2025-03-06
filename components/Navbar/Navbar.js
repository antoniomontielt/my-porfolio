import "./Navbar.css";

export const changeTheme = () => {
  const themeBtn = document.querySelector("#themeBtn");
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    changeText();
  });
};

export const changeText = () => {
  const themeBtn = document.querySelector("#themeBtn");
  if (themeBtn.innerText === "☀") {
    themeBtn.innerText = "☾";
  } else {
    themeBtn.innerText = "☀";
  }
};


export const Navbar = () => `
<nav>
<img src="/icons/profile.webp">
<ul id="navMenu">
    <li>
        <a href="#" id="homelink">Home</a>
    </li>
    <li>
        <a href="#" id="projectslink">Projects</a>
    </li>
    <li>
      <a href="#" id="aboutlink">About me</a>
    </li>
    <li>
        <button id="themeBtn">☀</button>
    </li>
</ul>
</nav>
<li><i class="fa-solid fa-bars" id="bars"></i></li>
`;

export const toggleMenu = () => {
  const bars = document.querySelector("#bars");
  const navMenu = document.querySelector("#navMenu");
  const navLinks = document.querySelectorAll("#navMenu a");

  bars.addEventListener("click", () => {
    navMenu.classList.toggle("show-menu");
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("show-menu")
    })
  });
};