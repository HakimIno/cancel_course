import ModelDto from ".";
type PetitionType = "documents" | "join" | "tranfer" | "form";
export class Petition {
  id: number;
  name: string;
  picture?: string;
  type: PetitionType;
  price: number;
  constructor(name = "", type: PetitionType, picture?: string, price = 50) {
    this.id = name.length;
    this.name = name;
    this.type = type;
    this.picture = picture;
    this.price = price;
  }
}
export class CreatePetitionDto extends ModelDto {
  name: string;
  constructor(name = "") {
    super();
    this.name = name;
  }
}
