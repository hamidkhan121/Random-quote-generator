const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "The way to get started is to quit talking and begin doing.",    
    "Success usually comes to those who are too busy to be looking for it.",
    "Success is walking from failure to failure with no loss of enthusiasm.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "Success is walking from failure to failure with no loss of enthusiasm.",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
]

const generateQuote = () => {
    const random = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerHTML = quotes[random];
}