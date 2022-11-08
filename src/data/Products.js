export const products = [
    {
        id: 1,
        name: "Mouse ZN-900",
        price: 38.99,
        img: "https://i.ibb.co/SrVPtcz/mouse1.png",
        category: "mouse"
    },
    {
        id: 2,
        name: "Mouse JS-404",
        price: 35.99,
        img: "https://i.ibb.co/41DqdPS/mouse2.png",
        category: "mouse"
    },
    {
        id: 3,
        name: "Mouse VC-250",
        price: 39.99,
        img: "https://i.ibb.co/Sm25FqG/mouse3.png",
        category: "mouse"
    },
    {
        id: 4,
        name: "Mouse ZR-807",
        price: 42.99,
        img: "https://i.ibb.co/D5WN5Fr/mouse4.png",
        category: "mouse"
    },
    {
        id: 5,
        name: "Mouse KD-305",
        price: 39.99,
        img: "https://i.ibb.co/FYYSpMW/mouse5.png",
        category: "mouse"
    },
    {
        id: 6,
        name: "Auriculares CAT-02",
        price: 50.99,
        img: "https://i.ibb.co/sC9byMq/auris1.png",
        category: "auriculares"
    },
    {
        id: 7,
        name: "Auriculares SAN-10",
        price: 65.99,
        img: "https://i.ibb.co/5nkx0ZD/auris2.png",
        category: "auriculares"
    },
    {
        id: 8,
        name: "Auriculares CAT-01",
        price: 55.99,
        img: "https://i.ibb.co/5cvgYQF/auris3.png",
        category: "auriculares"
    },
    {
        id: 9,
        name: "Auriculares LEN-50",
        price: 58.99,
        img: "https://i.ibb.co/09Y9tzF/auris4.png",
        category: "auriculares"
    },
    {
        id: 10,
        name: "Auriculares NON-40",
        price: 48.99,
        img: "https://i.ibb.co/RpzB693/auris5.png",
        category: "auriculares"
    },
    {
        id: 11,
        name: "Auriculares RED-55",
        price: 64.99,
        img: "https://i.ibb.co/R4kJ8L4/auris6.png",
        category: "auriculares"
    },
    {
        id: 12,
        name: "Auriculares MINI-20",
        price: 35.99,
        img: "https://i.ibb.co/Ht7LvMw/auris7.png",
        category: "auriculares"
    },
    {
        id: 13,
        name: "Parlantes VINK-2",
        price: 89.99,
        img: "https://i.ibb.co/371BqkZ/parlantes1.png",
        category: "parlantes"
    },
    {
        id: 14,
        name: "Parlantes FOND-5",
        price: 92.99,
        img: "https://i.ibb.co/y022CZv/parlantes2.png",
        category: "parlantes"
    },
    {
        id: 15,
        name: "Parlantes GEBA-9",
        price: 95.99,
        img: "https://i.ibb.co/d67rvKw/parlantes3.png",
        category: "parlantes"
    },
    {
        id: 16,
        name: "Teclado J-8000",
        price: 70.99,
        img: "https://i.ibb.co/N3YJ0KW/teclado1.png",
        category: "teclados"
    },
    {
        id: 17,
        name: "Teclado Z-4500",
        price: 73.99,
        img: "https://i.ibb.co/kqq7hJ2/teclado2.png",
        category: "teclados"
    },
    {
        id: 18,
        name: "Teclado S1-7007",
        price: 78.99,
        img: "https://i.ibb.co/3B2mmFC/teclado3.png",
        category: "teclados"
    },
    {
        id: 19,
        name: "Teclado F-1100",
        price: 69.99,
        img: "https://i.ibb.co/QkMTPbx/teclado4.png",
        category: "teclados"
    },
]

export const TotalProducts = products.length;

export const Products = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
  
    acc[product.category] = [...acc[product.category], product];
  
    return acc;
  }, {});