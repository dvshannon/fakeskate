require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
// from video but doesn't work
// const db = mongoose.connect
// db.on('error'), (err) => console.error(err);
// db.once('open', () => console.log('DB Connected!'));

.then(()=>{ console.log('connection to database established') })
.catch(err=>{ console.log(err) })


app.use(express.json())


const skatersRouter = require('./routes/skaters');
app.use('/skaters', skatersRouter)
app.listen(3000, () => console.log('server has started'));