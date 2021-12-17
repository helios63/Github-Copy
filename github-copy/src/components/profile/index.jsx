import React from 'react'
import { ProfileBlock, Avatar, Button, Link } from './styles'
import avatarbig from "./avatar-big.jpg";
import round from "./round.png";
import square from "./square.png";
import triangle from "./triangle.png";

const ProfileComponent = () => (
  <ProfileBlock>
    <Avatar src={avatarbig} alt="Profile picture" />
    <div>
      <h2 className="mt-2">Leandra</h2>
      <h3>@leandra_78</h3>
      <p>
        Originally from Paris (France), I graduated from the full-stack web
        development bootcamp @ Le Wagon Barcelona.
      </p>
      <Button>Edit Profile</Button>
      <div className="flex text-sm my-4">
        <div className="mr-4">
          <span>85</span> <strong>followers</strong>
        </div>
        <div>
          <span>12</span> <strong>following</strong>
        </div>
      </div>
      <div>
        <Link>
          <img className="object-contain mr-3" src={round} alt="round" />
          <a href="#">Barcelona</a>
        </Link>
        <Link>
          <img className="object-contain mr-3" src={triangle} alt="triangle" />
          <a href="#">Freelancer</a>
        </Link>
        <Link>
          <img className="object-contain mr-3" src={square} alt="square" />
          <a href="#">leandra78.me</a>
        </Link>
      </div>
    </div>
  </ProfileBlock>
);

export default ProfileComponent
