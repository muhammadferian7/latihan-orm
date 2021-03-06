const model = require('../models')

module.exports = {
    list: async (req, res) => {
        try {
            const datas = await model.category.findAll()

            return res.status(200).json({
                "success" : true,
                "error" : 0,
                "message" : "data success listed",
                "data" : datas
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
    create: async (req, res) => {
        try {
            const data = await model.category.create(req.body)

            return res.status(200).json({
                "success" : true,
                "error" : 0,
                "message" : "data success create",
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
    update: async (req, res) => {
        try {
            const data = await model.category.update({
                name: req.body.name,
                description: req.body.description,
                is_active: req.body.is_active
            },
            {
                where: {
                    id: req.body.id
                }
            })

            return res.status(200).json({
                "success" : true,
                "error" : 0,
                "message" : "data success update",
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
    destroy:  async (req, res) => {
        try {
            const data = await model.category.destroy({
                where: {
                    id: req.params.id
                }
            })

            return res.status(200).json({
                "success" : true,
                "error" : 0,
                "message" : "data success delete",
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
    find: async (req, res) => {
        try {
            const data = await model.category.findOne({
                where: {
                    id: req.params.id
                }
            })

            return res.status(200).json({
                "success" : true,
                "error" : 0,
                "message" : "data success listed",
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
    }
}