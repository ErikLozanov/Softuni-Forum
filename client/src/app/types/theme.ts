import { UserId } from './user-id';

export interface Theme {
  subscribers: string[];
  posts: string[];
  _i: string;
  themeName: string;
  userId: UserId;
  created_at: string;
  updatedAt: string;
  __v: string;
}
