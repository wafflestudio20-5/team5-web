export interface User {
  id: number;
  email: string;
  shoe_size: string;
  phone_number: string;
}

export interface Profile {
  user_id: number;
  user_name: string;
  profile_name: string;
  introduction: string;
  image: null | string;
  num_posts: number;
  num_followers: number;
  following: boolean | string | null;
}
