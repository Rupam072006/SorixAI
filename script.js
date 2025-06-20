let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice1 = document.querySelector("#voice1");
let languageSelect = document.querySelector("#language-select");
let chatContainer = document.querySelector("#chat-container");

let greetings = {
    morning: "Good Morning",
    afternoon: "Good Afternoon",
    evening: "Good Evening"
};

let responses = {
    who_are_you: "I am SorixAI created by Team, Thank you!",
    hello: "Hello, How are you?"
};

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.lang = languageSelect.value; 
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.onstart = () => {
        voice1.style.display = "block"; 
    };
    text_speak.onend = () => {
        voice1.style.display = "none"; 
    };
    window.speechSynthesis.speak(text_speak);
}

function wishme() {
    let day = new Date();
    let hours = day.getHours();
    if (hours >= 0 && hours < 12) {
        speak(greetings.morning);
    } else if (hours >= 12 && hours < 16) {
        speak(greetings.afternoon);
    } else {
        speak(greetings.evening);
    }
}

window.addEventListener('load', () => {
    wishme();
});

let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new SpeechRecognition();
let isRecognitionRunning = false;

recognition.lang = languageSelect.value; 

recognition.onstart = () => {
    isRecognitionRunning = true;
    voice1.style.display = "block"; 
};

recognition.onend = () => {
    isRecognitionRunning = false;
    voice1.style.display = "none"; 
};

recognition.onresult = (event) => {
    let currentIndex = event.resultIndex;
    let transcript = event.results[currentIndex][0].transcript; 
    content.innerText = transcript;
    appendMessage("User", transcript); // Append user's message to chat history
    takeCommand(transcript.toLowerCase()); 
}

btn.addEventListener('click', () => {
    if (!isRecognitionRunning) {
        recognition.lang = languageSelect.value; 
        recognition.start();
    } else {
        console.log("Recognition is already running");
    }
    btn.style.display = "none";
});

function getNews() {
    const apiKey = 'cc86c59148614e8d960ba09f501b3729'; // Your provided NewsAPI key
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.articles && data.articles.length > 0) {
                let headlines = data.articles.slice(0, 5).map(article => article.title).join('. ');
                speak(`Here are the top news headlines: ${headlines}`);
            } else {
                speak("Sorry, I couldn't find any news headlines.");
            }
        })
        .catch(error => {
            speak("Sorry, I couldn't fetch the news.");
            console.error('Error fetching news:', error);
        });
}

function playSpotify(song) {
    const clientId = '585bf5cf408b467287f17d7ce572303d'; // Replace with your Spotify client ID
    const clientSecret = '66ea0c593fbc4aafb2180ba752632e31'; // Replace with your Spotify client secret

    // Get Spotify access token
    fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'
    })
    .then(response => response.json())
    .then(data => {
        const accessToken = data.access_token;

        // Search for the song on Spotify
        fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(song)}&type=track`, {
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.tracks.items.length > 0) {
                const track = data.tracks.items[0];
                const trackUrl = track.external_urls.spotify;
                speak(`Playing ${track.name} by ${track.artists[0].name} on Spotify`);
                window.open(trackUrl, '_blank');
            } else {
                speak("Sorry, I couldn't find the song on Spotify.");
            }
        })
        .catch(error => {
            speak("Sorry, I couldn't fetch the song from Spotify.");
            console.error('Error fetching song from Spotify:', error);
        });
    })
    .catch(error => {
        speak("Sorry, I couldn't get access to Spotify.");
        console.error('Error getting Spotify access token:', error);
    });
}

function takeCommand(message) {
    btn.style.display = "flex";
    if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
        speak(responses.hello);
    } else if (message.includes("who are you")) {
        speak(responses.who_are_you);
    } else if (message.includes("open youtube")) {
        speak("opening youtube");
        window.open("https://www.youtube.com/", "_blank");
    } else if (message.includes("open google")) {
        speak("opening google");
        window.open("https://www.google.com/", "_blank"); 
    } else if (message.includes("open whatsapp")) {
        speak("opening whatsapp");
        window.open("https://web.whatsapp.com/", "_blank");
    } else if (message.includes("open facebook")) {            
        speak("opening facebook");
        window.open("https://www.facebook.com/", "_blank");  
    } else if (message.includes("open instagram")) {     
        speak("opening instagram");
        window.open("https://www.instagram.com/", "_blank");  
    } else if (message.includes("open twitter")) {            
        speak("opening twitter");
        window.open("https://twitter.com/", "_blank");
    } else if (message.includes("open linkedin")) {            
        speak("opening linkedin");
        window.open("https://www.linkedin.com/", "_blank");   
    } else if (message.includes("open github")) {                                            
        speak("opening github");
        window.open("https://github.com/", "_blank");
    } else if (message.toLowerCase().startsWith("who is")) {
        let query = message.toLowerCase().replace("who is", "").trim();
        if (query) {
            speak(`This is what I found on the internet regarding ${query}`);
            window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
        } else {
            speak("Please specify who or what you want to search for.");
        }
    } else if (message.includes("what is")) {
        let query = message.replace("what is", "").trim();
        speak(`This is what I found on the internet regarding ${query}`);
        window.open(`https://www.google.com/search?q=${query}`, '_blank');
    } else if (message.includes("what time is it") || message.includes("current time")) {
        let now = new Date();
        let time = now.toLocaleTimeString();
        speak(`The current time is ${time}`);
    } else if (message.includes("what is the date") || message.includes("current date")) {
        let now = new Date();
        let date = now.toLocaleDateString();
        speak(`Today's date is ${date}`);
    } else if (message.includes("news update") || message.includes("latest news")) {
        getNews();
    } else if (message.includes("play")) {
        let song = message.replace("play", "").trim();
        playSpotify(song);
    } else {
        speak("Sorry, I didn't understand that.");
    }
} 

function appendMessage(sender, message) {
    if (sender === "User") {
        let messageElement = document.createElement('div');
        messageElement.className = 'message';
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatContainer.appendChild(messageElement);
        chatContainer.scrollTop = chatContainer.scrollHeight; // Scroll to the bottom
    }
}