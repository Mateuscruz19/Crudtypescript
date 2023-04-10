import Joi from "joi";


export const BookSchema = Joi.object({
    name: Joi.string().required()
})

export const UpdateBookSchema = Joi.object({
    name: Joi.string().required(),
    id:Joi.number().required()
})