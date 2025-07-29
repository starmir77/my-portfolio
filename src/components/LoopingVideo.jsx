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
            style={{ width: "100%", height: "auto", display: "block", zindex:"3"}}
        />
    );
}