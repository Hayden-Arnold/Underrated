import { useState } from "react";
import "./addsong.css";
import { useNavigate } from "react-router-dom";
import { postSong } from "../../services/songs";

function Addsong({ artists, setToggle }) {
  let nav = useNavigate();

  const [song, setSong] = useState({
    name: "",
    genre: "",
    extra: "",
    artist: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSong({
      ...song,
      [name]: value,
    });
  };

  const handleSelectChange = (e) => {
    const { selectedIndex, childNodes } = e.target;

    const id = Number(childNodes[selectedIndex].id);
    setSong({
      ...song,
      artist: id,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postSong(song);
    nav("/");
    setToggle((prevToggle) => !prevToggle);
  };

  return (
    <div>
      <div className="create-form">
        <h1>ADD A SONG</h1>
        <form onSubmit={handleSubmit}>
          <label>Song Name:</label>
          <input
            placeholder="Song Name"
            value={song.name}
            name="name"
            required
            onChange={handleChange}
          />
          <label>Genre:</label>
          <input
            placeholder="Genre"
            value={song.genre}
            name="genre"
            required
            onChange={handleChange}
          />
          <label>Extra Info:</label>
          <input
            placeholder="extra info"
            value={song.extra}
            name="extra"
            required
            onChange={handleChange}
          />
          <label>Artist:</label>
          <select onChange={handleSelectChange}>
            {artists.map((artist) => (
              <option key={artist} id={artist.id} value={artist.name}>
                {artist.name}
              </option>
            ))}
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Addsong;
