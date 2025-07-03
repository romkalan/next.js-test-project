'use client';

import Button from "@/components/button/component";

function Tabs({restaurants}) {
    return (
        <ul>
            {restaurants.map((restaurant) => (
                <li key={restaurant.id}>
                    <Button onClick={() => console.log(restaurant.name)}>{restaurant.name}</Button>
                </li>
            ))}
        </ul>
    );
}

export default Tabs;
