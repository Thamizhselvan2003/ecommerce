import p1_img from "./product_1.png";
import p2_img from "./product_2.png";
import p3_img from "./product_3.png";
import p4_img from "./product_4.png";
import p5_img from "./product_5.png";
import p6_img from "./product_6.png";
import p7_img from "./product_7.png";
import p8_img from "./product_8.png";
import p9_img from "./product_9.png";
import p10_img from "./product_10.png";
import p11_img from "./product_11.png";
import p12_img from "./product_12.png";
import p13_img from "./product_13.png";
import p14_img from "./product_14.png";
import p15_img from "./product_15.png";
import p16_img from "./product_16.png";
import p17_img from "./product_17.png";
import p18_img from "./product_18.png";
import p19_img from "./product_19.png";
import p20_img from "./product_20.png";
import p21_img from "./product_21.png";
import p22_img from "./product_22.png";
import p23_img from "./product_23.png";
import p24_img from "./product_24.png";
import p25_img from "./product_25.png";
import p26_img from "./product_26.png";
import p27_img from "./product_27.png";
import p28_img from "./product_28.png";
import p29_img from "./product_29.png";
import p30_img from "./product_30.png";
import p31_img from "./product_31.png";
import p32_img from "./product_32.png";
import p33_img from "./product_33.png";
import p34_img from "./product_34.png";
import p35_img from "./product_35.png";
import p36_img from "./product_36.png";

