import Axios from "axios";
const key = import.meta.env.VITE_YOUTUBE_API_KEYS;
const getPlayListitemsById = async (
  playlistId,
  nextPageToken = "",
  result = []
) => {
  const URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?key=${key}&part=contentDetails%2Csnippet&maxResults=50&playlistId=${playlistId}&pageToken=${nextPageToken}`;
  const { data } = await Axios.get(URL);

  result = [...result, ...data.items];
  if (data.nextPageToken) {
    result = getPlayListitemsById(playlistId, data.nextPageToken, result);
  }
  return result;
};
const getPlayListById = async (playlistId) => {
  const URL = `https://youtube.googleapis.com/youtube/v3/playlists?key=${key}&part=snippet&id=${playlistId}`;
  const { data } = await Axios.get(URL);

  const {
    title: playlistTitel,
    description: playlistDescription,
    thumbnails,
    channelId,
    channelTitle,
  } = data?.items[0]?.snippet;
  let playlistItems = await getPlayListitemsById(playlistId);
  playlistItems = playlistItems.map((item) => {
    const {
      description: videoDescription,
      thumbnails: { medium },
      title: videoTitel,
    } = item.snippet;
    const { videoId } = item.contentDetails;
    return {
      videoDescription,
      thumbnail: medium,
      videoTitel,
      videoId,
    };
  });
  return {
    channelId,
    channelTitle,
    playlistId,
    playlistTitel,
    playlistDescription,
    playlistThumbnail: thumbnails.default,
    playlistItems,
  };
};
export default getPlayListById;
