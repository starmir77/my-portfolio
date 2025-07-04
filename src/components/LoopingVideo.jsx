import React from 'react';

export default function LoopingVideo({ src, className, poster, muted = true, autoPlay = true}) {
    return (
        <video

            src={src}
            poster={poster}
            autoPlay ={autoPlay}
            loop
            muted={muted}
            playsInline
            controls = {!muted}
            className={className}
        />
    );
}