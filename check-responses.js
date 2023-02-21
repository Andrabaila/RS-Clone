
// fetch('https://back-for-rs-clone-production.up.railway.app/users/1', {
//   method: 'DELETE'
// }).then((res) => res.json()).then((res) => console.log(res))

// fetch('https://back-for-rs-clone-production.up.railway.app/users').then((res) => res.json()).then((res) => console.log(res));

// fetch('https://back-for-rs-clone-production.up.railway.app/users/1/groups').then((res) => res.json()).then((res) => console.log(res));

// fetch('https://back-for-rs-clone-production.up.railway.app/users/1', {
//   method: 'PUT',
//   headers: {
//     'Content-Type': 'application/json;charset=utf-8'
//   },
//   body: JSON.stringify({
//     id: 1,
//     name: 'alpha',
//     groupList: [1]
//   })
// }).then((res) => res.json()).then((res) => console.log(res))

// fetch('https://back-for-rs-clone-production.up.railway.app/users', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json;charset=utf-8'
//   },
//   body: JSON.stringify({
//     id: 1,
//     name: 'alpha',
//     groupList: [1]
//   })
// }).then((res) => res.json()).then((res) => console.log(res))

// fetch('https://back-for-rs-clone-production.up.railway.app/groups', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json;charset=utf-8'
//   },
//   body: JSON.stringify({
//     name: 'second',
//     photo: 'https://www.nastol.com.ua/download.php?img=201406/2560x1600/nastol.com.ua-101411.jpg',
//     users: [1,3],
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

// fetch('https://back-for-rs-clone-production.up.railway.app/groups/1', {
//   method: 'DELETE'
// }).then((res) => res.json()).then((res) => console.log(res))

fetch('https://back-for-rs-clone-production.up.railway.app/groups/1').then((res) => res.json()).then((res) => console.log(res));

// fetch('https://back-for-rs-clone-production.up.railway.app/expenses/2/1').then((res) => res.json()).then((res) => console.log(res));
// fetch('https://back-for-rs-clone-production.up.railway.app/expenses/1/1', {
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

// fetch('https://back-for-rs-clone-production.up.railway.app/expenses/7/1', {
//   method: 'DELETE'
// }).then((res) => res.json()).then((res) => console.log(res))