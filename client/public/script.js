document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
});

async function fetchLeaderboard() {
    const type = document.getElementById('leaderboard-type').value;
    const metric = document.getElementById('leaderboard-metric').value;
    const response = await fetch(`/leaderboard/${type}/${metric}`);
    const data = await response.json();
    displayLeaderboard(data); 
}

function displayLeaderboard(data) {
    document.getElementById('leaderboards').innerHTML = data.map(record => `
        <div class="leaderboard-item">
            <span class="rank">${record.rank}</span>
            <span class="name">${record.name}</span>
            <span class="value">${record.value}</span>
        </div>
    `).join('');
}
