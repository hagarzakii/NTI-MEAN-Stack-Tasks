const fs = require("fs");
const http = require("http");
const url = require("url");
const nunjucks = require("nunjucks");

const data = fs.readFileSync(`${__dirname}/data.json`, "utf-8");
const posts = JSON.parse(data);

const template = fs.readFileSync("index.html", "utf-8");

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);

  if (pathname === "/" || pathname === "/home") {
    res.writeHead(200, { "Content-Type": "text/html" });

    const html = nunjucks.renderString(template, { posts });
    res.end(html);
  } else if (pathname === "/post") {
    res.writeHead(200, { "Content-Type": "text/html" });

    const post = posts.find((p) => p.id == query.id);
    if (!post) {
      res.end("<h1>Post not found</h1>");
    } else {
      const html = nunjucks.renderString(template, post);
      res.end(html);
    }
  } else if (pathname === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(posts));
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>Page not found! Error 404</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Server is running on http://127.0.0.1:8000");
});
