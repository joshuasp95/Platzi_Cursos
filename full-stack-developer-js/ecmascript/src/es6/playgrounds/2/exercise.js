import { getData } from "./api.js";

async function solution() {
  // Tu código aquí 👈
  return getData()
    .then((data) => {
      for (const iterator of data) {
        console.log(iterator);
      }
      return data;
    })
    .catch((err) => console.log(err.message));
}

solution();
