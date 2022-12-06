import ModelDto from ".";
import { Petition } from "./Petition";
export type ChannalReceiving = "POSTAL" | "PROXY" | "PICKUP";
export class Activity {
  constructor(
    public readonly id: number,
    public readonly phone: string,
    public readonly email: string,
    public readonly address: string,
    public readonly channal_receiving: ChannalReceiving = "PICKUP",
    public readonly payment: number,
    public readonly items: ActivityItem[]
  ) {
    this.id = id;
    this.phone = phone;
    this.email = email;
    this.address = address;
    this.channal_receiving = channal_receiving;
    this.payment = payment;
    this.items = items;
  }
}
export class ActivityItem {
  constructor(
    public readonly id: number,
    public readonly quantity = 1,
    public readonly petition: Petition
  ) {
    this.id = id;
    this.quantity = quantity;
    this.petition = petition;
  }
}
export class CreateActivityItemDto {
  constructor(
    public readonly quantity = 1,
    public readonly petition_id: number
  ) {
    this.quantity = quantity;
    this.petition_id = petition_id;
  }
}

export class CreateActivityDto extends ModelDto {
  constructor(
    public readonly phone: string,
    public readonly email: string,
    public readonly address: string,
    public readonly channal_receiving: ChannalReceiving = "PICKUP",
    public readonly items: CreateActivityItemDto[],
    public readonly payment: string,
  ) {
    super();
    this.payment = payment;
    this.phone = phone;
    this.email = email;
    this.address = address;
    this.channal_receiving = channal_receiving;
    this.items = items;
  }
}
