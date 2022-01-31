import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { getSongs, deleteSong } from "./services/songs";
import { logOut, verifyUser } from "./services/user";
import { getArtists } from "./services/artists";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Login from "./components/login/Login";
import Songs from "./components/songs/Songs";
import Addsong from "./components/addsong/Addsong";
import Editsong from "./components/editsong/Editsong";
import Contactme from "./components/contactme/Contactme";
import Nav from "./components/nav/Nav";

const App = () => {
  const [songs, setSongs] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [artists, setArtists] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArtists = async () => {
      const artistsData = await getArtists();
      setArtists(artistsData);
    };
    fetchArtists();
  }, []);

  useEffect(() => {
    const fetchSongs = async () => {
      const songsData = await getSongs();
      setSongs(songsData);
    };
    fetchSongs();
  }, [toggle, loggedIn]);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const res = await verifyUser();
  //     res ? setLoggedIn(true) : setLoggedIn(false);
  //   };
  //   fetchUser();
  // }, []);

  const handleSongDelete = async (id) => {
    await deleteSong(id);
    setToggle((prev) => !prev);
  };

  const handleLogout = async () => {
    await logOut();
    setLoggedIn(false);
    navigate("/");
  };

  return (
    <div className="App">
      <Header handleLogout={handleLogout} />
      <div className="container">
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <Songs
                songs={songs}
                handleSongDelete={handleSongDelete}
                setToggle={setToggle}
              />
            }
          />
          <Route path="/addsong" element={<Addsong artists={artists} />} />
          <Route path="/login/" element={<Login setLoggedIn={setLoggedIn} />} />
          <Route path="/edit/:id" element={<Editsong />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
