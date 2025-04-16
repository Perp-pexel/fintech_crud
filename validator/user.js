import e from "express";
import Joi from "joi";

export const registerUserValidator = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
});

export const loginUserValidator = Joi.object({
    name: Joi.string(),
    email: Joi.string(),
    password: Joi.string().required(),  
})

export const updateUserValidator = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
});