function getData() {
  console.log("Started getData");
  url = "https://jsonplaceholder.typicode.com/users";
  fetch(url)
    .then((response) => {
      console.log("Inside first then");
      return response.json();
    })
    .then((data) => {
      console.log("Inside second then");
      console.log(data);
    });
}

console.log("Before running getData");
getData();
console.log("After running getData");
