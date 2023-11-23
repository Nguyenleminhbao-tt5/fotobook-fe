"use client";

import DefaultLayout from "@/components/layout/default-layout/page";
import SidebarLeft from "@/components/sidebar-left/page";
import SidebarRight from "@/components/sidebar-right/page";
import { StoryCard, CreatePost, Post } from "@/components/common";
import IPost from "@/interfaces/post-interface";
import { useGetAllPostQuery, useGetPostQuery } from "@/redux/service/post-api";
import { Skeleton } from "antd";
import useUser from "@/stores/user-store";
import checkLogin from "@/services/check-login";
import Link from "next/link";

export default function Home() {
  //checkLogin(); // check use login

  const { user } = useUser();

  // const { data: allPosts, isLoading, isFetching } = useGetAllPostQuery();

  // let posts = allPosts?.message?.posts;
  // let users = allPosts?.message?.users;
  // let photos = allPosts?.message?.photos;
  // let listPostLike: string[] = allPosts?.message?.listPostLike;

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

          <Link href="/profile" className=" text-green-500">
            {" "}
            next page
          </Link>

          {/* {isLoading && <Skeleton className=" bg-white" active />}
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
          <div>{allPosts?.type}</div> */}
        </div>
      </div>
      <SidebarRight />
    </DefaultLayout>
  );
}
