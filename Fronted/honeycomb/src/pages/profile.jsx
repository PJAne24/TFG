import React from 'react';

const Profile = () => {
  return (
    <>
      <div className="profile-content">
        <img src="https://ximg.es/600x400/000/fff" alt="Profile" className="profile-image" />
        <h2 className="profile-username">Nombre de Usuario</h2>
        <p className="profile-bio">Breve descripción o biografía del usuario.</p>
        {/* Otros detalles del perfil, como información adicional */}
      </div>
    </>
  );
}

export default Profile;
