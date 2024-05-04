const catchError = require('../utils/catchError');
const Form = require('../models/form');

const getAll = catchError(async(req, res) => {
    const form = await Form.findAll();
    return res.json(form);
});
const create = catchError(async(req, res) => {
    const {first_name, last_name, email, password, birthday} = req.body;
    const form = await Form.create({
        first_name:first_name,
        last_name:last_name,
        email:email,
        password:password,
        birthday:birthday,
    });
    return res.json(form);

});

const getOne = catchError(async(req, res) => {
    const {id} = req.params;
    //await form.destroy({where:{id: id}});//
    const form = await Form.findByPk(id);
    return res.status(201).json(form);
});

const remove = catchError(async(req, res) => {
    const {id} = req.params;
    await Form.destroy({where:{id: id}});
    return res.sendStatus(204);

});

const update = catchError(async(req, res) => {
    const {id} = req.params;
    const {first_name, last_name, email, password, birthday} = req.body;
    const form = await Form.update({
        first_name:first_name,
        last_name:last_name,
        email:email,
        password:password,
        birthday:birthday,
    },{where:{id: id}, returning:true});
    return res.json(form[1][0]);
});


module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
}