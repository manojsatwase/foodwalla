import React from 'react';
import UserInfoForm from '../forms/UserInfoForm';
import { useSelector } from 'react-redux';
import MessageComponent from './MessageComponent';

const UserInfo = () => {
  const message = useSelector(state=>state.userVisitInfo?.message);
  return (
    <div className="userInfo">
      {!message ? <UserInfoForm /> : <MessageComponent message={message} />}
    </div>
  );
};

export default UserInfo;
