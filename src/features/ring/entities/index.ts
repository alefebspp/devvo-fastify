export type ForgedBy = "elves" | "dwarves" | "men" | "sauron";

export default interface Ring {
  id: string;
  name: string;
  power: string;
  carrier: string;
  forgedBy: ForgedBy;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
}
