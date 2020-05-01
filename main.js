new Vue ({
    el: '#app',
    data: {
        greeting: 'Hello Vue!',
        user: 'M-tee',
        city: 'Nairobi',
        alertMessage: ''
    },
    methods: {
        changeGreeting() {
            this.greeting = this.greeting === 'Hello Vue!' ?
             'What\'s up!' :
             'Hello Vue!';
          },
          alertMessageGreeting() {
            this.alertMessage = 'You typed something!';
          },
          alertEnterGreeting() {
            this.alertMessage = 'You typed and pressed Enter!';
          },


    },

});