export class UserModel {
  [key: string]: any;

  constructor(data: Partial<UserModel>) {
    Object.assign(this, data);
  }
}

export const nasterblueUser = new UserModel({
  email: 'taipv.uit@gmail.com',
  username: 'nasterblue',
  linkedin: 'https://www.linkedin.com/in/nasterblue'
});