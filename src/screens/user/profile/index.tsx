import React, {useState, useEffect} from 'react'; // Import useEffect
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/typesState';

import MyProfileUser from './user';
import MyProfileExpert from './expert';

interface Props {
  navigation: any;
}

const UserProfile = ({navigation}: Props) => {
  const [isCheckUser, setCheckUser] = useState(false);
  const getStore = useSelector((state: RootState) => state.userData); // Lấy dữ liệu trực tiếp từ store
  useEffect(() => {
    if (getStore) {
      if (getStore.data.typeUser === 'Guest') {
        setCheckUser(true);
        console.log(
          '------- 1 data typeUser --------->',
          getStore.data.typeUser,
        );
      } else {
        setCheckUser(false);
        console.log(
          '------- 2 data typeUser --------->',
          getStore.data.typeUser,
        );
      }
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
