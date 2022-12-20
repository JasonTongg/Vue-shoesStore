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
      {
        name: 'Green Jordan',
        priceThrough: 'Rp. 8.000.000,-',
        price: '3500000',
        img: './assets/shoes-8.jfif',
        id: 8,
      },
      {
        name: 'Yellow Jordan',
        priceThrough: 'Rp. 7.000.000,-',
        price: '3500000',
        img: './assets/shoes-9.jfif',
        id: 9,
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
    req: '',
    total: 0,
    totalQty: 0,
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
    addReq(event) {
      this.req = event.target.value;
    },
    addCart() {
      this.cart.push({
        qty: this.qty,
        packing: this.packing,
        size: this.size,
        name: this.details.name,
        price: this.details.price,
        req: this.req,
        img: this.details.img,
        id: +new Date(),
      });
      this.total += +this.details.price * +this.qty;
      this.totalQty += +this.qty;
      this.resetValue();
    },
    removeCartItem(id) {
      this.cart = this.cart.filter((item) => item.id !== id);
    },
    resetValue() {
      this.qty = 1;
      this.packing = 'normal';
      this.size = 35;
      this.req = '';
    },
    buyDetail() {
      alert(
        `Success buy ${this.qty} ${this.details.name}, total: Rp. ${this.details.price},-`
      );
      window.location.href = `https://wa.me/6285311759600?text=Success%20buy%20${this.qty} ${this.details.name},%20total:%20Rp.%20${this.details.price},-`;
      this.resetValue();
    },
    buyCart() {
      alert(`Success buy ${this.totalQty} shoes, total: Rp. ${this.total},-`);
      window.location.href = `https://wa.me/6285311759600?text=Success%20buy%20${this.totalQty}%20shoes,%20total:%20Rp.%20${this.total},-`;
      this.cart = [];
    },
  },
});

let overlay = document.querySelector('.overlay');
let buttons = document.getElementsByTagName('button');
let cartOverlay = document.querySelector('.cartOverlay');
let cartButton = document.querySelector('.cartButton');

cartOverlay.addEventListener('click', (e) => {
  if (e.target === cartOverlay.closest('.cartOverlay')) {
    cartOverlay.classList.remove('display');
  }
});

cartButton.addEventListener('click', () => {
  cartOverlay.classList.add('display');
});

let removeCart = () => {
  cartOverlay.classList.remove('display');
};

let remove = () => {
  overlay.classList.remove('display');
};

overlay.addEventListener('click', (e) => {
  if (e.target === overlay.closest('.overlay')) {
    overlay.classList.remove('display');
  }
});

Array.from(buttons).forEach((item) =>
  item.addEventListener('click', () => {
    overlay.classList.add('display');
  })
);
