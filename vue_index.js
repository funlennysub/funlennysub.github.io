let app = new Vue({ 
    el: '#app',
    data: {
        message: '?'
    },
    methods: {
        yes: function() {
            this.message = "maybe"
        }
    }
});
