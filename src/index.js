import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import App from "./App";
import "./styles.css";

const skills = [
  {
    skill: "React",
    level: "advanced",
    color: "blue"
  },

  {
    skill: "HTML+CSS",
    level: "Intermediate",
    color: "orange"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "silver"
  },
  {
    skill: "NodeJs",
    level: "beginner",
    color: "green"
  }
];

function App() {
  return (
    <>
      <div className="card">
        <Avatar />
        <div className="data">
          <Intro />
          <SkillList />
        </div>
      </div>
    </>
  );
}
function Avatar() {
  return <img className="avatar" src="avatar.png" alt="Avatar" />;
}
function Intro() {
  return (
    <>
      <h1>Shankar</h1>
      <p>
        Full-Stack web developer.Learning React from Jonas.Enjoyed his
        content.Helping me a lot to understand stuffs.
      </p>
    </>
  );
}
function SkillList() {
  return (
    // <>
    <div className="skill-list">
      {/* <Skill skill="React" emoji="💪" color="blue" />
      <Skill skill="HTML+CSS" emoji="🐼" color="orange" />
      <Skill skill="JavaScript" emoji="🦾" color="silver" />
      <Skill skill="NodeJs" emoji="🥠" color="green" /> */}
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
    // </>
  );
}
function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      {/* <span>{level}</span> */}
      <span>
        {level === "beginner" && "🐼"}
        {level === "Intermediate" && "🥠"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
