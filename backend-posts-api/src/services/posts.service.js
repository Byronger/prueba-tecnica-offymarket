const axios = require('axios');

const EXTERNAL_API =
  'https://687eade4efe65e5200875629.mockapi.io/api/v1/posts';

const getGroupedPosts = async (nameFilter) => {
  const response = await axios.get(EXTERNAL_API);
  const posts = response.data;

  if (!Array.isArray(posts)) {
    return [];
  }

  const grouped = posts.reduce((acc, post) => {
    if (!post || !post.name) return acc;

    if (nameFilter && post.name !== nameFilter) return acc;

    acc[post.name] = (acc[post.name] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(grouped).map(([name, count]) => ({
    name,
    count
  }));
};

module.exports = { getGroupedPosts };