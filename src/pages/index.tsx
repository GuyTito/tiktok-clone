import VideoPost from "@/components/VideoPost"
import styled from "styled-components"

export interface Post {
  url: string
  caption: string
}

export default function Home() {
  

  const posts: Post[] = [
    {
      url: 'videos/afia_hardwork.mp4',
      caption: 'Lorem ipsom bicolor'
    },
    {
      url: 'videos/karma.mp4',
      caption: 'Lorem ipsom bicolor'
    },
    {
      url: 'videos/chairman.mp4',
      caption: 'Lorem ipsom bicolor'
    },
  ]
  
  return (
    <>
      <Main>
        {posts.map((post, i) => (
          <VideoPost post={post} key={i} />
        ))}
      </Main>
    </>
  )
}


const Main = styled.main`
 
`