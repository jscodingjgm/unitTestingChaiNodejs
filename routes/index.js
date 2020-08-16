const express = require('express');
const Employee = require('../model/Employee');
const bodyParser = require('body-parser');

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


router.post('/saveEmployee', async (req, res) => {
    try{
        const employee = new Employee(req.body);
        await employee.save();
        res.status(200).json({status: 'success', message : 'save successfully'});
    } catch (error){
        res.status(400).send(error)
    }
});

router.get('/getEmployees', (req, res) => {
    Employee.find({}, (err, doc) => {
        if(err)
            res.status(200).json({status : 'error', message : err});

        res.status(200).json(doc);
    });
});

router.put('/updateEmployee', (req, res) => {
    Employee.updateOne({employeedId : req.body.employeedId}, {designation : req.body.updateValue}, (err, doc) => {
        if(err)
            res.status(200).json({status : 'error', message : err});
        
        res.status(200).json({status : 'success', numberofUpdateDocs : doc.n});
    });
});

router.get('/deleteEmployee/:employeedId', (req, res) => {
    Employee.deleteOne({employeedId : req.params.employeedId}, (err, doc) => {
        if(err)
            res.status(200).json({status : 'error', message : err});
            
        res.status(200).json({status : 'success', message : `Employee with id ${req.params.employeedId} deleted successfully`});
    });
});

module.exports = router;