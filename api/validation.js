const Joi = require('@hapi/joi');

const registerValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()

    });

    return schema.validate(data);
};


const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()

    });

    return schema.validate(data);
};

module.exports.tvseriesValidation = (data) => {
    const schema = Joi.object({
        title: Joi.string().min(6).required(),
        familyFriendly: Joi.boolean()

    });

    return schema.validate(data);
};

/*
module.exports.episodeValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(6).required(),
        number: Joi.number(),
        seriesId: Joi.string()

    });

    return schema.validate(data);
};*/


module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;

