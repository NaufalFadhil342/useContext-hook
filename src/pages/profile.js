import React, { useContext } from 'react';
import { Context } from '../helper/context';
import { ChangeProfile } from '../components/ChangeProfile/changeProfile';

const Profile = () => {
  const { username } = useContext(Context);

  return (
    <div>
      <h1>PROFILE, user is: {username}</h1>
      <ChangeProfile />
    </div>
  );
};

export default Profile;
