const express = require("express");
const morgan = require("morgan");

require("./config/database");
const methodOverride = require("method-override");
const port = 3000;

const indexRouter = require("./routes/index");
// const showRouter = require("./routes/show");
// const reviewsRouter = require("./routes/reviews");
// const performersRouter = require("./routes/performers");

const app = express();

app.set("view engine", "ejs");

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(methodOverride("_method"));

app.use("/", indexRouter);
// app.use("/movies", moviesRouter);
// app.use("/", showRouter);
// app.use("/", performersRouter);


app.listen(port, function () {
  console.log(`Express is listening on port:${port}`);
});