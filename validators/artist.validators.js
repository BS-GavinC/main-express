const yup = require('yup')

const artistValidator = yup.object({
    firstname : yup.string().required().trim(),
	lastname : yup.string().trim().nullable(),
    birthdate : yup.date().nullable(),
	deathdate : yup.date().nullable().min(yup.ref('birthdate'))
})

module.exports = artistValidator