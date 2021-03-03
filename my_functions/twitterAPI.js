const fetch = require("node-fetch");
const Twit = require("twit");

const API_ENDPOINT = "https://cat-fact.herokuapp.com/facts";

var T = new Twit({
  consumer_key: "onFsZbUz23wNU21wDEqGcHbf0",
  consumer_secret: "D6f8gaMfemGPfM6u73lLOZUooCYZwLzM8XLdnSXjlOse5p9dTs",
  access_token: "224845357-zhS1TiAlQo6JbQmbGOC9QeZzpQsB1asc48XVmdAt",
  access_token_secret: "Y9caJI6a8GOzmYmcjuKFFE2B4H9J7qFTZ3AdSwO1U2yZe",
  timeout_ms: 60 * 1000 // optional HTTP request timeout to apply to all requests.
});

exports.handler = async (event, context) => {
  let response;
  try {
    response = T.get(
      "statuses/user_timeline",
      { screen_name: "ARCtalk", count: 20, tweet_mode: "extended" },
      function(err, data, response) {
        if (err) {
          console.log(err.stack);
        }

        return data;
      }
    );
    // handle response
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({
        error: err.message
      })
    };
  }

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify({
      data: response
    })
  };
};
