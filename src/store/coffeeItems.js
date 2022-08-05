import { v4 as uuidv4 } from "uuid";

const coffeeItems = {
    state: {
        goodsMain: [
            {
                id: uuidv4(),
                image: "coffee-1.jpg",
                text: "Solimo Coffee Beans 2kg",
                price: "10.73",
            },
            {
                id: uuidv4(),
                image: "coffee-2.jpg",
                text: "Presto Coffee Beans 1kg",
                price: "15.99",
            },
            {
                id: uuidv4(),
                image: "coffee-3.jpg",
                text: "AROMISTICO Coffee 1kg",
                price: "6.99",
            },
        ],
        goods: [
            {
                id: uuidv4(),
                image: "coffee-1.jpg",
                text: "Solimo Coffee Beans 2kg",
                price: "10.73",
            },
            {
                id: uuidv4(),
                image: "coffee-2.jpg",
                text: "Presto Coffee Beans 1kg",
                price: "15.99",
            },
            {
                id: uuidv4(),
                image: "coffee-3.jpg",
                text: "AROMISTICO Coffee 1kg",
                price: "6.99",
            },
            {
                id: uuidv4(),
                image: "coffee-1.jpg",
                text: "Solimo Coffee Beans 2kg",
                price: "10.73",
            },
            {
                id: uuidv4(),
                image: "coffee-2.jpg",
                text: "Presto Coffee Beans 1kg",
                price: "15.99",
            },
            {
                id: uuidv4(),
                image: "coffee-3.jpg",
                text: "AROMISTICO Coffee 1kg",
                price: "6.99",
            },
        ],
    },
    getters: {
        getCoffeeItems(state) {
            return { goods: state.goods }
        },
        getMainCoffeeItems(state) {
            return { goodsMain: state.goodsMain }
        }
    }
}

export default coffeeItems