export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  image?: string;
}

export type SimpleUser = Pick<User, "username" | "image">;
