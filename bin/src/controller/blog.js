const getList = (author, keyword) => {
    return[
        {
            id: "1",
            title: "标题1",
            content: "内容1",
            createData: "1557879965669",
            author: "zhangshang"
        },
        {
            id: "2",
            title: "标题2",
            content: "内容2",
            createData: "1557880001929",
            author: "lisi"
        }
    ]

};
const getDetail =(id)=>{
    return[
        {
            id: "2",
                title: "标题23123123123",
            content: "内容2",
            createData: "1557880001929",
            author: "lisi"
        }
    ]

};
const newBLog =(blogData={})=>{
    return {
        id:3
    }
};
const updateBlog =(id,blogData ={})=>{
    return true
};
const delBlog =(id)=>{
    return true
};
module.exports = {getList, getDetail,newBLog,updateBlog,delBlog};
