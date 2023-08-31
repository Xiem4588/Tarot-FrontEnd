import React, {useEffect, useState} from 'react';
import Login from '../login';
import Register from '../register';
import UserProfile from './account';
import WrapBgBox from '../../conponents/wrapBgBox';
import {useSelector} from 'react-redux';

const AccountScreen = ({navigation}: any) => {
  const [isInputUser, setInputUser] = useState(true);
  const [isToken, setToken] = useState(false);
  const token = useSelector((state: any) => state.account.token);
  console.log('----->>>>> get token', token);
  console.log('----->>>>> setToken', isToken);

  useEffect(() => {
    setToken(token ? true : false);
  }, [token]);

  const handleInputUser = () => {
    setInputUser(!isInputUser);
    console.log('isInputUser: ', isInputUser);
  };

  return (
    <WrapBgBox>
      {isInputUser ? (
        isToken ? (
          <UserProfile navigation={navigation} />
        ) : (
          <Login navigation={navigation} handleInputUser={handleInputUser} />
        )
      ) : (
        <Register handleInputUser={handleInputUser} />
      )}
    </WrapBgBox>
  );
};

export default AccountScreen;
