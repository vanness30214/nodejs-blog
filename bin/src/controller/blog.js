const {exec} = require('../db/mysql')
const getList = (author, keyword) => {
    let sql = `select * from blog where 1=1 `
    if (author) {
        sql += `and author='${author}' `
    }
    if (keyword) {
        sql += `and title like '%${keyword}%' `
    }
    sql += `order by createtime desc;`

    // 返回 promise
    return exec(sql)
}
const getDetail = (id) => {
    const sql= `select * from blog where id= ${id}`
    return exec(sql).then(rows =>{
        return rows[0]
    })

};
const newBLog = (blogData = {}) => {
    const title =blogData.title
    const content =blogData.content
    const author =blogData.author
    const createtime =Date.now()
    const sql= `INSERT INTO blog (title,content,createtime,author ) VALUES ( '${title}','${content}',${createtime},'${author}' );`
    return exec(sql).then(insertData =>{
        // console.log(insertData);
        return {id:insertData.insertId}
    })
};
const updateBlog = (id, blogData = {}) => {
    const title =blogData.title
    const content =blogData.content
    const sql= `update blog set title='${title}', content='${content}' where id=${id}`
    return exec(sql).then(updateData =>{
        // console.log(updateData);
        if(updateData.affectedRows >0){
            return true
        }
        return false
    })
};
const delBlog = (id,author) => {
    const sql= `delete from blog where id='${id}' and author='${author}'`
    return exec(sql).then(delData =>{
        // console.log(updateData);
        if(delData.affectedRows >0){
            return true
        }
        return false
    })
};
module.exports = {getList, getDetail, newBLog, updateBlog, delBlog};
