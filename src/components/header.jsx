import { useState } from "react";
import { useEffect } from "react";

function Header() {
    const [currentDate, setCurrentDate] = useState("")

    useEffect(() => {
        const updateDate = () => {
            const today = new Date();
            const options = {weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'};
            // remove the commas
            const formattedDate = today.toLocaleString("en-US", options).replace(/,/g, "");
            setCurrentDate(formattedDate);
        };
        updateDate();

        // timer to update every night
        const now = new Date();
        const timeUntilMidnight = new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate() + 1,
            0, 0, 0
        ) - now;
        const timer = setTimeout(() => {
            updateDate();
            setInterval(updateDate, 24 * 60 * 60 * 1000);
        }, timeUntilMidnight);
        return () => clearTimeout(timer);

    }, []);

    return (
        <header id="header" className="container">
            <p>Today is 📆</p>
            <h1>{currentDate}</h1>
        </header>
    )
}

export default Header 
