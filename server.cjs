const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const serveStatic = require('serve-static');
const helmet = require('helmet');


dotenv.config();

const app = express();

app.use(express.json());
app.use('static', express.static('/dist'));
app.use(helmet());
app.use(cors());
app.use(serveStatic('/dist'));

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