// Replace with your GitHub App Client ID
const clientId = 'YOUR_GITHUB_CLIENT_ID';
const redirectUri = 'https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPOSITORY_NAME/';
const scope = 'user:email'; // Request access to the user's public email

document.getElementById('github-login-button').addEventListener('click', () => {
    // Construct the GitHub OAuth URL
    const authUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;

    // Redirect the user to GitHub
    window.location.href = authUrl;
});

// Handle the redirect from GitHub
window.addEventListener('load', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
        console.log('Authorization code received:', code);
        // In a real-world scenario, you would send this code to your server
        // to exchange it for an access token.
        // Since this is a static site, we'll demonstrate a simple "success" state.

        // For a static site, you could use this code to fetch public user data
        // but it's not a secure way to handle sensitive data.
        // A server-side approach is required for full security.

        alert('Registration with GitHub was successful!');

        // Example: Clear the URL parameters to prevent re-triggering the logic
        window.history.replaceState(null, '', window.location.pathname);
    }
});
