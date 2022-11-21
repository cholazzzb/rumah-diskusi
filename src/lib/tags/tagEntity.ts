export type Tag = {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
};

export type CreateTagRequest = {
  name: string;
};

export type GetTagRequest = {
  name: string;
};

export type GetTagResponse = {
  message: string;
  data: Array<Tag>;
};
