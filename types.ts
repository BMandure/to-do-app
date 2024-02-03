export type Width = "10" | "25" | "50" | "75" | "full";

export interface NoteInfo {
  _id: string;
  name: string;
  content: string;
  tags: string[];
}

export type Tag = { id: string; name: string };
