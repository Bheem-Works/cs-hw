let array = [1, 2, 3, 4];

for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if (array[i] > array[j]) {
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}

console.log("Descending order:");
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
