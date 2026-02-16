// Footer utilities for PitStop Arena
document.addEventListener('DOMContentLoaded', function () {
    // Email copy functionality
    const emailLink = document.getElementById('email-link');
    const emailCopied = document.getElementById('email-copied');

    if (emailLink) {
        emailLink.addEventListener('click', (e) => {
            e.preventDefault();
            const email = 'contact@pitstoparena.com';

            // Copy to clipboard
            navigator.clipboard.writeText(email).then(() => {
                // Show copied message
                if (emailCopied) {
                    emailCopied.style.display = 'inline';
                    setTimeout(() => {
                        emailCopied.style.display = 'none';
                    }, 2000);
                }
            }).catch(err => {
                console.error('Failed to copy email:', err);
            });
        });
    }
});
