export type Pet ={
  id?: string;
  name: string;
  type: string;
  breed: string;
  age: number;
  birthDate?: Date;
}


export type Owner = {
  id?: string;
  name: string;
  cpf : string;
  rg : string;
  birthDate: string;
  email: string;
  phone: string;
  address: {
    street: string,
    number: number,
    complement?: string,
    city: string,
    state: string,
    zipCode: string,
  },
  pets: Pet[]
}

export enum PetType {

}
///
