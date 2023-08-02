import React from "react";

const Container = ({children}) => {
    return (
        <div className='max-w-[1920px] mx-auto  font-Roboto' >
           {children}
        </div>
    );
};

export default Container;