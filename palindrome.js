// Function to check if the string is a palindrome
function checkPalindrome() {
    let isRepeating = true;
    while (isRepeating) {
        // Prompt user for input
        let userInput = prompt("Enter a word or phrase:");

        // Exit the loop if user cancels the prompt
        if (userInput === null) {
            isRepeating = false;
            break;
        }

        // Remove spaces and convert to lower case for comparison
        let formattedInput = userInput.replace(/\s+/g, '').toLowerCase();

        // Check if the string is a palindrome
        if (formattedInput === formattedInput.split('').reverse().join('')) {
            alert(userInput + " is a palindrome.");
        } else {
            alert(userInput + " is not a palindrome.");
        }

        // Ask user if they want to check another word
        isRepeating = confirm("Do you want to check another word?");
    }
}
