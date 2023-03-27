export interface Brand {
  id: number;
  eng: string;
  kor: string;
  image?: string;
}

export interface RelativePerfumes {
  brand: Brand;
  capacity: number;
  eng: string;
  image: string;
  kor: string;
  price: number;
  id: string;
  is_having: boolean;
  is_wish: boolean;
}

export interface BrandDetail {
  id: 0;
  eng: 'string';
  kor: 'string';
  image: 'string';
  detail: {
    top_title: 'string';
    top_subtitle: 'string';
    bottom_title: 'string';
    bottom_subtitle: 'string';
    image1: 'string';
    image2: 'string';
    image3: 'string';
    image4: 'string';
    image5: 'string';
    id: 0;
    brand_id: 0;
  };
  relative_perfumes: RelativePerfumes[];
}
