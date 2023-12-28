// src/components/FriendList.js

import React from "react";
import Friend from "./Friend";

export default function FriendList({ friends, onSelected, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend} onSelected={onSelected} selectedFriend={selectedFriend} />
      ))}
    </ul>
  );
}
