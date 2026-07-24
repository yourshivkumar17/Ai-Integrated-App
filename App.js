function analyzeText() {
  const userInput = document.getElementById("userInput").value.trim();
  const loader = document.getElementById("loader");
  const resultBox = document.getElementById("resultBox");
  const resultOutput = document.getElementById("resultOutput");

  if (!userInput) {
    alert("Please enter some text first!");
    return;
  }

  loader.classList.remove("hidden");
  resultBox.classList.add("hidden");

  // Simulate AI Thinking delay (1 second)
  setTimeout(() => {
    // 1. Text Summarization Logic (Extract key sentences)
    const sentences = userInput.split(/(?<=[.?!])\s+/).filter(s => s.trim().length > 0);
    let summaryText = "";

    if (sentences.length <= 2) {
      summaryText = "• " + userInput;
    } else {
      summaryText = `• ${sentences[0]}\n• ${sentences[Math.floor(sentences.length / 2)]}\n• ${sentences[sentences.length - 1]}`;
    }

    // 2. Sentiment Analysis Logic
    const textLower = userInput.toLowerCase();
    const positiveWords = ["good", "great", "awesome", "happy", "love", "excellent", "best", "nice", "fantastic", "enjoy"];
    const negativeWords = ["bad", "worst", "sad", "hate", "error", "poor", "terrible", "fail", "horrible", "problem"];

    let posCount = 0;
    let negCount = 0;

    positiveWords.forEach(word => { if (textLower.includes(word)) posCount++; });
    negativeWords.forEach(word => { if (textLower.includes(word)) negCount++; });

    let sentiment = "Neutral 😐 (Balanced tone)";
    if (posCount > negCount) {
      sentiment = "Positive 😊 (Contains encouraging and positive tone)";
    } else if (negCount > posCount) {
      sentiment = "Negative ☹️ (Contains critical or unhappy tone)";
    }

    // Display Result
    resultOutput.innerText = `Summary:\n${summaryText}\n\nOverall Sentiment:\n${sentiment}`;
    
    loader.classList.add("hidden");
    resultBox.classList.remove("hidden");
  }, 1000);
}