import {getRestaurants} from "@/services/api";
import Tabs from "@/components/tabs/component";

async function RestaurantsPage() {
    const restaurants = await getRestaurants();

    const products = [
        {name: "Van Clif", id: 123124213423},
        {name: "Venda", id: 223124213423},
        {name: "Roman", id: 323124213423},
    ]
    return (
        <div>
            <h2>Select Restaurants</h2>
            <Tabs restaurants={restaurants} />
        </div>
    );
}

export default RestaurantsPage;
