import { User } from "../models/userModel.js";

//Errors Handling
const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { username: "", password: "" };

    //ducplicate error
    if (err.code === 11000) {
        errors.username = "username is already taken or registered";
        return errors;
    }

    //validation errors`
    if (err.message.includes("user validation failed")) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }
    return errors;
};

//For signup page
const getSignup = (req, res) => {
    res.send("signup");
};
//For login page
const getLogin = (req, res) => {
    res.send("login");
};

//Signup request
const postSignup = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.create({ username, password });
        res.status(201).json(user);
    } catch (err) {
        //General Validation and parse it to json
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
};

//Login request
const postLogin = async (req, res) => {
    const { username, password } = req.body;

    console.log(username, password);
    res.send("new login");
};

export { getSignup, getLogin, postSignup, postLogin };
