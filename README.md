
# ts-academy-group-5-capstone
TS Academy Frontend Development Capstone Project — Group 5
<div align="center">

# 🪐 Planet — Explore the Solar System

**TS Academy Frontend Development Capstone Project · Group 5**

A responsive, searchable guide to the planets of our solar system, with a light and dark theme.

</div>

---

## 📖 About the project

**Planet** lets you look up any planet in our solar system and see its key facts at a glance. Type a planet name into the search bar and the page updates with that planet's picture, description and statistics. Below that, a comparison table shows the mass and diameter of every planet.

The project was designed and built by the students of **Group 5** during the TS Academy Frontend Development programme. Everyone in the group took part, and each person's work is listed in the [Meet the team](#-meet-the-team) section.

## 🌐 Live site

**Live deployment:** _add the deployment link here once the site is live_

## ✨ Features

- 🔍 **Planet search:** type a planet name to load its details instantly, with a clear "No results found" screen for names that don't match.
- 🌍 **Planet profile card:** image, type, description, gravity, mass, orbital period, temperature, orbit distance, diameter and distance from the Sun.
- 📊 **Planetary facts table:** terrestrial planets, gas giants, ice giants and dwarf planets compared by mass and diameter.
- 🌗 **Light and dark themes:** follows the device setting by default, and remembers your choice when you use the toggle button.
- 📱 **Fully responsive:** designed mobile-first, so it works on phones, tablets and desktops.
- ♿ **Accessible:** semantic HTML, labelled controls, keyboard-friendly focus styles and screen-reader announcements for search results.

## 🛠️ Built with

| Technology | Used for |
| --- | --- |
| **HTML5** | Semantic page structure |
| **CSS3** | Layout (Grid and Flexbox), theming with CSS variables, responsive design |
| **JavaScript (vanilla)** | Planet data, search, table rendering and theme switching |
| **Google Fonts** | Inter and Space Mono typefaces |

Planetary facts are taken from NASA.

## 📁 Project structure

```
ts-academy-group-5-capstone/
├── index.html          # Page structure
├── README.md
└── assets/
    ├── style.css       # All styles, including light and dark themes
    ├── scripts.js      # Planet data, search and theme logic
    ├── logo_black.png
    ├── moon.svg
    ├── search.svg
    └── ...             # Planet images and stat icons
```

## 🚀 Getting started

No build tools or installs are needed.

```bash
# 1. Clone the repository
git clone https://github.com/joshuakimia1008-beep/ts-academy-group-5-capstone.git

# 2. Go into the project folder
cd ts-academy-group-5-capstone

# 3. Open index.html in your browser
#    (or use the "Live Server" extension in VS Code)
```

To get the latest changes later, run `git pull` inside the project folder.

## 👥 Meet the team

Group 5 built this project together. Here is who did what:

