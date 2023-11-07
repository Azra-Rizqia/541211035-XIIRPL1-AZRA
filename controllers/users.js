const User = require('../models/user')

module.exports = {
    //method get all
    index: async (req, res) => {
        try {
            const users = await User.find()
            if (users.length > 0) {
                res.status(200).json({
                    status: true,
                    data: users,
                    method: req.method,
                    url: req.url
                })
            } else {
                res.json({
                    status: false,
                    message: "Data masih kosong"
                })
            }
        } catch (error) {
            res.status(400).json({ sucess: false })
        }
    },
    
    //method get by id
    show: async (req, res) => {
        try {
            const user = await User.findById(req.params.id)
            res.status(200).json({
                status: true,
                data: user,
                method: req.method,
                url: req.url,
                message: "Get data by id success"
            })
        } catch (error) {
            res.status(400).json({ sucess: false })
        }
    },

    //method post
    store: async (req, res) => {
        try {
            const user = await User.create(req.body)
            res.status(200).json({
                status: true,
                data: user,
                method: req.method,
                url: req.url,
                message: "Upload data success"
            })
        } catch (error) {
            res.status(400).json({ sucess: false })
        }
    },

    //method put
    update: async (req, res) => {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true
            })
            res.json({
                status: true,
                data: user,
                method: req.method,
                url: req.url,
                message: "Update data success"
            })
        } catch (error) {
            res.status(400).json({ sucess: false })
        }
    },

    //method delete
    delete: async (req, res) => {
        try {
            await User.findByIdAndDelete(req.params.id)
            res.json({
                status: true,
                method: req.method,
                url: req.url,
                message: "Delete data success"
            })
        } catch {
            res.status(400).json({ sucess: false })
        }
    }
}