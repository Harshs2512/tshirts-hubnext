import mongoose from "mongoose";
const validator = require("validator");

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: [true, "Please Enter Your Name"],
        maxLength: [30, "Name cannot exceed 30 characters"],
        minlength: [4, "Name should have more than 4 characters"],
    },

    lname: {
        type: String,
        required: [true, "Please Enter Your Name"],
        maxLength: [30, "Name cannot exceed 30 characters"],
        minlength: [4, "Name should have more than 4 characters"],
    },

    email: {
        type: String,
        required: [true, "Please Enter Your Email"],
        unique: true,
        validate: [validator.isEmail, "Please enter a valid email"],
    },

    password: {
        type: String,
        required: [true, "Please Enter Your Password"],
        maxLength: [8, "Password should be greater than 4 characters"],
        select: false,
    },

    dob: {
        type: String,
        required: [false, "Please Enter Your Date of Birth"],
    },

    contact: {
        type: String,
        required: [false, "Please Enter Your Contact Number"],
        maxLength: [10, "Name cannot exceed 10 number"],
        minlength: [9, "Name should have more than 9 number"],
    },

    gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
        required: [false, "Please Select Your Gender"],
    },

    address: {
        pincode: {
            type: Number,
            maxLength: [6, "Pincode cannot exceed 6 number"],
            minlength: [6, "should have more than 6 number"],
        },
        city: {
            type: String,
            required: [false, 'Please fill city'],
        },
        mystate: {
            type: String,
            required: [false, 'Please fill State'],
        },
        country: {
            type: String,
            required: [false, 'Please fill Country'],
        },
        building: {
            type: String,
            required: [false, 'Please fill Building area'],
        },
        locality: {
            type: String,
            required: [false, 'Please fill Locality'],
        },
        landmark: {
            type: String,
            required: [false, 'Please fill Landmark'],
        }

    },
    secondaddress: {
        secpincode: {
            type: Number,
            maxLength: [6, "Pincode cannot exceed 6 number"],
            minlength: [6, "should have more than 6 number"],
        },
        seccity: {
            type: String,
            required: [false, 'Please fill city'],
        },
        secmystate: {
            type: String,
            required: [false, 'Please fill State'],
        },
        seccountry: {
            type: String,
            required: [false, 'Please fill Country'],
        },
        secbuilding: {
            type: String,
            required: [false, 'Please fill Building area'],
        },
        seclocality: {
            type: String,
            required: [false, 'Please fill Locality'],
        },
        seclandmark: {
            type: String,
            required: [false, 'Please fill Landmark'],
        }

    },

    role: {
        type: String,
        default: "user",
    },

    resetPasswordToken: String,
    resetPasswordExpire: Date,
}, { timeStamp: true });

const UserModel = mongoose.models.User || mongoose.model("User", userSchema);
export default UserModel;