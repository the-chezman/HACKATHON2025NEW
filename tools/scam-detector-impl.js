let keywords = ["click here",
    "click this link",
    "click the link",
    "click that link",
    "click link",
    "press here",
    "press this link",
    "press the link",
    "press that link",
    "press link",
    "social security number",
    "social security",
    "ssn",
    "unusual activity",
    "sign-in",
    "sign in",
    "hurry up",
    "24 hours",
    "free",
    "reward",
    "start now",
    "congratulations",
    "usd",
    "confirm here",
    "trusted sender",
    "cashapp",
    "casino",
    "vance",
    "donald",
    "trump",
    "biden",
    "kamala",
    "harris",
    "bernie",
    "sanders",
    "free spins",
    "confirm your info",
    "coupon code",
    "you received",
    "claim your free",
    "claim",
    "today",
    "winner",
    "chosen",
    "gift",
    "claim your reward",
    "transaction",
    "iphone",
    "signature",
    "dear user",
    "activate",
    "response",
    "alerts",
    "job",
    "usps",
    "package",
    "sweepstakes",
    "prize",
    "unauthorized",
    "detected"];

let keywordList = [];

function detectScam() {
    let text = document.getElementById("scamText").value;
    let keywordCounter = countKeywords(text);
    
    if (keywordCounter >= 4) {
        document.getElementById("demo").innerHTML = "This is most likely a scam, make sure not to click any links. Keywords found: " + keywordList;
    } else {
        document.getElementById("demo").innerHTML = "This is probably not a scam, but still check for dangers. Keywords found: " + keywordList;
    }
}

function countKeywords(text) {
    let counter = 0;
    text = text.toLowerCase();
    text = text.replace(/[^\w\s\']|_/g, "")
         .replace(/\s+/g, " ");
    for (let i = 0; i < keywords.length; i++) {
        if (text.includes(keywords[i])) {
            counter += 1;
            keywordList.push(" " + keywords[i]);
        }
    }
    return counter;
}