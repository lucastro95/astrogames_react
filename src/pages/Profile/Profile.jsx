import React from "react";
import { ProfileCard, ProfileWrapper } from "./ProfileStyles";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { auth } from "../../firebase/firebase-utils";
import MisOrdenes from "../../components/MisOrdenes/MisOrdenes";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();

  return (
    <ProfileWrapper>
      <ProfileCard>
        <img
          src={
            currentUser.photoURL || currentUser.photoURL !== null
              ? currentUser.photoURL
              : "https://res.cloudinary.com/duafuhu8k/image/upload/v1668786918/astrogames/not-found_ldatrh.jpg"
          }
          alt="Foto Perfil"
        />
        <div>
          <h3>{currentUser.displayName}</h3>
          <button onClick={() => auth.signOut().then(() => navigate("/"))}>
            Cerrar Sesión
          </button>
        </div>
      </ProfileCard>
      <MisOrdenes />
    </ProfileWrapper>
  );
};

export default Profile;
