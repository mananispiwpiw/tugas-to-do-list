import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please enter username"],
        minlength: [6, "The minimum length of the username is 6 characters"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please enter password"],
        minlength: [6, "The minimum length of the password is 6 characters"],
    },
});

const User = mongoose.model("user", userSchema);

export { User };
