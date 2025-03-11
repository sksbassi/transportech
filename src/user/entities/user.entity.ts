export class User {
  idUser: string;
  Document: string;
  Password: string;
  Name: string;
  Phone: string;
  Email: string;
  Status: boolean;

  constructor(
    iduser: string,
    name: string,
    document: string,
    password: string,
    phone: string,
    email: string,
    status: boolean,
  ) {
    this.idUser = iduser;
    this.Name = name;
    this.Document = document;
    this.Password = password;
    this.Phone = phone;
    this.Email = email;
    this.Status = status;
  }
}
