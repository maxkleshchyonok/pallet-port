import { User } from '../../types/types';

export default class MyUser implements User {
  constructor(
    public name: User['name'],
    public email: User['email'],
    public password: User['password'],
  ) {
  }
}
