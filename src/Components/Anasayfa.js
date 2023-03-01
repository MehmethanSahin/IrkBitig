import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Anasayfa.module.css";

const imageList = [
  "https://cdn.midjourney.com/c9e535e6-40c0-4598-bf38-8ecefe7fed71/grid_0.png",
  "https://cdn.midjourney.com/4b8ba081-589e-4fb6-b7d1-c31e2fa3a0c9/grid_0.png",
  "https://cdn.midjourney.com/5796a728-6d1b-4750-bead-e5ad072aac04/grid_0.png",
];

const Anasayfa = () => {
  const [backgroundImage, setBackgroundImage] = useState(imageList[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * imageList.length);
      setBackgroundImage(imageList[randomIndex]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="box">
    <div
      className={styles["bg-image"]}
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className={`${styles["landing-container"]} container`}>
        <div className={`${styles["content-container"]} row`}>
          <h1 className={`${styles["landing-heading"]}  `}>Irk Bitig</h1>
          <p className={styles["landing-subheading"]}>Eski bir fal kitabı </p>
          <Link to="/cards">
            <button
              className={`${styles["landing-button"]} btn btn-sm  py-3 px-5 text-uppercase font-weight-bold `}
            >
              Falına Bak
            </button>
          </Link>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Anasayfa;
