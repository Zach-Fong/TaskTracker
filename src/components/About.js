import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <h4>Version 1.0.0</h4>
            <p>Hi you clicked about. Feel free to hire me :) thanks.</p>
            <Link to='/'>Go Back</Link>
        </div>
    )
}

export default About
