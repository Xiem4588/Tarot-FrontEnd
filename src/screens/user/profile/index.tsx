import React, {useState, useEffect} from 'react'; // Import useEffect
import {useSelector} from 'react-redux';
import MyProfileUser from './user';
import MyProfileExpert from './expert';
import {AccountActionTypes} from '../../../redux/store/account/types';

interface Props {
  navigation: any;
}

const UserProfile = ({navigation}: Props) => {
  const [isCheckUser, setCheckUser] = useState(false);
  const getStore = useSelector((state: AccountActionTypes) => state);

  useEffect(() => {
    if (getStore) {
      setCheckUser(true);
      console.log('-- 1 data typeUser --------->', getStore);
    } else {
      setCheckUser(false);
      console.log('-- 2 data typeUser --------->', getStore);
    }
  }, [getStore]);

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
