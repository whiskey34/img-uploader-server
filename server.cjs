const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const serveStatic = require('serve-static');
const helmet = require('helmet');
const path = require('path');


dotenv.config();

const app = express();

app.use(express.json());
app.use(express.static('/dist'));
app.use(helmet({ crossOriginEmbedderPolicy: false, originAgentCluster: true }));
app.use(
  helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: {
      "img-src": ["'self'", "https: data: blob:"],
    },
  })
);
app.use(cors());
app.use(serveStatic(__dirname + '/dist'));

mongoose
  .connect(process.env.CONN_URL, {
    
    useNewUrlParser: true,
   
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongoDB is connected"))
  .catch((err) => console.log(err));

app.use("/upload", require("./routes/upload.cjs"));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server Running On localhost:${port}`));