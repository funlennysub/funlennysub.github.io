let app = new Vue({ 
    el: '#app',
    data: {
        message: 'Кларн токсик?'
    },
    methods: {
        yes: function() {
            this.message = "Кларн токсик"
        }
    }
});