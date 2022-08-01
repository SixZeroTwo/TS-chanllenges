
//solution by SixZeroTwo
//T includes K
export type MyPick<T, K extends (keyof T)> = {
  [P in K]: T[P]
}



//implement a js function to solve this problem firstly
/*
function MyPick(T, K) {
  const obj = {}
  for (let key in K) {
    if (key in T) {
      obj[key] = T[key]
    }
  }
  return obj
}
 */

//convert js to ts type
/* 1.返回一个对象 —— 指定type MyPick的定义值
2.如何遍历一个union type-- in ：将uniton type视为了一个对象
3.如何定义返回对象的key和value-- 取到K中所有的key，value值是T[key]
4.如何得到一个 type / interface 的所有key-- keyof将type对象变为一个字符串 or union type */