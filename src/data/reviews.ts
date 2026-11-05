export type Review = {
  id: string;
  filmId: string;
  username: string;
  avatarURL: string;
  rating: number;
  text: string;
  likes: number;
  date: string;
};

export const reviewList: Review[] = [
  {
    id: "r1",
    filmId: "1", // Parasite
    username: "filmnerd",
    avatarURL: "https://picsum.photos/seed/filmnerd/100/100",
    rating: 5,
    text: "The shift halfway through caught me completely off guard. Masterfully controlled from the first frame to the last.",
    likes: 32,
    date: "2026-10-14",
  },
  {
    id: "r2",
    filmId: "1", // Parasite
    username: "midnightmatinee",
    avatarURL: "https://picsum.photos/seed/midnightmatinee/100/100",
    rating: 4.5,
    text: "Funny, tense and devastating, sometimes all in the same scene. The staircase imagery will stay with me for a while.",
    likes: 18,
    date: "2026-09-02",
  },
  {
    id: "r3",
    filmId: "3", // Spirited Away
    username: "popcornandpixels",
    avatarURL: "https://picsum.photos/seed/popcornandpixels/100/100",
    rating: 5,
    text: "Rewatched for the first time since I was a kid and it is somehow even more magical now. Every frame is a painting.",
    likes: 47,
    date: "2026-08-21",
  },
  {
    id: "r4",
    filmId: "4", // The Dark Knight
    username: "reeltalk",
    avatarURL: "https://picsum.photos/seed/reeltalk/100/100",
    rating: 4.5,
    text: "Still the benchmark for superhero films. The interrogation scene alone is worth the runtime.",
    likes: 25,
    date: "2026-07-30",
  },
  {
    id: "r5",
    filmId: "7", // Interstellar
    username: "stargazer_k",
    avatarURL: "https://picsum.photos/seed/stargazer_k/100/100",
    rating: 4,
    text: "The science gets shaky near the end, but the docking sequence and that score had me gripping the armrest.",
    likes: 14,
    date: "2026-10-03",
  },
  {
    id: "r6",
    filmId: "8", // La La Land
    username: "jazzhands",
    avatarURL: "https://picsum.photos/seed/jazzhands/100/100",
    rating: 3.5,
    text: "Gorgeous to look at and the final ten minutes are perfect. The middle drags a little for me.",
    likes: 9,
    date: "2026-06-17",
  },
  {
    id: "r7",
    filmId: "9", // Get Out
    username: "thecriterionkid",
    avatarURL: "https://picsum.photos/seed/thecriterionkid/100/100",
    rating: 4.5,
    text: "Even better on a second watch, when you can catch all the clues hiding in plain sight.",
    likes: 21,
    date: "2026-10-28",
  },
  {
    id: "r8",
    filmId: "10", // Mad Max: Fury Road
    username: "octanefuel",
    avatarURL: "https://picsum.photos/seed/octanefuel/100/100",
    rating: 5,
    text: "Two hours of pure momentum. Practical effects like this should not be possible.",
    likes: 38,
    date: "2026-05-11",
  },
  {
    id: "r9",
    filmId: "14", // Past Lives
    username: "quietcinema",
    avatarURL: "https://picsum.photos/seed/quietcinema/100/100",
    rating: 4.5,
    text: "So much is said in the silences. That last walk down the street wrecked me.",
    likes: 29,
    date: "2026-09-19",
  },
  {
    id: "r10",
    filmId: "15", // Knives Out
    username: "whodunnitwendy",
    avatarURL: "https://picsum.photos/seed/whodunnitwendy/100/100",
    rating: 4,
    text: "A cozy, clever mystery with a cast that is clearly having a blast. That sweater deserves its own credit.",
    likes: 16,
    date: "2026-04-25",
  },
];
