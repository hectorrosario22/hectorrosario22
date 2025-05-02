import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style.css";

// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faMicrosoft,
  faJs,
  faVuejs,
  faHtml5,
  faCss3Alt,
  faDocker,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMoon,
  faSun,
  faCode,
  faServer,
  faDatabase,
  faGlobe,
  faLaptopCode,
  faArrowRight,
  faChevronUp,
  faBars,
  faXmark,
  faBriefcase,
  faHome,
  faUser,
  faProjectDiagram,
  faTools,
  faLink,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

// Smooth scroll
import VueSmoothScroll from "vue3-smooth-scroll";

library.add(
  faGithub,
  faLinkedin,
  faTwitter,
  faMicrosoft,
  faJs,
  faVuejs,
  faHtml5,
  faCss3Alt,
  faDocker,
  faGitAlt,
  faEnvelope,
  faMoon,
  faSun,
  faCode,
  faServer,
  faDatabase,
  faGlobe,
  faLaptopCode,
  faArrowRight,
  faChevronUp,
  faBars,
  faXmark,
  faBriefcase,
  faHome,
  faUser,
  faProjectDiagram,
  faTools,
  faLink,
  faGraduationCap
);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.use(VueSmoothScroll, {
  duration: 1000,
  offset: -80,
  updateHistory: false,
});

app.mount("#app");
