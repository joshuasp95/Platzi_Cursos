const countries = { MX: "Mexico", CO: "Colombia", CL: "Chile", PE: "Peru" };

console.log(Object.entries(countries));

console.log(Object.keys(countries));

console.log(Object.values(countries));

const filterCountries = Object.values(countries).map(c => c.toLowerCase());

console.log(filterCountries);