const coffee = {
    state: {
        coffee: [
            {
                id: 0,
                image: "coffee-1.jpg",
                text: "Solimo Coffee Beans 2kg",
                price: "10.73",
            },
            {
                id: 1,
                image: "coffee-2.jpg",
                text: "Presto Coffee Beans 1kg",
                price: "15.99",
            },
            {
                id: 2,
                image: "coffee-3.jpg",
                text: "AROMISTICO Coffee 1kg",
                price: "6.99",
            },
            {
                id: 3,
                image: "coffee-1.jpg",
                text: "Solimo Coffee Beans 2kg",
                price: "10.73",
            },
            {
                id: 4,
                image: "coffee-2.jpg",
                text: "Presto Coffee Beans 1kg",
                price: "15.99",
            },
            {
                id: 5,
                image: "coffee-3.jpg",
                text: "AROMISTICO Coffee 1kg",
                price: "6.99",
            },
        ],
    },
    getters: {
        getCoffee(state) {
            return { coffee: state.coffee }
        },
        getCoffeeById(state) {
            return (id) => {
                return state.coffee.find((card) => card.id === +id)
            }
        }
    }
}

export default coffee