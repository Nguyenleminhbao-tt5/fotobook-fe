"use client";

import DefaultLayout from "@/components/layout/default-layout/page";
import SidebarLeft from "@/components/sidebar-left/page";
import SidebarRight from "@/components/sidebar-right/page";
import { StoryCard, CreatePost, Post } from "@/components/common";
import IPost from "@/interfaces/post-interface";
import { Skeleton } from "antd";
import useUser from "@/stores/user-store";
import Link from "next/link";
import { useEffect, useState } from "react";
import PostService from "@/services/api/post-api";
import IUser from "@/interfaces/user-interface";
import IPhoto from "@/interfaces/photo-interface";
import getUser from "@/services/get-user";

export default function Home() {
  // checkLogin();
  const { user, setUser } = useUser();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [posts, setPosts] = useState<IPost[]>([]);
  const [users, setUsers] = useState<IUser[]>([]);
  const [photos, setPhotos] = useState<IPhoto[][]>([]);
  const [listPostLike, setLike] = useState<string[]>([]);

  useEffect(() => {
    const getAllPosts = async () => {
      try {
        setLoading(true);
        const response = await PostService.getAllPost();
        if (response && response.type == "Success") {
          setPosts(response?.message?.posts);
          setUsers(response?.message?.users);
          setPhotos(response?.message?.photos);
          setLike(response?.message?.listPostLike);
        }
        console.log(user);
        if (!user.user_id) setUser(await getUser());
      } catch (err) {
        throw err;
      } finally {
        setLoading(false);
      }
    };
    getAllPosts();
  }, []);
  console.log("post", posts);

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

          {isLoading && <Skeleton className=" bg-white" active />}
          {!isLoading &&
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
