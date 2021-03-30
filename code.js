//1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
//     a) отримує текст з параграфа з id "content"
/*
let idContent = document.getElementById("content");
console.log(idContent.innerText);
*/

//b) отримує текст з блоку з id "rules"
/*
let idRules = document.getElementById("rules");
console.log(idRules.innerText);
*/

//c) замініть текст параграфа з id 'content' на будь-який інший
/*
let idContent = document.getElementById("content");
idContent.innerText='замініть текст параграфа з id content на будь-який інший'
console.log(idContent.innerText);
*/

//    d) замініть текст параграфа з id 'rules' на будь-який інший
/*
let RulesText=document.getElementById('rules');
RulesText.innerText='Замініть текст параграфа з id RULES на будь-який інший';
*/

//  e) змініть кожному елементу колір фону на червоний
/*
let bodyColor = document.getElementsByTagName('body');
for (let i = 0; i < bodyColor.length; i++) {
     bodyColor[i].style.backgroundColor='red';
}*/

//f) змініть кожному елементу колір тексту на синій
/*
let bodyColor = document.getElementsByTagName('body');
for (let i = 0; i < bodyColor.length; i++) {
    bodyColor[i].style.backgroundColor='blue';
}*/
/*  g) отримати весь список класів елемента з id=rules і вивести їх в console.log*/
/*
let classRules=document.getElementById('rules');
console.log(classRules.classList);
/*
 */
//h) отримати всі елементи з класом fc_rules
/*
let classRules=document.getElementsByClassName('fc_rules');
for(let mass of classRules){
    console.log(mass);
}*/
//i) поміняти колір тексту у всіх елементів fc_rules на червоний
/*
let classRules=document.getElementsByClassName('fc_rules');
for (let i = 0; i < classRules.length; i++) {
     classRules[i].style.color='red';
}*/

//2) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//    Вставити цей блок на сторінку
/*
let user = ['Max', 'Thomas', 'Markus', 'Jessy'];
for (let i = 0; i < user.length; i++) {
    let mas = user[i];
    let divka = document.createElement('div');
    divka.style.width = '100px';
    divka.style.height = '50px';
    divka.style.backgroundColor = 'red';
    divka.style.margin='20px 20px 20px 20px';
    divka.innerHTML = `${mas}`;
document.body.appendChild(divka);
}
*/
//За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//    Вставити цей блок на сторінку
//  За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//    Блок з адресою зробити окремим блоком, з блоками для кожної властивості
/*
let users = [{

    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];
for (let i = 0; i < users.length; i++) {
    let divka = document.createElement('div');
    let addressUser = document.createElement('div');
    divka.style.width = '250px';
    divka.style.height = '35px';
    divka.style.backgroundColor = 'black';
    divka.style.textAlign = 'center';
    divka.style.color = 'yellow';

    divka.innerHTML = `<h2>${users[i].name} ${users[i].age} ${users[i].status}</h2>`;
    addressUser.innerHTML = `<div>${users[i].address.city}</div> <div>${users[i].address.country}</div>  <div>${users[i].address.street}</div>  <div>${users[i].address.houseNumber}</div>`;
    document.body.appendChild(divka);
    document.body.appendChild(addressUser);
} */
