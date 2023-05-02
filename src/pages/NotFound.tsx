import React, {FC} from 'react';
import {Navigate} from "react-router-dom";

const NotFound: FC = () => {

    return (
        <div>
            <Navigate to="/shop" replace={true}/>
        </div>
    );
};

export default NotFound;