import { atom } from "jotai";
import { Resource } from "../type/resources";

export const resourcesAtom = atom<Resource[]>([]);
export const selectedResourceAtom = atom<Resource | null>(null);
