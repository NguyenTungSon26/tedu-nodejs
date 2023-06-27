// xem trong diagrams-> entity relationship để xem thuộc tính có gì sau đó thêm vào
export default interface IUser {
    _id: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    avatar: string;
    date: Date;
  }