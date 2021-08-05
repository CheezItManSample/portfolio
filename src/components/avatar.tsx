import React from 'react';
import { FiTwitter, FiLinkedin } from "react-icons/fi";

type AvatarProps = {
    owner: string,
    avatarPic: string,
};

const Avatar = ({ owner, avatarPic }: AvatarProps) => {
    return <div>
        <img className="portfolio__avatar" src={avatarPic} alt={owner} />
          <h1><a href="/">{owner}</a></h1>
          <div className="portfolio__social">
            <FiTwitter />
            <FiLinkedin />
          </div>
    </div>;
}

export default Avatar;