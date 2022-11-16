import React from 'react'
import { ProfileCard, ProfileWrapper } from './ProfileStyles'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { auth } from '../../firebase/firebase-utils';


const Profile = () => {
    const { currentUser } = useSelector(state => state.user);
    const navigate = useNavigate();

  return (
    <ProfileWrapper>
        <ProfileCard>
            <img src={currentUser.photoURL ? currentUser.photoURL : 'https://i.ibb.co/tqZthhy/not-found.jpg'} alt="Foto Perfil" />
            <div>
                <h3>{currentUser.displayName}</h3>
                <button onClick={() =>
              auth
                .signOut()
                .then(() => navigate('/'))
            }>Cerrar Sesión</button>
            </div>
        </ProfileCard>
    </ProfileWrapper>
  )
}

export default Profile