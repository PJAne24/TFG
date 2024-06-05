import React, { useRef, useState, useEffect } from 'react';
import { useSessionStorage } from '../../controlPanel/useSessionStorage';
import axios from 'axios';
import './profile.css';

const Profile = () => {
  const [user] = useSessionStorage('user', 'User');
  const [email] = useSessionStorage('email', 'descripcion');
  const [image, setImage] = useState("");

  const inputRef = useRef(null);
  const SERVER_URL = "http://localhost:8080"; // Ajusta esta URL a tu configuración real

  useEffect(() => {
    fetchProfileImage();
  }, []);

  const fetchProfileImage = async () => {
    try {
      const userId = sessionStorage.getItem('userId');
      const response = await axios.get(`${SERVER_URL}/User/user/${userId}`);
      const profileImage = response.data.profileImage;
      if (profileImage) {
        setImage(profileImage);
      }
    } catch (error) {
      console.error("Error fetching profile image:", error);
    }
  };

  const clickImage = () => {
    inputRef.current.click();
  }

  const changeImage = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
        sessionStorage.setItem('profileImage', base64String);
        setImage(base64String);
        uploadImage(base64String);
      };
      reader.readAsDataURL(file);
    }
  }

  const uploadImage = async (base64String) => {
    try {
      const userId = sessionStorage.getItem('userId');
      const formData = new FormData();
      formData.append('userId', userId);
      formData.append('image', base64String);

      await axios.put(`${SERVER_URL}/User/updateProfileImage`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log("Image uploaded successfully");
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  }

  return (
    <>
      <div className="profile-content">
        <div onClick={clickImage}>
          {image ? (
            <img src={`data:image/png;base64,${image}`} alt='fotoPerfil' className='profile-image'/>
          ) : (
            <img src="https://ximg.es/600x400/000/fff" alt="Profile" className="profile-image"/>
          )}
          <input type="file" name="imageProfile" id="imageProfile" onChange={changeImage} ref={inputRef} style={{display: "none"}}/>
        </div>
        <h2 className="profile-username">Nombre de Usuario: {user}</h2>
        <p className="profile-bio">Correo electrónico del usuario : {email}</p>
        {/* Otros detalles del perfil, como información adicional */}
      </div>
    </>
  );
}

export default Profile;
