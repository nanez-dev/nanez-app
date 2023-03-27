import { Accord } from './accord';
import { Brand } from './brand';
import { Density } from './density';
import { Note } from './note';
import { Tag } from './tag';

export interface PerfumeAccord {
  id: number;
  accord_id: number;
  perfume_id: number;
  accord: Accord;
}

export interface PerfumeNote {
  id: number;
  perfume_id: number;
  note_id: number;
  type: string;
  note: Note;
}

export interface PerfumeTag {
  id: number;
  tag_id: number;
  perfume_id: number;
  tag: Tag;
}

export interface PerfumeBase {
  id: number;
  brand: Brand;
  density: Density;
  kor: string;
  eng: string;
  image?: string;
  capacity: number;
  price: number;
  title: string;
  subtitle: string;
  is_single: boolean;
  perfume_accords: PerfumeAccord[];
  perfume_notes: PerfumeNote[];
  perfume_tags: PerfumeTag[];
  web_image1: string;
  web_image2: string;
  is_having: boolean;
  is_wish: boolean;
}

export interface PerfumeInformation {
  brands: Brand;
  densities: Density;
  accords: Accord;
  notes: Note;
  tags: Tag;
}

export interface PerfumeList {
  perfumes: [PerfumeBase];
}
