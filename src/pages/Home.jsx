import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Home.css";

const Home = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const starArray = [...Array(50)].map((_, i) => {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      const size = Math.random() * 2 + 1;
      const delay = Math.random() * 2;

      return { id: i, x, y, size, delay };
    });
    setStars(starArray);
  }, []);

  return (
    <div className="home-container">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            top: star.y,
            left: star.x,
            width: star.size,
            height: star.size,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}

      <motion.div
        className="hero-text"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <h1 className="glow-heading">Welcome to Astronomy Club!</h1>
        <p className="motto">You are the cosmos. ✨</p><br />
        <motion.a
          href="/about"
          className="glow-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Home;
