// You Got This - Interactive JavaScript Functions (Client-Side Version)

// Affirmations and messages
const preGame = [
    "🏋🏽 You prepared for this. You *are* ready.",
    "💥 You bring the heat, the heart, and the hustle.",
    "🧠 Your mind is calm. You know what to do.",
    "🚀 You are ready to blast off!",
    "🔥 Win or lose, your courage already makes you victorious.",
    "😄 You're gonna feel so good when you finish this.",
    "💨 You are unstoppable!"
];

const postWin = [
    "🎉 You did THAT! Champion energy activated!",
    "🏆 Your hard work paid off — the victory is yours!",
    "👑 You didn't just show up. You showed OUT.",
    "💎 You turned the pressure into power.",
    "🌟 Yeah! You lit it up!",
    "🏁 Ooooh! Done feels gooooood.",
    "✅ Yaaaaay! Check it off the list!"
];

const postLose = [
    "💔 Disappointment hurts, but growth is in the grit.",
    "💡 You learned. You leveled up. You live to rise again.",
    "🦁 One stumble does not define a warrior like you.",
    "💥 You gave your all — and that matters more than medals.",
    "🍳 You can't make an omelette without breaking some eggs. Try again.",
    "🧹 Dust yourself off, and try again. You'll get it next time!",
    "🌱 Setbacks sow seeds. You'll come back even stronger."
];

const postNeutral = [
    "🎬 At least you started. And next time you'll keep going.",
    "🛠️ Progress over perfection — always.",
    "🎯 You showed up and pushed through. That's elite energy.",
    "🧰 You did what you could with what you had. Now, you know what you need to finish.",
    "📏 Each and every try brings you closer to done.",
    "🏃 You're building character with every rep.",
    "🌈 Keep showing up. Keep growing. It's all unfolding."
];

const treats = [
    "🍩 Grab a delicious treat — you earned every bite!",
    "📸 Snap a selfie to remember this moment of glory.",
    "🕺 Dance like nobody's watching (or like everyone is watching and you LOVE it)!",
    "🎶 Blast your hype anthem and strut like a superstar.",
    "😁 Smile your biggest, cheesiest smile and feel the glow.",
    "💭 Remember one good thing that happened for you in the past few days.",
    "☺️ Think of something that you're grateful for.",
    "🎤 Hum your favorite tune and let the buzz feel your heart.",
    "🧘‍♀️ Unplug. Chill. Rest. You showed up today — now soak in the win."
];

// Utility functions
function showLoading() {
    document.getElementById('loadingSpinner').style.display = 'block';
}

function hideLoading() {
    document.getElementById('loadingSpinner').style.display = 'none';
}

function clearMessageArea() {
    const messageArea = document.getElementById('messageArea');
    messageArea.innerHTML = '';
}

function displayMessage(content, className = 'message-fade-in') {
    const messageArea = document.getElementById('messageArea');
    const messageDiv = document.createElement('div');
    messageDiv.className = className;
    messageDiv.innerHTML = content;
    messageArea.appendChild(messageDiv);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomMessages(array, count = 3) {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Pre-game motivation boost
async function getPreGameBoost() {
    showLoading();
    
    // Simulate loading time
    await sleep(500);
    
    hideLoading();
    clearMessageArea();
    
    // Display title
    displayMessage('<div class="message-title">POWER-UP</div>');
    
    // Get 3 random messages
    const messages = getRandomMessages(preGame, 3);
    
    // Display messages with delays
    for (let i = 0; i < messages.length; i++) {
        await sleep(1500);
        displayMessage(`<div class="message-item">${messages[i]}</div>`);
    }
}

// Countdown timer
async function startCountdown() {
    clearMessageArea();
    
    // Initial message
    displayMessage('<div class="message-title">⏳ Prepare for awesomeness in...</div>');
    
    await sleep(1000);
    
    // Countdown from 5 to 1
    for (let i = 5; i >= 1; i--) {
        displayMessage(`<div class="countdown-number">⚡ ${i}</div>`);
        await sleep(1000);
        clearMessageArea();
    }
    
    // Final GO message
    displayMessage('<div class="countdown-go">🎯 GO! You got this!!! 🏁</div>');
}

// Post-game results
async function postGameResult(result) {
    showLoading();
    
    // Simulate loading time
    await sleep(500);
    
    hideLoading();
    clearMessageArea();
    
    let messages, title;
    
    if (result === 'win') {
        messages = getRandomMessages(postWin, 3);
        title = 'CELEBRATION';
    } else if (result === 'lose') {
        messages = getRandomMessages(postLose, 3);
        title = 'REFLECTION';
    } else { // neutral
        messages = getRandomMessages(postNeutral, 3);
        title = 'RECOGNITION';
    }
    
    // Display title
    displayMessage(`<div class="message-title">${title}</div>`);
    
    // Display messages with delays
    for (let i = 0; i < messages.length; i++) {
        await sleep(1500);
        displayMessage(`<div class="message-item">${messages[i]}</div>`);
    }
}

// Treat yo' self celebration
async function treatYoSelf() {
    showLoading();
    
    // Simulate loading time
    await sleep(500);
    
    hideLoading();
    clearMessageArea();
    
    // Initial celebration message
    displayMessage('<div class="message-title">💫 You deserve joy. No permission required. Now, go treat yo\' self!</div>');
    
    await sleep(2000);
    
    // Display random treat
    const randomTreat = treats[Math.floor(Math.random() * treats.length)];
    displayMessage(`<div class="message-item">${randomTreat}</div>`);
    
    await sleep(2000);
    
    // Countdown message
    displayMessage('<div class="message-item">⏳ Take 7 seconds to bask in the glow of you...</div>');
    
    await sleep(1000);
    
    // 7-second countdown
    for (let i = 7; i >= 1; i--) {
        displayMessage(`<div class="countdown-number">🌟 ${i}</div>`);
        await sleep(1000);
    }
    
    // Final celebration
    displayMessage('<div class="countdown-go">🌈 THE UNIVERSE IS CHEERING FOR YOU. Shine on, you brilliant being! 💖</div>');
}

// Touch event enhancements for mobile
document.addEventListener('DOMContentLoaded', function() {
    // Add touch feedback to buttons
    const buttons = document.querySelectorAll('.btn-custom');
    
    buttons.forEach(button => {
        button.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        });
        
        button.addEventListener('touchend', function() {
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // Prevent double-tap zoom on buttons
    buttons.forEach(button => {
        button.addEventListener('touchend', function(e) {
            e.preventDefault();
        });
    });
});

// Handle network errors gracefully
window.addEventListener('online', function() {
    console.log('Connection restored');
});

window.addEventListener('offline', function() {
    console.log('Connection lost');
    displayMessage('<div class="alert alert-warning">You\'re offline, but you still got this! 💪</div>');
});