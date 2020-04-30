new Vue ({
    el: '#app',
    data: {
        greeting: 'Hello Vue!',
        user: 'M-tee',
        city: 'Nairobi',
    },
    methods: {
        changeGreeting() {
            this.greeting = this.greeting === 'Hello Vue!' ?
             'What\'s up!' :
             'Hello Vue!';
          }

    },

});