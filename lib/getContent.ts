// lib/getContent.ts

import { businessContent } from "@/data/business";

export type Lang = "en" | "mr";

export function getContent(lang: Lang) {
    return businessContent[lang];
}