import low from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'

const adapter = new FileSync('db.json')
const db = low(adapter)
// setsome defaults
// db.defaults({ progressData: [{ title: '小程序', name: '2-1', id: '1' }] })
//   .write()

// Add a post
// db.get('progressData')
//    .push({ title: 'Egret', name: '2-3', id: '3' })
//    .write()

// remove a post
// db.get('progressData').remove({ title: '小程序' }).write()

// // Set a user using Lodash shorthand syntax
// db.set('user.name', 'typicode')
//   .write()

// 获取侧边栏项目管理的接口数据
export function getdata (data) {
  return db.get('progressData').value()
}
