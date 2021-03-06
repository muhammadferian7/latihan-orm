const model = require('../models')
const { genSalt, hash, compareSync } = require('bcrypt')
const jwt = require('jsonwebtoken')



const cryptPassword = async (password) => {
    const salt = await genSalt(12)
    
    return hash(password, salt)
}


module.exports = {
    register: async (req, res) => {
        try {
            
            const data = await model.user.create({
                username: req.body.username,
                firstName : req.body.firstName,
                lastName : req.body.lastName,
                password : await cryptPassword(req.body.password),
                email : req.body.email
            })

            return res.status(200).json({
                "success" : true,
                "error" : 0,
                "message" : "user successfully registered",
                "data" : data
            })

        } catch (error) {
            return res.status(500).json({
                "success" : false,
                "error" : error.code,
                "message" : error,
                "data" : null
            })
        }
    },
    login: async (req, res) => {
        try {
            const userExists = await model.user.findOne({
                where: {
                    username : req.body.username
                }
            })

            if(!userExists)
                return res.status(404).json({
                    "success" : false,
                    "error" : 404,
                    "message" : 'user not found',
                    "data" : null
                })
            
            if (compareSync(req.body.password, userExists.password)) {
                const token = jwt.sign(
                    { id: userExists.id, username: userExists.username, email: userExists.email },
                    'password!23',
                    { expiresIn: '12h' }
                )
            
                return res.status(200).json({
                    "success" : true,
                    "error" : 0,
                    "message" : "user successfully login",
                    "data" : {
                        "token" : token
                    }
                })
            }
        
            return res.status(409).json({
                "success" : false,
                "error" : 409,
                "message" : "invalid Credentials",
                "data" : null
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                "success" : false,
                "error" : error.code,
                "message" : error,
                "data" : null
            })
        }
    }
}