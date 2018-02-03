import UserModel from '../db/schema/user'
import ArticleModel from '../db/schema/article'
import jwt from 'jsonwebtoken'

export default function(Router) {

    const router = new Router({
        prefix: '/api'
    })

    //注册用户
    router.post('/signup',
        async (ctx, next) => {
            const {username, password, isAdmin} = ctx.request.body;
            const user = {
                username,
                isAdmin,
                password
            }
            await UserModel(user).save()
                .then(product => {
                    console.log(product);
                    ctx.body = {
                        status: 1,
                        msg: '注册成功'
                    }
                })
                .catch(error => {
                    console.log(error);
                    ctx.body = {
                        status: -1,
                        msg: '注册失败'
                    }
                }
            )
        }
    );

    //用户登陆
    router.post('/login',
        async (ctx, next) => {
            const {username, password} = ctx.request.body;

            const user = await UserModel.findOne({
                username
            });
            if (!user) {
                ctx.body = {
                    status: -1,
                    msg: '用户不存在'
                }
            } else {
                if (user.password !== password) {
                    ctx.body = {
                        status: -1,
                        msg: '密码错误'
                    }
                } else {
                    const token = jwt.sign({
                        name: user.username
                    }, 'secret', {
                        expiresIn: 60 * 60 // token到期时间设置
                    })
                    user.token = token
                    await user.save()
                    ctx.body = {
                        status: 1,
                        msg: '登陆验证成功',
                        token,
                        username
                    }
                }
            }
        }
    );

    //token 验证
    router.post('/valid',
        async (ctx, next) => {
            const {username, token} = ctx.request.body;
            try {
                const decoded = jwt.verify(token, 'secret');
                if (decoded.exp <= Date.now() / 1000) {
                    ctx.body = {
                        status: 0,
                        msg: '登录状态已过期，请重新登录'
                    }
                    return;
                }
                if (decoded) {
                    // token is ok
                    ctx.body = {
                        status: 1,
                        msg: '登陆验证成功'
                    };
                    return;
                }

            } catch (error) {
                if (error) {
                    ctx.body = {
                        status: -1,
                        msg: error.message
                    }
                }
            }
        }
    );

    //用户修改
    router.post('/userupdate',
        async (ctx, next) => {
            const {username, password, isAdmin} = ctx.request.body;
            const user = {
                username,
                password,
                isAdmin
            }
            await UserModel.findOneAndUpdate({
                username: username
            }, user)
                .then(
                    product => {
                        console.log(product);
                        ctx.body = {
                            status: 1,
                            msg: '修改用户成功'
                        }
                    }
            )
                .catch(error => {
                    console.log(error);
                    ctx.body = {
                        status: -1,
                        msg: error.message
                    }
                })
        }
    );

    //用户删除
    router.post('/userdelete',
        async (ctx, next) => {
            const {username} = ctx.request.body;
            await UserModel.findOneAndRemove({
                username: username
            })
                .then(
                    product => {
                        if (product) {
                            console.log(product);
                            ctx.body = {
                                status: 1,
                                msg: product.username + '用户删除成功'
                            }
                        } else {
                            console.log(product);
                            ctx.body = {
                                status: -1,
                                msg: username + '用户不存在'
                            }
                        }
                    }
            )
                .catch(error => {
                    console.log(error);
                    ctx.body = {
                        status: -1,
                        msg: error.message
                    }
                })
        }
    );

    //文章发表
    router.post('/article/publish',
        async (ctx, next) => {
            const {title, author, abstract, category, tags, ispublic, content} = ctx.request.body;
            const article = {
                title,
                author,
                abstract,
                category,
                tags,
                ispublic,
                content
            };
            await ArticleModel(article).save()
                .then(product => {
                    console.log("添加文章");
                    console.log(product);
                    ctx.body = {
                        status: 1,
                        msg: '文章发布成功'
                    }
                }
            )
                .catch(
                    error => {
                        console.log(error);
                        ctx.body = {
                            status: -1,
                            msg: error.message
                        }
                    }
            )
        }
    );

    //文章修改
    router.post('/article/update',
        async (ctx, next) => {
            const {id, title, author, abstract, category, tags, ispublic, content} = ctx.request.body;
            const article = {
                id,
                title,
                author,
                abstract,
                category,
                tags,
                ispublic,
                content
            };
            await ArticleModel.findOneAndUpdate({
                id: id
            }, article)
                .then(product => {
                    console.log(product);
                    ctx.body = {
                        status: 1,
                        msg: '文章修改成功'
                    }
                }
            )
                .catch(
                    error => {
                        console.log(error);
                        ctx.body = {
                            status: -1,
                            msg: error.message
                        }
                    }
            )
        }
    );

    //文章删除
    router.post('/article/delete',
        async (ctx, next) => {
            const {id} = ctx.request.body;
            await ArticleModel.findOneAndRemove({
                id: id
            })
                .then(
                    product => {
                        if (product) {
                            console.log(product);
                            ctx.body = {
                                status: 1,
                                msg: product.title + ' 删除成功!'
                            }
                        } else {
                            console.log(product);
                            ctx.body = {
                                status: -1,
                                msg: '文章不存在'
                            }
                        }
                    }
            )
                .catch(error => {
                    console.log(error);
                    ctx.body = {
                        status: -1,
                        msg: error.message
                    }
                })
        }
    );


    //文章查找 不返回content
    router.post('/article/queryall',
        async (ctx, next) => {
            await ArticleModel.find({},{content:0})
                .then(
                    product => {
                        if (product) {
                            console.log(product);
                            ctx.body = {
                                status: 1,
                                msg: ' 查询所有成功!',
                                result:product
                            }
                        } else {
                            console.log(product);
                            ctx.body = {
                                status: -1,
                                msg: '文章不存在'
                            }
                        }
                    }
            )
                .catch(error => {
                    console.log(error);
                    ctx.body = {
                        status: -1,
                        msg: error.message
                    }
                })
        }
    );

    return router.routes();
}