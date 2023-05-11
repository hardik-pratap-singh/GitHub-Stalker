require("dotenv").config()
const express = require("express")
const app = express();
const cors = require("cors")
app.use(cors());
const fetch = require("node-fetch"); 


app.get("/:username", async (req, res) => {
    const username = req.params.username;

    try {
        const resp = await fetch(`https://api.github.com/users/${username}`)
        const data = await resp.json();

        // if (Object.keys(data).length == 2) {
        //     res.status(404).json({ "success": false })
        // }
        // else {
        //     res.status(200).json({
        //         "success": true,
        //         data
        //     })
        // }

        res.status(200).json({
                    "success": true,
                    data
        })

    } catch (error) {
        console.log({"err" : error.msg}) ; 
    }

})

app.listen(process.env.PORT || 5000, () => {
    console.log("server @ 5000")
})