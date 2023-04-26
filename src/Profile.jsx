import React from "react";

export default function Profile(props) {


    return (
        <div className="profile">
            <div className="profile--header">
                <img src={props.item.avatar} alt="" className="profile--pic" />
                <div className="profile-data">
                    <p className="user--name"><strong>{props.item.name}</strong></p>
                    <p className="location">{props.item.location}</p>
                </div>
            </div>
            <img src={props.item.post} alt="" className="post-pic" />
            <div className="socials">
                <img src="../public/images/icon-heart.png" alt="" className="icons" />
                <img src="../public/images/icon-comment.png" alt="" className="icons" />
                <img src="../public/images/icon-dm.png" alt="" className="icons" />
            </div>
            <p className="likes">{props.item.likes} likes</p>
            <p className="comment"><strong>{props.item.username}</strong>  {props.item.comment}</p>
        </div>

    )
}

