document.addEventListener('DOMContentLoaded', function () {
    const mainContent = document.getElementById('main-content');

    // Function to fetch and display hotels
    function fetchHotels() {
        fetch('/api/hotels')
            .then(response => response.json())
            .then(data => {
                mainContent.innerHTML = '<h2>Hotel Listing</h2>';
                data.forEach(hotel => {
                    mainContent.innerHTML += `
                        <div class="hotel-card">
                            <h3>${hotel.hotel_name}</h3>
                            <p>Location: ${hotel.location}</p>
                            <p>Rating: ${hotel.rating}</p>
                            <p>Price per Night: $${hotel.price_per_night}</p>
                            <p>${hotel.description}</p>
                        </div>
                    `;
                });
            })
            .catch(error => console.error('Error fetching hotels:', error));
    }

    // Function to fetch and display food
    function fetchFood() {
        fetch('/api/food')
            .then(response => response.json())
            .then(data => {
                mainContent.innerHTML = '<h2>Food Listing</h2>';
                data.forEach(food => {
                    mainContent.innerHTML += `
                        <div class="food-card">
                            <h3>${food.food_name}</h3>
                            <p>Cuisine: ${food.cuisine_type}</p>
                            <p>Price: $${food.price}</p>
                            <p>${food.description}</p>
                        </div>
                    `;
                });
            })
            .catch(error => console.error('Error fetching food:', error));
    }

    // Function to fetch dashboard statistics
    function fetchDashboard() {
        fetch('/api/dashboard')
            .then(response => response.json())
            .then(data => {
                mainContent.innerHTML = `
                    <h2>Dashboard</h2>
                    <p>Total Hotels: ${data.total_hotels}</p>
                    <p>Total Food Items: ${data.total_food}</p>
                `;
            })
            .catch(error => console.error('Error fetching dashboard:', error));
    }

    // Event listeners for navigation
    document.getElementById('hotel-list').addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default anchor behavior
        fetchHotels();
    });

    document.getElementById('food-list').addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default anchor behavior
        fetchFood();
    });

    document.getElementById('dashboard').addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default anchor behavior
        fetchDashboard();
    });
});