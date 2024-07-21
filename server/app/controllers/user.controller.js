const db = require('../models');
const bcrypt = require("bcrypt");
const User = db.users;

exports.login = (req , res) => {
    const {email, password} = req.body;
    console.log("Received email:", req.body);
    // console.log("Received password:", password);
    if(!email || !password){
        let response = {
            success: false,
            message: "Please Provide email and password."
        }
        return res.send(response);
    }

    try{
        User.findOne({
            attributes: ["id", "email", "password"],
            where: {
                email: req.body.email
            }
        }).then( async user => {
            if(!user){
                return res.send(
                    {
                        status: false,
                        message: "User with this email address not found."
                    }
                    
                );
            }
            else{
                bcrypt.compare(req.body.password, user.password, function(err, resp) {
                    console.log("bcrpt", resp)
                    if(!resp){
                        res.send({success: false, message: 'Passwords do not match'});
                    } 
                    else {
                        const response = {
                            success: true,
                            message: "Login Successfully!",
                            data: {
                                id: user.id,
                                email: user.email,
                            }
                        };
    
                        return res.send(response);
                    }
                  });
            }
        }).catch(err => {
            console.log(err);
            return res.status(500).send({success: false, message:"Sign in error"});
        });
    } catch(err){
        const response = {
            success: false,
            message: "An Error occured while logging in."
        }
        return res.send(response);
    };
};

exports.getUserData = async (req, res) => {
    const userId = req.params.userId;

    try {
        const user = await User.findByPk(userId);
        if (!user) {
            return res.send({
                success: false,
                message: "User not found."
            });
        }
        const { id, email } = user;

        return res.status(200).send({
            success: true,
            data: {
                id,
                email,
            }
        });
    } catch (error) {
        console.error("Error fetching user data:", error);
        return res.status(500).send({
            success: false,
            message: "Internal server error."
        });
    }
}