import React, {FC} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import Button from "../Button/Button";
import classes from "./Navbar.module.css";

const Navbar: FC = () => {
    const navigate = useNavigate()

    return (
        <div className={classes.myheader}>
            <div className={classes.myheader_links}>
                <Button onClick={() => navigate("/about")}>About</Button>
                <Button onClick={() => navigate("/shop")}>Shop</Button>
                <Button onClick={() => navigate("/login")}>Login</Button>
                <Button onClick={() => navigate("/cart")}>Cart</Button>
            </div>
        </div>
    );
};

export default Navbar;