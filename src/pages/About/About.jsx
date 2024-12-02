import React from "react";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";

const About = () => {
  return (
    <div>
      <Header></Header>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Welcome to my portfolio! I'm a passionate and dedicated Full Stack
              Developer with a strong focus on creating dynamic, efficient, and
              user-friendly web applications. My expertise spans the entire web
              development spectrum, from crafting seamless front-end interfaces
              to building robust and scalable back-end architectures. With a
              background in [insert your relevant experience or education], I
              specialize in: Front-End Development: Proficient in modern
              frameworks like React, Angular, or Vue.js, ensuring pixel-perfect
              designs that offer intuitive user experiences. Back-End
              Development: Skilled in Node.js, Python (Django/Flask), Ruby on
              Rails, or PHP for building secure and efficient server-side logic.
              Database Management: Experienced with SQL and NoSQL databases like
              MySQL, PostgreSQL, MongoDB, and more. DevOps & Deployment:
              Familiar with cloud services like AWS, Azure, and Docker for
              seamless application deployment and performance optimization. My
              Philosophy I believe in writing clean, maintainable, and scalable
              code while staying updated with the latest industry trends and
              technologies. Collaboration and problem-solving are at the heart
              of my work, ensuring each project delivers maximum value. What I
              Offer Whether you're looking for a professional-grade website, a
              custom web application, or support in integrating modern
              technologies into your workflow, I bring creativity, technical
              expertise, and reliability to the table. Let’s collaborate to turn
              your ideas into reality! Get in Touch [Provide links to contact
              forms, email, or social media profiles]
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
