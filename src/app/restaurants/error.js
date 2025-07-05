'use client';

function RestaurantsError({error, reset}) {
    return (
        <div>
            <h2>Error: {error.message}</h2>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default RestaurantsError;
