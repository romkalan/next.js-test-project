import Link from "next/link";
import {getRestaurantById} from "@/services/api";

async function RestaurantPage({params}) {
    // const restaurant = getRestaurantById(params.id);

    return (
        <div>
            <h2>Restaurant Page: {params.id}</h2>
            <p><Link href="/restaurants/menu">Меню</Link></p>
        </div>
    );
}

export default RestaurantPage;
