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

export interface StyleFeedReplyUser {
  user_id: number;
  profile_name: string;
}

export interface StyleFeedReply {
  id: number;
  content: string;
  to_profile: StyleFeedReplyUser;
  created_by: StyleFeedUser;
  created_at: string;
  num_likes: number;
  liked: boolean;
}

export interface StyleFeedComment {
  id: number;
  content: string;
  created_by: StyleFeedUser;
  created_at: string;
  replies: StyleFeedReply[];
  num_likes: number;
  liked: boolean;
}
