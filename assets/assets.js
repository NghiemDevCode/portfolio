import user_image from "./user-image.png";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import tool_icon from "./tool-icon.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import linkedin from "./linkedin_logo.png";
import nexjs_icon from "./nexjs_icon.png";
import html5 from "./html-5.png";
import css3_icon from "./css3-icon.png";
import tailwind_icon from "./tailwind-icon.png";
import js_icon from "./js-icon.png";
import ts_icon from "./ts-icon.png";
import github_icon from "./github-icon.png";
import about_image from "./about_image.png";

import {
  SiHtml5,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiGit,
  SiDocker,
  SiFigma,
  SiRedis,
} from "react-icons/si";

import {
  FaReact,
  FaCss3Alt,
  FaDatabase,
  FaPlug,
  FaGithub,
} from "react-icons/fa";

import { TbSparkles } from "react-icons/tb";

export const assets = {
  about_image,
  tool_icon,
  html5,
  css3_icon,
  github_icon,
  js_icon,
  ts_icon,
  tailwind_icon,
  nexjs_icon,
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
  linkedin,
};

export const workData = [
  {
    title: "Feastify - Order & Payment System",
    description:
      '"Comprehensive order and payment management system for catering services."',
    // Hệ thống quản lý đơn hàng và thanh toán toàn diện cho các dịch vụ ăn uống.
    bgImage: "/work-1.png",
    slug: "mech-seo",
    link: "",
  },

  {
    title: "Feastify - Inventory & Staff",
    description:
      '"Warehouse and staff management system with role-based access control for catering operations."',
    // Hệ thống quản lý kho và nhân viên với khả năng kiểm soát truy cập dựa trên vai trò cho các hoạt động phục vụ ăn uống.
    bgImage: "/work-2.png",
    slug: "collab-task-management",
    link: "",
  },

  {
    title: "MechSEO - Business Website",
    description:
      '"SEO-optimized website for mechanical engineering services, built for speed and search visibility. "',
    // Trang web được tối ưu hóa SEO cho các dịch vụ kỹ thuật cơ khí, được xây dựng để đảm bảo tốc độ và khả năng hiển thị khi tìm kiếm
    bgImage: "/work-3.png",
    slug: "celeb-joy",
    link: "",
  },
];

export const serviceData = [
  {
    icon: assets.web_icon,
    title: "Web design",
    description: "Web development is the process of building, programming...",
    link: "",
  },
  {
    icon: assets.mobile_icon,
    title: "Mobile app",
    description:
      "Mobile app development involves creating software for mobile devices...",
    link: "",
  },
  {
    icon: assets.ui_icon,
    title: "UI/UX design",
    description:
      "UI/UX design focuses on creating a seamless user experience...",
    link: "",
  },
  {
    icon: assets.graphics_icon,
    title: "Graphics design",
    description: "Creative design solutions to enhance visual communication...",
    link: "",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description: "HTML, CSS, JavaScript React Js, Next Js",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "B.Tech in Computer Science",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: "Built more than 5 projects",
  },
];

export const toolsData = [
  assets.vscode,
  assets.firebase,
  assets.mongodb,
  assets.figma,
  assets.git,
];

export const skillData = [
  {
    title: "Frontend",
    icon: assets.code_icon,
    skills: [
      { name: "React/Next.js", icon: FaReact },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
    ],
  },
  {
    title: "Backend",
    icon: assets.project_icon,
    skills: [
      { name: "Node.js/Nest.js", icon: SiNodedotjs },
      { name: "PostgreSQL", icon: FaDatabase },
      { name: "MySQL", icon: FaDatabase },
      { name: "Redis", icon: SiRedis },
      { name: "Socket.IO", icon: FaPlug },
    ],
  },
  {
    title: "Tools",
    icon: assets.tool_icon,
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub Actions (CI/CD)", icon: FaGithub },
      { name: "Docker", icon: SiDocker },
      { name: "Figma", icon: SiFigma },
      { name: "AI-Assisted Coding", icon: TbSparkles },
    ],
  },
];

export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/NghiemDevCode',
    icon: assets.github_icon,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/nghi%C3%AAm-nguy%E1%BB%85n-ab4119131/',
    icon: assets.linkedin,
  }
];
