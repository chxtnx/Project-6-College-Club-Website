import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <motion.div
        className="contact-box"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="glow-heading">Contact Us</h2>
        <p>Want to join us or have any questions?</p>
        <p>Email: <a href="mailto:astroclub@jameshigh.edu">astroclub@jameshigh.edu</a></p>
        <p>Location: James High School, Observatory Block</p>
      </motion.div>
    </div>
  );
};

export default Contact;
