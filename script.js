let vue = new Vue({
  el: '#wrapper',
  data: {
    shoes: [
      {
        name: 'Red Jordan',
        priceThrough: 'Rp. 9.000.000,-',
        price: '5000000',
        img: './assets/shoes-1.png',
        id: 1,
      },
      {
        name: 'Grey Jordan',
        priceThrough: 'Rp. 12.000.000,-',
        price: '10000000',
        img: './assets/shoes-2.jfif',
        id: 2,
      },
      {
        name: 'White Jordan',
        priceThrough: 'Rp. 9.000.000,-',
        price: '5000000',
        img: './assets/shoes-3.jfif',
        id: 3,
      },
      {
        name: 'Black-white Jordan',
        priceThrough: 'Rp. 10.000.000,-',
        price: '7000000',
        img: './assets/shoes-4.jfif',
        id: 4,
      },
      {
        name: 'Blue Jordan',
        priceThrough: 'Rp. 18.000.000,-',
        price: '16000000',
        img: './assets/shoes-5.jfif',
        id: 5,
      },
      {
        name: 'White-black Jordan',
        priceThrough: 'Rp. 20.000.000,-',
        price: '19000000',
        img: './assets/shoes-6.jfif',
        id: 6,
      },
      {
        name: 'Blue-black Jordan',
        priceThrough: 'Rp. 5.000.000,-',
        price: '3500000',
        img: './assets/shoes-7.jfif',
        id: 7,
      },
    ],
    details: {
      name: 'Red Jordan',
      priceThrough: 'Rp. 5.000.000,-',
      price: 'Rp. 3500000',
      img: './assets/shoes-7.jfif',
    },
    sizeList: [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    qty: 1,
    packing: 'normal',
    size: 35,
    cart: [],
  },
  methods: {
    changeDetails(id) {
      let shoe = this.shoes.find((item) => item.id === id);
      this.details = shoe;
    },
    incQty() {
      this.qty += 1;
    },
    decQty() {
      this.qty -= 1;
      if (this.qty < 0) {
        this.qty = 0;
      }
    },
    changeSize(event) {
      this.size = event.target.value;
    },
    changePacking(input) {
      this.packing = input;
    },
    addCart() {
      this.cart.push({
        qty: this.qty,
        packing: this.packing,
        size: this.size,
        name: this.details.name,
        price: this.details.price,
      });
      console.log(this.cart);
    },
  },
});

let overlay = document.querySelector('.overlay');
let buttons = document.getElementsByTagName('button');
console.log(overlay);

// overlay.addEventListener('click', () => {
//   overlay.classList.remove('display');
// });

Array.from(buttons).forEach((item) =>
  item.addEventListener('click', () => {
    overlay.classList.add('display');
  })
);
