function solution(json1 = {
    name: "Mr. Michi",
    food: "Pescado"
  }, json2 = {
    age: 12,
    color: "Blanco"
  }) {
   // Tu código aquí 👈
    let obj = { ...json1, ...json2 };
    console.log(obj);
    return obj;
  }
  