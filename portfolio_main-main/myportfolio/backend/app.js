const express = require('express')
const app = express()
const sendemail = require('./sendemail')
const mongoose = require('mongoose')
const PORT = 5000
const { MONGOURI } = require('./keys')
const Forms = require("./model/forms")
const bodyParser = require('body-parser')
const path = require("path")
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
//connection to mongodb
mongoose.connect(MONGOURI)
mongoose.connection.on('connected', () => {
    console.log("connected to mongo");
})

mongoose.connection.on('error', (err) => {
    console.log("error", err);
})

if (process.env.NODE_ENV !== "PRODUCTION") {
    dotenv.config({ path: "backend/config.env" });
}

app.get('/', (req, res) => {
    res.send('helloworld!')
})
app.post('/savedata', async (req, res, next) => {
    const { name, email, message } = req.body
    if (!name || !email || !message) {
        return res.status(422).json({ error: "Enter all the fields" });
    }
    sendEmail({
        email: user.email,
        subject: "Reset Password",
        msg: "Hi this is Chakradhar , Thankyou for Subscribing to the newsletter, Enjoy surfing the Tech",
    });

    response.status(200).json({
        success: true,
        message: `Email sent to ${user.email}`,
    });
    const form = await Forms.create({ name, email, message })
    res.status(200).json({ form })

})
app.use(express.static(path.join(__dirname, "../my-portfolio/build")))
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../my-portfolio/build/index.html"));
});

app.listen(PORT, () => {
    console.log("server is running on ", PORT);
})