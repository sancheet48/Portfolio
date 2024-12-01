import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/ai.png")} alt="AI icon" height={50} padding={10} />
            <div className={styles.aboutItemText}>
              <h3>AI Engineer</h3>
              <p>
                I'm passionate about pushing the boundaries of AI. I develop cutting-edge generative AI projects and specialize in fine-tuning large language models.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>SRE Engineer</h3>
              <p>
                I have extensive experience in ensuring the reliability, scalability, and performance of complex systems. I've successfully implemented monitoring, automation, and incident response strategies to maximize uptime and optimize system health
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
