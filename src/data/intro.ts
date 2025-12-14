import { FaDiscord, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { SiPeerlist } from "react-icons/si";

export const Intro = {
  "name": "Sagar Kumar Jha",
  "location": "Delhi",
  "email": "devsagarkumarjha@gmail.com",
  "open_for_work": true,
  "bio": "Full-stack dev (MERN, Prisma)",
  "x_username": "DevSagarKrJha",
  "linked_in_username": "devsagarkumarjha",
  "github_username": "devsagarkumarjha",
  "peerlist_username": "sagarkumarjha",
  "leetcode_username": "devsagarkumarjha"
};

export const sociallinks = [
  {
    icon: FaXTwitter,
    url: "https://x.com/DevSagarKrJha",
    IconClass:
      "text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 hover:dark:text-neutral-100",
  },
  {
    icon: FaGithub,
    url: "https://github.com/DevSagarKumarJha",
    IconClass:
      "text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 hover:dark:text-neutral-100",
  },
  {
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/devsagarkumarjha/",
    IconClass:
      "text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300",
  },
  {
    icon: SiPeerlist,
    url: "https://peerlist.io/sagarkumarjha",
    IconClass:
      "text-green-600 dark:text-green-500 hover:text-green-700 dark:hover:text-green-400",
  },
  {
    icon: FaDiscord,
    url: "https://discord.com/users/@devsagarkumarjha",
    IconClass:
      "text-indigo-500 dark:text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400",
  },
];

