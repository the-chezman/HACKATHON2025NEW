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

function detectScam(text) {
    let keywordCounter = countKeywords(text);
    if (keywordCounter >= 2) {
        return true;
    } else {
        return false;
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
        }
    }
    return true;
}

detectScam("claim");