import { Fragment } from "react"
import placeholder from "../assests/jimmy-dean-Yn0l7uwBrpw-unsplash.jpg";

const About = () => {
    return (
        <Fragment>
            <h2>Our Story</h2>
            <div>
            <img src={placeholder} alt="restaurant team gatherd in front of building"></img>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eos fugit, adipisci nihil reiciendis, perferendis illum eveniet accusamus ullam dolores ipsum dolor? Architecto officia optio molestiae quaerat nobis temporibus quo.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eos fugit, adipisci nihil reiciendis, perferendis illum eveniet accusamus ullam dolores ipsum dolor? Architecto officia optio molestiae quaerat nobis temporibus quo.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eos fugit, adipisci nihil reiciendis, perferendis illum eveniet accusamus ullam dolores ipsum dolor? Architecto officia optio molestiae quaerat nobis temporibus quo.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eos fugit, adipisci nihil reiciendis, perferendis illum eveniet accusamus ullam dolores ipsum dolor? Architecto officia optio molestiae quaerat nobis temporibus quo.</p>
            </div>
            <h3>Follow us on social media</h3>
            <ul>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Twitter</li>
            </ul>
        </Fragment>
    )
}

export default About;