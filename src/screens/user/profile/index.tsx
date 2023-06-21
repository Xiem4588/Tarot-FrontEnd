import React, {useState} from 'react';
import MyProfileUser from './user';
import MyProfileExpert from './expert';

interface isState {
  navigation?: any;
  account?: string;
}

const MyProfile = ({navigation, account}: isState) => {
  const [isCheckUser, setCheckUser] = useState(false);
  if (account === 'expert') {
    setCheckUser(true);
  }
  return (
    <>
      {isCheckUser ? (
        <MyProfileUser navigation={navigation} />
      ) : (
        <MyProfileExpert navigation={navigation} />
      )}
    </>
  );
};

export default MyProfile;
