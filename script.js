//your JS code here. If required.
function getNumbers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000); // Resolve after 3 seconds
    });
}
function filterOddAndMultiplyEven() {
    return getNumbers()
        .then((numbers) => {
            // Filter out odd numbers
            const evenNumbers = numbers.filter((num) => num % 2 === 0);
            return evenNumbers;
        })
        .then((evenNumbers) => {
            // Multiply even numbers by 2
            const multipliedNumbers = evenNumbers.map((num) => num * 2);
            return multipliedNumbers;
        });
}
filterOddAndMultiplyEven().then((result) => {
    const outputElement = document.getElementById('output');
    outputElement.textContent = result.join(', '); // Display the result as a comma-separated string
});
