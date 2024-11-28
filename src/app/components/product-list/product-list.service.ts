import { Injectable } from '@angular/core';
import { Product } from './product-list';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    products: Product[] = [
        {
          name: 'Gaming PC ',
          description: 'ViprTech Rebel 3.0 Gaming PC - AMD Ryzen 5 (12-LCore 3.9Ghz), RTX 3060 12GB, 32GB DDR4 3200, 1TB NVMe SSD, 600W Gold PSU, Bluetooth, VR-Ready, Streaming, RGB, Win 11 Pro, Desktop Computer Black',
          price: 29.99,
          image: 'pc.jpg'
        },
        {
          name: 'Wired RGB Mouse',
          description: 'Wired RGB Mouse, Optical USB Computer Mouse, 1600 DPI Silent LED Mouse for Windows PC, Laptop, Desktop, Notebook',
          price: 39.99,
          image: 'mouse.jpg'
        },
        {
          name: 'Mechanical Keyboard',
          description: 'TX30 USB Backlight Punk Mechanical Keyboard 104 Key - White&black',
          price: 19.99,
          image: 'keyboard.jpg'
        },
        {
          name: 'Tablet',
          description: 'Samsung Tablet Galaxy S9 Ultra 12inch HD Screen 8800mah 16+512GB ROM Android 12 dual sim Wifi/5G COD',
          price: 49.99,
          image: 'shoes.jpg'
        },
        {
          name: 'headphone',
          description: 'MKEPS P2961 Bluetooth Headphones Wireless Headphone Noise Cancelling Stereo Headset With Microphone.',
          price: 59.99,
          image: 'headphone.jpg'
        },   
        {
            name: 'Sunglasses',
            description: 'Life is too short to wear boring sunglasses.',
            price: 29.99,
            image: 'sunglasses.jpg'
          },
          {
            name: 'Shirt',
            description: 'You can have anything you want in life if you dress for it.',
            price: 39.99,
            image: 'shirt.jpg'
          },
          {
            name: 'Bag',
            description: 'Life is short; buy the handbag',
            price: 19.99,
            image: 'bag.jpg'
          },
          {
            name: 'Shoes',
            description: 'I still have my feet on the ground, I just wear better shoes.',
            price: 49.99,
            image: 'shoes.jpg'
          },
          {
            name: 'Pants',
            description: 'No matter how you feel, get up, dress up and show up.',
            price: 59.99,
            image: 'pants.jpg'
          },    
   

    
  ];

  getProducts(): Product[] {
    return this.products;
  }
}