| Team member | What they worked on |
| --- | --- |
| **Joshua Kimia** ([@joshuakimia1008-beep](https://github.com/joshuakimia1008-beep)) | **Project lead** and repository owner. Set up the repository, added the base CSS styling, reviewed and merged teammates' pull requests, refined the responsive layout, accessibility and light/dark theme code, and worked with telexk1 on the **README and GitHub rulesets documentation** ([#15](https://github.com/joshuakimia1008-beep/ts-academy-group-5-capstone/issues/15)). |
| **Azeez zainab** ([@zainny256](https://github.com/zainny256)) | **Assistant project lead.** Set up the **project structure** ([#2](https://github.com/joshuakimia1008-beep/ts-academy-group-5-capstone/issues/2)). |
| **Victor Bayode** (Omeiza Bayode, [@tolu021](https://github.com/tolu021)) | **Assistant project lead.** Built the **semantic HTML structure** ([#2](https://github.com/joshuakimia1008-beep/ts-academy-group-5-capstone/issues/2)) and the **header and navigation** ([#3](https://github.com/joshuakimia1008-beep/ts-academy-group-5-capstone/issues/3)). Also fixed the stylesheet and script paths and cleaned up unused icon files. |
| **FRANK VISUALS** ([@odesolafranklin-ctrl](https://github.com/odesolafranklin-ctrl)) | **Footer structure and content** ([#7](https://github.com/joshuakimia1008-beep/ts-academy-group-5-capstone/issues/7)). |
| **Kings Ekemini-Abasi Tamaralayefa** ([@kings-blip](https://github.com/kings-blip)) | **Planet image styling and statistics cards** ([#9](https://github.com/joshuakimia1008-beep/ts-academy-group-5-capstone/issues/9)). |
| **Amuro Ayomiposi** ([@Hashi-devs](https://github.com/Hashi-devs)) | Planet info values in the HTML and updates to the JavaScript. |
| **Nwaokenye Onyinye Silver** ([@Mhiz-silver](https://github.com/Mhiz-silver)) | **Search bar styling and empty results UI** ([#20](https://github.com/joshuakimia1008-beep/ts-academy-group-5-capstone/issues/20)) and **dark mode with theme persistence** ([#14](https://github.com/joshuakimia1008-beep/ts-academy-group-5-capstone/issues/14)). |
| **Adedeji clinton** ([@adedejiclinton4-hub](https://github.com/adedejiclinton4-hub)) | **Hero and planet structure, plus the planet image section** ([#6](https://github.com/joshuakimia1008-beep/ts-academy-group-5-capstone/issues/6)). |
| **comfortakor-star** ([@comfortakor-star](https://github.com/comfortakor-star)) | **Main desktop layout, typography and spacing** ([#8](https://github.com/joshuakimia1008-beep/ts-academy-group-5-capstone/issues/8)). 
| **Jesse Ifeanyi** ([@jesseilicious](https://github.com/jesseilicious)) | **API research** for the planet data, together with Stephanie ([#11](https://github.com/joshuakimia1008-beep/ts-academy-group-5-capstone/issues/11)). |
| **Oyejide Joy Olamilekan** ([@Joyee333](https://github.com/Joyee333)) | **Planet data rendering and planet statistics** ([#12](https://github.com/joshuakimia1008-beep/ts-academy-group-5-capstone/issues/12)). |
| **Emmanuel Gbolahan** ([@mhi1230](https://github.com/mhi1230)) | **Buttons, interactions and planet switching** ([#13](https://github.com/joshuakimia1008-beep/ts-academy-group-5-capstone/issues/13)). |
| **⁠Madunagu Chinecherem** ([@Stephanie200202](https://github.com/Stephanie200202)) | **API research** for the planet data, together with Jesse ([#11](https://github.com/joshuakimia1008-beep/ts-academy-group-5-capstone/issues/11)). |
| **Temiloluwa Kayode** ([@telexk1](https://github.com/telexk1)) | **README and GitHub rulesets documentation**, together with Joshua ([#15](https://github.com/joshuakimia1008-beep/ts-academy-group-5-capstone/issues/15)). |

### Project board

Work was planned as issues on the [project board](https://github.com/users/joshuakimia1008-beep/projects/1) and built on separate feature branches, then merged through pull requests.

| # | Task |
| --- | --- |
| [#2](https://github.com/joshuakimia1008-beep/ts-academy-group-5-capstone/issues/2) | Project setup and semantic HTML structure |
| [#3](https://github.com/joshuakimia1008-beep/ts-academy-group-5-capstone/issues/3) | Header and navigation |
| [#6](https://github.com/joshuakimia1008-beep/ts-academy-group-5-capstone/issues/6) | Hero / planet structure and planet image section |
| [#7](https://github.com/joshuakimia1008-beep/ts-academy-group-5-capstone/issues/7) | Footer structure and content |
| [#8](https://github.com/joshuakimia1008-beep/ts-academy-group-5-capstone/issues/8) | Main desktop layout, typography and spacing |
| [#9](https://github.com/joshuakimia1008-beep/ts-academy-group-5-capstone/issues/9) | Planet image styling and statistics cards |
| [#10](https://github.com/joshuakimia1008-beep/ts-academy-group-5-capstone/issues/10) | Responsive layout and mobile design |
| [#11](https://github.com/joshuakimia1008-beep/ts-academy-group-5-capstone/issues/11) | API research and Fetch API integration |
| [#12](https://github.com/joshuakimia1008-beep/ts-academy-group-5-capstone/issues/12) | Planet data rendering and planet statistics |
| [#13](https://github.com/joshuakimia1008-beep/ts-academy-group-5-capstone/issues/13) | Buttons, interactions and planet switching |
| [#14](https://github.com/joshuakimia1008-beep/ts-academy-group-5-capstone/issues/14) | Dark mode and theme persistence |
| [#15](https://github.com/joshuakimia1008-beep/ts-academy-group-5-capstone/issues/15) | README and GitHub rulesets documentation |
| [#20](https://github.com/joshuakimia1008-beep/ts-academy-group-5-capstone/issues/20) | Search bar styling and empty results UI |

## 🔀 How we worked

1. Each task was written up as an issue on the project board.
2. Each person worked on their own branch (for example `feature/navigation` or `feature/footer`).
3. Changes were opened as a pull request and merged into `main` after review.

## 🙏 Acknowledgements

- Planetary data from [NASA](https://www.nasa.gov).
- Interface design by **Amaka N**.
- Built as part of the **TS Academy** Frontend Development programme.

---


Built with ❤️ by **Group 5** · TS Academy Frontend Development Capstone · © 2026
- Built as part of the **TS Academy** Frontend Development programme.

---


Built with ❤️ by **Group 5** · TS Academy Frontend Development Capstone · © 2026
