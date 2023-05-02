import React, {FC} from 'react';
import classes from "../styles/Pages.module.css"

const About: FC = () => {
    return (
        <div className={classes.body}>
            <h1>About shop</h1>
            <p>When I created this shop i used React Components, React-router-dom, TypeScript.<br/>
                I used API from fakestoreapi.com<br/>
                My GitHub: @dezzmol</p>
        </div>
    );
};

export default About;