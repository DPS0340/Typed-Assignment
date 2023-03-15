export type ImageDatum = {
  images: string[];
};

export interface ImageMapping {
  [key: string]: ImageDatum;
}
