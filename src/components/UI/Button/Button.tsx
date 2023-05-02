import React, {FC, ReactNode} from 'react';
import classes from "./Button.module.css"

interface IButtonProps {
    children: ReactNode | undefined;
    onClick?: () => void;
}

const Button: FC<IButtonProps> = ({children, onClick}) => {
    return (
        <button onClick={onClick} className={classes.button}>
            {children}
        </button>
    );
};

export default Button;