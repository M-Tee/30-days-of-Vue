new Vue ({
    el: '#app',
    data: {
        greeting: 'Hello Vue!',
        user: 'M-tee',
        city: 'Nairobi',

        //v-on object
        alertMessage: '',

        //v-bind object
        cityImage: 'https://bit.ly/2SKJPqJ'
    },
    methods: {
        //v-on methods
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