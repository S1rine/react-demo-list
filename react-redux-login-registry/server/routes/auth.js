const express = require("express");
const sqlFn = require("../mysql")
const router = express.Router();
const jwt = require("jsonwebtoken")
const config = require("../config")


router.post("/", (req, res) => {
    const { username, password } = req.body;
    const sql = "select * from user where `username`=? AND `password`=?";
    const arr = [username, password];
    sqlFn(sql, arr, function (data) {
        if (data.length > 0) {
            const token = jwt.sign({
                id: data[0].id,
                username: data[0].username
            }, config.jwtSecret)
            res.cookie("token", token, { maxAge: 60000, httpOnly: true });
            res.status(200).json({ code: 0, result: { ...data[0] } });
        } else {
            res.status(401).json({ form: "用户名密码错误" })
        }
    })
})
router.post("/logout", (req, res) => {
    res.clearCookie('token')
    res.status(200).json({ code: 0, msg: '退出成功' })
})

module.exports = router;