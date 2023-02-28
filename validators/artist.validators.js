const yup = require('yup')

const artistValidator = yup.object({
    firstname : yup.string().required().trim(),
	lastname : yup.string().trim().optional(),
    birthdate : yup.date().optional().nullable(),
	deathdate : yup.date().optional().nullable().min(yup.ref('birthdate'))
})

module.exports = artistValidator