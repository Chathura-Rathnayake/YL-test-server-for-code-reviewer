const http = require("http");
const axios = require("axios");

const port = process.env.PORT || 3000;

//make an http request to a public api - https://api.coindesk.com/v1/bpi/currentprice.json

async function get_bitcoin_prices() {
  await axios({
    method: "get",
    url: "https://api.coindesk.com/v1/bpi/currentprice.json",
  }).then(
    (response) => {
      console.log(response);
    },
    (error) => {
      console.log(error);
    }
  );
}

get_bitcoin_prices();

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello, World!\n");
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
