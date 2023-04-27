import React, {useEffect, useState} from 'react';
import Login from './login';
import Register from './register';
import MyProfile from './profile';
import WrapBgBox from '../../conponents/wrapBgBox';

const AccountScreen = ({navigation}: any) => {
  //
  const [isInputUser, setInputUser] = useState(true);
  const handleInputUser = () => {
    setInputUser(!isInputUser);
  };
  //
  const [isUserId, setUserId] = useState(String);
  const [isLogin, setLogin] = useState(true);
  const handleLogin = (id: string) => {
    if (id) {
      setUserId(id);
    }
  };
  useEffect(() => {
    if (isUserId === '1') {
      console.log('isUserId', isUserId);
      setLogin(false);
    }
  }, [isUserId]);

  return (
    <WrapBgBox>
      {isInputUser ? (
        isLogin ? (
          <Login
            navigation={navigation}
            handleInputUser={handleInputUser}
            handleLogin={(id: string) => handleLogin(id)}
          />
        ) : (
          <MyProfile navigation={navigation} />
        )
      ) : (
        <Register handleInputUser={handleInputUser} />
      )}
    </WrapBgBox>
  );
};

export default AccountScreen;
