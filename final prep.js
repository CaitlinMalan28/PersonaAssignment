let names = ["John", "Alice", "Bob"];
let targetName = "Alice";

for (let i = 0; i < names.length; i++) {
    if (names[i] === targetName) {
        console.log(`${targetName} is in the array at index ${i}.`);
        break;
    }
}