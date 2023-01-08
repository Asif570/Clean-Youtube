import axios from "axios";

const usePlay = async (videoId) => {
  const key = import.meta.env.VITE_YOUTUBE_API_KEYS;
  const URL = `https://youtube.googleapis.com/youtube/v3/videos?part=player&id=${videoId}&key=${key}`;
  const { data } = await axios.get(URL);
  const result = data.items[0].player.embedHtml;

  return result;
};
export default usePlay;
