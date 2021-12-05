let data = [
    { "id": 1, "name": "person1" }
];

//console.log('Data : ', data);
const create = (obj) => {
    data.push(obj)
}

const read = () => {
    return data;
}

module.exports = { create, read };