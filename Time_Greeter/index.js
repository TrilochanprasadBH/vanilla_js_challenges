document.addEventListener('DOMContentLoaded', () => {
    const greetingElement = document.getElementById('greetingDisplay');
    // console.log(greetingElement)
    const today = new Date();
    const hour = today.getHours();
    // const username = 'Trilochanprasad';
    const username = prompt('Enter your name') || 'Trilochanprasad';

    const greetings = {
        morning: `Good Morning ${username}`,
        afternoon: `Good Afternoon ${username}`,
        evening: `Good Evening ${username}`,
        night: `Good Night ${username}`
    }

    greetingElement.innerText = hour >= 5 && hour < 12 ? greetings.morning :
        hour >= 12 && hour < 18 ? greetings.afternoon :
            hour >= 18 && hour < 20 ? greetings.evening :
                greetings.night;
})