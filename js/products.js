const PRODUCTS = [
  {
    "id": "s25",
    "name": "Galaxy S25",
    "brand": "Samsung",
    "category": "smartphones",
    "subcategory": "Smartphones",
    "price": 69999,
    "oldPrice": 74999,
    "discount": 7,
    "rating": 4.3,
    "reviews": 120,
    "image": "images/smartphones/s25.svg",
    "description": "6.4-inch Dynamic AMOLED 2X, Snapdragon 8 Elite, 12GB RAM, 256GB, 50MP camera, 4000mAh, Android 15",
    "specifications": {
      "Display": "Dynamic AMOLED 2X",
      "Processor": "Snapdragon 8 Elite",
      "RAM": "12GB RAM",
      "Storage": "256GB",
      "Camera": "50MP camera",
      "Battery": "4000mAh",
      "OS": "Android 15"
    },
    "colors": [
      "Black",
      "Silver",
      "Blue"
    ],
    "storage": [
      "128GB",
      "256GB"
    ],
    "stock": 34,
    "featured": true,
    "bestseller": true
  },
  {
    "id": "a56",
    "name": "Galaxy A56 5G",
    "brand": "Samsung",
    "category": "smartphones",
    "subcategory": "Smartphones",
    "price": 41999,
    "oldPrice": 46999,
    "discount": 11,
    "rating": 4.4,
    "reviews": 193,
    "image": "images/smartphones/a56.svg",
    "description": "6.7-inch Super AMOLED, Exynos 1580, 8GB RAM, 128GB, 50MP OIS camera, 5000mAh, Android 15",
    "specifications": {
      "Display": "6.7-inch Super AMOLED",
      "Processor": "Exynos 1580",
      "RAM": "8GB RAM",
      "Storage": "128GB",
      "Camera": "50MP OIS camera",
      "Battery": "5000mAh",
      "OS": "Android 15"
    },
    "colors": [
      "Black",
      "Silver",
      "Blue"
    ],
    "storage": [
      "128GB",
      "256GB"
    ],
    "stock": 38,
    "featured": true,
    "bestseller": false
  },
  {
    "id": "iphone16",
    "name": "iPhone 16",
    "brand": "Apple",
    "category": "smartphones",
    "subcategory": "Smartphones",
    "price": 69900,
    "oldPrice": 79900,
    "discount": 13,
    "rating": 4.5,
    "reviews": 266,
    "image": "images/smartphones/iphone16.svg",
    "description": "6.1-inch Super Retina XDR, A18 chip, 8GB RAM, 128GB, 48MP camera, all-day battery, iOS 18",
    "specifications": {
      "Display": "6.1-inch Super Retina XDR",
      "Processor": "A18 chip",
      "RAM": "8GB RAM",
      "Storage": "128GB",
      "Camera": "48MP camera",
      "Battery": "all-day battery",
      "OS": "iOS 18"
    },
    "colors": [
      "Black",
      "Silver",
      "Blue"
    ],
    "storage": [
      "128GB",
      "256GB"
    ],
    "stock": 42,
    "featured": true,
    "bestseller": true
  },
  {
    "id": "iphone16pro",
    "name": "iPhone 16 Pro",
    "brand": "Apple",
    "category": "smartphones",
    "subcategory": "Smartphones",
    "price": 119900,
    "oldPrice": 129900,
    "discount": 8,
    "rating": 4.6,
    "reviews": 339,
    "image": "images/smartphones/iphone16pro.svg",
    "description": "6.3-inch Super Retina XDR ProMotion, A18 Pro, 8GB RAM, 128GB, 48MP triple camera, iOS 18",
    "specifications": {
      "Display": "6.3-inch Super Retina XDR ProMotion",
      "Processor": "A18 Pro",
      "RAM": "8GB RAM",
      "Storage": "128GB",
      "Camera": "48MP triple camera",
      "Battery": "iOS 18",
      "OS": "iOS 18"
    },
    "colors": [
      "Black",
      "Silver",
      "Blue"
    ],
    "storage": [
      "128GB",
      "256GB"
    ],
    "stock": 46,
    "featured": true,
    "bestseller": false
  },
  {
    "id": "iphone15",
    "name": "iPhone 15",
    "brand": "Apple",
    "category": "smartphones",
    "subcategory": "Smartphones",
    "price": 59900,
    "oldPrice": 69900,
    "discount": 14,
    "rating": 4.7,
    "reviews": 412,
    "image": "images/smartphones/iphone15.svg",
    "description": "6.1-inch Super Retina XDR, A16 Bionic, 6GB RAM, 128GB, 48MP camera, USB-C, iOS 18",
    "specifications": {
      "Display": "6.1-inch Super Retina XDR",
      "Processor": "A16 Bionic",
      "RAM": "6GB RAM",
      "Storage": "128GB",
      "Camera": "48MP camera",
      "Battery": "USB-C",
      "OS": "iOS 18"
    },
    "colors": [
      "Black",
      "Silver",
      "Blue"
    ],
    "storage": [
      "128GB",
      "256GB"
    ],
    "stock": 50,
    "featured": true,
    "bestseller": false
  },
  {
    "id": "oneplus13",
    "name": "OnePlus 13",
    "brand": "OnePlus",
    "category": "smartphones",
    "subcategory": "Smartphones",
    "price": 69999,
    "oldPrice": 74999,
    "discount": 7,
    "rating": 4.3,
    "reviews": 485,
    "image": "images/smartphones/oneplus13.svg",
    "description": "6.82-inch LTPO AMOLED 120Hz, Snapdragon 8 Elite, 12GB RAM, 256GB, 50MP triple camera, 6000mAh",
    "specifications": {
      "Display": "6.82-inch LTPO AMOLED 120Hz",
      "Processor": "Snapdragon 8 Elite",
      "RAM": "12GB RAM",
      "Storage": "256GB",
      "Camera": "50MP triple camera",
      "Battery": "6000mAh",
      "OS": "6000mAh"
    },
    "colors": [
      "Black",
      "Silver",
      "Blue"
    ],
    "storage": [
      "128GB",
      "256GB"
    ],
    "stock": 54,
    "featured": true,
    "bestseller": true
  },
  {
    "id": "nord5",
    "name": "OnePlus Nord 5",
    "brand": "OnePlus",
    "category": "smartphones",
    "subcategory": "Smartphones",
    "price": 33999,
    "oldPrice": 37999,
    "discount": 11,
    "rating": 4.4,
    "reviews": 558,
    "image": "images/smartphones/nord5.svg",
    "description": "6.83-inch AMOLED 144Hz, Snapdragon 8s Gen 3, 8GB RAM, 128GB, 50MP OIS, 6800mAh",
    "specifications": {
      "Display": "6.83-inch AMOLED 144Hz",
      "Processor": "Snapdragon 8s Gen 3",
      "RAM": "8GB RAM",
      "Storage": "128GB",
      "Camera": "50MP OIS",
      "Battery": "6800mAh",
      "OS": "6800mAh"
    },
    "colors": [
      "Black",
      "Silver",
      "Blue"
    ],
    "storage": [
      "128GB",
      "256GB"
    ],
    "stock": 58,
    "featured": true,
    "bestseller": false
  },
  {
    "id": "pixel9",
    "name": "Pixel 9",
    "brand": "Google",
    "category": "smartphones",
    "subcategory": "Smartphones",
    "price": 74999,
    "oldPrice": 79999,
    "discount": 6,
    "rating": 4.5,
    "reviews": 631,
    "image": "images/smartphones/pixel9.svg",
    "description": "6.3-inch OLED 120Hz, Tensor G4, 12GB RAM, 256GB, 50MP dual camera, 4700mAh, Android 15",
    "specifications": {
      "Display": "6.3-inch OLED 120Hz",
      "Processor": "Tensor G4",
      "RAM": "12GB RAM",
      "Storage": "256GB",
      "Camera": "50MP dual camera",
      "Battery": "4700mAh",
      "OS": "Android 15"
    },
    "colors": [
      "Black",
      "Silver",
      "Blue"
    ],
    "storage": [
      "128GB",
      "256GB"
    ],
    "stock": 62,
    "featured": true,
    "bestseller": false
  },
  {
    "id": "pixel9pro",
    "name": "Pixel 9 Pro",
    "brand": "Google",
    "category": "smartphones",
    "subcategory": "Smartphones",
    "price": 99999,
    "oldPrice": 109999,
    "discount": 9,
    "rating": 4.6,
    "reviews": 704,
    "image": "images/smartphones/pixel9pro.svg",
    "description": "6.3-inch LTPO OLED, Tensor G4, 16GB RAM, 256GB, 50MP triple camera, 4700mAh, Android 15",
    "specifications": {
      "Display": "6.3-inch LTPO OLED",
      "Processor": "Tensor G4",
      "RAM": "16GB RAM",
      "Storage": "256GB",
      "Camera": "50MP triple camera",
      "Battery": "4700mAh",
      "OS": "Android 15"
    },
    "colors": [
      "Black",
      "Silver",
      "Blue"
    ],
    "storage": [
      "128GB",
      "256GB"
    ],
    "stock": 66,
    "featured": false,
    "bestseller": false
  },
  {
    "id": "xiaomi15",
    "name": "Xiaomi 15",
    "brand": "Xiaomi",
    "category": "smartphones",
    "subcategory": "Smartphones",
    "price": 64999,
    "oldPrice": 69999,
    "discount": 7,
    "rating": 4.7,
    "reviews": 777,
    "image": "images/smartphones/xiaomi15.svg",
    "description": "6.36-inch AMOLED 120Hz, Snapdragon 8 Elite, 12GB RAM, 256GB, Leica 50MP triple camera, 5240mAh",
    "specifications": {
      "Display": "6.36-inch AMOLED 120Hz",
      "Processor": "Snapdragon 8 Elite",
      "RAM": "12GB RAM",
      "Storage": "256GB",
      "Camera": "Leica 50MP triple camera",
      "Battery": "5240mAh",
      "OS": "5240mAh"
    },
    "colors": [
      "Black",
      "Silver",
      "Blue"
    ],
    "storage": [
      "128GB",
      "256GB"
    ],
    "stock": 70,
    "featured": false,
    "bestseller": false
  },
  {
    "id": "redmi14pro",
    "name": "Redmi Note 14 Pro+",
    "brand": "Redmi",
    "category": "smartphones",
    "subcategory": "Smartphones",
    "price": 29999,
    "oldPrice": 33999,
    "discount": 12,
    "rating": 4.3,
    "reviews": 850,
    "image": "images/smartphones/redmi14pro.svg",
    "description": "6.67-inch AMOLED 120Hz, Snapdragon 7s Gen 3, 8GB RAM, 128GB, 200MP OIS, 5110mAh",
    "specifications": {
      "Display": "6.67-inch AMOLED 120Hz",
      "Processor": "Snapdragon 7s Gen 3",
      "RAM": "8GB RAM",
      "Storage": "128GB",
      "Camera": "200MP OIS",
      "Battery": "5110mAh",
      "OS": "5110mAh"
    },
    "colors": [
      "Black",
      "Silver",
      "Blue"
    ],
    "storage": [
      "128GB",
      "256GB"
    ],
    "stock": 74,
    "featured": false,
    "bestseller": false
  },
  {
    "id": "nothing3",
    "name": "Nothing Phone 3",
    "brand": "Nothing",
    "category": "smartphones",
    "subcategory": "Smartphones",
    "price": 49999,
    "oldPrice": 54999,
    "discount": 9,
    "rating": 4.4,
    "reviews": 923,
    "image": "images/smartphones/nothing3.svg",
    "description": "6.7-inch AMOLED 120Hz, Snapdragon 8s Gen 3, 12GB RAM, 256GB, 50MP dual camera, 5150mAh",
    "specifications": {
      "Display": "6.7-inch AMOLED 120Hz",
      "Processor": "Snapdragon 8s Gen 3",
      "RAM": "12GB RAM",
      "Storage": "256GB",
      "Camera": "50MP dual camera",
      "Battery": "5150mAh",
      "OS": "5150mAh"
    },
    "colors": [
      "Black",
      "Silver",
      "Blue"
    ],
    "storage": [
      "128GB",
      "256GB"
    ],
    "stock": 78,
    "featured": false,
    "bestseller": false
  },
  {
    "id": "edge60",
    "name": "Motorola Edge 60",
    "brand": "Motorola",
    "category": "smartphones",
    "subcategory": "Smartphones",
    "price": 29999,
    "oldPrice": 34999,
    "discount": 14,
    "rating": 4.5,
    "reviews": 996,
    "image": "images/smartphones/edge60.svg",
    "description": "6.67-inch pOLED 120Hz, Dimensity 7400, 8GB RAM, 256GB, 50MP OIS, 5200mAh",
    "specifications": {
      "Display": "6.67-inch pOLED 120Hz",
      "Processor": "Dimensity 7400",
      "RAM": "8GB RAM",
      "Storage": "256GB",
      "Camera": "50MP OIS",
      "Battery": "5200mAh",
      "OS": "5200mAh"
    },
    "colors": [
      "Black",
      "Silver",
      "Blue"
    ],
    "storage": [
      "128GB",
      "256GB"
    ],
    "stock": 82,
    "featured": false,
    "bestseller": false
  },
  {
    "id": "realmegt7",
    "name": "Realme GT 7",
    "brand": "Realme",
    "category": "smartphones",
    "subcategory": "Smartphones",
    "price": 39999,
    "oldPrice": 44999,
    "discount": 11,
    "rating": 4.6,
    "reviews": 1069,
    "image": "images/smartphones/realmegt7.svg",
    "description": "6.78-inch AMOLED 120Hz, Dimensity 9400e, 12GB RAM, 256GB, 50MP OIS, 7000mAh",
    "specifications": {
      "Display": "6.78-inch AMOLED 120Hz",
      "Processor": "Dimensity 9400e",
      "RAM": "12GB RAM",
      "Storage": "256GB",
      "Camera": "50MP OIS",
      "Battery": "7000mAh",
      "OS": "7000mAh"
    },
    "colors": [
      "Black",
      "Silver",
      "Blue"
    ],
    "storage": [
      "128GB",
      "256GB"
    ],
    "stock": 86,
    "featured": false,
    "bestseller": false
  },
  {
    "id": "vivov40",
    "name": "Vivo V40",
    "brand": "Vivo",
    "category": "smartphones",
    "subcategory": "Smartphones",
    "price": 34999,
    "oldPrice": 39999,
    "discount": 13,
    "rating": 4.7,
    "reviews": 1142,
    "image": "images/smartphones/vivov40.svg",
    "description": "6.78-inch AMOLED 120Hz, Snapdragon 7 Gen 3, 8GB RAM, 256GB, ZEISS 50MP dual camera, 5500mAh",
    "specifications": {
      "Display": "6.78-inch AMOLED 120Hz",
      "Processor": "Snapdragon 7 Gen 3",
      "RAM": "8GB RAM",
      "Storage": "256GB",
      "Camera": "ZEISS 50MP dual camera",
      "Battery": "5500mAh",
      "OS": "5500mAh"
    },
    "colors": [
      "Black",
      "Silver",
      "Blue"
    ],
    "storage": [
      "128GB",
      "256GB"
    ],
    "stock": 90,
    "featured": false,
    "bestseller": false
  },
  {
    "id": "mba-m4",
    "name": "MacBook Air M4",
    "brand": "Apple",
    "category": "laptops",
    "subcategory": "Laptops",
    "price": 99900,
    "oldPrice": 114900,
    "discount": 13,
    "rating": 4.2,
    "reviews": 88,
    "image": "images/laptops/mba-m4.svg",
    "description": "13.6-inch Liquid Retina, Apple M4, 16GB RAM, 256GB SSD, integrated 10-core GPU, macOS",
    "specifications": {
      "Processor": "Apple M4",
      "RAM": "16GB RAM",
      "Storage": "256GB SSD",
      "Display": "13.6-inch Liquid Retina",
      "Graphics": "integrated 10-core GPU",
      "OS": "macOS",
      "Battery": "Up to 15 hours"
    },
    "colors": [
      "Black",
      "Silver"
    ],
    "storage": [
      "512GB",
      "1TB"
    ],
    "stock": 18,
    "featured": true,
    "bestseller": true
  },
  {
    "id": "mbp-m4",
    "name": "MacBook Pro M4",
    "brand": "Apple",
    "category": "laptops",
    "subcategory": "Laptops",
    "price": 169900,
    "oldPrice": 189900,
    "discount": 11,
    "rating": 4.3,
    "reviews": 129,
    "image": "images/laptops/mbp-m4.svg",
    "description": "14.2-inch Liquid Retina XDR, Apple M4, 16GB RAM, 512GB SSD, 10-core GPU, macOS",
    "specifications": {
      "Processor": "Apple M4",
      "RAM": "16GB RAM",
      "Storage": "512GB SSD",
      "Display": "14.2-inch Liquid Retina XDR",
      "Graphics": "10-core GPU",
      "OS": "macOS",
      "Battery": "Up to 15 hours"
    },
    "colors": [
      "Black",
      "Silver"
    ],
    "storage": [
      "512GB",
      "1TB"
    ],
    "stock": 21,
    "featured": true,
    "bestseller": false
  },
  {
    "id": "xps14",
    "name": "XPS 14",
    "brand": "Dell",
    "category": "laptops",
    "subcategory": "Laptops",
    "price": 154990,
    "oldPrice": 169990,
    "discount": 9,
    "rating": 4.4,
    "reviews": 170,
    "image": "images/laptops/xps14.svg",
    "description": "14.5-inch 3.2K display, Intel Core Ultra 7, 16GB RAM, 1TB SSD, RTX 4050, Windows 11",
    "specifications": {
      "Processor": "Intel Core Ultra 7",
      "RAM": "16GB RAM",
      "Storage": "1TB SSD",
      "Display": "14.5-inch 3.2K display",
      "Graphics": "RTX 4050",
      "OS": "Windows 11",
      "Battery": "Up to 15 hours"
    },
    "colors": [
      "Black",
      "Silver"
    ],
    "storage": [
      "512GB",
      "1TB"
    ],
    "stock": 24,
    "featured": true,
    "bestseller": false
  },
  {
    "id": "inspiron14",
    "name": "Inspiron 14",
    "brand": "Dell",
    "category": "laptops",
    "subcategory": "Laptops",
    "price": 69990,
    "oldPrice": 79990,
    "discount": 13,
    "rating": 4.5,
    "reviews": 211,
    "image": "images/laptops/inspiron14.svg",
    "description": "14-inch FHD+ display, Intel Core Ultra 5, 16GB RAM, 512GB SSD, Intel graphics, Windows 11",
    "specifications": {
      "Processor": "Intel Core Ultra 5",
      "RAM": "16GB RAM",
      "Storage": "512GB SSD",
      "Display": "14-inch FHD+ display",
      "Graphics": "Intel graphics",
      "OS": "Windows 11",
      "Battery": "Up to 15 hours"
    },
    "colors": [
      "Black",
      "Silver"
    ],
    "storage": [
      "512GB",
      "1TB"
    ],
    "stock": 27,
    "featured": true,
    "bestseller": false
  },
  {
    "id": "pavilion-plus",
    "name": "Pavilion Plus 14",
    "brand": "HP",
    "category": "laptops",
    "subcategory": "Laptops",
    "price": 74990,
    "oldPrice": 84990,
    "discount": 12,
    "rating": 4.6000000000000005,
    "reviews": 252,
    "image": "images/laptops/pavilion-plus.svg",
    "description": "14-inch 2.8K OLED, Intel Core Ultra 5, 16GB RAM, 512GB SSD, Intel Arc graphics, Windows 11",
    "specifications": {
      "Processor": "Intel Core Ultra 5",
      "RAM": "16GB RAM",
      "Storage": "512GB SSD",
      "Display": "14-inch 2.8K OLED",
      "Graphics": "Intel Arc graphics",
      "OS": "Windows 11",
      "Battery": "Up to 15 hours"
    },
    "colors": [
      "Black",
      "Silver"
    ],
    "storage": [
      "512GB",
      "1TB"
    ],
    "stock": 30,
    "featured": true,
    "bestseller": false
  },
  {
    "id": "spectre-x360",
    "name": "Spectre x360 14",
    "brand": "HP",
    "category": "laptops",
    "subcategory": "Laptops",
    "price": 139990,
    "oldPrice": 154990,
    "discount": 10,
    "rating": 4.7,
    "reviews": 293,
    "image": "images/laptops/spectre-x360.svg",
    "description": "14-inch 2.8K OLED touch, Intel Core Ultra 7, 16GB RAM, 1TB SSD, Intel Arc graphics, Windows 11",
    "specifications": {
      "Processor": "Intel Core Ultra 7",
      "RAM": "16GB RAM",
      "Storage": "1TB SSD",
      "Display": "14-inch 2.8K OLED touch",
      "Graphics": "Intel Arc graphics",
      "OS": "Windows 11",
      "Battery": "Up to 15 hours"
    },
    "colors": [
      "Black",
      "Silver"
    ],
    "storage": [
      "512GB",
      "1TB"
    ],
    "stock": 33,
    "featured": false,
    "bestseller": false
  },
  {
    "id": "legion5",
    "name": "Legion 5",
    "brand": "Lenovo",
    "category": "laptops",
    "subcategory": "Laptops",
    "price": 114990,
    "oldPrice": 129990,
    "discount": 12,
    "rating": 4.2,
    "reviews": 334,
    "image": "images/laptops/legion5.svg",
    "description": "15.6-inch QHD 165Hz, Ryzen 7, 16GB RAM, 1TB SSD, RTX 4060, Windows 11",
    "specifications": {
      "Processor": "Ryzen 7",
      "RAM": "16GB RAM",
      "Storage": "1TB SSD",
      "Display": "15.6-inch QHD 165Hz",
      "Graphics": "RTX 4060",
      "OS": "Windows 11",
      "Battery": "Up to 15 hours"
    },
    "colors": [
      "Black",
      "Silver"
    ],
    "storage": [
      "512GB",
      "1TB"
    ],
    "stock": 36,
    "featured": false,
    "bestseller": true
  },
  {
    "id": "ideapad-slim",
    "name": "IdeaPad Slim 5",
    "brand": "Lenovo",
    "category": "laptops",
    "subcategory": "Laptops",
    "price": 65990,
    "oldPrice": 74990,
    "discount": 12,
    "rating": 4.3,
    "reviews": 375,
    "image": "images/laptops/ideapad-slim.svg",
    "description": "15.6-inch FHD OLED, Ryzen 7, 16GB RAM, 512GB SSD, Radeon graphics, Windows 11",
    "specifications": {
      "Processor": "Ryzen 7",
      "RAM": "16GB RAM",
      "Storage": "512GB SSD",
      "Display": "15.6-inch FHD OLED",
      "Graphics": "Radeon graphics",
      "OS": "Windows 11",
      "Battery": "Up to 15 hours"
    },
    "colors": [
      "Black",
      "Silver"
    ],
    "storage": [
      "512GB",
      "1TB"
    ],
    "stock": 39,
    "featured": false,
    "bestseller": false
  },
  {
    "id": "rog-strix",
    "name": "ROG Strix G16",
    "brand": "ASUS",
    "category": "laptops",
    "subcategory": "Laptops",
    "price": 124990,
    "oldPrice": 139990,
    "discount": 11,
    "rating": 4.4,
    "reviews": 416,
    "image": "images/laptops/rog-strix.svg",
    "description": "16-inch QHD+ 240Hz, Core i9, 16GB RAM, 1TB SSD, RTX 4070, Windows 11",
    "specifications": {
      "Processor": "Core i9",
      "RAM": "16GB RAM",
      "Storage": "1TB SSD",
      "Display": "16-inch QHD+ 240Hz",
      "Graphics": "RTX 4070",
      "OS": "Windows 11",
      "Battery": "Up to 15 hours"
    },
    "colors": [
      "Black",
      "Silver"
    ],
    "storage": [
      "512GB",
      "1TB"
    ],
    "stock": 42,
    "featured": false,
    "bestseller": true
  },
  {
    "id": "swift-go",
    "name": "Swift Go 14",
    "brand": "Acer",
    "category": "laptops",
    "subcategory": "Laptops",
    "price": 69990,
    "oldPrice": 77990,
    "discount": 10,
    "rating": 4.5,
    "reviews": 457,
    "image": "images/laptops/swift-go.svg",
    "description": "14-inch 2.8K OLED, Intel Core Ultra 5, 16GB RAM, 512GB SSD, Intel Arc graphics, Windows 11",
    "specifications": {
      "Processor": "Intel Core Ultra 5",
      "RAM": "16GB RAM",
      "Storage": "512GB SSD",
      "Display": "14-inch 2.8K OLED",
      "Graphics": "Intel Arc graphics",
      "OS": "Windows 11",
      "Battery": "Up to 15 hours"
    },
    "colors": [
      "Black",
      "Silver"
    ],
    "storage": [
      "512GB",
      "1TB"
    ],
    "stock": 45,
    "featured": false,
    "bestseller": false
  },
  {
    "id": "sam55qled",
    "name": "55-inch QLED 4K",
    "brand": "Samsung",
    "category": "televisions",
    "subcategory": "TVs",
    "price": 62999,
    "oldPrice": 74999,
    "discount": 16,
    "rating": 4.1,
    "reviews": 54,
    "image": "images/televisions/sam55qled.svg",
    "description": "55-inch 4K QLED, Quantum Processor, 120Hz, HDR10+, Tizen OS",
    "specifications": {
      "Screen Size": "55-inch 4K QLED",
      "Resolution": "4K Ultra HD",
      "Panel": "4K QLED",
      "Refresh Rate": "120Hz",
      "HDR": "HDR10+",
      "Operating System": "Tizen OS"
    },
    "colors": [
      "Black"
    ],
    "storage": [
      "55-inch",
      "65-inch"
    ],
    "stock": 12,
    "featured": true,
    "bestseller": true
  },
  {
    "id": "sam65neo",
    "name": "65-inch Neo QLED 4K",
    "brand": "Samsung",
    "category": "televisions",
    "subcategory": "TVs",
    "price": 109999,
    "oldPrice": 129999,
    "discount": 15,
    "rating": 4.199999999999999,
    "reviews": 81,
    "image": "images/televisions/sam65neo.svg",
    "description": "65-inch 4K Neo QLED, Neural Quantum Processor, 120Hz, HDR10+, Tizen OS",
    "specifications": {
      "Screen Size": "65-inch 4K Neo QLED",
      "Resolution": "4K Ultra HD",
      "Panel": "4K Neo QLED",
      "Refresh Rate": "120Hz",
      "HDR": "HDR10+",
      "Operating System": "Tizen OS"
    },
    "colors": [
      "Black"
    ],
    "storage": [
      "55-inch",
      "65-inch"
    ],
    "stock": 14,
    "featured": true,
    "bestseller": false
  },
  {
    "id": "lg55oled",
    "name": "55-inch OLED evo",
    "brand": "LG",
    "category": "televisions",
    "subcategory": "TVs",
    "price": 99990,
    "oldPrice": 119990,
    "discount": 17,
    "rating": 4.3,
    "reviews": 108,
    "image": "images/televisions/lg55oled.svg",
    "description": "55-inch 4K OLED evo, Alpha 9 AI Processor, 120Hz, Dolby Vision, webOS",
    "specifications": {
      "Screen Size": "55-inch 4K OLED evo",
      "Resolution": "4K Ultra HD",
      "Panel": "4K OLED evo",
      "Refresh Rate": "120Hz",
      "HDR": "Dolby Vision",
      "Operating System": "webOS"
    },
    "colors": [
      "Black"
    ],
    "storage": [
      "55-inch",
      "65-inch"
    ],
    "stock": 16,
    "featured": true,
    "bestseller": true
  },
  {
    "id": "lg65oled",
    "name": "65-inch OLED evo",
    "brand": "LG",
    "category": "televisions",
    "subcategory": "TVs",
    "price": 139990,
    "oldPrice": 159990,
    "discount": 13,
    "rating": 4.3999999999999995,
    "reviews": 135,
    "image": "images/televisions/lg65oled.svg",
    "description": "65-inch 4K OLED evo, Alpha 9 AI Processor, 120Hz, Dolby Vision, webOS",
    "specifications": {
      "Screen Size": "65-inch 4K OLED evo",
      "Resolution": "4K Ultra HD",
      "Panel": "4K OLED evo",
      "Refresh Rate": "120Hz",
      "HDR": "Dolby Vision",
      "Operating System": "webOS"
    },
    "colors": [
      "Black"
    ],
    "storage": [
      "55-inch",
      "65-inch"
    ],
    "stock": 18,
    "featured": true,
    "bestseller": false
  },
  {
    "id": "sony55",
    "name": "Bravia 55-inch 4K",
    "brand": "Sony",
    "category": "televisions",
    "subcategory": "TVs",
    "price": 84990,
    "oldPrice": 99990,
    "discount": 15,
    "rating": 4.5,
    "reviews": 162,
    "image": "images/televisions/sony55.svg",
    "description": "55-inch 4K LED, XR Processor, 120Hz, Dolby Vision, Google TV",
    "specifications": {
      "Screen Size": "55-inch 4K LED",
      "Resolution": "4K Ultra HD",
      "Panel": "4K LED",
      "Refresh Rate": "120Hz",
      "HDR": "Dolby Vision",
      "Operating System": "Google TV"
    },
    "colors": [
      "Black"
    ],
    "storage": [
      "55-inch",
      "65-inch"
    ],
    "stock": 20,
    "featured": false,
    "bestseller": false
  },
  {
    "id": "sony65",
    "name": "Bravia 65-inch 4K",
    "brand": "Sony",
    "category": "televisions",
    "subcategory": "TVs",
    "price": 119990,
    "oldPrice": 139990,
    "discount": 14,
    "rating": 4.1,
    "reviews": 189,
    "image": "images/televisions/sony65.svg",
    "description": "65-inch 4K LED, XR Processor, 120Hz, Dolby Vision, Google TV",
    "specifications": {
      "Screen Size": "65-inch 4K LED",
      "Resolution": "4K Ultra HD",
      "Panel": "4K LED",
      "Refresh Rate": "120Hz",
      "HDR": "Dolby Vision",
      "Operating System": "Google TV"
    },
    "colors": [
      "Black"
    ],
    "storage": [
      "55-inch",
      "65-inch"
    ],
    "stock": 22,
    "featured": false,
    "bestseller": true
  },
  {
    "id": "op55",
    "name": "55-inch 4K Smart TV",
    "brand": "OnePlus",
    "category": "televisions",
    "subcategory": "TVs",
    "price": 42999,
    "oldPrice": 49999,
    "discount": 14,
    "rating": 4.199999999999999,
    "reviews": 216,
    "image": "images/televisions/op55.svg",
    "description": "55-inch 4K QLED, Gamma Color Engine, 60Hz, HDR10+, Google TV",
    "specifications": {
      "Screen Size": "55-inch 4K QLED",
      "Resolution": "4K Ultra HD",
      "Panel": "4K QLED",
      "Refresh Rate": "60Hz",
      "HDR": "HDR10+",
      "Operating System": "Google TV"
    },
    "colors": [
      "Black"
    ],
    "storage": [
      "55-inch",
      "65-inch"
    ],
    "stock": 24,
    "featured": false,
    "bestseller": false
  },
  {
    "id": "tcl55",
    "name": "55-inch QLED C6K",
    "brand": "TCL",
    "category": "televisions",
    "subcategory": "TVs",
    "price": 47990,
    "oldPrice": 55990,
    "discount": 14,
    "rating": 4.3,
    "reviews": 243,
    "image": "images/televisions/tcl55.svg",
    "description": "55-inch 4K QLED, AiPQ Processor, 144Hz, Dolby Vision, Google TV",
    "specifications": {
      "Screen Size": "55-inch 4K QLED",
      "Resolution": "4K Ultra HD",
      "Panel": "4K QLED",
      "Refresh Rate": "144Hz",
      "HDR": "Dolby Vision",
      "Operating System": "Google TV"
    },
    "colors": [
      "Black"
    ],
    "storage": [
      "55-inch",
      "65-inch"
    ],
    "stock": 26,
    "featured": false,
    "bestseller": false
  },
  {
    "id": "ipad-air",
    "name": "iPad Air M3",
    "brand": "Apple",
    "category": "tablets",
    "subcategory": "Tablets",
    "price": 59900,
    "oldPrice": 64900,
    "discount": 8,
    "rating": 4.2,
    "reviews": 67,
    "image": "images/tablets/ipad-air.svg",
    "description": "11-inch Liquid Retina, Apple M3, 8GB RAM, 128GB, Wi-Fi, iPadOS",
    "specifications": {
      "Display": "11-inch Liquid Retina",
      "Processor": "Apple M3",
      "RAM": "8GB RAM",
      "Storage": "128GB",
      "Connectivity": "Wi-Fi 6",
      "OS": "iPadOS"
    },
    "colors": [
      "Gray",
      "Blue"
    ],
    "storage": [
      "128GB",
      "256GB"
    ],
    "stock": 15,
    "featured": true,
    "bestseller": true
  },
  {
    "id": "ipad-pro",
    "name": "iPad Pro M4",
    "brand": "Apple",
    "category": "tablets",
    "subcategory": "Tablets",
    "price": 99900,
    "oldPrice": 109900,
    "discount": 9,
    "rating": 4.3,
    "reviews": 86,
    "image": "images/tablets/ipad-pro.svg",
    "description": "11-inch Ultra Retina XDR, Apple M4, 8GB RAM, 256GB, Wi-Fi, iPadOS",
    "specifications": {
      "Display": "11-inch Ultra Retina XDR",
      "Processor": "Apple M4",
      "RAM": "8GB RAM",
      "Storage": "256GB",
      "Connectivity": "Wi-Fi 6",
      "OS": "iPadOS"
    },
    "colors": [
      "Gray",
      "Blue"
    ],
    "storage": [
      "128GB",
      "256GB"
    ],
    "stock": 18,
    "featured": true,
    "bestseller": false
  },
  {
    "id": "galaxy-tab-s10",
    "name": "Galaxy Tab S10+",
    "brand": "Samsung",
    "category": "tablets",
    "subcategory": "Tablets",
    "price": 89999,
    "oldPrice": 99999,
    "discount": 10,
    "rating": 4.4,
    "reviews": 105,
    "image": "images/tablets/galaxy-tab-s10.svg",
    "description": "12.4-inch Dynamic AMOLED 2X, Dimensity 9300+, 12GB RAM, 256GB, Android",
    "specifications": {
      "Display": "12.4-inch Dynamic AMOLED 2X",
      "Processor": "Dimensity 9300+",
      "RAM": "12GB RAM",
      "Storage": "256GB",
      "Connectivity": "Wi-Fi 6",
      "OS": "Android"
    },
    "colors": [
      "Gray",
      "Blue"
    ],
    "storage": [
      "128GB",
      "256GB"
    ],
    "stock": 21,
    "featured": true,
    "bestseller": false
  },
  {
    "id": "oneplus-pad2",
    "name": "OnePlus Pad 2",
    "brand": "OnePlus",
    "category": "tablets",
    "subcategory": "Tablets",
    "price": 39999,
    "oldPrice": 44999,
    "discount": 11,
    "rating": 4.5,
    "reviews": 124,
    "image": "images/tablets/oneplus-pad2.svg",
    "description": "12.1-inch 3K 144Hz, Snapdragon 8 Gen 3, 8GB RAM, 128GB, Android",
    "specifications": {
      "Display": "12.1-inch 3K 144Hz",
      "Processor": "Snapdragon 8 Gen 3",
      "RAM": "8GB RAM",
      "Storage": "128GB",
      "Connectivity": "Wi-Fi 6",
      "OS": "Android"
    },
    "colors": [
      "Gray",
      "Blue"
    ],
    "storage": [
      "128GB",
      "256GB"
    ],
    "stock": 24,
    "featured": false,
    "bestseller": false
  },
  {
    "id": "xiaomi-pad7",
    "name": "Xiaomi Pad 7",
    "brand": "Xiaomi",
    "category": "tablets",
    "subcategory": "Tablets",
    "price": 27999,
    "oldPrice": 32999,
    "discount": 15,
    "rating": 4.2,
    "reviews": 143,
    "image": "images/tablets/xiaomi-pad7.svg",
    "description": "11.2-inch 3.2K 144Hz, Snapdragon 7+ Gen 3, 8GB RAM, 128GB, Android",
    "specifications": {
      "Display": "11.2-inch 3.2K 144Hz",
      "Processor": "Snapdragon 7+ Gen 3",
      "RAM": "8GB RAM",
      "Storage": "128GB",
      "Connectivity": "Wi-Fi 6",
      "OS": "Android"
    },
    "colors": [
      "Gray",
      "Blue"
    ],
    "storage": [
      "128GB",
      "256GB"
    ],
    "stock": 27,
    "featured": false,
    "bestseller": false
  },
  {
    "id": "lenovo-tabp12",
    "name": "Tab P12",
    "brand": "Lenovo",
    "category": "tablets",
    "subcategory": "Tablets",
    "price": 32990,
    "oldPrice": 37990,
    "discount": 13,
    "rating": 4.3,
    "reviews": 162,
    "image": "images/tablets/lenovo-tabp12.svg",
    "description": "12.7-inch 3K display, MediaTek Dimensity 7050, 8GB RAM, 128GB, Android",
    "specifications": {
      "Display": "12.7-inch 3K display",
      "Processor": "MediaTek Dimensity 7050",
      "RAM": "8GB RAM",
      "Storage": "128GB",
      "Connectivity": "Wi-Fi 6",
      "OS": "Android"
    },
    "colors": [
      "Gray",
      "Blue"
    ],
    "storage": [
      "128GB",
      "256GB"
    ],
    "stock": 30,
    "featured": false,
    "bestseller": false
  },
  {
    "id": "watch-s11",
    "name": "Galaxy Watch 8",
    "brand": "Samsung",
    "category": "smartwatches",
    "subcategory": "Smartwatches",
    "price": 34999,
    "oldPrice": 39999,
    "discount": 13,
    "rating": 4.1,
    "reviews": 45,
    "image": "images/smartwatches/watch-s11.svg",
    "description": "1.5-inch Super AMOLED, Exynos W1000, GPS, heart-rate tracking, Wear OS",
    "specifications": {
      "Display": "1.5-inch Super AMOLED",
      "Processor": "Exynos W1000",
      "GPS": "Yes",
      "Health": "Heart rate, SpO2, sleep tracking",
      "Water Resistance": "5 ATM",
      "OS": "Wear OS"
    },
    "colors": [
      "Black",
      "Silver"
    ],
    "storage": [],
    "stock": 20,
    "featured": true,
    "bestseller": true
  },
  {
    "id": "watch-ultra",
    "name": "Apple Watch Ultra 2",
    "brand": "Apple",
    "category": "smartwatches",
    "subcategory": "Smartwatches",
    "price": 89900,
    "oldPrice": 99900,
    "discount": 10,
    "rating": 4.199999999999999,
    "reviews": 68,
    "image": "images/smartwatches/watch-ultra.svg",
    "description": "49mm Retina LTPO OLED, S9 SiP, GPS + Cellular, 100m water resistance, watchOS",
    "specifications": {
      "Display": "49mm Retina LTPO OLED",
      "Processor": "S9 SiP",
      "GPS": "Yes",
      "Health": "Heart rate, SpO2, sleep tracking",
      "Water Resistance": "5 ATM",
      "OS": "watchOS"
    },
    "colors": [
      "Black",
      "Silver"
    ],
    "storage": [],
    "stock": 24,
    "featured": true,
    "bestseller": true
  },
  {
    "id": "watch10",
    "name": "Apple Watch Series 10",
    "brand": "Apple",
    "category": "smartwatches",
    "subcategory": "Smartwatches",
    "price": 46900,
    "oldPrice": 52900,
    "discount": 11,
    "rating": 4.3,
    "reviews": 91,
    "image": "images/smartwatches/watch10.svg",
    "description": "42mm LTPO OLED, S10 SiP, GPS, health sensors, watchOS",
    "specifications": {
      "Display": "42mm LTPO OLED",
      "Processor": "S10 SiP",
      "GPS": "Yes",
      "Health": "Heart rate, SpO2, sleep tracking",
      "Water Resistance": "5 ATM",
      "OS": "watchOS"
    },
    "colors": [
      "Black",
      "Silver"
    ],
    "storage": [],
    "stock": 28,
    "featured": true,
    "bestseller": false
  },
  {
    "id": "pixel-watch3",
    "name": "Pixel Watch 3",
    "brand": "Google",
    "category": "smartwatches",
    "subcategory": "Smartwatches",
    "price": 39999,
    "oldPrice": 44999,
    "discount": 11,
    "rating": 4.3999999999999995,
    "reviews": 114,
    "image": "images/smartwatches/pixel-watch3.svg",
    "description": "45mm Actua display, Snapdragon W5 Gen 1, GPS, Fitbit health tracking, Wear OS",
    "specifications": {
      "Display": "45mm Actua display",
      "Processor": "Snapdragon W5 Gen 1",
      "GPS": "Yes",
      "Health": "Heart rate, SpO2, sleep tracking",
      "Water Resistance": "5 ATM",
      "OS": "Wear OS"
    },
    "colors": [
      "Black",
      "Silver"
    ],
    "storage": [],
    "stock": 32,
    "featured": false,
    "bestseller": false
  },
  {
    "id": "oneplus-watch2",
    "name": "OnePlus Watch 2",
    "brand": "OnePlus",
    "category": "smartwatches",
    "subcategory": "Smartwatches",
    "price": 24999,
    "oldPrice": 29999,
    "discount": 17,
    "rating": 4.5,
    "reviews": 137,
    "image": "images/smartwatches/oneplus-watch2.svg",
    "description": "1.43-inch AMOLED, Snapdragon W5 + BES2700, GPS, 500mAh, Wear OS",
    "specifications": {
      "Display": "1.43-inch AMOLED",
      "Processor": "Snapdragon W5 + BES2700",
      "GPS": "Yes",
      "Health": "Heart rate, SpO2, sleep tracking",
      "Water Resistance": "5 ATM",
      "OS": "Wear OS"
    },
    "colors": [
      "Black",
      "Silver"
    ],
    "storage": [],
    "stock": 36,
    "featured": false,
    "bestseller": false
  },
  {
    "id": "amazfit-balance",
    "name": "Amazfit Balance",
    "brand": "Amazfit",
    "category": "smartwatches",
    "subcategory": "Smartwatches",
    "price": 18999,
    "oldPrice": 22999,
    "discount": 17,
    "rating": 4.1,
    "reviews": 160,
    "image": "images/smartwatches/amazfit-balance.svg",
    "description": "1.5-inch AMOLED, dual-band GPS, 14-day battery, health sensors, Zepp OS",
    "specifications": {
      "Display": "1.5-inch AMOLED",
      "Processor": "dual-band GPS",
      "GPS": "Yes",
      "Health": "Heart rate, SpO2, sleep tracking",
      "Water Resistance": "5 ATM",
      "OS": "Zepp OS"
    },
    "colors": [
      "Black",
      "Silver"
    ],
    "storage": [],
    "stock": 40,
    "featured": false,
    "bestseller": false
  },
  {
    "id": "ps5-slim",
    "name": "PlayStation 5 Slim",
    "brand": "Sony",
    "category": "gaming",
    "subcategory": "Gaming",
    "price": 54990,
    "oldPrice": 59990,
    "discount": 8,
    "rating": 4.2,
    "reviews": 110,
    "image": "images/gaming/ps5-slim.svg",
    "description": "4K gaming console with ultra-high speed SSD, ray tracing, HDR, DualSense controller",
    "specifications": {
      "Connectivity": "USB / Wireless",
      "Compatibility": "PC, Console",
      "Feature": "Gaming optimized",
      "Warranty": "1 year"
    },
    "colors": [
      "Black",
      "White"
    ],
    "storage": [],
    "stock": 10,
    "featured": true,
    "bestseller": true
  },
  {
    "id": "xbox-series-x",
    "name": "Xbox Series X",
    "brand": "Microsoft",
    "category": "gaming",
    "subcategory": "Gaming",
    "price": 54990,
    "oldPrice": 59990,
    "discount": 8,
    "rating": 4.3,
    "reviews": 141,
    "image": "images/gaming/xbox-series-x.svg",
    "description": "4K gaming console, 1TB SSD, up to 120 FPS, Quick Resume, wireless controller",
    "specifications": {
      "Connectivity": "USB / Wireless",
      "Compatibility": "PC, Console",
      "Feature": "Gaming optimized",
      "Warranty": "1 year"
    },
    "colors": [
      "Black",
      "White"
    ],
    "storage": [],
    "stock": 13,
    "featured": true,
    "bestseller": false
  },
  {
    "id": "switch-oled",
    "name": "Nintendo Switch OLED",
    "brand": "Nintendo",
    "category": "gaming",
    "subcategory": "Gaming",
    "price": 34999,
    "oldPrice": 39999,
    "discount": 13,
    "rating": 4.4,
    "reviews": 172,
    "image": "images/gaming/switch-oled.svg",
    "description": "7-inch OLED display, 64GB storage, dock with LAN port, handheld and TV modes",
    "specifications": {
      "Connectivity": "USB / Wireless",
      "Compatibility": "PC, Console",
      "Feature": "Gaming optimized",
      "Warranty": "1 year"
    },
    "colors": [
      "Black",
      "White"
    ],
    "storage": [],
    "stock": 16,
    "featured": true,
    "bestseller": false
  },
  {
    "id": "dualsense",
    "name": "DualSense Wireless Controller",
    "brand": "Sony",
    "category": "gaming",
    "subcategory": "Gaming",
    "price": 6490,
    "oldPrice": 7490,
    "discount": 13,
    "rating": 4.5,
    "reviews": 203,
    "image": "images/gaming/dualsense.svg",
    "description": "Haptic feedback, adaptive triggers, built-in microphone, motion sensor, USB-C",
    "specifications": {
      "Connectivity": "USB / Wireless",
      "Compatibility": "PC, Console",
      "Feature": "Gaming optimized",
      "Warranty": "1 year"
    },
    "colors": [
      "Black",
      "White"
    ],
    "storage": [],
    "stock": 19,
    "featured": true,
    "bestseller": true
  },
  {
    "id": "arctis7",
    "name": "Arctis Nova 7 Gaming Headset",
    "brand": "SteelSeries",
    "category": "gaming",
    "subcategory": "Gaming",
    "price": 13999,
    "oldPrice": 16999,
    "discount": 18,
    "rating": 4.6000000000000005,
    "reviews": 234,
    "image": "images/gaming/arctis7.svg",
    "description": "Wireless gaming headset, 38-hour battery, 40mm drivers, multi-platform",
    "specifications": {
      "Connectivity": "USB / Wireless",
      "Compatibility": "PC, Console",
      "Feature": "Gaming optimized",
      "Warranty": "1 year"
    },
    "colors": [
      "Black",
      "White"
    ],
    "storage": [],
    "stock": 22,
    "featured": false,
    "bestseller": false
  },
  {
    "id": "lg27gr",
    "name": "27-inch UltraGear Gaming Monitor",
    "brand": "LG",
    "category": "gaming",
    "subcategory": "Gaming",
    "price": 27990,
    "oldPrice": 32990,
    "discount": 15,
    "rating": 4.2,
    "reviews": 265,
    "image": "images/gaming/lg27gr.svg",
    "description": "27-inch QHD IPS, 180Hz, 1ms, FreeSync, HDR10, DisplayPort/HDMI",
    "specifications": {
      "Connectivity": "USB / Wireless",
      "Compatibility": "PC, Console",
      "Feature": "Gaming optimized",
      "Warranty": "1 year"
    },
    "colors": [
      "Black",
      "White"
    ],
    "storage": [],
    "stock": 25,
    "featured": false,
    "bestseller": false
  },
  {
    "id": "razer-blackwidow",
    "name": "BlackWidow V4 Keyboard",
    "brand": "Razer",
    "category": "gaming",
    "subcategory": "Gaming",
    "price": 13990,
    "oldPrice": 16990,
    "discount": 18,
    "rating": 4.3,
    "reviews": 296,
    "image": "images/gaming/razer-blackwidow.svg",
    "description": "Mechanical gaming keyboard, tactile switches, RGB lighting, programmable keys",
    "specifications": {
      "Connectivity": "USB / Wireless",
      "Compatibility": "PC, Console",
      "Feature": "Gaming optimized",
      "Warranty": "1 year"
    },
    "colors": [
      "Black",
      "White"
    ],
    "storage": [],
    "stock": 28,
    "featured": false,
    "bestseller": true
  },
  {
    "id": "logitech-g502",
    "name": "G502 X Gaming Mouse",
    "brand": "Logitech",
    "category": "gaming",
    "subcategory": "Gaming",
    "price": 9990,
    "oldPrice": 11990,
    "discount": 17,
    "rating": 4.4,
    "reviews": 327,
    "image": "images/gaming/logitech-g502.svg",
    "description": "Lightweight gaming mouse, 25K sensor, hybrid switches, programmable buttons",
    "specifications": {
      "Connectivity": "USB / Wireless",
      "Compatibility": "PC, Console",
      "Feature": "Gaming optimized",
      "Warranty": "1 year"
    },
    "colors": [
      "Black",
      "White"
    ],
    "storage": [],
    "stock": 31,
    "featured": false,
    "bestseller": false
  },
  {
    "id": "airpods-pro2",
    "name": "AirPods Pro (2nd Gen)",
    "brand": "Apple",
    "category": "audio",
    "subcategory": "Audio",
    "price": 24900,
    "oldPrice": 26900,
    "discount": 7,
    "rating": 4.1,
    "reviews": 150,
    "image": "images/audio/airpods-pro2.svg",
    "description": "Active Noise Cancellation, Transparency mode, USB-C charging case, spatial audio",
    "specifications": {
      "Audio": "High fidelity",
      "Connectivity": "Bluetooth 5.x",
      "Battery": "Up to 30+ hours",
      "Water Resistance": "IP-rated where applicable",
      "Controls": "Touch / buttons"
    },
    "colors": [
      "Black",
      "White"
    ],
    "storage": [],
    "stock": 25,
    "featured": true,
    "bestseller": true
  },
  {
    "id": "galaxy-buds3pro",
    "name": "Galaxy Buds3 Pro",
    "brand": "Samsung",
    "category": "audio",
    "subcategory": "Audio",
    "price": 17999,
    "oldPrice": 19999,
    "discount": 10,
    "rating": 4.199999999999999,
    "reviews": 179,
    "image": "images/audio/galaxy-buds3pro.svg",
    "description": "Adaptive ANC, 24-bit audio, IP57, Galaxy AI features, wireless charging",
    "specifications": {
      "Audio": "High fidelity",
      "Connectivity": "Bluetooth 5.x",
      "Battery": "Up to 30+ hours",
      "Water Resistance": "IP-rated where applicable",
      "Controls": "Touch / buttons"
    },
    "colors": [
      "Black",
      "White"
    ],
    "storage": [],
    "stock": 29,
    "featured": true,
    "bestseller": false
  },
  {
    "id": "sony-wh1000xm5",
    "name": "WH-1000XM5",
    "brand": "Sony",
    "category": "audio",
    "subcategory": "Audio",
    "price": 29990,
    "oldPrice": 34990,
    "discount": 14,
    "rating": 4.3,
    "reviews": 208,
    "image": "images/audio/sony-wh1000xm5.svg",
    "description": "Over-ear ANC, 30-hour battery, LDAC, multipoint Bluetooth, speak-to-chat",
    "specifications": {
      "Audio": "High fidelity",
      "Connectivity": "Bluetooth 5.x",
      "Battery": "Up to 30+ hours",
      "Water Resistance": "IP-rated where applicable",
      "Controls": "Touch / buttons"
    },
    "colors": [
      "Black",
      "White"
    ],
    "storage": [],
    "stock": 33,
    "featured": true,
    "bestseller": true
  },
  {
    "id": "jbl-live770",
    "name": "Live 770NC",
    "brand": "JBL",
    "category": "audio",
    "subcategory": "Audio",
    "price": 9999,
    "oldPrice": 12999,
    "discount": 23,
    "rating": 4.3999999999999995,
    "reviews": 237,
    "image": "images/audio/jbl-live770.svg",
    "description": "Adaptive ANC, 40mm drivers, 65-hour battery, multipoint, JBL app",
    "specifications": {
      "Audio": "High fidelity",
      "Connectivity": "Bluetooth 5.x",
      "Battery": "Up to 30+ hours",
      "Water Resistance": "IP-rated where applicable",
      "Controls": "Touch / buttons"
    },
    "colors": [
      "Black",
      "White"
    ],
    "storage": [],
    "stock": 37,
    "featured": true,
    "bestseller": false
  },
  {
    "id": "jbl-flip7",
    "name": "Flip 7 Bluetooth Speaker",
    "brand": "JBL",
    "category": "audio",
    "subcategory": "Audio",
    "price": 11999,
    "oldPrice": 13999,
    "discount": 14,
    "rating": 4.5,
    "reviews": 266,
    "image": "images/audio/jbl-flip7.svg",
    "description": "Portable Bluetooth speaker, IP67, 14-hour playtime, powerful bass",
    "specifications": {
      "Audio": "High fidelity",
      "Connectivity": "Bluetooth 5.x",
      "Battery": "Up to 30+ hours",
      "Water Resistance": "IP-rated where applicable",
      "Controls": "Touch / buttons"
    },
    "colors": [
      "Black",
      "White"
    ],
    "storage": [],
    "stock": 41,
    "featured": false,
    "bestseller": true
  },
  {
    "id": "sony-ultfield1",
    "name": "ULT Field 1 Speaker",
    "brand": "Sony",
    "category": "audio",
    "subcategory": "Audio",
    "price": 12990,
    "oldPrice": 14990,
    "discount": 13,
    "rating": 4.6,
    "reviews": 295,
    "image": "images/audio/sony-ultfield1.svg",
    "description": "Portable wireless speaker, ULT bass boost, IP67, 12-hour battery",
    "specifications": {
      "Audio": "High fidelity",
      "Connectivity": "Bluetooth 5.x",
      "Battery": "Up to 30+ hours",
      "Water Resistance": "IP-rated where applicable",
      "Controls": "Touch / buttons"
    },
    "colors": [
      "Black",
      "White"
    ],
    "storage": [],
    "stock": 45,
    "featured": false,
    "bestseller": false
  },
  {
    "id": "bose-soundbar",
    "name": "Smart Soundbar",
    "brand": "Bose",
    "category": "audio",
    "subcategory": "Audio",
    "price": 44900,
    "oldPrice": 49900,
    "discount": 10,
    "rating": 4.1,
    "reviews": 324,
    "image": "images/audio/bose-soundbar.svg",
    "description": "Dolby Atmos soundbar, Wi-Fi, Bluetooth, voice control, compact design",
    "specifications": {
      "Audio": "High fidelity",
      "Connectivity": "Bluetooth 5.x",
      "Battery": "Up to 30+ hours",
      "Water Resistance": "IP-rated where applicable",
      "Controls": "Touch / buttons"
    },
    "colors": [
      "Black",
      "White"
    ],
    "storage": [],
    "stock": 49,
    "featured": false,
    "bestseller": false
  },
  {
    "id": "nothing-ear",
    "name": "Nothing Ear",
    "brand": "Nothing",
    "category": "audio",
    "subcategory": "Audio",
    "price": 8999,
    "oldPrice": 9999,
    "discount": 10,
    "rating": 4.199999999999999,
    "reviews": 353,
    "image": "images/audio/nothing-ear.svg",
    "description": "Hi-Res audio, ANC, dual connection, up to 40.5-hour total battery",
    "specifications": {
      "Audio": "High fidelity",
      "Connectivity": "Bluetooth 5.x",
      "Battery": "Up to 30+ hours",
      "Water Resistance": "IP-rated where applicable",
      "Controls": "Touch / buttons"
    },
    "colors": [
      "Black",
      "White"
    ],
    "storage": [],
    "stock": 53,
    "featured": false,
    "bestseller": false
  },
  {
    "id": "sony-a7c2",
    "name": "Alpha 7C II",
    "brand": "Sony",
    "category": "cameras",
    "subcategory": "Cameras",
    "price": 159990,
    "oldPrice": 174990,
    "discount": 9,
    "rating": 4.2,
    "reviews": 39,
    "image": "images/cameras/sony-a7c2.svg",
    "description": "33MP full-frame mirrorless, BIONZ XR, 4K video, 5-axis stabilization, interchangeable lens",
    "specifications": {
      "Sensor": "33MP full-frame mirrorless",
      "Video": "4K video",
      "Stabilization": "Optical / in-body depending on model",
      "Lens": "Interchangeable where applicable",
      "Connectivity": "Wi-Fi / Bluetooth"
    },
    "colors": [
      "Black",
      "Silver"
    ],
    "storage": [],
    "stock": 8,
    "featured": true,
    "bestseller": true
  },
  {
    "id": "canon-r8",
    "name": "EOS R8",
    "brand": "Canon",
    "category": "cameras",
    "subcategory": "Cameras",
    "price": 124990,
    "oldPrice": 139990,
    "discount": 11,
    "rating": 4.3,
    "reviews": 60,
    "image": "images/cameras/canon-r8.svg",
    "description": "24.2MP full-frame mirrorless, 4K 60p, Dual Pixel CMOS AF II, RF mount",
    "specifications": {
      "Sensor": "24.2MP full-frame mirrorless",
      "Video": "Dual Pixel CMOS AF II",
      "Stabilization": "Optical / in-body depending on model",
      "Lens": "Interchangeable where applicable",
      "Connectivity": "Wi-Fi / Bluetooth"
    },
    "colors": [
      "Black",
      "Silver"
    ],
    "storage": [],
    "stock": 10,
    "featured": true,
    "bestseller": false
  },
  {
    "id": "nikon-z6iii",
    "name": "Z6 III",
    "brand": "Nikon",
    "category": "cameras",
    "subcategory": "Cameras",
    "price": 189990,
    "oldPrice": 209990,
    "discount": 10,
    "rating": 4.4,
    "reviews": 81,
    "image": "images/cameras/nikon-z6iii.svg",
    "description": "24.5MP full-frame mirrorless, 6K RAW video, EXPEED 7, 5-axis VR",
    "specifications": {
      "Sensor": "24.5MP full-frame mirrorless",
      "Video": "EXPEED 7",
      "Stabilization": "Optical / in-body depending on model",
      "Lens": "Interchangeable where applicable",
      "Connectivity": "Wi-Fi / Bluetooth"
    },
    "colors": [
      "Black",
      "Silver"
    ],
    "storage": [],
    "stock": 12,
    "featured": true,
    "bestseller": false
  },
  {
    "id": "fujifilm-xs20",
    "name": "X-S20",
    "brand": "Fujifilm",
    "category": "cameras",
    "subcategory": "Cameras",
    "price": 109990,
    "oldPrice": 124990,
    "discount": 12,
    "rating": 4.5,
    "reviews": 102,
    "image": "images/cameras/fujifilm-xs20.svg",
    "description": "26.1MP APS-C, 6.2K video, 5-axis stabilization, subject detection AF",
    "specifications": {
      "Sensor": "26.1MP APS-C",
      "Video": "5-axis stabilization",
      "Stabilization": "Optical / in-body depending on model",
      "Lens": "Interchangeable where applicable",
      "Connectivity": "Wi-Fi / Bluetooth"
    },
    "colors": [
      "Black",
      "Silver"
    ],
    "storage": [],
    "stock": 14,
    "featured": false,
    "bestseller": false
  },
  {
    "id": "instax-mini12",
    "name": "Instax Mini 12",
    "brand": "Fujifilm",
    "category": "cameras",
    "subcategory": "Cameras",
    "price": 7999,
    "oldPrice": 8999,
    "discount": 11,
    "rating": 4.2,
    "reviews": 123,
    "image": "images/cameras/instax-mini12.svg",
    "description": "Instant camera, automatic exposure, close-up mode, built-in flash, credit-card prints",
    "specifications": {
      "Sensor": "Instant camera",
      "Video": "close-up mode",
      "Stabilization": "Optical / in-body depending on model",
      "Lens": "Interchangeable where applicable",
      "Connectivity": "Wi-Fi / Bluetooth"
    },
    "colors": [
      "Black",
      "Silver"
    ],
    "storage": [],
    "stock": 16,
    "featured": false,
    "bestseller": false
  },
  {
    "id": "anker20k",
    "name": "PowerCore 20K Power Bank",
    "brand": "Anker",
    "category": "accessories",
    "subcategory": "Accessories",
    "price": 2499,
    "oldPrice": 2999,
    "discount": 17,
    "rating": 4.0,
    "reviews": 210,
    "image": "images/accessories/anker20k.svg",
    "description": "20,000mAh power bank, USB-C PD, dual USB outputs, compact design",
    "specifications": {
      "Type": "PowerCore 20K Power Bank",
      "Connectivity": "USB-C / Bluetooth depending on item",
      "Compatibility": "Universal / model dependent",
      "Warranty": "1 year"
    },
    "colors": [
      "Black",
      "White"
    ],
    "storage": [],
    "stock": 35,
    "featured": true,
    "bestseller": true
  },
  {
    "id": "apple20w",
    "name": "20W USB-C Power Adapter",
    "brand": "Apple",
    "category": "accessories",
    "subcategory": "Accessories",
    "price": 1690,
    "oldPrice": 1990,
    "discount": 15,
    "rating": 4.1,
    "reviews": 228,
    "image": "images/accessories/apple20w.svg",
    "description": "20W USB-C fast charging adapter, compact design, wide voltage support",
    "specifications": {
      "Type": "20W USB-C Power Adapter",
      "Connectivity": "USB-C / Bluetooth depending on item",
      "Compatibility": "Universal / model dependent",
      "Warranty": "1 year"
    },
    "colors": [
      "Black",
      "White"
    ],
    "storage": [],
    "stock": 38,
    "featured": true,
    "bestseller": false
  },
  {
    "id": "spigen65w",
    "name": "65W GaN Charger",
    "brand": "Spigen",
    "category": "accessories",
    "subcategory": "Accessories",
    "price": 2999,
    "oldPrice": 3999,
    "discount": 25,
    "rating": 4.2,
    "reviews": 246,
    "image": "images/accessories/spigen65w.svg",
    "description": "65W GaN charger, USB-C PD, multiple ports, travel-friendly",
    "specifications": {
      "Type": "65W GaN Charger",
      "Connectivity": "USB-C / Bluetooth depending on item",
      "Compatibility": "Universal / model dependent",
      "Warranty": "1 year"
    },
    "colors": [
      "Black",
      "White"
    ],
    "storage": [],
    "stock": 41,
    "featured": true,
    "bestseller": false
  },
  {
    "id": "sandisk1tb",
    "name": "1TB Portable SSD",
    "brand": "SanDisk",
    "category": "accessories",
    "subcategory": "Accessories",
    "price": 7999,
    "oldPrice": 9499,
    "discount": 16,
    "rating": 4.3,
    "reviews": 264,
    "image": "images/accessories/sandisk1tb.svg",
    "description": "1TB portable SSD, USB 3.2, up to 1050MB/s, compact metal body",
    "specifications": {
      "Type": "1TB Portable SSD",
      "Connectivity": "USB-C / Bluetooth depending on item",
      "Compatibility": "Universal / model dependent",
      "Warranty": "1 year"
    },
    "colors": [
      "Black",
      "White"
    ],
    "storage": [],
    "stock": 44,
    "featured": true,
    "bestseller": false
  },
  {
    "id": "logitech-k380",
    "name": "K380 Bluetooth Keyboard",
    "brand": "Logitech",
    "category": "accessories",
    "subcategory": "Accessories",
    "price": 2995,
    "oldPrice": 3495,
    "discount": 14,
    "rating": 4.4,
    "reviews": 282,
    "image": "images/accessories/logitech-k380.svg",
    "description": "Compact Bluetooth keyboard, multi-device pairing, 2-year battery life",
    "specifications": {
      "Type": "K380 Bluetooth Keyboard",
      "Connectivity": "USB-C / Bluetooth depending on item",
      "Compatibility": "Universal / model dependent",
      "Warranty": "1 year"
    },
    "colors": [
      "Black",
      "White"
    ],
    "storage": [],
    "stock": 47,
    "featured": true,
    "bestseller": true
  },
  {
    "id": "logitech-mxmaster3s",
    "name": "MX Master 3S",
    "brand": "Logitech",
    "category": "accessories",
    "subcategory": "Accessories",
    "price": 8995,
    "oldPrice": 9995,
    "discount": 10,
    "rating": 4.5,
    "reviews": 300,
    "image": "images/accessories/logitech-mxmaster3s.svg",
    "description": "Ergonomic wireless mouse, 8K DPI, MagSpeed scroll, multi-device",
    "specifications": {
      "Type": "MX Master 3S",
      "Connectivity": "USB-C / Bluetooth depending on item",
      "Compatibility": "Universal / model dependent",
      "Warranty": "1 year"
    },
    "colors": [
      "Black",
      "White"
    ],
    "storage": [],
    "stock": 50,
    "featured": false,
    "bestseller": true
  },
  {
    "id": "samsung-t7",
    "name": "T7 Shield 1TB",
    "brand": "Samsung",
    "category": "accessories",
    "subcategory": "Accessories",
    "price": 8999,
    "oldPrice": 9999,
    "discount": 10,
    "rating": 4.0,
    "reviews": 318,
    "image": "images/accessories/samsung-t7.svg",
    "description": "1TB portable SSD, USB 3.2 Gen 2, AES encryption, rugged IP65 design",
    "specifications": {
      "Type": "T7 Shield 1TB",
      "Connectivity": "USB-C / Bluetooth depending on item",
      "Compatibility": "Universal / model dependent",
      "Warranty": "1 year"
    },
    "colors": [
      "Black",
      "White"
    ],
    "storage": [],
    "stock": 53,
    "featured": false,
    "bestseller": false
  },
  {
    "id": "belkin6in1",
    "name": "6-in-1 USB-C Hub",
    "brand": "Belkin",
    "category": "accessories",
    "subcategory": "Accessories",
    "price": 4499,
    "oldPrice": 5499,
    "discount": 18,
    "rating": 4.1,
    "reviews": 336,
    "image": "images/accessories/belkin6in1.svg",
    "description": "USB-C hub with HDMI, USB-A, SD, microSD and PD pass-through",
    "specifications": {
      "Type": "6-in-1 USB-C Hub",
      "Connectivity": "USB-C / Bluetooth depending on item",
      "Compatibility": "Universal / model dependent",
      "Warranty": "1 year"
    },
    "colors": [
      "Black",
      "White"
    ],
    "storage": [],
    "stock": 56,
    "featured": false,
    "bestseller": false
  },
  {
    "id": "amazonbasics-hdmi",
    "name": "Ultra High Speed HDMI Cable",
    "brand": "Amazon Basics",
    "category": "accessories",
    "subcategory": "Accessories",
    "price": 899,
    "oldPrice": 1199,
    "discount": 25,
    "rating": 4.2,
    "reviews": 354,
    "image": "images/accessories/amazonbasics-hdmi.svg",
    "description": "2-meter HDMI cable supporting 8K, 48Gbps bandwidth, eARC",
    "specifications": {
      "Type": "Ultra High Speed HDMI Cable",
      "Connectivity": "USB-C / Bluetooth depending on item",
      "Compatibility": "Universal / model dependent",
      "Warranty": "1 year"
    },
    "colors": [
      "Black",
      "White"
    ],
    "storage": [],
    "stock": 59,
    "featured": false,
    "bestseller": false
  },
  {
    "id": "boatwatchcharger",
    "name": "3-in-1 Charging Stand",
    "brand": "boAt",
    "category": "accessories",
    "subcategory": "Accessories",
    "price": 1999,
    "oldPrice": 2499,
    "discount": 20,
    "rating": 4.3,
    "reviews": 372,
    "image": "images/accessories/boatwatchcharger.svg",
    "description": "Desktop charging stand for phone, earbuds and smartwatch, USB-C input",
    "specifications": {
      "Type": "3-in-1 Charging Stand",
      "Connectivity": "USB-C / Bluetooth depending on item",
      "Compatibility": "Universal / model dependent",
      "Warranty": "1 year"
    },
    "colors": [
      "Black",
      "White"
    ],
    "storage": [],
    "stock": 62,
    "featured": false,
    "bestseller": false
  }
];

function getProductById(id){ return PRODUCTS.find(p => p.id === id); }
function getProductsByCategory(category){ return PRODUCTS.filter(p => p.category === category); }
function getFeaturedProducts(){ return PRODUCTS.filter(p => p.featured); }
function getBestsellers(){ return PRODUCTS.filter(p => p.bestseller); }
