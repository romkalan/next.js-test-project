async function getRestaurants() {
    const response = await fetch('http://localhost:3000/api/restaurants/');

    return await response.json();
}

async function getRestaurantById(restaurantId) {
    const response = await fetch(`http://localhost:3000/api/restaurants/${restaurantId}`);

    return await response.json();
}


export {getRestaurants, getRestaurantById};

