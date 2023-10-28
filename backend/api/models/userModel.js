import mongoose from "mongoose";
import bcrypt from "bcrypt";

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

//fire a function before doc saved to db
//Hashing Algorithm
userSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

const User = mongoose.model("user", userSchema);

export { User };
