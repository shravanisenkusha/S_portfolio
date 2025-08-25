
import HeliImg from "./assets/heli.jpg";
import VidhiImg from "./assets/vidhi.jpg";
import DarshImg from "./assets/darsh.jpg";
import AzizImg from "./assets/aziz.jpg";
import SatvaImg from "./assets/satva.jpg";
import JiyaImg from "./assets/jiya.jpg";
import KrishImg from "./assets/krish.jpg";
import MeetImg from "./assets/meet.jpg";
import HarshImg from "./assets/harsh.jpg";
import AeklavyaImg from "./assets/aeklavya.jpg";
import VrushaImg from "./assets/vrusha.jpg";
import NiteeImg from "./assets/nitee.jpg";
import MayanaImg from "./assets/mayana.jpg";
import RushabhImg from "./assets/rushabh.jpg";

const testimonials = [
  {
    name: "Darsh",
    year: 2024,
    role: "Backend Developer Intern",
    project: "Insurance PDF Extraction",
    image: DarshImg,   // ✅ added
    skills: ["Flask APIs", "Python Libraries", "Postman", "Version Control (Git)"],
    feedback:
      "During my internship, I gained hands-on experience in Flask APIs, Python libraries, and API testing with Postman, which improved my backend and debugging skills. I understood how Agile and SDLC processes work in real IT companies. The collaborative environment, daily sprints, and open error discussions helped me learn teamwork and project execution. Overall, the internship was a valuable experience that went far beyond coding."
  },
{
    name: "Satva Shah",
    year: 2023,
    role: "Fullstack Developer",
    project: "TiXiTo",
    image: SatvaImg,   // ✅ added
    skills: ["Golang", "PostgreSQL", "RabbitMQ", "React Native", "Message Queue Handling"],
    feedback:
      "I gained hands-on experience with Golang, PostgreSQL, RabbitMQ, and even explored React Native for UI development. The internship introduced me to project management practices, daily standups, scrum meetings, and tools like Trello, showing me that development is much more than just coding. What I valued most was the open culture—Senkusha is the best place to learn, make mistakes, and grow. It gave me real-world projects while also allowing me to explore domains I was genuinely interested in.",
  },
  {
    name: "Jiya Bhagat",
    year: 2023,
    role: "Backend Developer",
    project: "General Backend APIs",
    image: JiyaImg,   // ✅ added
    skills: ["React", "Golang", "Team Collaboration"],
    feedback:
      "I learned teamwork through daily scrums while working with React and Golang. The internship gave me practical exposure to Agile sprints, SDLC phases, and tools like Jira and Trello. I experienced how documentation, code reviews, and stakeholder feedback shape real projects beyond just coding. This journey taught me collaboration, adaptability, and time management—making it a truly amazing and future-ready experience.",
  },
  {
    name: "Krish Pitrola",
    year: 2023,
    role: "Frontend Developer & Designer",
    project: "Frontend Framework & Figma Prototypes",
    image: KrishImg,   // ✅ added
    skills: ["React", "Figma", "Go Fundamentals", "Git/GitHub", "Team Collaboration"],
    feedback:
      "During my internship,I had the opportunity to work across multiple domains, from React and frontend frameworks to Go fundamentals and UI/animation design. The internship gave me real exposure to Agile practices, SDLC phases, and tools like GitHub, Trello, and Figma, helping me understand how startups function with agility and collaboration. Teamwork played a major role—I contributed to frontend development, animations, and decision-making while learning to balance tasks and meet deadlines. Being part of the first batch of interns was special, as we grew with the program, supported by a helpful and approachable team. Overall, it was a valuable learning journey that connected classroom knowledge to real-world industry practices.",
  },
  {
    name: "Meet",
    year: 2023,
    role: "Mobile App Developer",
    project: "TiXiTo",
    image: MeetImg,   // ✅ added
    skills: ["React Native", "Go", "Docker", "API Development"],
    feedback:
      "During my internship, I worked with React Native and Go to build mobile apps, developed RESTful APIs using Gin, and explored Docker and deployments. I gained strong foundations in React, JavaScript/TypeScript, project management, and Agile methodology, which later helped me excel in future internships. The experience familiarized me with real-world practices like scrum calls, SDLC, and agile models—skills widely used across IT companies. What stood out most was the supportive culture at Senkusha, where mentors guided us like friends, making it a place to learn not just technical skills but also teamwork and personal growth.",
  },
  {
    name: "Harsh Mishra",
    year: 2023,
    role: "Frontend Developer",
    project: "Ticket Booking App",
    image: HarshImg,   // ✅ added
    skills: ["React Native", "Golang", "Agile Workflows", "Team Collaboration"],
    feedback:
      "During my internship, I worked on building a mobile application similar to BookMyShow, contributing as a frontend developer with React Native and also implementing backend logic in Go for the seat selection module. The experience gave me hands-on exposure to Agile workflows, SDLC practices, and team collaboration using tools like Git. Initially, the project felt overwhelming, but with the mentorship and support I received, I grew more confident and discovered my strong interest in frontend development. Overall, this internship was transformative—helping me sharpen my technical skills while also improving communication, teamwork, and problem-solving in a real-world environment.",
  },
  {
    name: "Aeklavya Rajgor",
    year: 2023,
    role: "Frontend Developer",
    project: "Tixito Admin Panel",
    image: AeklavyaImg,   // ✅ added
    skills: ["React.js", "Flask API", "Node.js", "Prompt Engineering"],
    feedback:
      "Students will get know new things and new experience with senkushsa also gain some industrial knowledge specially gaurav sir will help and give some best future insights to students",
  },
{
    name: "Nitee Panchal",
    year: 2024,
    role: "Frontend Developer",
    project: "Insurance Classifier",
    image: NiteeImg,   // ✅ added
    skills: ["API Concepts", "GUI Development", "Debugging"],
    feedback:
      "I worked on the Insurance Classifier project, focusing on building the GUI and core functions while learning how APIs work and exploring new coding and database techniques. Although the start was challenging, I gradually adapted and gained confidence. The best part was the supportive mentors, who treated us like friends and encouraged us to ask even the simplest questions. Every task was exciting and full of learning, making this internship a truly lucky and rewarding opportunity.",
  },
  {
    name: "Mayana Shah",
    year: 2024,
    role: "Software Developer Intern",
    project: "NutriGen",
    image: MayanaImg,   // ✅ added
    skills: ["API Handling", "AI Integration", "Time Management"],
    feedback:
      "During my internship, I explored new technologies, learned effective time management, and gained hands-on experience with APIs and AI. The knowledge and skills I acquired here will help me stand strong in the IT industry. What made the journey truly special was the bond I built with my peers and the constant support from mentors. A huge thanks to the entire team and to Pratik sir for his excellent guidance and mentorship—it made the experience unforgettable.",
  },
  {
    name: "Rushabh",
    year: 2024,
    role: "Backend Developer",
    project: "TiXiTo",
    image: RushabhImg,   // ✅ added
    skills: ["API Development", "Version Control", "Project Planning"],
    feedback:
      "During my internship, I gained practical experience in API development and explored essential tools like Git, GitHub, Postman, and VS Code. I also learned about team management and the different phases of product development followed in IT companies. This journey enhanced both my technical and soft skills, especially in backend development. Overall, it was a great experience and truly worth being part of Senkusha as an intern.",
  },
{
    name: "Vrusha Morakhiya",
    year: 2024,
    role: "Flutter Developer",
    project: "NutriGen",
    image: VrushaImg,   // ✅ added
    skills: ["Flutter", "Python Libraries", "Team Communication"],
    feedback:
      "During my internship, I faced challenges like finding the right food products API, but with patience and teamwork we successfully completed the project. I explored new Python libraries, improved my technical knowledge, and strengthened my communication skills with mentors. The experience gave me a clear understanding of Agile methodology and the SDLC phases. Overall, it was a great journey with Senkusha—full of learning, support, and unforgettable memories from daily scrum meetings and teamwork.",
  }, 
  {
    name: "Heli Shah",
    year: 2024,
    role: "Software Developer Intern",
    project: "Expense Tracker",
    image: HeliImg,   // ✅ added
    skills: [
      "Software Development",
      "Database Handling",
      "Version Control (Git)",
      "Time Management",
    ],
    feedback:
      "During my internship, I built strong technical skills in programming, databases, and version control with Git, while also improving teamwork, communication, and time management. The experience gave me real-world exposure to Agile methodology, SDLC phases, and product development workflows. I learned how projects move from planning to deployment and how collaboration drives success in IT teams. The supportive and fun work culture at Senkusha made the journey even more valuable, and I’d highly recommend this internship for the exposure and growth it offers.",
  },
  {
    name: "Vidhi Shah",
    year: 2024,
    role: "API Tester and OCR Developer",
    project: "NutriGen",
    image: VidhiImg,   // ✅ added
    skills: [
      "Python (OCR with Tesseract, Pillow)",
      "API Testing with Postman",
      "Agile Collaboration",
    ],
    feedback:
      "My internship at Senkusha deepened my understanding of the full SDLC, from requirement analysis to testing, while giving me hands-on experience in feature design, API integration, and OCR functionality. I thrived in a collaborative, supportive environment with excellent mentorship that encouraged growth. A proud moment was being awarded the Star Performer Intern, which boosted my confidence. Daily scrum meetings and using Trello for project management made the journey both structured and engaging. Senkusha provided the perfect mix of technical learning, teamwork, and recognition—an ideal place for future interns to grow.",
  },
  {
    name: "Aziz Hussain",
    year: 2023,
    role: "Backend and UI Developer",
    project: "Authentication Module",
    image: AzizImg,   // ✅ added
    skills: ["Golang (REST API)", "React Native (UI)", "Secure Authentication", "Git", "Zoho"],
    feedback:
      "During my internship at Senkusha, I gained industry-relevant skills in full-stack development, including building REST APIs, authentication flows, and working with Git, JSON, and collaboration tools. I also experienced Agile methodology, daily stand-ups, and the complete SDLC, which gave me a clear picture of how real IT projects are structured and delivered. The supportive mentors treated me as a real team member, guiding me through challenges and encouraging growth. This internship not only boosted my technical expertise but also gave me the confidence to independently build complete software solutions. Overall, it was a transformative and hands-on experience that truly prepared me for the industry.",
  }
  ];

export default testimonials;
