export interface Tag {
  id: number;
  tag_category_id: number;
  name: string;
}

export interface TagCategory {
  id: number;
  name: string;
}

export interface TagBase {
  tag_category_id: number;
  name: string;
}

export interface TagCategoryBase {
  name: string;
}
