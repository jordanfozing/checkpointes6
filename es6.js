
const arr = [1,2,3]

console.log(arr.map((el,i,t)=>el+1))


const arr = [1,2,3]

console.log(arr.map((el,i,t)=>({el : el})))


const arr = [1,2,3]

console.log(arr.map((el,i,t)=> el == 2 ? {el :el} : el-1))


const arr = [1,2,3]

console.log(arr.filter((el,i,t)=>el>1))


const arr = ['ali' , 'salah', 'arf']

console.log(arr.filter((el,i,t)=> el != 'salah'))


const arr = [1,2,'a','b']

console.log(arr.filter((el,i,t)=>i < 2))


const arr = [1,'a','b',0,15]

console.log(arr.filter((el,i,t)=>typeof(el)== 'number'))


const arr = [34,15,88,2]

console.log(Math.min(...arr))
console.log(Math.max(...arr))
