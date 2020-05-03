new Vue({
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

    //v-if methods
    changeCity() {
      if (this.city === 'Toronto') {
        this.city = 'Lagos';
        this.cityImage = 'https://bit.ly/2Rd4gQ3';
      } else {
        this.city = 'Toronto';
        this.cityImage = 'https://bit.ly/2SKJPqJ';
      }
    }


  },

});

new Vue({
  el: '#list',
  data: {
    numbers: [1, 2, 3, 4, 5],
  },
});

new Vue({
  el: '#shuffle-list',
  data: {
    points: [
      { id: 1, value: 1 },
      { id: 2, value: 10 },
      { id: 3, value: 100 },
      { id: 4, value: 1000 },
      { id: 5, value: 10000 }
    ]
  },

  methods: {
    shuffle() {
      this.points = _.shuffle(this.points)
    }
  }
});