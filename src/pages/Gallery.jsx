import React from "react";
import "./Gallery.css";

const images = [
  "https://i.pinimg.com/736x/87/5a/fd/875afdd8f0ef4fc1a7f64470cad6b495.jpg",
  "https://i.pinimg.com/736x/eb/fa/47/ebfa4791181c9aa62c71c88bf542ff42.jpg",
  "https://i.pinimg.com/736x/c7/f8/9d/c7f89d9bc73135c9407abefc3663e1aa.jpg",
  "https://i.pinimg.com/736x/f2/db/b3/f2dbb3c90917a5448125689f8ef86b18.jpg",
  "https://i.pinimg.com/736x/c2/20/35/c220353f4cb20a55f37d2fd3a88c05fb.jpg",
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Photo Gallery</h2>
      <div className="image-grid">
        {images.map((img, index) => (
          <div key={index} className="image-wrapper">
            <img src={img} alt={`astro-${index}`} className="gallery-img" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
