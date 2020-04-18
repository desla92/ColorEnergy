const d = new Date();
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const weekDays = [
    "Sunday",
    "Monday", 
    "Tuesday", 
    "Wednesday", 
    "Thursday", 
    "Friday", 
    "Saturday",
];
const colors = [
    "a Yellow",
    "a Violet",
    "a Red",
    "an Orange",
    "a Blue",
    "a Green",
    "an Indigo",
];
const sentences = [
    "Yellow is the ray that radiates a sunny disposition. Yellow helps you to think positively and clearly and builds up self-confidence. This is the colour of brain power and optimism!",
    "Begin your week with the energy that inspires you! The Violet ray cleanses your body and mind to give you new life and new energy. This is the colour of spirit and divinity!",
    "Support your week with the colour of passion and vitality. The Red energy activates you to manifest all your inspirations into reality. This is the colour that grounds and feeds you physical strength!",
    "To feel in the moment is the energy of the Orange ray. Live each second in the present and learn what it is to live life! This is the colour of happiness and our deepest joys from within!",
    "The truth about life becomes more and more clear when we get in contact with our Blue energy-our inner self. This is the colour that spiritually uplifts you!",
    "A day to nurture and love yourself and others. Stimulate your heart centre with the power of the Green ray. This is the colour of harmony, health, prosperity and balance!",
    "A day to seek beauty, justice and love. The Indigo ray helps you to connect to your life's meaning and purpose. This is the colour of our intuition-our sixth sense!",
];
const hexCodes = [
    "#f8d348",
    "#6d2b7e",
    "#d93743",
    "#e37739",
    "#3682c5",
    "#3d884d",
    "#203881",
]
const imgBackground = [
    "img/yellow.jpg",
    "img/violet.jpg",
    "img/red.jpg",
    "img/orange.jpg",
    "img/blue.jpg",
    "img/green.jpg",
    "img/indigo.jpg",
]
/* document.querySelector(".data").innerHTML = `${weekDays[d.getDay()]} ${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
document.querySelector(".colorOfTheDay").innerHTML = colors[d.getDay()];
document.querySelector(".sentenceOfTheDay").innerHTML = sentences[d.getDay()]; */
document.querySelector(".banner").style = `background: url(${d.getDay()}) no-repeat center center;`