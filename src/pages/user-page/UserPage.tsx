import React from 'react';
import { Routes, Route} from "react-router-dom";
import { UserEdit } from '../../components/user/user-edit/UserEdit';


export const UserPage: React.FC = () => {
  return (
    <div id="user-page">
      <Routes>
        <Route path='edit' element={ <UserEdit /> } />
      </Routes>
    </div>
  )
}
