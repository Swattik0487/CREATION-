// Function to change text color and background dynamically based on time of day
function updatePageStyle() {
    const hour = new Date().getHours();
    const body = document.body;
    const title = document.getElementById('dynamic-title');
    const text = document.getElementById('dynamic-text');

    if (hour >= 6 && hour < 12) {
        body.style.backgroundColor = "#e0f7fa";
        title.style.color = "#004d40";
        text.style.color = "#004d40";
    } else if (hour >= 12 && hour < 18) {
        body.style.backgroundColor = "#fff3e0";
        title.style.color = "#e65100";
        text.style.color = "#e65100";
    } else if (hour >= 18 && hour < 22) {
        body.style.backgroundColor = "#ffccbc";
        title.style.color = "#d32f2f";
        text.style.color = "#d32f2f";
    } else {
        body.style.backgroundColor = "#263238";
        title.style.color = "#b0bec5";
        text.style.color = "#b0bec5";
    }
}

updatePageStyle();
setInterval(updatePageStyle, 60000); // Update every minute

// Scroll effect for images
const photos = document.querySelectorAll('.photo');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

photos.forEach(photo => {
    observer.observe(photo);
});

// Toggle event details
function toggleEventDetails(eventId) {
    const eventDetails = document.getElementById(eventId);
    if (eventDetails.style.display === "none" || eventDetails.style.display === "") {
        eventDetails.style.display = "block";
    } else {
        eventDetails.style.display = "none";
    }
}
