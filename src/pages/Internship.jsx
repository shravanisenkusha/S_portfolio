import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  FaGithub,
  FaFigma,
  FaNodeJs,
  FaDocker,
  FaReact,
  FaAws,
  FaTrello,
} from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import { GoCloud } from "react-icons/go";
import { FiDatabase } from "react-icons/fi";
import { TbGitBranch } from "react-icons/tb";
import { Accordion, AccordionItem } from "../components/ui/Accordion";
import PillButton from "../components/ui/PillButton";

import intern_s1 from "../assets/intern_s1.jpg";
import intern_s2 from "../assets/intern_s2.jpg";
import intern_s3 from "../assets/intern_s3.jpg";
import intern_s4 from "../assets/intern_s4.jpg";
import intern_s5 from "../assets/intern_s5.jpg";

import ExperienceImg from "../assets/experience.png";
import TeamImg from "../assets/team.png";
import CloudImg from "../assets/cloud.png";
import ProjectImg from "../assets/project.png";


const steps = [
  { id: 1, text: "Students apply and go through a selection process", image: intern_s1 },
  { id: 2, text: "We conduct one-on-one sessions to understand interests", image: intern_s2 },
  { id: 3, text: "Students are divided into small, agile teams", image: intern_s3 },
  { id: 4, text: "Each team is assigned mentors with industry experience", image: intern_s4 },
  { id: 5, text: "Projects are planned, built, reviewed, and demoed", image: intern_s5 },
];

const tools = [
  { name: "GitHub", icon: FaGithub },
  { name: "VS Code", icon: VscCode },
  { name: "Figma", icon: FaFigma },
  { name: "GCP/AWS", icon: GoCloud },
  { name: "CI/CD Tools", icon: TbGitBranch },
  { name: "Node.js", icon: FaNodeJs },
  { name: "AWS", icon: FaAws },
  { name: "React Native", icon: FaReact },
  { name: "Trello", icon: FaTrello },
  { name: "Docker", icon: FaDocker },
  { name: "REST APIs", icon: FiDatabase },
];

const duplicatedTools = [...tools, ...tools];

