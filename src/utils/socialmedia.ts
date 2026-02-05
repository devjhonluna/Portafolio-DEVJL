import Email from "@assets/icons/socialmedia/email.svg?component";
import Downloadcv from "@assets/icons/socialmedia/downloadcv.svg?component";
import Github from "@assets/icons/socialmedia/github.svg?component";
import Twitterx from "@assets/icons/socialmedia/twitter-x.svg?component";
import Tiktok from "@assets/icons/socialmedia/tiktok.svg?component";
import Linkedin from "@assets/icons/socialmedia/linkedin.svg?component";

interface socialMedia {
  id: number;
  text: string;
  href: string;
  icon?: any;
}

const socialMediaList:socialMedia[] = [
  {
    id: 1,
    text: "Contáctame",
    href: "mailto:dev.jhonluna@gmail.com",
    icon: Email,
  },
  {
    id: 2,
    text: "Descargar CV",
    href: "src/assets/cvdevjhonluna.pdf",
    icon: Downloadcv,
  },
  {
    id: 3,
    text: "Github",
    href: "https://github.com/devjhonluna",
    icon: Github,
  },
  {
    id: 4,
    text: "X",
    href: "https://x.com/DevJhonluna",
    icon: Twitterx,
  },
  {
    id: 5,
    text: "Tiktok",
    href: "https://www.tiktok.com/@dev.jhonluna",
    icon: Tiktok,
  },
  {
    id: 6,
    text: "Linkedin",
    href: "https://www.linkedin.com/in/jhon-alexander-luna-gonz%C3%A1lez/",
    icon: Linkedin,
  },
];

export default socialMediaList;