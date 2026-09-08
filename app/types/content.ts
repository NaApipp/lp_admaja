export interface ContentTimes {
  createdAt: string;
  updatedAt: string;
}

export interface ContentRelation {
  author: string;
}

export interface ContentPost {
  _id: string;
  content_id: string;
  title: string;
  content: string;
  label: string;
  image: string;
}


export interface ContentResponse {
  message: string;
  data: ContentPost[];
}