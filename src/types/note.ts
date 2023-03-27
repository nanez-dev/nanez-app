export interface Note {
  id: number;
  note_category_id: number;
  eng: string;
  kor: string;
  image?: string;
  illustration?: string;
}

export interface NoteCategory {
  id: number;
  name: string;
}
