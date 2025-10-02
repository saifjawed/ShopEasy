import sliderimage1 from '../assets/slider1.jpg';
import sliderimage2 from '../assets/slider2.webp';
import sliderimage3 from '../assets/slider3.png';
import sliderimage4 from '../assets/slider4.png';
import kids from '../assets/kids.jpg';
import women from '../assets/women.jpg';
import electronics from '../assets/electronic.jpg';
import men from '../assets/men.jpeg';
import shirt from '../assets/shirt.webp';
import shirt2 from '../assets/shirt2.webp';
import denim from '../assets/denim jacket.webp';
import tshirt from '../assets/tshirt.webp';
import gown from '../assets/gown.webp';
import wdenim from '../assets/denim jacket (2).webp';
import kurta from '../assets/suits1.webp';
import womentshirt from '../assets/women t-shirt.webp';
import kid1 from '../assets/kid1.webp';
import kid2 from '../assets/kid2.webp';
import kid3 from '../assets/kid3.webp';
import kid4 from '../assets/kid4.webp';
import laptop from '../assets/laptop.webp';
import phone from '../assets/phone.webp';
import camera from '../assets/camera.webp';
import tv from '../assets/tv.webp';
import slider1 from '../assets/phoneslider1.jpg';
import slider2 from '../assets/phoneslider2.jpg';
import slider3 from '../assets/phoneslider3.jpg';
import slider4 from '../assets/phoneslider4.jpg';

export const allProducts = {
    slider: [
        { id: 5, name: 'Galaxy S24', price: 499, image: sliderimage1, image_mobile:slider1 , description: 'Seize the night, in stunning detail. 50 MP Camera.' },
        { id: 2, name: 'Fall/Winter Collection', price: 49, image: sliderimage2,image_mobile:slider2, description: 'This stylish blazer is crafted from premium wool. Its tailored fit provides a sharp, modern silhouette.' },
        { id: 3, name: 'Timeless Style', price: 249, image: sliderimage3,image_mobile:slider3, description: 'A sleek and minimalist accessory to complement your look. Made from genuine leather.' },
        { id: 4, name: 'Urban Chic Looks', price: 349, image: sliderimage4,image_mobile:slider4, description: 'A comfortable and chic blouse made from soft, breathable fabric. Perfect for work or a casual day out.' },
    ],
    women: [
        { id: 101, name: 'Elegant Evening Gown', price: 499, image: gown, description: 'A stunning floor-length gown for special occasions.', category: 'Women', rating: 4.8},
        { id: 102, name: 'Casual Denim Jacket', price: 219, image: wdenim, description: 'A timeless denim jacket for a relaxed look.', category: 'Women', rating: 4.5},
        { id: 103, name: 'Embroidered Kurta Set', price: 349, image: kurta, description: 'Women\'s embroidered Kurta, Trouser/Pant & Dupatta Set.', category: 'Women', rating: 4.7},
        { id: 104, name: 'Solid Round Neck T-Shirt', price: 69, image: womentshirt, description: 'Women\'s Solid Round Neck Wool Blend Pink T-Shirt.', category: 'Women', rating: 4.3},
    ],
    men: [
        { id: 201, name: 'Classic Denim Jacket', price: 289, image: denim, description: 'A rugged and stylish genuine jacket.', category: 'Men', rating: 4.6},
        { id: 202, name: 'Slim-Fit Casual Shirt', price: 129, image: shirt, description: 'Versatile and modern slim-fit casual shirt.', category: 'Men', rating: 4.4},
        { id: 203, name: 'Cotton Blend T-Shirt', price: 749, image: tshirt, description: 'Men Self Design Neck Cotton Blend Dark Blue T-Shirt.', category: 'Men', rating: 4.2},
        { id: 204, name: 'Checkered Casual Shirt', price: 149, image: shirt2, description: 'Men Slim Fit Checkered Spread Collar Casual Shirt.', category: 'Men', rating: 4.5},
    ],
    kids: [
        { id: 301, name: 'Girls Casual Dress', price: 899, image: kid1, description: 'Girls Calf Length Casual Dress', category: 'Kids', rating: 4.8},
        { id: 302, name: 'Girls Festive Dress', price: 129, image: kid2, description: 'Donald Baby Girls Calf Length Festive/Wedding Dress.', category: 'Kids', rating: 4.9,},
        { id: 303, name: 'Baby Girls Party Dress', price: 119, image: kid3, description: 'Baby Girls Midi/Knee Length Party Dress.', category: 'Kids', rating: 4.7,},
        { id: 304, name: 'Baby Girls T-shirt', price: 59, image: kid4, description: 'Baby Girls Party(Festive) T-shirt.', category: 'Kids', rating: 4.6},
    ],
    electronics: [
        { id: 401, name: 'HP OMEN 16 Gaming Laptop', price: 1162, image: laptop, description: 'HP OMEN 16 AMD Ryzen 7 Octa Core 7840HS for ultimate gaming.', category: 'Electronics', rating: 4.8},
        { id: 501, name: 'Samsung Galaxy S25 Ultra 5G', price: 1242, image: phone, description: 'The latest smartphone with a stunning display and powerful camera.', category: 'Electronics', rating: 4.9},
        { id: 601, name: 'Canon R100 Mirrorless Camera', price: 4491, image: camera, description: 'Capture stunning moments with this 4K mirrorless camera.', category: 'Electronics', rating: 4.7},
        { id: 603, name: 'Samsung 55 inch QLED 4K TV', price: 6599, image: tv, description: 'Sharper Viewing with the Samsung 139.7 cm QLED 4K Ultra HD Smart TV.', category: 'Electronics', rating: 4.8},
    ],
    shopCategories: [
        { id: 'women', name: 'Women', image: women },
        { id: 'men', name: 'Men', image: men },
        { id: 'kids', name: 'Kids', image: kids},
        { id: 'electronics', name: 'Electronics', image: electronics},
    ]
};