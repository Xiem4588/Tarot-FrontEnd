import React, {useState} from 'react';
import MyProfileUser from './user';
import MyProfileExpert from './expert';

interface isState {
  navigation: any;
  loginUser: string;
}

const MyProfile = ({navigation, loginUser}: isState) => {
  console.log('truy cap voi userID la: >>>>>', loginUser);
  const [isCheckUser, setCheckUser] = useState(false);
  if (loginUser === 'expert') {
    setCheckUser(true);
    console.log('typeUser >>>>>', loginUser);
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
