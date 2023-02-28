const yup = require('yup')

const albumValidator = yup.object({
    title : yup.string().required().trim().max(50),
    cover : yup.string().trim().nullable()
})

module.exports = albumValidator