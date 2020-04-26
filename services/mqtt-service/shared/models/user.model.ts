export class UserModel {
  [key: string]: any;

  constructor(user: Partial<UserModel>) {
    Object.assign(this, user);
  }
}

export const nasterblueUser = new UserModel({
  email: 'taipv.uit@gmail.com',
  username: 'nasterblue',
  linkedin: 'https://www.linkedin.com/in/nasterblue'
});