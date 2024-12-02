import React, { useContext } from "react";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import qzone1 from "../../../assets/qzone1.png";
import qzone2 from "../../../assets/qzone2.png";
import qzone3 from "../../../assets/qzone3.png";
import {  GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../../firbase/firebase.config";


const RightSideNav = () => {

  const auth = getAuth(app)
  const provider = new GoogleAuthProvider()
  const handleGoogleLogIn = (e) => {
    console.log('clicked',e);
    signInWithPopup(auth,provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => console.error(error));
  };
  return (
    <div>
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl font-bold">Login With</h2>
        
        <button
          onClick={handleGoogleLogIn}
          className="btn btn-outline btn-success"
        >
          <FaGoogle /> Login with Google
        </button>
        <button className="btn btn-outline btn-warning">
          <FaGithub />
          Login with GitHub
        </button>
      </div>
      <div className="p-4 mb-6">
        <h2 className="text-3xl font-bold">Find Us</h2>
        <a
          className="p-4 flex text-lg items-center border rounded-t-lg"
          href="https://www.facebook.com/"
        >
          <FaFacebook className="mr-4" />
          Facebook
        </a>
        <a
          className="p-4 flex text-lg items-center border-x"
          href="https://x.com/"
        >
          <FaTwitter className="mr-4" />
          Twitter X
        </a>
        <a
          className="p-4 flex text-lg items-center border rounded-b-lg"
          href="https://www.instagram.com/"
        >
          <FaInstagram className="mr-4" />
          Instagram
        </a>
      </div>
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl font-bold">Q Zone</h2>
        <img src={qzone1} alt="" />
        <img src={qzone2} alt="" />
        <img src={qzone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
