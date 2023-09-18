export const bots = {
    namespaced: true,
    state: {
        currentBot: 'String',
        botsList: [
            {
                "id": 0,
                "name": "AVAS",
                "category": "Посольство",
                "price": 1499,
                "image": "./img/macbook-pro.jpeg",
                "is_available": true
            },
            {
                "id": 1,
                "name": "Visavorchina.cn",
                "category": "Визовый центр",
                "price": 1499,
                "image": "./img/macbook-pro.jpeg",
                "is_available": true
            },
            {
                "id": 2,
                "name": "portal.ustraveldocs.com",
                "category": "Косульство",
                "price": 1499,
                "image": "./img/macbook-pro.jpeg",
                "is_available": true
            },
        ],
    },
    mutations: {
        setCurBot(state, bot) {
            console.log(bot)
            state.currentBot = bot
        }
    },
    getters: {
        getBotsList: (state) => (
            state.botsList
        )
    },
}
