
// fetch('http://localhost:3333/users/4', {
//   method: 'DELETE'
// }).then((res) => res.json()).then((res) => console.log(res))
fetch('http://localhost:3333/users/5/groups').then((res) => res.json()).then((res) => console.log(res));

// fetch('http://localhost:3333/users/1', {
//   method: 'PUT',
//   headers: {
//     'Content-Type': 'application/json;charset=utf-8'
//   },
//   body: JSON.stringify({
//     name: 'sdsdfsfd Pet',
//     groups: [4, 5]
//   })
// }).then((res) => res.json()).then((res) => console.log(res))

// fetch('http://localhost:3333/groups', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json;charset=utf-8'
//   },
//   body: JSON.stringify({
//     name: 'first',
//     photo: 'https://photo.jpg',
//     users: [4, 5, 6],
//     expenses: [
//       {
//         title: 'fgg', // название платежа (необязательное поле)
//         amount: 5500, // сумма платежа
//         by: 1, // id того кто купил
//         for: [2, 3], // перечень id для кого купили
//         date: 155225 // дата платежа
//       }
//     ]
//   })
// }).then((res) => res.json()).then((res) => console.log(res))

// fetch('http://localhost:3333/groups/5', {
//   method: 'DELETE'
// }).then((res) => res.json()).then((res) => console.log(res))

// fetch('http://localhost:3333/groups/5').then((res) => res.json()).then((res) => console.log(res));

// fetch('http://localhost:3333/expenses/6').then((res) => res.json()).then((res) => console.log(res));
// fetch('http://localhost:3333/expenses/7/1', {
//   method: 'PUT',
//   headers: {
//     'Content-Type': 'application/json;charset=utf-8'
//   },
//   body: JSON.stringify({
//     title: 'fgg', // название платежа (необязательное поле)
//     amount: 2588, // сумма платежа
//     by: 1, // id того кто купил
//     for: [3, 7], // перечень id для кого купили
//     date: 155225 // дата платежа
//   })
// }).then((res) => res.json()).then((res) => console.log(res));

// fetch('http://localhost:3333/expenses/7/1', {
//   method: 'DELETE'
// }).then((res) => res.json()).then((res) => console.log(res))