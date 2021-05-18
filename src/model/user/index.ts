export interface User {
  age: number;
  email: string;
  username: string;
  name: string;
}

export const DEFAULT_USER: User = { name: 'GUEST' };
