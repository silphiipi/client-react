import React from "react"
import Typical from 'react-typical'
import './Profile.css';

export default function profile(){
    return(
        <div className="profile-container">
              <div className="profile-parent">
              <div className="profile-details">
              <div className="profile-colz">
                <div className="colz-icon">

                </div>
                <a href="https://www.facebook.com/checkpoint/828281030927956/">
                    <i className="fa fa-facebook-square"></i>
                </a>
                <a href="#">
                    <i className="fa fa-googel-plus-square"></i>
                </a>
                <a href="https://www.instagram.com/iyaslvii/">
                    <i className="fa fa-instagram"></i>
                </a>
                <a href="#">
                    <i className="fa fa-youtube-square"></i>
                </a>
            

              </div>
              <div className="profile-details-name">
                <span className="primary-text">
                    {" "}
                    Hello,, <span className=".text-light">Semuaaaa😊</span>
                </span>
             </div>
             <div className='profile-details-role'></div>
             <span className="primary-text">
                    {" "}
                    <h1>
                        {" "}
                        <Typical
                        loop={Infinity}
                        steps={[
                            "Silviana Savara",
                            1000,
                            "Smkn 6 Jember",
                            1000,
                            "Rekayasa Perangkat Lunak",
                            1000,
                        ]}
                        />
                    </h1>
                    <div className="profile-optins">
                <button className="btn primary-btn">
                    {""}
                    AboutMe{" "}
                </button>
                
             </div>
                    <span className="profile-role-tagline">
                        Saya Silvi siswa dari sekolah SMKN 6 JEMBER 
                        Jurusan REKAYASA PERANGKAT LUNAK.
                        Terimakasih😊

                    </span>
                    </span>
             
             </div>
           </div>
           <div className="profile-picture">
            <div className="profile-picture-background"></div>
           </div>
        </div>
    );
}