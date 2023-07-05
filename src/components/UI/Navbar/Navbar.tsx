import React, {FC} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import Button from "../Button/Button";
import classes from "./Navbar.module.css";
import {useAppDispatch, useAppSelector} from "../../../hooks/useTyped";
import {logout} from "../../../store/AuthContext/AuthSlice";

const Navbar: FC = () => {
    const navigate = useNavigate()
    const {Auth} = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()

    const userLogout = () => {
        dispatch(logout(false))
    }

    return (
        <div className={classes.myheader}>
            <div className={classes.title} onClick={() => navigate('/shop')}>
                ONLINE-SHOP
            </div>
            <div className={classes.myheader_links}>
                <Button onClick={() => navigate("/about")}>About</Button>
                <Button onClick={() => navigate("/shop")}>Shop</Button>
                {Auth === false ?
                    <Button onClick={() => navigate("/login")}>Login</Button>
                    :
                    <Button onClick={() => userLogout()}>Logout</Button>
                }
                <Button onClick={() => navigate("/cart")}>Cart</Button>
            </div>
        </div>
    );
};

export default Navbar;