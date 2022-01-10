import React from "react";

const Social = (props) => {
    const { socialMedia } = props;
    return(
        <div>
            { window.location.assign(`https://www.${socialMedia}.com/`) }
        </div>
    )
}

export default Social;