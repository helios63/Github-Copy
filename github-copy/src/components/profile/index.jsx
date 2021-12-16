import React from 'react'
import { ProfileBlock, Avatar, Button, Links } from './styles'
import avatarbig from "./avatar-big.jpg";
import round from "./round.png";
import square from "./square.png";
import triangle from "./triangle.png";

const ProfileComponent = () => (
  <ProfileBlock>
    <Avatar src={avatarbig} alt="Profile picture"/>
    <h2 className="mt-2">Leandra</h2>
    <h3>@leandra_78</h3>
    <p>Originally from Paris (France), I graduated from the full-stack web development bootcamp @ Le Wagon Barcelona.</p>
    <Button>Edit Profile</Button>
    <div className="flex text-sm my-4">
      <div className="mr-4">85 <strong>followers</strong></div>
      <div>12 <strong>following</strong></div>
    </div>
    <Links>
      <div className="flex flex-col justify-between mr-3"><img className="object-contain" src={round} /><img className="object-contain" src={triangle} /><img className="object-contain" src={square} /></div>
      <div className="flex flex-col justify-between"><a href="#">Barcelona</a><a href="#">Freelancer</a><a href="#">leandra78.me</a></div>
    </Links>
  </ProfileBlock>
)

export default ProfileComponent