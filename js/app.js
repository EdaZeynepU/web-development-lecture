const quote = document.querySelector("#quote");
const timeSpan = document.querySelectorAll(".current-time");

const quotesList=[
    "Everyday is a bank account, and time is our currency. No one is rich, no one is poor, we've got 24 hours each. --Christopher Rice",
    "I will tell you the secret to getting rich on Wall Street. You try to be greedy when others are fearful. And you try to be fearful when others are greedy. --Warren Buffett",
    "Opportunity is missed by most people because it is dressed in overalls and looks like work. --Thomas Edison",
    "It is not the man who has too little, but the man who craves more, that is poor. --Seneca",
    "He who loses money, loses much; He who loses a friend, loses much more; He who loses faith, loses all. --Eleanor Roosevelt"
]

const num=Math.floor(Math.random()*quotesList.length);
quote.textContent=quotesList[num];

function setTimeSpan() {
    const date = new Date();
    const currentTime=date.getHours()+":"+date.getMinutes();
    timeSpan.forEach((element) => {
        console.log(element);
        element.textContent=currentTime;
    });
}

setTimeSpan();
setInterval(() => {
    setTimeSpan();
}, 60000);