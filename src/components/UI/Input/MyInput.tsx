import React, {ChangeEventHandler, HTMLInputTypeAttribute} from 'react';
import classes from "./MyInput.module.css";

interface IMyInputProps {
    placeholder: string | undefined;
    value: string | number | undefined;
    readOnly: boolean | undefined;
    type: HTMLInputTypeAttribute | undefined;
    onChange: ChangeEventHandler<HTMLInputElement> | undefined;
}

const MyInput = React.forwardRef<HTMLInputElement, IMyInputProps>((props, ref) => {
    return (
        <input ref={ref} className={classes.MyInput} {...props} />
    );
});

export default MyInput;