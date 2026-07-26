export interface Show {
  number: string;
  slug: string;
  title: string;
  dj: string;
  date: string;
  duration: string;
  tags: string[];
  description: string;
  audioUrl: string;
  coverFileName: string;
}

export const shows: Show[] = [
  {
    number: "ZR001",
    slug: "broken-signals-volume-01",
    title: "Broken Signals / Volume 01",
    dj: "Zaina Radio",
    date: "2026-07-26",
    duration: "60 min",
    tags: [
      "Broken Beat",
      "UK Garage Roots",
      "Broken Techno",
      "Jazz-infused Electronic",
    ],
    description:
      "一段围绕碎拍律动展开的开场选集，从 UK underground 的鼓组语言出发，探索电子音乐里不规则但有生命力的节奏。",
    audioUrl: "/audio/zr001.mp3",
    coverFileName: "zr001.jpg",
  },
  {
    number: "ZR002",
    slug: "ritual-frequencies",
    title: "Ritual Frequencies",
    dj: "TBA",
    date: "2026-08-01",
    duration: "60 min",
    tags: [
      "Tribal Percussion",
      "Organic House",
      "Afro Electronic",
      "Dub",
    ],
    description:
      "围绕部落打击乐、低频与有机律动展开的选曲，探索传统节奏语言与当代电子声音之间的连接。",
    audioUrl: "/audio/zr002.mp3",
    coverFileName: "zr002.jpg",
  },
  {
    number: "ZR003",
    slug: "after-midnight-architecture",
    title: "After Midnight Architecture",
    dj: "TBA",
    date: "2026-08-15",
    duration: "60 min",
    tags: [
      "Ambient",
      "Dub Techno",
      "Experimental",
      "Leftfield",
    ],
    description:
      "一段为深夜准备的声音旅程，在 ambient、dub techno 与实验电子之间缓慢移动。",
    audioUrl: "/audio/zr003.mp3",
    coverFileName: "zr003.jpg",
  },
];

