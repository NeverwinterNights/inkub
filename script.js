let inp = document.querySelector(".input");
let button = document.querySelector(".form__btn");
function delay(fn, ms = 3000) {
  setTimeout(fn, ms);
}

button.addEventListener("click", function (e) {
  e.preventDefault();

  if (inp.value == "google") {
    delay(() => {
      alert("Yandex круче. Но это не точно");
    });
  } else
    delay(() => {
      alert(inp.value);
    });
});

let mas = [
  {
    name: "John",
    age: 18,
  },
  {
    name: "Piter",
    age: 20,
  },
  {
    name: "Pen",
    age: 50,
  },
];
button.addEventListener("click", function () {
  delay(() => {
    alert(mas[0].name);
  });
});

function superSum(a, b) {
  delay(() => {
    alert(a + b);
  });
}

superSum(10, 12);

function findMax(arr) {
  let max = arr[0];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > max) {
      max = arr[index];
    }
  }
  console.log(`Максимальное значение - ${max}`);
  let min = arr[0];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] < min) {
      min = arr[index];
    }
  }
  console.log(`Минимальное значение - ${min}`);
}

findMax([57400, 1, 5, 88, 777]);

let a = 34;
let b = 44;

let c = a;
a = b;
b = c;

console.log(a);
console.log(b);


