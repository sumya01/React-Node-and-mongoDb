import React from 'react';

const Lynda = (props) => {
   // console.log("propss----", props);
    return(
            <div>
                <h2 className ="text-center">
                    {props.headerName}
                </h2>
            </div>
        );
    };

export default Lynda;
