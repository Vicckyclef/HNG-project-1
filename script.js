document.addEventListener("DOMContentLoaded", function() {
    function updateTime() {
        const now = new Date();
        document.querySelector('[data-testid="currentTimeUTC"]').textContent = now.toUTCString();
    }
    updateTime();
    setInterval(updateTime, 1000); 

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date().getDay();
    document.querySelector('[data-testid="currentDay"]').textContent = days[today];
});
