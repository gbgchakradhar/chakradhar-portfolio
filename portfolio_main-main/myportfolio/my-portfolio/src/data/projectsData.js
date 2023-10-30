import blogsite from "../assets/svg/projects/blogsite.svg";
import devconnection from "../assets/svg/projects/devconnection.svg";
import hospitals from "../assets/svg/projects/hospitals.svg";
import pharms from "../assets/svg/projects/pharms.svg";
import musicPlayer from "../assets/svg/projects/musicPlayer.svg";
import meetups from "../assets/svg/projects/meetups.svg";
import selfAssessment from "../assets/svg/projects/self-assessment.svg";
import snake from "../assets/svg/projects/snake.svg";
import rainfall from "../assets/svg/projects/rainfall.svg";
import vr from "../assets/svg/projects/vr.svg";
import nsr from "../assets/svg/projects/NSR.svg";
export const projectsData = [
    {
        id: 11,
        projectName: "Virtual and Agumented Reality",
        projectDesc:
            "We are working on a product which helps students, maths easier to understand",
        tags: ["Unity", "XR", "Oculus Quest 2", "C#"],
        code: "https://github.com/bannu0snake/BTP-B22HS01-main/commits/main",
        demo: "https://docs.google.com/presentation/d/1GABhBNXcYcgACNZk0Gh5NpC2A02xioDq/edit?usp=sharing&ouid=110547111267637550285&rtpof=true&sd=true",
        image: vr,
    },
    {
        id: 10,
        projectName: "The BlogSite",
        projectDesc:
            "This project aims to allow Users create their profiles and follow other Users and Post blogs and ask Qustions",
        tags: ["React", "Material Ui", "Bootstrap", "Firebase"],
        code: "https://github.com/WAD-Team-Alpha/The-BlogSite",
        demo: "https://github.com/WAD-Team-Alpha/The-BlogSite",
        image: blogsite,
    },
    {
        id: 9,
        projectName: "HydroMetLab",
        projectDesc:
            "This project is Done in collabaration with IIT Roorkee, A Web-based Tool for obtaining the design rainfall from the Intensity-Duration-Frequency Curves .",
        tags: ["React", "Bootstrap", "Firebase"],
        code: "",
        demo: "http://hydrometlab.in/",
        image: rainfall,
    },
    {
        id: 8,
        projectName: "Pharmassist App",
        projectDesc:
            "This is a cross platform App which aims to connect all the pharmasicts across India where they share opportunities",
        tags: ["Flutter", "Dart", "Firebase SDK"],
        code: "https://github.com/bannu0snake/Pharmassist",
        demo: "https://github.com/bannu0snake/Pharmassist",
        image: pharms,
    },
    {
        id: 7,
        projectName: "News Paper retrieval",
        projectDesc:
            " The main focus of this search engine is to collect over 30,000 documents that are relevant to the query entered by the user.",
        tags: ["Web Scrapping", "python", "Indexing"],
        code: "https://github.com/bannu0snake/News-Paper-Retrieval",
        demo: "https://github.com/bannu0snake/News-Paper-Retrieval",
        image: nsr,
    },
    {
        id: 6,
        projectName: "Best Hospitals and Doctors Tracker",
        projectDesc:
            "This project helps users to find best doctors and hospitals in their local aera. Users rate the medical facilities",
        tags: ["Django", "PostgreSql"],
        code: "https://github.com/bannu0snake/Hospital_Review_System",
        demo: "https://github.com/bannu0snake/Hospital_Review_System",
        image: hospitals,
    },
    {
        id: 5,
        projectName: "Dev Connect APIs",
        projectDesc:
            "This project Provides all the required APIs for a website where developers can create profile and post blogs",
        tags: ["Node", "Express", "MongoDB"],
        code: "https://github.com/bannu0snake/api-application",
        demo: "https://github.com/bannu0snake/api-application",
        image: devconnection,
    },
    {
        id: 4,
        projectName: "MeetUps app",
        projectDesc: "A Simple web app with Next.js to uploud Meetups",
        tags: ["Next Js", "React", "MongoDB"],
        code: "https://github.com/bannu0snake/nextjs-app",
        demo: "https://github.com/bannu0snake/nextjs-app",
        image: meetups,
    },
    {
        id: 3,
        projectName: "Student Self Assessment Site",
        projectDesc:
            "The aim of this project that students can self assess their scores in the exam and can set goals and track their work",
        tags: ["Django", "PostgreSql"],
        code: "https://github.com/bannu0snake/SRIT-Website",
        demo: "https://github.com/bannu0snake/SRIT-Website",
        image: selfAssessment,
    },
    {
        id: 2,
        projectName: "Musical App",
        projectDesc: "A simple stock market API app",
        tags: ["JavaScript", "HTML", "Bootstrap"],
        code: "https://github.com/bannu0snake/musical-site",
        demo: "https://bannu0snake.github.io/musical-site/",
        image: musicPlayer,
    },
    {
        id: 1,
        projectName: "Snake Game",
        projectDesc:
            "This is snake game app made with python, Tkinter and Turtle. This game has good UI and UX",
        tags: ["Python", "TkInter", "Turtle"],
        code: "https://github.com/bannu0snake/snake-game",
        demo: "https://github.com/bannu0snake/snake-game",
        image: snake,
    },
];

// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/
