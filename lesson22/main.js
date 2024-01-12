const randomToo = Math.floor(Math.random() * 100);

for (let index = 0; index < 5; index++) {
  let number = prompt("Toogoo oruul");
  console.log(randomToo, number);

  if (number > randomToo) {
    alert("ih bna");
  } else if (number < randomToo) {
    alert("baga bn");
  } else if (number == randomToo) {
    alert("tentsuu bn");
  }
}
