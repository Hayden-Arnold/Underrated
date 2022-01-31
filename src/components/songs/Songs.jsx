import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteSong } from "../../services/songs";
import "./songs.css";

export default function Songs({ songs, handleSongDelete, setToggle }) {
  return (
    <div>
      {songs.map((song) => (
        <div class="grid">
          <Link to={`/edit/${song.id}`} key={song.id}>
            <h1>{song.name}</h1>
            <h3>{song.genre}</h3>
            <h3>{song.extra}</h3>
            <h3>{song.artist}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}
