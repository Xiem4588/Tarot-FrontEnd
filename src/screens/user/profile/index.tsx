import React, {useState} from 'react';
import MyProfileUser from './user';
import MyProfileExpert from './expert';

const MyProfile = ({navigation}: any) => {
  const [isCheckUser, setCheckUser] = useState(false);
  return (
    <>
      {isCheckUser ? (
        <MyProfileUser navigation={navigation} />
      ) : (
        <MyProfileExpert />
      )}
    </>
  );
};

export default MyProfile;
