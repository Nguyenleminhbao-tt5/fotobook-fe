"use client";

import useUser from "@/stores/user-store";

const Profile = () => {
  const { user } = useUser();
  return <h1>{user.email} alo</h1>;
};

export default Profile;
