const Name = require('./controller/Name')   //commonJS 模块化
// import { Name } from './controller/Name'   //ES6模块化 
const aaTpl = require('./views/aa.art')

console.log(Name);

const newStr = template.render(aaTpl,{title:'bbb'})

console.log(newStr);