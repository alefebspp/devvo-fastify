import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { ForgedBy } from "..";

@Entity()
export class Ring {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("text", { nullable: false })
  name: string;

  @Column("text", { nullable: false })
  power: string;

  @Column("text", { nullable: false })
  carrier: string;

  @Column({
    type: "enum",
    enum: ["men", "elves", "dwarves", "sauron"],
  })
  forgedBy: ForgedBy;

  @Column("text", { nullable: false })
  imageUrl: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
    onUpdate: "CURRENT_TIMESTAMP",
  })
  updatedAt: Date;
}
