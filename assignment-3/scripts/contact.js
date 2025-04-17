
// When the "submit-button" is clicked, show thank-you message
document.getElementById('submit-button').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    const contactPage = document.getElementById('contact-page');
    contactPage.innerHTML = '<p style="font-size: 24px; text-align: center; margin-top: 2rem;">Thank you for your message</p>';
});