const Internship = () => (
  <div className="flex flex-col">
    {/* Hero Section */}
    <div className="w-full min-h-[24rem] sm:min-h-[32rem] lg:min-h-[36rem] flex items-center justify-center text-center px-4 bg-gradient-to-r from-purple-600 to-indigo-700">
      <div className="w-full max-w-3xl text-white">
        <div className="inline-block bg-white/20 text-white text-xs sm:text-sm font-semibold px-3 py-1 rounded-full mb-4">
          INTERNSHIP SIMULATION PAGE
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
          This Isn't Just Training.
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#fff500] mb-5">
          It's Tech Culture in Action.
        </h2>
        <p className="text-base sm:text-lg lg:text-xl mb-3 px-2">
          Analyze, test, and make smarter decisions—so you can build experiences
          that move the needle.
        </p>
        <p className="text-sm sm:text-base lg:text-lg text-white/80 mb-6">
          Real products. Real roles. Real outcomes.
        </p>
        <Link to="/contact">
        <PillButton
          className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg lg:text-xl shadow-xl yellow-overlay"
          style={{
            background: "#ffffff",
            borderColor: "#fbbf24",
            color: "#1f2937",
            boxShadow: "0 4px 20px 0 rgba(251, 191, 36, 0.2)",
          }}
        >
          APPLY FOR NEXT COHORT
        </PillButton>
        </Link>
      </div>
    </div>

{/* How We Operate */}
<section className="py-16 px-4 bg-white">
  <div className="text-center mb-12">
    <h2 className="text-3xl sm:text-4xl font-bold mb-4">How We Operate</h2>
    <p className="text-gray-600 max-w-2xl mx-auto text-base">
      Every batch mimics a mini software company with tech rituals, delivery
      goals, and continuous mentorship.
    </p>
  </div>

  {/* Carousel Wrapper */}
  <div className="max-w-6xl mx-auto relative">
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation={true}
      breakpoints={{
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="pb-16" // 👈 adds space so dots sit below
      style={{
        "--swiper-navigation-color": "#6b21a8",
        "--swiper-pagination-color": "#6b21a8",
        "--swiper-pagination-bullet-inactive-color": "#c4b5fd",
        "--swiper-pagination-bullet-inactive-opacity": "1",
      }}
    >
      {steps.map(({ id, text, image }) => (
        <SwiperSlide key={id}>
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-[400px]">
            {/* Image container with fixed height */}
            <div className="h-48 flex items-center justify-center bg-white">
              <img
                src={image}
                alt={`Step ${id}`}
                className="max-h-full object-contain"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col justify-start">
              <div className="flex items-center gap-3 mb-3 justify-center">
                {/* Round Purple Circle */}
                <div className="h-14 w-14 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex items-center justify-center font-bold text-lg">
                  {id}
                </div>
              </div>
              {/* Bold text */}
              <p className="text-gray-800 text-sm font-semibold leading-relaxed text-center">
                {text}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>







    {/* Paid Program Disclosure */}
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            A Paid Program with Priceless Value.
          </h2>
          <p className="text-xl text-gray-700 mb-12">
            This is a paid experience, because it's more than just an
            internship. It's an immersive transformation.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              "Hands-on building with real tools",
              "Mentorship that guides you like a team lead",
              "Career skills that last a lifetime",
            ].map((b, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 hover:border-purple-600 hover:border-2 rounded-lg p-6 text-center hover:shadow-md transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-8 w-8 text-yellow-500 mx-auto mb-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l1.148 2.925a.562.562 0 00.475.345l3.161.262a.562.562 0 01.316.99l-2.408 2.074a.562.562 0 00-.18.537l.755 3.08a.562.562 0 01-.84.61l-2.723-1.648a.562.562 0 00-.586 0l-2.723 1.648a.562.562 0 01-.84-.61l.755-3.08a.562.562 0 00-.18-.537L5.53 8.021a.562.562 0 01.316-.99l3.161-.262a.562.562 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
                <p className="text-gray-700 font-medium">{b}</p>
              </div>
            ))}
          </div>
          <blockquote className="text-2xl md:text-3xl font-semibold text-gray-900 italic">
            "You won't just get certificates. You'll walk out as a creator,
            collaborator, and confident professional."
          </blockquote>
        </div>
      </div>
    </section>

    {/* What You Work With */}
<section className="py-16  bg-gradient-to-r from-purple-600 to-indigo-700">
  <div className="container mx-auto px-4">
    <div className="text-center mb-10">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        What You Work With
      </h2>
    </div>
    <div className="relative overflow-hidden">
      <div className="flex gap-6 whitespace-nowrap animate-scroll-x px-2 py-6 w-max">
        {duplicatedTools.map(({ name, icon: Icon }, i) => (
          <div
            key={i}
            className="min-w-[160px] shrink-0 bg-white border border-gray-200 hover:border-purple-600 hover:border-2 rounded-lg p-6 text-center hover:shadow-lg hover:scale-105 transition-all"
          >
            <Icon className="h-10 w-10 mx-auto mb-3 text-gray-600 group-hover:text-purple-600 transition-colors" />
            <p className="font-medium text-gray-700 text-sm">{name}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


{/* What You Learn */}
<section className="py-10 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        You'll Walk Away With:
      </h2>
      <p className="text-gray-600 text-lg">
        You're not just learning tools — you're applying them like in a real job.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
      {[
        { title: "Real product experience", icon: ExperienceImg },
        { title: "Team collaboration skills", icon: TeamImg },
        { title: "Cloud & Git fluency", icon: CloudImg },
        { title: "Demo-worthy project for resume", icon: ProjectImg },
      ].map((item, i) => (
        <div
          key={i}
          className="text-center bg-white border border-gray-200 hover:border-purple-600 hover:border-2 rounded-lg hover:shadow-md transition p-8"
        >
          <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 overflow-hidden">
            <img
              src={item.icon}
              alt={item.title}
              className="w-18 h-18 object-contain"
            />
          </div>
          <h3 className="font-semibold text-gray-900 text-lg">{item.title}</h3>
        </div>
      ))}
    </div>
  </div>
</section>



    {/* FAQ Accordion */}
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Still Wondering What We Are?
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion>
            <AccordionItem title="Is Senkusha a training institute?">
              No. We don't train you, we engage you in building.
            </AccordionItem>
            <AccordionItem title="Is this a bootcamp?">
              No. Bootcamps teach. We simulate.
            </AccordionItem>
            <AccordionItem title="Is it a course-based program?">
              Not at all. It's project-driven and team-structured, like real
              tech jobs.
            </AccordionItem>
            <AccordionItem title="Then what is Senkusha?">
              A tech company simulation where you take up roles, deliver real
              products, and learn to work like the best in the industry.
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  </div>
);

export default Internship;
