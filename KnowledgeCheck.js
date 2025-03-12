// Task 11: Calculate the sum using reduce
const nums = [10, 20, 30, 40, 50];
const total = nums.reduce((accumulator, value) => accumulator + value, 0);
console.log(total);


// Task 12: Perform various array operations
let array = [1, 2, 3, 4, 5];

array.push(6);  // Append a new value
array.shift();   // Remove the first item
array.unshift(0); // Add an element at the beginning
array.reverse(); // Reverse the order

console.log(array);


// Task 13: Define and access an object
const bookInfo =
{
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    category: "Fiction"
};

// Accessing properties in different ways
console.log(bookInfo.title);
console.log(bookInfo["author"]);


// Task 14: Add a method to retrieve book details
bookInfo.getSummary = function () {
    return `${this.title} - written by ${this.author}`;
};

console.log(bookInfo.getSummary());


// Task 15: Extract values using destructuring
const user = { name: "John", age: 30, location: "New York" };
const { name, age } = user;

console.log(name);
console.log(age);

// Task 16: Function to merge two objects
function combineObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

const firstObj = { x: 1, y: 2 };
const secondObj = { z: 3, w: 4 };

const combined = combineObjects(firstObj, secondObj);
console.log(combined);


// Task 17: Use string methods
const text = "JavaScript is awesome!";
console.log(text.toUpperCase());  // Convert to uppercase
console.log(text.includes("awesome")); // Check if a substring exists
console.log(text.replace("awesome", "fun")); // Replace a word


// Task 18: Splitting and joining a sentence
function breakSentence(sentence) {
    return sentence.split(" ");
}

function mergeWords(wordsArray) {
    return wordsArray.join(" ");
}

const phrase = "JavaScript is fun to learn";
const wordList = breakSentence(phrase);
console.log(wordList);

const reconstructed = mergeWords(wordList);
console.log(reconstructed);


// Task 19: Set operations
const uniqueNumbers = new Set([1, 2, 3, 3, 4, 5]);
uniqueNumbers.add(6);  // Insert a new value
uniqueNumbers.delete(2); // Remove a specific element
console.log(uniqueNumbers.has(3)); // Check existence
console.log(uniqueNumbers);


// Task 20: Count character frequency using a Map
function countCharacters(inputStr) {
    const frequencyMap = new Map();

    for (const char of inputStr) {
        if (char !== " ") {
            frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
        }
    }

    return frequencyMap;
}

const charCount = countCharacters("hello world");
console.log(charCount);