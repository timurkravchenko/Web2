import React from "react";
import {createRoot} from "react-dom/client";


import AppHeader from "./Components/app-header";
import SearchPanel from "./Components/search-panel";
import TodoList from "./Components/todo-list";

const App = () => {

    return (
        <div>

            <AppHeader/>
            <SearchPanel />
            <TodoList/>
        </div>
    );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />)