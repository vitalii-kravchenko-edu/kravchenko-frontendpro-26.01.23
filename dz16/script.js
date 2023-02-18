// Реалізуйте функцію generateKey(length, characters), 
// яка повертає рядок випадкових символів із набору characters довжиною length.

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const key = generateKey(16, characters);
console.log(key); // eg599gb60q926j8i

function generateKey(length, characters) {
    let charactersArr = characters.split('');
    let result = [];
    for (i = 0; i < length; i++) {
        let randomCharacter = Math.floor(Math.random() * charactersArr.length);
        result.push(characters[randomCharacter]);
    }
    return result.join('');
}
  

