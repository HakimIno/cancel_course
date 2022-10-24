import ModelDto from ".";
type PetitionType = "documents" | "join" | "tranfer" | "form";
export class Petition {
  id: number;
  name: string;
  picture?: string;
  type: PetitionType;
  constructor(name = "", type: PetitionType, picture?: string) {
    this.id = name.length;
    this.name = name;
    this.type = type;
    this.picture = picture;
  }
}
export class CreatePetitionDto extends ModelDto {
  name: string;
  constructor(name = "") {
    super();
    this.name = name;
  }
}