let all_product = [
  {
    id: 1,
    name: "Pink & White Silk Saree with Gold Embellishments",
    category: "women",
    image: p1_img,
    new_price: 3000,
    old_price: 4000,
  },
  {
    id: 2,
    name: "Brown Traditional Silk Saree with Jewelry Set",
    category: "women",
    image: p2_img,
    new_price: 4500,
    old_price: 5000,
  },
  {
    id: 3,
    name: "Green & Pink Traditional Silk Lehenga (or Half-Saree)",
    category: "women",
    image: p3_img,
    new_price:2000,
    old_price: 3000,
  },
  {
    id: 4,
    name: "Pastel Pink Embroidered Saree",
    category: "women",
    image: p4_img,
    new_price: 5000,
    old_price: 8000,
  },
  {
    id: 5,
    name: "Golden & Purple Traditional Silk Lehenga/Saree",
    category: "women",
    image: p5_img,
    new_price:5000,
    old_price: 7000,
  },
  {
    id: 6,
    name: "Navy Blue Polka Dot Dress",
    category: "women",
    image: p6_img,
    new_price: 8000,
    old_price: 6000,
  },
  {
    id: 7,
    name: "Black Embroidered Anarkali Gown with Dupatta",
    category: "women",
    image: p7_img,
    new_price: 3000,
    old_price: 4000,
  },
  {
    id: 8,
    name: "Lime Green Strapless Gown with Matching Shawl",
    category: "women",
    image: p8_img,
    new_price: 2500,
    old_price: 4000,
  },
  {
    id: 9,
    name: "Purple Silk Saree with Red Blouse",
    category: "women",
    image: p9_img,
    new_price: 5000,
    old_price: 7000,
  },
  {
    id: 10,
    name: "Pink Embroidered Crop Top with Aqua Green Lehenga",
    category: "women",
    image: p10_img,
    new_price: 3000,
    old_price: 5000,
  },
  {
    id: 11,
    name: "Light Blue Embellished Lehenga with Matching Dupatta",
    category: "women",
    image: p11_img,
    new_price: 4000,
    old_price: 5000,
  },
  {
    id: 12,
    name: "Dark Green Saree with Gold Embroidered Border",
    category: "women",
    image: p12_img,
    new_price: 3000,
    old_price: 4000,
  },
  {
    id: 13,
    name: "Men Traditional Gold Silk Dhoti Kurta Set",
    category: "men",
    image: p13_img,
    new_price: 2000,
    old_price: 3000,
  },
  {
    id: 14,
    name: "Men Black Embroidered Kurta with White Pajama",
    category: "men",
    image: p14_img,
    new_price: 3000,
    old_price: 5000,
  },
  {
    id: 15,
    name: "Men Casual Striped Shirt with Blue Denim Jeans",
    category: "men",
    image: p15_img,
    new_price: 2000,
    old_price: 4000,
  },
  {
    id: 16,
    name: "Men Casual Yellow Shirt with White Dhoti",
    category: "men",
    image: p16_img,
    new_price: 900.0,
    old_price: 1000.00,
  },
  {
    id: 17,
    name: "Men Navy Blue Indo-Western Kurta Set",
    category: "men",
    image: p17_img,
    new_price: 4000,
    old_price: 5000,
  },
  {
    id: 18,
    name: "Men Maroon and Gold Sherwani with Dhoti Pants",
    category: "men",
    image: p18_img,
    new_price: 6000,
    old_price: 7000,
  },
  {
    id: 19,
    name: "Men's Casual Green Shirt with White Trousers",
    category: "men",
    image: p19_img,
    new_price: 1000,
    old_price: 2000,
  },
  {
    id: 20,
    name: "Men Black Designer Sherwani Set",
    category: "men",
    image: p20_img,
    new_price:4000,
    old_price: 5000,
  },
  {
    id: 21,
    name: " Men's Black Kurta with White Dhoti",
    category: "men",
    image: p21_img,
    new_price: 2000.0,
    old_price: 4000.0
  },
  {
    id: 22,
    name: "Men's Navy Blue Shirt with Black Trousers",
    category: "men",
    image: p22_img,
    new_price: 3500.0,
    old_price: 4500,
  },
  {
    id: 23,
    name: "Men White T-Shirt with Green Pants",
    category: "men",
    image: p23_img,
    new_price: 1000.0,
    old_price: 2000.0,
  },
  {
    id: 24,
    name: "Men Traditional White Shirt with Dhoti",
    category: "men",
    image: p24_img,
    new_price: 1500.0,
    old_price: 2000.5,
  },
  {
    id: 25,
    name: "Boys' Cream Embroidered Sherwani Set",
    category: "kid",
    image: p25_img,
    new_price: 2000,
    old_price:4000,
  },
  {
    id: 26,
    name: "Boys' Blue Printed Kurta Pajama",
    category: "kid",
    image: p26_img,
    new_price: 1000,
    old_price: 2000,
  },
  {
    id: 27,
    name: "Boys’ Green Silk Shirt with Dhoti",
    category: "kid",
    image: p27_img,
    new_price: 700,
    old_price: 2000,
  },
  {
    id: 28,
    name: "Toddler’s White Dhoti & Shirt Set with Golden Border",
    category: "kid",
    image: p28_img,
    new_price: 800,
    old_price: 2000,
  },
  {
    id: 29,
    name: "Boys’ Maroon Printed Kurta with Dhoti Pants",
    category: "kid",
    image: p29_img,
    new_price: 1000,
    old_price: 3000,
  },
  {
    id: 30,
    name: "Boys’ Mustard Asymmetric Kurta with Dhoti Pants",
    category: "kid",
    image: p30_img,
    new_price:1000,
    old_price: 3000,
  },
  {
    id: 31,
    name: "Boys' Green Asymmetric Kurta with Navy Blue Dhoti Pants",
    category: "kid",
    image: p31_img,
    new_price: 2000,
    old_price: 4000,
  },
  {
    id: 32,
    name: "Boys' Casual Streetwear Outfit (Blue Sweatshirt & Beige Shorts)",
    category: "kid",
    image: p32_img,
    new_price: 800,
    old_price: 2000,
  },
  {
    id: 33,
    name: "Toddler’s Maroon Shirt with White & Gold Dhoti",
    category: "kid",
    image: p33_img,
    new_price: 800,
    old_price: 1400,
  },
  {
    id: 34,
    name: "Girls’ Pink & Gold Lehenga (Half-Saree) Set",
    category: "kid",
    image: p34_img,
    new_price: 1500,
    old_price: 4000,
  },
  {
    id: 35,
    name: "Girls’ Yellow Printed Kurta with Matching Salwar/Dhoti Pants",
    category: "kid",
    image: p35_img,
    new_price: 2000,
    old_price: 4000,
  },
  {
    id: 36,
    name: "Girls’ Pink Peplum Top with Floral Lehenga Skirt",
    category: "kid",
    image: p36_img,
    new_price: 3000,
    old_price: 4000,
  },
];

export default all_product;
