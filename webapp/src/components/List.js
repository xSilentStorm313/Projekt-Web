import React from "react";
import Card from "./components/Card.js";



export default function List() {
    return (
        <div className="list">
            {[0, 1, 2, 3, 5, 6, 7, 8, 9].map(item => <Card>{item}</Card>)}
        </div>
    )
} 