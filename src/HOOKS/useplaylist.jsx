import { useEffect, useState } from "react";
import getPlayListById from "../APIS/Api";
import Stroge from "../STORAGE";
const LOCAL_STORAGE_KEY = "playlist";
const INIT_STATE = {
  playlists: [],
  favorite: [],
  recent: [],
};
const useplaylist = () => {
  const [state, setState] = useState(INIT_STATE);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (state !== INIT_STATE) {
      Stroge.save(LOCAL_STORAGE_KEY, state);
    }
  }, [state]);
  useEffect(() => {
    const data = Stroge.get(LOCAL_STORAGE_KEY);
    if (data) {
      setState({ ...data });
    }
  }, []);
  const getPlaylistByID = async (playlistId, forced = false) => {
    if (state.playlists[playlistId] && !forced) return;
    setLoading(true);

    try {
      setError("");
      const Playlist = await getPlayListById(playlistId);
      setState((prev) => ({
        ...prev,
        playlists: { ...prev.playlists, [playlistId]: Playlist },
      }));
    } catch (error) {
      setError(
        error?.response?.data?.error?.message || "Somthing Went Wrong !!"
      );
    } finally {
      setLoading(false);
    }

    return {
      state: state.playlists[playlistId],
    };
  };
  const addToFavorite = (playlistId) => {
    if (state.favorite.includes(playlistId)) return;
    setState((prev) => ({
      ...prev,
      favorite: [...prev.favorite, playlistId],
    }));
  };
  const addToRecent = (playlistId) => {
    if (state.recent.includes(playlistId)) {
      console.log("Allready Exiset");
      return;
    }
    setState((prev) => ({
      ...prev,
      recent: [...prev.recent, playlistId],
    }));
  };

  const getPlaylistByids = (ids) => {
    if (!ids) return;
    const array = ids.map((id) => {
      return state.playlists[id];
    });
    return array;
  };
  const removeFormFavorite = (playlistId) => {
    const favoriteIds = state.favorite.filter((id) => id !== playlistId);
    setState((prev) => ({
      ...prev,
      favorite: [...favoriteIds],
    }));
  };
  const ClearRecents = () => {
    setState((prev) => ({
      ...prev,
      recent: [],
    }));
  };
  const ClearFavorites = () => {
    setState((prev) => ({
      ...prev,
      favorite: [],
    }));
  };
  return {
    playlists: state.playlists,
    favotites: state.favorite,
    error,
    loading,
    addToFavorite,
    getPlaylistByID,
    addToRecent,
    removeFormFavorite,
    ClearRecents,
    ClearFavorites,
    getFavorites: getPlaylistByids(state.favorite),
    getRecents: getPlaylistByids(state.recent).slice(-3),
  };
};
export default useplaylist;
