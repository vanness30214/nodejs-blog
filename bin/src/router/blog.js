const {getList, getDetail,newBLog,updateBlog,delBlog} = require('../controller/blog');
const {SuccessModel, ErrorModel} = require('../model/resmodle');
const handleBlogRouter = (req, res) => {
    const method = req.method;
    const id = req.query.id;
//新建blog详情
    if (method === 'GET' && req.path === '/api/blog/list') {
        const author = req.query.author || '';
        const keyword = req.query.keyword || '';
        const listData = getList(author, keyword);

        return new SuccessModel(listData)

    }
    //获取博客详情
    if (method === 'GET' && req.path === '/api/blog/detail') {
        const data = getDetail(id);
        return new SuccessModel(data);
    }
    //新建博客详情
    if (method === 'POST' && req.path === '/api/blog/new') {
        const data =newBLog(req.body);
        return new SuccessModel(data);


    }
    //更新一篇博客
    if (method === 'POST' && req.path === '/api/blog/update') {
        const result =updateBlog(id,req.body);
        if(result){
            return new SuccessModel();
        }else {
            return new ErrorModel('更新博客失败');
        }


    }
    //删除一篇博客
    if (method === 'POST' && req.path === '/api/blog/del') {
        const result = delBlog(id)
        if(result){
            return new SuccessModel();
        }else {
            return new ErrorModel('删除博客失败');
        }

    }
};
module.exports = handleBlogRouter;
