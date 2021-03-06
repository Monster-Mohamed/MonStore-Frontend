import React, { useContext } from "react";
import AuthContext from "../../../store/Auth";
import cl from "./index.module.scss";
import AppURL from "./../../../api/AppURL";

const ProfileMain = () => {
  const { user, loggedIn } = useContext(AuthContext);
  const imageArray = user?.profile_photo_url.split("/").length;
  const imageName = user?.profile_photo_url.split("/")[imageArray - 1];
  return (
    <>
      <div className={cl.parent}>
        <div className="col-md-8">
          <div className={`card ${cl.card}`}>
            <div className="card-body little-profile text-center">
              <div className={cl.proImg}>
                {loggedIn && user?.id ? (
                  <img
                    src={`${AppURL.UserPhoto}/${imageName}`}
                    alt="Your Avatar"
                    width={300}
                    style={{ borderRadius: "7px" }}
                  />
                ) : (
                  <img
                    className="img_cart_load"
                    src="https://thumbs.gfycat.com/ConventionalOblongFairybluebird-size_restricted.gif"
                  />
                )}
              </div>
              <h3 className="m-b-0 mt-3">{user?.name}</h3>
              <p>{user?.email}</p>
              <div className="row text-center m-t-20">
                <div className="col-lg-4 col-md-4 m-t-20">
                  <h3 className="m-b-0 font-light">10</h3>
                  <small>Buy Products</small>
                </div>
                <div className="col-lg-4 col-md-4 m-t-20">
                  <h3 className="m-b-0 font-light">25</h3>
                  <small>Favourites</small>
                </div>
                <div className="col-lg-4 col-md-4 m-t-20">
                  <h3 className="m-b-0 font-light">Premium</h3>
                  <small>Status</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileMain;
