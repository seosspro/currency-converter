export const state = {
    url: 'https://v6.exchangerate-api.com/v6/d3a1a9cc6fcf2ff17f914110',
    codes: [],
    pair: {
        from: '',
        to: ''
    },
    amount: '',
    loading: false,
    currentTab: 'convert',
    currency: {
        code: 'USD'
    },
    currencies: ['USD', 'EUR', 'BYN'],
    actions: {
        remove: 'remove',
        change: 'change'
    }
}