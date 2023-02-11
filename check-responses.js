
// fetch('http://localhost:3333/users/3', {
//   method: 'DELETE'
// }).then((res) => res.json()).then((res) => console.log(res))
// fetch('http://localhost:3333/users/1').then((res) => res.json()).then((res) => console.log(res));

// fetch('http://localhost:3333/users/2', {
//   method: 'PUT',
//   headers: {
//     'Content-Type': 'application/json;charset=utf-8'
//   },
//   body: JSON.stringify({
//     name: 'hgdfhdh Pet',
//     balance: 15846.2,
//     groups: JSON.stringify([1, 2])
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
//     users: JSON.stringify([4, 5, 6]),
//     expenses: JSON.stringify([
//       {
//         title: 'fgg', // название платежа (необязательное поле)
//         amount: 5500, // сумма платежа
//         by: 1, // id того кто купил
//         for: [2, 3], // перечень id для кого купили
//         date: 155225 // дата платежа
//       }
//     ])
//   })
// }).then((res) => res.json()).then((res) => console.log(res))

fetch('http://localhost:3333/groups/5', {
  method: 'DELETE'
}).then((res) => res.json()).then((res) => console.log(res))

// fetch('http://localhost:3333/groups/2').then((res) => res.json()).then((res) => console.log(res));