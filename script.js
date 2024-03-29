document.getElementById('submitBtn').addEventListener('click', function() {
    var location = document.getElementById('locationInput').value;
    var weatherInfo = document.getElementById('weatherInfo');

    if (location.trim() !== '') {
        weatherInfo.innerHTML = "Error in fetching location.";
    }
});
