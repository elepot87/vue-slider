/*
 * Vue Slider
 */

const app = new Vue({
  el: "#app",
  data: {
    slides: [
      {
        image: "./img/01.jpg",
        title: "Svezia",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
      },
      {
        image: "./img/02.jpg",
        title: "Svizzera",
        text: "Lorem ipsum.",
      },
      {
        image: "./img/03.jpg",
        title: "Gran Bretagna",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
      {
        image: "./img/04.jpg",
        title: "Germania",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.",
      },
      {
        image: "./img/05.jpg",
        title: "Maldive",
        text: "Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.",
      },
    ],
    currentSlide: 0,
    timer: 0,
  },

  methods: {
    prevSlide() {
      this.currentSlide--;
      if (this.currentSlide < 0) {
        this.currentSlide = this.slides.length - 1;
      }
    },
    nextSlide() {
      this.currentSlide++;
      if (this.currentSlide > this.slides.length - 1) {
        this.currentSlide = 0;
      }
    },
    activateImage(index) {
      this.currentSlide = index;
    },

    play() {
      let slider = this;
      this.timer = setInterval(function () {
        slider.nextSlide();
      }, 2000);
    },
  },
  created: function () {
    this.play();
  },
});
