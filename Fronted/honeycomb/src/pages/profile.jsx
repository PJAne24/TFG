import React from 'react';
import { useSessionStorage } from '../admin/useSessionStorage';

const Profile = () => {
  const [user] = useSessionStorage('user', 'User');
  const [email] = useSessionStorage('email', 'descripcion');

  return (
    <>
      <div className="profile-content">
        <img src="https://ximg.es/600x400/000/fff" alt="Profile" className="profile-image" />
        <h2 className="profile-username">Nombre de Usuario: {user}</h2>
        <p className="profile-bio">Correo electrónico del usuario : {email}</p>
        {/* Otros detalles del perfil, como información adicional */}
      </div>
    </>
  );
}

export default Profile;
