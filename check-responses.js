
fetch('http://localhost:3333/users/3', {
  method: 'DELETE'
}).then((res) => res.json()).then((res) => console.log(res))
fetch('http://localhost:3333/users').then((res) => res.json()).then((res) => console.log(res));