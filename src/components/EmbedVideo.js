import "./EmbedVideo.css";
import React from "react";
import PropTypes from "prop-types" ;

function EmbedVideo({embedId}){
    return(
        <div className="video-container">
            <iframe
                width="800"
                height="400"
                src={`https://www.youtube.com/embed/${embedId}`}
                frameBorder="0"
                allowFullScreen
                title="Trailer"
            />
        </div>
    );
}

EmbedVideo.propTypes = { embedId: PropTypes.string.isRequired, };

export default EmbedVideo;