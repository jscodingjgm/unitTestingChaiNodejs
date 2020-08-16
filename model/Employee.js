const mongoose = require('mongoose');
const validator = require('validator');

const employeeSchema = mongoose.Schema({
    name: {
        type: String,
        required : true,
        trim : true
    },
    employeedId : {
        type: Number,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: value => {
            if (!validator.isEmail(value)) {
                throw new Error({error: 'Invalid Email address'})
            }
        }
    },
    designation: {
        type: String,
        required : true,
        trim : true
    }
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;