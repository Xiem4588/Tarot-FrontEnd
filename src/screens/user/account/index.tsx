import React, {useState, useEffect} from 'react'; // Import useEffect
import MyProfileUser from './account_regular';
import MyProfileExpert from './account_expert';
import {useSelector} from 'react-redux';

interface Props {
  navigation: any;
}

const UserProfile = ({navigation}: Props) => {
  const [isCheckUser, setCheckUser] = useState(false);
  const getDataStore = useSelector((state: any) => state?.userAccount?.user);
  const typeUser = getDataStore?.typeUser;
  useEffect(() => {
    if (getDataStore && typeUser === 'Guest') {
      setCheckUser(true);
    } else {
      setCheckUser(false);
    }
  }, [getDataStore, typeUser]);

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

export default UserProfile;
