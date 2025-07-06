import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <motion.div
        className="about-content"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="glow-heading">About Us</h2>
        <p>
          The James High Astronomy Club is a passionate community of stargazers, students, and space enthusiasts.
          Our mission is to explore the mysteries of the cosmos and ignite curiosity through observation, discussions, and outreach events.
        </p>
        <p>
          We host weekly sky-watching sessions, invite guest astronomers, and collaborate with science fairs to promote astronomy among youth.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
