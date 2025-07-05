async function getRestaurants({withoutCache}) {
    const response = await fetch(
        'http://localhost:3001/api/restaurants/', {
            cache: withoutCache ? "no-cache" : "default"
        });

    return await response.json();
}

async function getRestaurantById(restaurantId) {
    const response = await fetch(`http://localhost:3000/api/restaurants/${restaurantId}`);

    return await response.json();
}


export {getRestaurants, getRestaurantById};

