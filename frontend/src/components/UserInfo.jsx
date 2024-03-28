import React from 'react';
import UserInfoForm from '../forms/UserInfoForm';
import { useSelector } from 'react-redux';
import MessageComponent from './MessageComponent';
import Restaurant from './Restaurant';

const UserInfo = () => {
  const message = useSelector(state=>state.userVisitInfo?.message);
  const restaurants = useSelector(state=>state.userVisitInfo?.visitInfo?.restaurants);

  return (
    <div className="userInfo">
      {!restaurants?.length ? <UserInfoForm /> : (
        <>
          <MessageComponent message={message} />
          <Restaurant restaurants={restaurants} />
        </>
      )}
    </div>
  );
};

export default UserInfo;
