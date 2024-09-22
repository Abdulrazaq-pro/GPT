const axios = require("axios");

module.exports = async (req, res) => {
  // Get the Upwork profile URL from the request body
  const { profile_url } = req.body;

  // ParseHub API key and project token
  const api_key = "tznYi2Zk2jui";
  const project_token = "tbM2wLA_DcGT";

  try {
    // Make the API call to ParseHub to run the project with the dynamic URL
    const response = await axios.post(
      `https://www.parsehub.com/api/v2/projects/${project_token}/run`,
    //   `https://www.parsehub.com/api/v2/projects/tbM2wLA_DcGT/run`,
      {
        api_key: api_key,
        start_url: profile_url,
      }
    );

    // Return the response from ParseHub API
    res.status(200).json(response.data);
  } catch (error) {
    res
      .status(500)
      .json({
        error: "Error triggering ParseHub project",
        details: error.message,
      });
  }
};
