import React from "react";

export default function Profile(props) {


    return (
        <div className="profile">
            <div className="profile--header">
                <img src={props.avatar} alt="" className="profile--pic" />
                <div className="profile-data">
                    <p className="user--name"><strong>{props.name}</strong></p>
                    <p className="location">{props.location}</p>
                </div>
            </div>
            <img src={props.post} alt="" className="post-pic" />
            <div className="socials">
                <img src="../public/images/icon-heart.png" alt="" className="icons" />
                <img src="../public/images/icon-comment.png" alt="" className="icons" />
                <img src="../public/images/icon-dm.png" alt="" className="icons" />
            </div>
            <p className="likes">{props.likes} likes</p>
            <p className="comment"><strong>{props.username}</strong>  {props.comment}</p>
        </div>

    )
}

