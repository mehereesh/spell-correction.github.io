async function checkSpelling() {
    const inputText = document.getElementById('inputText').value;
    const correctedTextElement = document.getElementById('correctedText');
    correctedTextElement.textContent = "Processing...";  // Temporary loading message

    try {
        const response = await fetch('http://localhost:5000/correct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: inputText })
        });

        if (!response.ok) {
            throw new Error("Error fetching corrected text");
        }

        const data = await response.json();
        correctedTextElement.textContent = data.corrected;
    } catch (error) {
        correctedTextElement.textContent = "Error: " + error.message;
    }
}
