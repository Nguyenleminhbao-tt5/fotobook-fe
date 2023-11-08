"use client";

import StoryCard from "@/components/common/story-card/page";
import CreatePost from "@/components/common/create-post/page";
import IUser from "@/interfaces/user-interface";
import Post from "@/components/common/post/page";
import { useGetAllPostQuery } from "@/redux/service/post-api";
import { Skeleton } from "antd";
import IPost from "@/interfaces/post-interface";
import DefaultLayout from "@/components/layout /default-layout/page";
import SidebarLeft from "@/components/sidebar-left/page";
import SidebarRight from "@/components/sidebar-right/page";
import { useRouter } from "next/navigation";
import useUser from "@/stores/user-store";
import checkLogin from "@/services/check-login";

export default function Home() {
  const router = useRouter();

  checkLogin(); // check use login

  const { user } = useUser();
  const { data, error, isFetching } = useGetAllPostQuery();

  let posts = data?.message?.posts;
  let users = data?.message?.users;
  let photos = data?.message?.photos;
  let listPostLike: string[] = data?.message?.listPostLike;

  return (
    <DefaultLayout>
      <SidebarLeft />
      <div className="content col-span-6 px-[32px] mt-[25px]">
        <div className="max-w-[750px] mx-auto h-[10000px] ">
          <ul className="w-full grid grid-cols-4 gap-3">
            <StoryCard isStory={false} user={user} />
            <StoryCard isStory={true} user={user} />
            <StoryCard isStory={true} user={user} />
            <StoryCard isStory={true} user={user} />
          </ul>

          <CreatePost />

          {isFetching && <Skeleton className=" bg-white" active />}
          {!isFetching &&
            posts.map((post: IPost, index: number) => {
              let isLike: boolean = listPostLike.find(
                (ele) => post.post_id == ele
              )
                ? true
                : false;
              return (
                <Post
                  key={post.post_id}
                  user={users[index]}
                  post={post}
                  photos={photos[index]}
                  isLike={isLike}
                />
              );
            })}
        </div>
      </div>
      <SidebarRight />
    </DefaultLayout>
  );
}
