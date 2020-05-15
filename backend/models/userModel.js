const mongoose = require('../db/connection')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
SALT_WORK_FACTOR = 10;

const UserSchema = Schema({
    username: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true },

    loginAttempts: { type: Number, required: true, default: 0 },
    lockUntil: { type: Number }
})

UserSchema.pre('save', function (next) {
    const user = this;

    if (!user.isModified('password')) return next();

    bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        if (err) return next(err);

        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);

            user.password = hash;
            next();
        })
    })
})

UserSchema.methods.comparePassword = function (candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
        if (err) return cb(err)
        cb(null, isMatch);
    })
}

const User = mongoose.model('User', UserSchema)
module.exports = User