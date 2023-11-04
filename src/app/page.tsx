'use client'

import StoryCard from "@/components/common/story-card/page";
import CreatePost from "@/components/common/create-post/page";
import IUser from "@/interfaces/user-interface";
import Post from "@/components/common/post/page";
import { useAppSelector } from "@/redux/hook";

export default function Home() {
  const user:IUser= {fullName:"Kha Bui", avatar:"./thumb/user.png"};
  const post_id = useAppSelector((state)=>state.post.post_id)
  console.log(post_id)
  return (
    <div className="max-w-[750px] mx-auto h-[10000px] ">
        <ul className="w-full grid grid-cols-4 gap-3">
            <StoryCard isStory={false} user={user} />
            <StoryCard isStory={true} user={user} />
            <StoryCard isStory={true} user={user} />
            <StoryCard isStory={true} user={user}/>
            
        </ul>

        <CreatePost/>

        <Post/>
    </div>
  )
}
