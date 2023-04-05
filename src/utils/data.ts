import { FaGithub, FaFreeCodeCamp, FaCodepen, FaSpotify } from "react-icons/fa"

export const navLinks = [
  { name: "Home", path: "/" },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "View Work",
    path: "/work",
    isButton: true,
  },
]

export const footerLinks = [
  {
    name: "GitHub",
    path: "https://github.com/sebastianlivoni",
    social: true,
    /*icon: <FaGithub />,*/
  },
  {
    name: "freeCodeCamp",
    path: "https://freecodecamp.org/livoni",
    social: true,
    /*icon: <FaFreeCodeCamp />,*/
  },
  {
    name: "CodePen",
    path: "https://codepen.io/sebastianlivoni",
    social: true,
    /*icon: <FaCodepen />,*/
  },
  {
    name: "Spotify",
    path: "https://open.spotify.com/user/livonskien?si=997ed70f23904b7a",
    social: true,
    onlyShowIcon: true,
    /*icon: <FaSpotify />,*/
  },
  ...navLinks,
]
