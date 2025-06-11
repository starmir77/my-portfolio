import React from 'react';

export default function LoopingVideo({ src, className, poster, muted = true }) {
    return (
        <video

            src={src}
            poster={poster}
            autoPlay
            loop
            muted={muted}
            playsInline
            controls = {!muted}
            className={className}
        />
    );
}