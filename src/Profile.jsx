import React from "react";

export default function Profile() {
    return (
        <div className="profile">
            <div className="profile--header">
                <img src="../public/images/avatar-courbet.jpg" alt="" className="profile--pic" />
                <div className="profile-data">
                    <p className="user--name">Joshua Ombasa</p>
                    <p className="location">Manga Nyamira</p>
                </div>
            </div>
            <img src="../public/images/avatar-courbet.jpg" alt="" className="post-pic" />
            <div className="socials">
                <img src="../public/images/icon-heart.png" alt="" className="icons" />
                <img src="../public/images/icon-comment.png" alt="" className="icons" />
                <img src="../public/images/icon-dm.png" alt="" className="icons" />
            </div>
            <p className="likes">21 likes</p>
            <p className="comment">I just learnt React.</p>
        </div>

    )
}