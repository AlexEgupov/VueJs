const bestsellers = {
    state: {
        bestsellers: [
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
        ]
    },
    getters: {
        getBestsellers(state) {
            return { bestsellers: state.bestsellers }
        },
    }
}

export default bestsellers