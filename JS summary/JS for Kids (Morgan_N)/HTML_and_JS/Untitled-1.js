
var alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
randomString =  alphabet[Math.floor(Math.random() * alphabet.length)];
var counter = 0
while (counter < 6) {
console.log(randomString + randomString);
   counter++;
}
console.log("Программа завершена");
