const fetch = require("node-fetch");

const handler = async (req, res) => {
  const { username } = req.query;

  let url = `https://api.twitter.com/2/users/by?user.fields=profile_image_url&usernames=${username}`;

  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        Authorization: process.env.REACT_APP_TWITTER_BEARER_TOKEN,
      },
    });

    if (!response.ok) {
      res.status(response.status).json(response.statusText);
    } else {
      const data = await response.json();

      return res.status(200).json(data);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export default handler;
