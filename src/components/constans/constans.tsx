export const methodsPayIcons: object[] = [
  {
    id: 1,
    image: "/images/g_pay.png",
  },
  {
    id: 2,
    image: "../images/pay.png",
  },
  {
    id: 3,
    image: "../../images/visa.png",
  },
  {
    id: 4,
    image: "../../../images/master.png",
  },
  {
    id: 5,
    image: "../../images/master_1.png",
  },
  {
    id: 6,
    image: "../../images/webmoney.png",
  },
  {
    id: 7,
    image: "../../images/fox.png",
  },
];

export interface CardScooter {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}



export const cardScooter: CardScooter = {
  id: 2,
  title: "Электросамокат Kugoo M4",
  price: 800,
  description: `Электросамокат Kugoo M4 – младшая модель электросамоката M4 Pro, отличающаяся 
    среди своих собратьев самой меньшей емкостью батареи. Благодаря этому устройство 
    облегченное. Его могут эксплуатировать дети и девушки. Даже при небольшом весе самокат 
    способен набрать скорость до 40 км/ч. Есть возможность установить ограничение этого 
    показателя для детей, чтобы самокат не разгонялся более 10–15 км/ч. Kugoo M4 отличный 
    самокат для езды по городским улицам и по пересеченной местности. Водитель в любых условиях 
    движения будет чувствовать себя максимально комфортно.`,
  category: "urban scooter",
  image: "https://",
  rating: {
    rate: 4.1,
    count: 8,
  },
};
