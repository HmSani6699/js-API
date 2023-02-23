const student = {
    name: 'Alia',
    age: 20,
    address: {
        village: 'dhaka',
        thane: 'janina'
    },
    subject: ['bangla', 'arbi']
}

// console.log(student)
const json = JSON.stringify(student);
// console.log(json);
const parseJson = JSON.parse(json);
// console.log(parseJson)