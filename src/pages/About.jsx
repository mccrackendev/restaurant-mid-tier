import placeholder from "../assests/jimmy-dean-Yn0l7uwBrpw-unsplash.jpg";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <h2>Our Story</h2>
      <div className={styles.aboutSectionContent}>
        <div className={styles.aboutSectionContentTextWrapper}>
          <p>
            <strong className={styles.emphasizedText}>Lorem ipsum dolor</strong> sit amet consectetur adipisicing elit. Sunt eos
            fugit, adipisci nihil reiciendis, perferendis illum eveniet
            accusamus ullam dolores ipsum dolor? Architecto officia optio
            molestiae quaerat nobis temporibus quo. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Sunt eos fugit, adipisci nihil
            reiciendis, perferendis illum eveniet accusamus ullam dolores ipsum
            dolor? Architecto officia optio molestiae quaerat nobis temporibus
            quo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eos
            fugit, adipisci nihil reiciendis, perferendis illum eveniet
            accusamus ullam dolores ipsum dolor? Architecto officia optio
            molestiae quaerat nobis temporibus quo. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Sunt eos fugit, adipisci nihil
            reiciendis, perferendis illum eveniet accusamus ullam dolores ipsum
            dolor? Architecto officia optio molestiae quaerat nobis temporibus
            quo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eos
            fugit, adipisci nihil reiciendis, perferendis illum eveniet
            accusamus ullam dolores ipsum dolor? Architecto officia optio
            molestiae quaerat nobis temporibus quo. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Sunt eos fugit, adipisci nihil
            reiciendis, perferendis illum eveniet accusamus ullam dolores ipsum
            dolor? Architecto officia optio molestiae quaerat nobis temporibus
            quo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eos
            fugit, adipisci nihil reiciendis, perferendis illum eveniet
            accusamus ullam dolores ipsum dolor? Architecto officia optio
            molestiae quaerat nobis temporibus quo. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Sunt eos fugit, adipisci nihil
            reiciendis, perferendis illum eveniet accusamus ullam dolores ipsum
            dolor? Architecto officia optio molestiae quaerat nobis temporibus
            quo.
          </p>
        </div>
        <div className={styles.aboutSectionContentImageWrapper}>
          <img
            src={placeholder}
            alt="restaurant team gatherd in front of building"
          ></img>
          <legend>image legend</legend>
        </div>
      </div>
    </section>
  );
};

export default About;
