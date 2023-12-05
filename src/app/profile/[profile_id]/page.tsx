"use client";

import DefaultLayout from "@/components/layout/default-layout/page";
import {
  PersonImages,
  PersonalInformation,
  PostHeader,
  ProfileHead,
  ProfileNavBar,
} from "@/components/profile";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import PostService from "@/services/api/post-api";
import { IUser, IPost, IPhoto } from "@/interfaces";
import { Skeleton } from "antd";
import { Post } from "@/components/common";
import useUser from "@/stores/user-store";
import getUser from "@/services/get-user";

const Profile = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const params = useParams();
  const { profile_id } = params;

  const { user, setUser } = useUser();
  const [posts, setPosts] = useState<IPost[]>([]);
  const [userProfile, setUsers] = useState<IUser>();
  const [photos, setPhotos] = useState<IPhoto[][]>([]);
  const [listPostLike, setLike] = useState<string[]>([]);
  let name = userProfile
    ? userProfile?.firstName + " " + userProfile?.lastName
    : "";

  useEffect(() => {
    const fetchData = async () => {
      if (!user.user_id) setUser(await getUser());
      setLoading(true);
      const response = await PostService.getPostByUserId(profile_id as string);

      if (response && response.type == "Success") {
        setPosts(response?.message?.posts);
        setUsers(response?.message?.user);
        setPhotos(response?.message?.photos);
        setLike(response?.message?.listPostLike);
      }

      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <DefaultLayout>
      <div className="col-span-1"></div>
      <div className="col-span-10 flex items-center justify-center">
        <div className="mx-12 w-[1000px]">
          <ProfileHead
            name={name}
            userProfile_id={userProfile?.user_id as string}
          />
          <ProfileNavBar />
          <div className="w-full flex p-5">
            <div className="w-2/5 mr-5">
              <div className="flex flex-col">
                <PersonalInformation />
                <PersonImages />
              </div>
            </div>
            <div className="w-3/5 ">
              <div className="flex flex-col">
                <PostHeader />
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
                        user={userProfile as IUser}
                        post={post}
                        photos={photos[index]}
                        isLike={isLike}
                        isOwner={user.user_id == userProfile?.user_id}
                      />
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Profile;
