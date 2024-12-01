import { useContext, useState } from "react";
import "./ProfileUpdatePage.scss";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";
import { useNavigate } from "react-router-dom";
import noavatar from "../../picture/noavatar.png"
import UploadWidget from "../../components/uploadWidget/UploadWidget";

function ProfileUpdatePage() {
    const [error, setError] = useState("");
    const { currentUser, updateUser } = useContext(AuthContext);
    const [avatar, setAvatar] = useState(currentUser.avatar);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);

      const { username, email, password } = Object.fromEntries(formData);

      try {
        const res = await apiRequest.put(`/users/${currentUser.id}`, {
          username,
          email,
          password,
          avatar:avatar
        });
        updateUser(res.data);        
        navigate("/profile");
      } catch (err) {
        console.log(err);
        setError(err.response.data.message);
      }
    };

  return (
    <div className="profileUpdatePage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Update Profile</h1>
          <div className="item">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
            defaultValue={currentUser.username}
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
            defaultValue={currentUser.email}
            />
          </div>
          <div className="item">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" />
          </div>
          <button>Update</button>
          {error && <span>error</span>}
        </form>
      </div>
      <div className="sideContainer">
        <img src={avatar || noavatar} alt="" className="avatar" />
        <UploadWidget
          uwConfig={{
            cloudName: "dwhnnpcyd",
            uploadPreset: "marketOnline",
            multiple: false,
            maxImageFileSize: 2000000,
            folder: "avatars",
          }}
          setAvatar={setAvatar}
        />
      </div>
    </div>
  );
}

export default ProfileUpdatePage;
