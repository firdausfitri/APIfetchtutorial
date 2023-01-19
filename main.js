
const endpoint = "https://reqres.in/api/users"

//(1) paling simple
// console.log(fetch(endpoint))

// //(2) selepas diubah suai (guna callback)
// fetch(endpoint).then((data) => console.log(data))

// //(3) perlu diubah suai lagi (tukar dulu sbgai json)
// fetch(endpoint)
// .then((data) => data.json())
// .then((result) => console.log(result))

// //(4) cara masuk ke lebih dalam(data) 
// // set specific id ketiga ......api/users/3
// fetch(endpoint)
// .then((data) => data.json())
// .then((result) => console.log(result.data))

// //(5) cara lain result yg sama mcm di atas
// // set specific id ketiga ......api/users/3
// fetch(endpoint)
// .then((result) => result.json())
// .then((data) => console.log(data.data))

// //(6) cara elakkan guna data.data
// // set specific id ketiga ......api/users/3
// fetch(endpoint)
// .then((result) => result.json())
// .then(({data}) => console.log(data))


// /*********************************cara guna async await********************************/


// //(7) guna cara async await
// // set specific id ketiga ......api/users/3
// // output macam (2)
// async function hitAPI() {
//     const api = await fetch(endpoint)
//     console.log(api)
// }

// hitAPI()

// //(8) ubah json
// // output macam 3
// async function hitAPI() {
//     const api = await fetch(endpoint)
//     const data = await api.json()
//     console.log(data)
// }

// hitAPI()


// //(9) cara terus masuk ke dalam data tmbh {}
// // output macam (6)
// async function hitAPI() {
//     const api = await fetch(endpoint)
//     const {data} = await api.json()
//     console.log(data)
// }

// hitAPI()


// /*********************************Cara post data dalam API********************************/

// //Setkan link api tanpa specific id ......api/users

fetch(endpoint, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify ({
        email:"aaaaauu@gmail.com",
        firstName:"hehehehe",
    }),
})
.then((result) => result.json())
.then((data) => console.log(data))