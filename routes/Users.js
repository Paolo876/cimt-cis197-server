const express = require("express");
const router = express.Router();
const { Users, UserRoles, RoleCategories } = require("../models");     
const { sign } = require('jsonwebtoken');
const { validateToken } = require("../middlewares/authMiddleware");
const { QueryTypes } = require('sequelize');

// login
router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const user = await Users.findOne({where: { username },        
        // attributes: {
        //     exclude: ['createdAt', 'updatedAt'],
        // },
        // include: {
        //     model: UserRoles,
        //     required: true,
        //     attributes: {
        //         exclude: ['username', 'createdAt', 'updatedAt', 'id', "RoleCategoryId"],
        //     },
        //     include: {
        //         model: RoleCategories,
        //         required: true,
        //         attributes: {
        //             exclude: ['createdAt', 'updatedAt'],
        //         },
        //     } 
        // },
    });

    if(!user){
        res.json({error: "No user found."})
    } else{
        if(password !== user.password) {
            res.json({error: "The password you entered is incorrect."});
        } else{
            const data = {username: user.username, displayName: user.displayName}
            const accessToken = sign(data , "O7UWf2eGMQNppvpbhd7fHikgUI52P6uwcqMUV4194aeUW88tgxmSVqKFEVzugdm");
            res.json({accessToken, ...data})


            // const userRole = { ...user.UserRole.toJSON(), role: user.UserRole.RoleCategory.roleDescription};
            // delete userRole.RoleCategory;
            // const data = { username: user.username, displayName: user.displayName, ...userRole }
            // const accessToken = sign(data , "O7UWf2eGMQNppvpbhd7fHikgUI52P6uwcqMUV4194aeUW88tgxmSVqKFEVzugdm");
            // res.json({accessToken, ...data});   
        }
      
    }
});

// authorize token available
router.get("/authorize", validateToken, async (req,res) => {
    res.json(req.user)
})


module.exports = router;

