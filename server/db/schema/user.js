import mongoose from "mongoose"
import db from '../dbconnection'


/**
 * 用户模型
 * @param {String} username 用户名
 * @param {Boolean} isAdmin 是否管理员
 * @param {String} password 密码
 * @param {String} token 认证
 * @param {String} createtime 创建日期
 * */


const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        index: true,
        unique: true,
        trim: true
    },
    isAdmin: {
        type: Boolean,
        required: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    token: {
        type: String,
        trim: true
    },
    createtime: {
        type: Date,
        default: Date.now
    }
});


export default db().model('User', UserSchema);