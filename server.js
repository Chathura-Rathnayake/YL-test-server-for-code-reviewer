const http = require("http");
const axios = require("axios");

const port = process.env.PORT || 3000;

//make an http request to a public api - https://api.coindesk.com/v1/bpi/currentprice.json

async function get_bitcoin_prices() {
  let resp = await axios({
    method: "get",
    url: "https://api.coindesk.com/v1/bpi/currentprice.json",
  });

  return resp;
}

let xx = await get_bitcoin_prices();
console.log(xx);

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello, World!\n");
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
