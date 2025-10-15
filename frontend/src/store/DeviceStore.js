import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
  constructor () {
    this._types = [
      { id: 1, name: 'Холодильники' },
      { id: 2, name: 'Смартфоны' },
      { id: 3, name: 'Ноутбуки' },
      { id: 4, name: 'Телевизоры' },
    ];
    this._brands = [
      { id: 1, name: 'Samsung' },
      { id: 2, name: 'Apple' },
      { id: 3, name: 'Lenovo' },
      { id: 4, name: 'Asus' },
    ];
    this._devices = [
      {
        id: 1,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://quke.ru/resize/600x600/UserFiles/Landing/products_new/Honor_400_Pro/142467_photos_0_68502bf029c8d.jpg',
      },
      {
        id: 2,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://quke.ru/resize/600x600/UserFiles/Landing/products_new/Honor_400_Pro/142467_photos_0_68502bf029c8d.jpg',
      },
      {
        id: 3,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://quke.ru/resize/600x600/UserFiles/Landing/products_new/Honor_400_Pro/142467_photos_0_68502bf029c8d.jpg',
      },
      {
        id: 4,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://quke.ru/resize/600x600/UserFiles/Landing/products_new/Honor_400_Pro/142467_photos_0_68502bf029c8d.jpg',
      },
      {
        id: 5,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://quke.ru/resize/600x600/UserFiles/Landing/products_new/Honor_400_Pro/142467_photos_0_68502bf029c8d.jpg',
      },
      {
        id: 6,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://quke.ru/resize/600x600/UserFiles/Landing/products_new/Honor_400_Pro/142467_photos_0_68502bf029c8d.jpg',
      },
      {
        id: 7,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://quke.ru/resize/600x600/UserFiles/Landing/products_new/Honor_400_Pro/142467_photos_0_68502bf029c8d.jpg',
      },
      {
        id: 8,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://quke.ru/resize/600x600/UserFiles/Landing/products_new/Honor_400_Pro/142467_photos_0_68502bf029c8d.jpg',
      },
      {
        id: 9,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://quke.ru/resize/600x600/UserFiles/Landing/products_new/Honor_400_Pro/142467_photos_0_68502bf029c8d.jpg',
      },
    ];
    this._selectedType = {};
    this._selectedBrand = {};
    makeAutoObservable(this);
  }

  setTypes (types) {
    this._types = types;
  }

  setBrand (brands) {
    this._brands = brands;
  }

  setDevices (devices) {
    this._devices = devices;
  }

  setSelectedType (type) {
    this._selectedType = type;
  }

  setSelectedBrand (brand) {
    this._selectedBrand = brand;
  }

  get types () {
    return this._types;
  }

  get brands () {
    return this._brands;
  }

  get devices () {
    return this._devices;
  }

  get selectedType () {
    return this._selectedType;
  }

  get selectedBrand () {
    return this._selectedBrand;
  }
}