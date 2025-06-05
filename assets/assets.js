import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import react from './reactIcon.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logoWhite.png';
import logo_dark from './logoDarkk.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './hero_image_gray.jpg';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import node from './Node.js.png';
import next from './Next.js.png';
import typescript from './TypeScript.png';
import tailwind from './tailwind.png';
import sass from './sass.png';
import docker from './social.png';
import javascript from './javascript.png';
import java from './java.png';
import python from './python.png';
import mysql from './mysql.png';
import github from './github.png';

export const assets = {
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
    react,
    node,
    next,
    typescript,
    tailwind,
    sass,
    docker,
    javascript,
    java,
    python,
    mysql,
    github
};

export const workData = [
    {
        title: 'Frontend project',
        description: 'Web Design',
        bgImage: '/work-1.png',
    },
    {
        title: 'Geo based app',
        description: 'Mobile App',
        bgImage: '/work-2.png',
    },
    {
        title: 'Photography site',
        description: 'Web Design',
        bgImage: '/work-3.png',
    },
    {
        title: 'UI/UX designing',
        description: 'UI/UX Design',
        bgImage: '/work-4.png',
    },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Frontend development', titleSpanish: 'Desarrollo Frontend', description: 'creating the user interface and user experience...', descriptionSpanish: 'Desarrollo de la interfaz de usuario y experiencia de usuario...', link: '' },
    { icon: assets.mobile_icon, title: 'Backend development', titleSpanish: 'Desarrollo Backend', description: 'building the server-side logic and databases...', descriptionSpanish: 'Desarrollo del lado del servidor y bases de datos...', link: '' },
    { icon: assets.ui_icon, title: 'Mobile development', titleSpanish: 'Desarrollo Mobile', description: 'creating mobile applications...', descriptionSpanish: 'Desarrollo de aplicaciones móviles...', link: '' },
    { icon: assets.graphics_icon, title: 'Agile development', titleSpanish: 'Desarrollo Agile', description: 'Working in an Agile environment...', descriptionSpanish: 'Trabajar en un entorno con metodologías ágiles...', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', titleSpanish: 'Lenguajes', description: 'HTML, CSS, JavaScript, React Js, Next Js' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', titleSpanish: 'Educación', description: 'B.Tech in Computer Science', descriptionSpanish: 'Analista Programador Universitario' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', titleSpanish: 'Proyectos', description: 'Built more than 5 projects', descriptionSpanish: 'Realicé más de 5 proyectos' }
];

export const toolsData = [
    assets.react, assets.node, assets.next, assets.typescript, assets.tailwind, assets.sass, assets.docker, assets.javascript, assets.java, assets.python, assets.mysql
];