import React, {FC, ReactNode} from 'react';
import classes from "./Modal.module.css"

interface IModal {
    children: ReactNode,
    visible: boolean,
    setVisible: (visible: boolean) => void
}

const Modal: FC<IModal> = ({children, visible, setVisible}) => {
    const rootClasses: string[] = [classes.myModal]

    if (visible) {
        rootClasses.push(classes.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.myModalContent} onClick={event => event.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;