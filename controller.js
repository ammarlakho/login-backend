const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },

})

const User = mongoose.model('User', userSchema);

// module.exports = User;

exports.register = (req, res) => {
    console.log("Register")
    console.log(req.body)
    if(!req.body) {
        res.status(400).send({message: "Content cannot be empty!"});
        return;
    }

    // Save user
    var user = new User(req.body);
    user.save((err, user) => {
        if (err) {
            if(err.code==11000) {
                res.status(400).send({message: "You already have an account!"});
            }
            else {
                res.status(400).send({message: "Some error in creating new account"});
            }
            return;
        }
        else {
            res.json(user);
        }
    });
}

exports.login = (req, res) => {
    console.log("Login")
    console.log(req.body)
    if(!req.body) {
        res.status(400).send({message: "Content cannot be empty!"});
        return;
    }
    
    User.findOne({
        email: req.body.email,
        password: req.body.password
    })
    .then(user => {
        console.log(user)
        if(!user) {
            res.status(404).send({message: "Invalid credentials"})
        }
        else {
            res.send(user)
            console.log('hi')
        }
    })
    .catch(err => {
        res.status(500).send({message: "Error in  getting user"})
    })
}

exports.deleteAll = (req, res) => {
    console.log("Delete All")
    
    User.deleteMany({}, (err, result) => {
        if(err) {
            res.status(500).send({message: "Error in deleting all users"})
        }
        else {
            res.send({message: "All users deleted"})
        }
    })
}

exports.findAll = (req, res) => {
    console.log("Find All")
    // User.find()
    //     .then(student => {
    //         res.send(student)
    //     })
    //     .catch(err => {
    //         res.status(500).send({message: err.message || "Some error occurred while doing get on student/students"})
    //     })

    User.find({}, (err, result) => {
        if(err) {
            res.status(500).send({message: "Error in finding all users"})
        }
        else {
            res.send(result)
        }
    })
}
    






    // Validate email
    // User.find({
    //     email: req.body.email,
    // })
    // .then(user => {
    //     if(user.length > 0) {
    //         res.status(400).send({message: "You already have an account!"})
    //         return;
    //     }
    // })
    // .catch(err => {
    //     res.status(500).send({message: "Error in validating email"})
    // })
    // console.log("HERE")