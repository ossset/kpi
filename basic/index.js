// Identifiers

const name = 'Alexander';

const BIRTHYEAR = 1994;

function greeting(firstName) {
  console.log(`Hello ${firstName}`);
}

greeting('Alexander');

greeting(name);

greeting(BIRTHYEAR);

// Loops

for (let i = 15; i <= 30; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

function range(start, end) {
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

console.log(range);

// Functions

const average = (a, b) => {
  const result = (a + b) / 2;
  console.log(result);
  return result;
};

const square = (x) => {
  const result = x ** 2;
  console.log(result);
  return result;
};

const cube = (x) => {
  const result = x ** 3;
  console.log(result);
  return result;
};

for (let i = 1; i <= 5; i++) {
  const squared = square(i);
  const cubed = cube(i);
  const averageNumber = average(squared, cubed);
  console.log(`result: ${averageNumber}`);
}

// Objects

const obj = {
  name: 'Alexander',
};

let obj1 = {
  name,
};

console.log(`До изменения поля объекта (константа): ${obj.name}`);
obj.name = 'Alina';
console.log(`После изменения поля объекта (константа): ${obj.name}`);

console.log(`До изменения поля объекта: ${obj1.name}`);
obj1.name = 'Alina';
console.log(`После изменения поля объекта: ${obj1.name}`);

obj1 = {
  surname: 'Ivanov',
};
console.log(obj1);

/*
Перезапись константы возмодна в связи с тем, что при пересаписи поля объекта не оказывается никакого
влияния на ссылку объекта в памяти. Если мы попробуем дать ссылку на другой объект в
существующую константу получим ошибку Assignment to constant variable.
*/

const createUser = (name, city) => ({
  name,
  city,
});

console.log(createUser('Alexander', 'Minsk'));

// Arrays
const array = [
  {
    name: 'Aleksandr',
    phone: '+1234567890',
  },
  {
    name: 'Ivan',
    phone: '+0987654321',
  },
];

const findPhoneByName = (name) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].name === name) {
      return array[i].phone;
    }
  }
};

console.log(findPhoneByName('Ivan'));

// Hash tables

const hashTable = {
  Alexander: '+1234567890',
  Ivan: '+0987654321',
};

const findPhoneByNameFromHash = (name) => {
  for (const key in hashTable) {
    if (key === name) {
      return hashTable[key];
    }
  }
};

console.log(findPhoneByNameFromHash('Ivan'));
