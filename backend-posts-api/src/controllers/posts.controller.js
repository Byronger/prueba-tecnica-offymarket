const { getGroupedPosts } = require('../services/posts.service');

const getPosts = async (req, res) => {
  try {
    const { name } = req.query;

    const data = await getGroupedPosts(name);
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching external posts' });
  }
};

module.exports = { getPosts };