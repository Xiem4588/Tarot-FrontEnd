import React, {useState, useEffect} from 'react'; // Import useEffect
import MyProfileGuest from './account_guest';
import MyProfileExpert from './account_expert';
import {useSelector} from 'react-redux';

interface Props {
  navigation: any;
}

const UserProfile = ({navigation}: Props) => {
  const [isCheckUser, setCheckUser] = useState(false);
  const getDataStore = useSelector(
    (state: any) => state?.STORE_ACCOUNT_DATA?.user,
  );
  const typeUser = getDataStore?.typeUser;
  useEffect(() => {
    if (getDataStore && typeUser === 'Guest') {
      setCheckUser(false);
    } else {
      setCheckUser(true);
    }
  }, [getDataStore, typeUser]);

  return (
    <>
      {isCheckUser ? (
        <MyProfileGuest navigation={navigation} />
      ) : (
        <MyProfileExpert navigation={navigation} />
      )}
    </>
  );
};

export default UserProfile;
