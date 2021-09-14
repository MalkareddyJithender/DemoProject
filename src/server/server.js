const express = require('express');
const multer = require('multer');

const app = express();
const port = process.env.PORT || 3000;

const upload = multer({
    dest:'avatars',
    limits: {
    fileSize: 1000000
    }
   });
//multer takes images and store it buffer data in avatars directory
app.post("upload1",upload.single('avatar'),(req,res) =>
{
    res.send();
});

//saves to database on avatar field
app.post("/upload2",auth,upload.single('avatar'),async (req,res) =>
{
    req.user.avatar = req.file.buffer;
    await req.user.save();
    res.send().status(200);
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
   });

app.listen(port,() =>
{
    console.log(`server is up on port ${port}`);
});