import { Post } from "@/pages";
import { useRef } from "react";
import styled from "styled-components";


interface VideoPostProps{
  post: Post
}

export default function VideoPost(props: VideoPostProps) {
  const {post} = props
  const videoRef = useRef<HTMLVideoElement>(null)

  function playpause() {
    if (videoRef.current?.paused) {
      videoRef.current?.play()
    } else {
      videoRef.current?.pause()
    }
  }
  
  return (
    <Div>
      <video ref={videoRef} onClick={playpause} src={post.url}></video>
      <div className="caption">{post.caption}</div>
    </Div>
  )
}


const Div = styled.div`
  height: 100vh;
  width: 350px;
  border: 1px solid green;
  position: relative;

  video{
    border: 1px solid red;
    height: 100%;
    width: 100%;
    object-fit: contain;
    position: absolute;
  }

  .caption{
    position: absolute;
    z-index: 10;
  }

`
