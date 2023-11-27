"use client";

import DefaultLayout from "@/components/layout/default-layout/page";
import {
  PersonImages,
  PersonalInformation,
  PostHeader,
  ProfileHead,
  ProfileNavBar,
} from "@/components/profile";

import useUser from "@/stores/user-store";

const Profile = () => {
  const { user } = useUser();
  return (
    <DefaultLayout>
      <div className="col-span-1"></div>
      <div className="col-span-10 flex items-center justify-center">
        <div className="mx-12 w-[1000px]">
          <ProfileHead />
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Profile;
