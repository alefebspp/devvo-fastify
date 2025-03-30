import Ring from "@/features/ring/entities";

export const ringSeed: Ring[] = [
  {
    id: crypto.randomUUID(),
    name: "Vilya",
    power: "Healing and protection",
    carrier: "Elrond",
    forgedBy: "elves",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNJyIhqnjwNlRnLBeVdRSafY3ZN_igRImxFA&s",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: crypto.randomUUID(),
    name: "Nenya",
    power: "Preservation and concealment",
    carrier: "Galadriel",
    forgedBy: "elves",
    imageUrl: "https://m.media-amazon.com/images/I/61-CwvYUn+L._AC_UY1000_.jpg",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: crypto.randomUUID(),
    name: "Narya",
    power: "Inspiration and resistance to tyranny",
    carrier: "Gandalf",
    forgedBy: "elves",
    imageUrl:
      "https://cinepop.com.br/wp-content/uploads/2022/10/narya-aneis-de-poder.jpeg",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: crypto.randomUUID(),
    name: "Ring of Durin's Folk",
    power: "Greed and mastery over stone and metal",
    carrier: "Thráin II",
    forgedBy: "dwarves",
    imageUrl:
      "https://tolkiengateway.net/w/images/0/00/Noble_Collection_-_Dwarven_Ring_of_Power.jpg",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: crypto.randomUUID(),
    name: "The One Ring",
    power: "Domination over other Rings of Power",
    carrier: "Sauron",
    forgedBy: "sauron",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJMJ6bynnB5daW7gbtOFbYMS2gtLcsu4WPMg&s",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
