export interface StyleFeed {
  id: number;
  content: string;
  images: string[];
  image_ratio: number;
  created_by: StyleFeedUser;
  created_at: string;
  num_comments: number;
  num_likes: number;
  liked?: boolean | string;
}

export interface StyleFeedUser {
  user_id: number;
  user_name: string;
  profile_name: string;
  image: string | null;
  following: string | boolean | null;
}
