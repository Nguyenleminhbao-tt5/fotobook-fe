'use client'

import StoryCard from "@/components/common/story-card/page";
import CreatePost from "@/components/common/create-post/page";
import IUser from "@/interfaces/user-interface";

export default function Home() {
  const user:IUser= {fullName:"Kha Bui", avatar:"./thumb/user.png"};
  return (
    <div className="max-w-[750px] mx-auto ">
        <ul className="w-full grid grid-cols-4 gap-3">
            <StoryCard isStory={false} user={user} />
            <StoryCard isStory={true} user={user} />
            <StoryCard isStory={true} user={user} />
            <StoryCard isStory={true} user={user}/>
            
        </ul>

        <CreatePost/>
    </div>
  )
}
