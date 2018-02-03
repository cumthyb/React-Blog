import mongoose,{Schema} from "mongoose"
import db from '../dbconnection'
import { triggerAsyncId } from "async_hooks";


/**
 * 用户模型
 * @param {ObjectId} ID id
 * @param {String} title 标题
 * @param {String} author 作者
 * @param {Date} createtime 发表时间
 * @param {String} abstract 摘要
 * @param {String} category 归类
 * @param {String} tags 标签
 * @param {Number} viewers  阅读次数
 * @param {Boolean} ispublic 是否公开
 * @param {Array}  comments 评论
 * @param {String} content 内容
 * */

const ArticleSchema = new mongoose.Schema({
    id: {
        type: Schema.Types.ObjectId,
    },
    title: {
        type: String,
        required: true,
        index: true,
        unique: true,
        trim: true
    },
    author: {
        type: String,
        trim: true
    },
    createtime: {
        type: Date,
        default: Date.now
    },
    abstract: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    tags: {
        type: String,
        required: true,
        trim: true
    },
    viewers: {
        type: Number,
        default: 0
    },
    ispublic: {
        type: Boolean,
        required: true,
        default: true
    },
    comments: {
        type: Array,
        default: []
    },
    content: {
        type: String,
        required: true,
        trim: true
    }
});


export default db().model('Article', ArticleSchema);