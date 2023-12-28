// src/components/Friend.js
import React from "react";

export default function Friend({ friend, onSelected, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;

  const handleFriendSelection = () => {
    onSelected(friend);
  };

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          Kamu berhutang Rp{Math.abs(friend.balance)} ke {friend.name}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} berhutang Rp{Math.abs(friend.balance)} ke kamu
        </p>
      )}
      {friend.balance === 0 && <p>Kamu dan {friend.name} tidak ada hutang</p>}
      <button className="button" onClick={handleFriendSelection}>
        {isSelected ? "Tutup" : "Pilih"}
      </button>
    </li>
  );
}
