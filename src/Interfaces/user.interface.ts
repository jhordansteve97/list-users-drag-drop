export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  gender: 'female' | 'male';
  city: string;
  state: string;
  country: string;
}