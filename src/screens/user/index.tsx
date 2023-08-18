import React, {useEffect, useState} from 'react';
import Login from './login';
import Register from './register';
import UserProfile from './profile';
import WrapBgBox from '../../conponents/wrapBgBox';

const AccountScreen = ({navigation}: any) => {
  //
  const [isInputUser, setInputUser] = useState(true);
  const handleInputUser = () => {
    setInputUser(!isInputUser);
    console.log('isInputUser: ', isInputUser);
  };
  //
  const [isTokenUser, setTokenUser] = useState(String);
  const [isLogin, setLogin] = useState(true);
  const handleLogin = (token: string) => {
    if (token) {
      setTokenUser(token);
    }
  };
  useEffect(() => {
    if (isTokenUser) {
      setLogin(false);
    }
  }, [isTokenUser]);

  return (
    <WrapBgBox>
      {isInputUser ? (
        isLogin ? (
          <Login
            navigation={navigation}
            handleInputUser={handleInputUser}
            handleLogin={(token: string) => handleLogin(token)}
          />
        ) : (
          <UserProfile navigation={navigation} />
        )
      ) : (
        <Register handleInputUser={handleInputUser} />
      )}
    </WrapBgBox>
  );
};

export default AccountScreen;
