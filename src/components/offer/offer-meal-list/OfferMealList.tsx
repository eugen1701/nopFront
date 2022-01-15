import React from "react";
import axios from "axios";

export const OfferMealList: React.FC<{}> = () => {

    let meals;
    let listItems;
    async function getMeals() {

        const token = localStorage.getItem("token");
        const url =  "http://localhost:7768/api/Meal/Get";
        const config = {
            headers: {Authorization: `Bearer ${token}`}
        };
        try{
            const response = await axios.get(url, config);
            console.log("RESPONSE: ", response);
            meals = response.data;
            listItems = meals.map((meal : any) => <li>{meal}</li>);
        } catch (error: any) {
            console.log(error);
        }
    }


    return (
        <ul>{
            listItems
        }</ul>
    );
}