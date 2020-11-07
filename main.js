const express = require('express');
const path = require('path');
const config = require('config');
const mongoose = require('mongoose');


const app = express();
app.use(express.json({ extended: true }))
async function start() {

    try {
        await mongoose.connect(config.get('mongoUrl'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })

        app.listen(PORT, () => {
            console.log(`Server is running of ${PORT}`)
        })
    } catch (e) {
        console.log(`Server error - ${e.message}!`)
        process.exit(1);
    }
}

app.use('/', express.static(path.join(__dirname, 'client', 'build')))
app.use('/api', require('./routes/apiRouter'))
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})

const PORT = process.env.PORT || config.get("port");


start();
