const { getList } = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resmodle')
const handleBlogRouter = (req, res) => {
    const method = req.method


    if (method === 'GET' && req.path === '/api/blog/list') {
        const author = req.query.author || ''
        const keyword = req.query.keyword || ''
        const listData = getlist(author, keyword)

        return new SuccessModle(listData)

    }
    if (method === 'GET' && req.path === '/api/blog/detail') {
        return {
            msg: 'OK BLOG2'
        }
    }
    if (method === 'POST' && req.path === '/api/blog/update') {
        return {
            msg: 'OK BLOG3'
        }
    }
    if (method === 'POST' && req.path === '/api/blog/del') {
        return {
            msg: 'OK BLOG4'
        }
    }
}
module.exports = handleBlogRouter