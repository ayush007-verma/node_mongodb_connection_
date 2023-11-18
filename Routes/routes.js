
const express = require("express")
const mongoose = require("mongoose")
const router = express.Router()
const testUsers = require("./../Model/userSchema")

router.get('/', (req, res) => {
    res.send("Working fine...")
})

router.get('/signup', (req, res) => {

    const user = new testUsers({
        user_id: new mongoose.Types.ObjectId(),
        username: "sambhav",
        password: "admin1"
    })

    const savedUser = user.save()
        .then((res) => {
            console.log("successfully saved data...")
        }).catch((err) => {
            console.log("error while saving data...", err)
        })

    console.log("saved User :-> ", savedUser)

    res.send("sending info to db")
})

router.get("/getAllUsers", (req, res)=>{
    
    testUsers.find()
    .then(result => res.status(200).json({ message: 'All Users', users: result }))
    .catch(error => res.status(500).json({ message: 'Server Error', err: error }))

} )

module.exports = router