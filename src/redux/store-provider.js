'use client';

import {Provider} from "react-redux";
import store from "@/redux/index";

function StoreProvider({children}) {
    return (
        <div>
            <Provider store={store}>
                {children}
            </Provider>
        </div>
    );
}

export default StoreProvider;
