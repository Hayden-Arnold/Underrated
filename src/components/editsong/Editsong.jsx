import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react";
import { getSong, putSong } from "../../services/songs";
import { useNavigate } from "react-router";
import { deleteSong } from "../../services/songs";

export default function Editsong() {
  let navigate = useNavigate();
  const [song, setSong] = useState({
    name: "",
  });

  let { id } = useParams();

  useEffect(() => {
    const findSong = async () => {
      const foundSong = await getSong(id);
      setSong(foundSong);
    };
    findSong();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSong((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await putSong(id, song);
    navigate(`/`);
  };

  const handleSongDelete = async (e) => {
    e.preventDefault();
    await deleteSong(id);
  };

  return (
    <div>
      <label>Song Name: </label>
      <input
        className="input"
        name="name"
        value={song.name}
        required
        autoFocus
        placeholder="Song Name"
        onChange={handleChange}
      />
      <button onClick={handleSubmit} type="submit">
        Submit
      </button>
      <button onClick={handleSongDelete}>Delete</button>
    </div>
  );
}
