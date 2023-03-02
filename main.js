const button1 = document.querySelector('#btn1')
const button2 = document.querySelector('#btn2')
const box1= document.querySelector('.box1')
const box2 = document.querySelector('.box2')

 let buyList = ['almond milk', 'avocado', 'cheese', 'halloumi' ]
 const fridge=[]

 fridge.push('onion', 'salad', 'chocolate', 'crisps', 'egg')
let item=buyList.shift()
fridge.unshift(item)
function moveup() {
    let grocery = fridge.pop()
    buyList.push(grocery)
   box1.innerHTML = buyList
    box2.innerHTML = fridge
}
button1.addEventListener('click', moveup)
function movedown(){
    let grocery = buyList.pop()
    fridge.push(grocery)
    box1.innerHTML = buyList
  box2.innerHTML = fridge
}
button2.addEventListener('click', movedown)
box1.innerHTML = buyList
box2.innerHTML = fridge
