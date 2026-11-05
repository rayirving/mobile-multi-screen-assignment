export type Film = {
  id: string;
  title: string;
  year: number;
  director: string;
  runtime: number;
  description: string;
  posterURL: string;
  averageRating: number;
  genres: string[];
};

const films: Film[] = [
  {
    id: "1",
    title: "Parasite",
    year: 2019,
    director: "Bong Joon Ho",
    runtime: 132,
    description:
      "A struggling family schemes its way into jobs with a wealthy household, until a hidden secret upends everything.",
    posterURL: "https://picsum.photos/seed/parasite/300/450",
    averageRating: 4.5,
    genres: ["Thriller", "Drama", "Comedy"],
  },
  {
    id: "2",
    title: "The Godfather",
    year: 1972,
    director: "Francis Ford Coppola",
    runtime: 175,
    description:
      "The aging head of a Mafia family reluctantly hands power to his youngest son, who never wanted the life.",
    posterURL: "https://picsum.photos/seed/godfather/300/450",
    averageRating: 4.5,
    genres: ["Crime", "Drama"],
  },
  {
    id: "3",
    title: "Spirited Away",
    year: 2001,
    director: "Hayao Miyazaki",
    runtime: 125,
    description:
      "A young girl must work in a bathhouse for spirits to free her parents and find her way home.",
    posterURL: "https://picsum.photos/seed/spiritedaway/300/450",
    averageRating: 4.5,
    genres: ["Animation", "Fantasy", "Family"],
  },
  {
    id: "4",
    title: "The Dark Knight",
    year: 2008,
    director: "Christopher Nolan",
    runtime: 152,
    description:
      "Batman faces the Joker, a criminal mastermind determined to push Gotham, and its hero, into chaos.",
    posterURL: "https://picsum.photos/seed/darknight/300/450",
    averageRating: 4.4,
    genres: ["Action", "Crime", "Drama"],
  },
  {
    id: "5",
    title: "Pulp Fiction",
    year: 1994,
    director: "Quentin Tarantino",
    runtime: 154,
    description:
      "Hitmen, a boxer and a gangster's wife cross paths in interlocking stories across Los Angeles.",
    posterURL: "https://picsum.photos/seed/pulpfiction/300/450",
    averageRating: 4.3,
    genres: ["Crime", "Thriller"],
  },
  {
    id: "6",
    title: "The Shawshank Redemption",
    year: 1994,
    director: "Frank Darabont",
    runtime: 142,
    description:
      "A banker sentenced to life in prison forms an unlikely friendship and quietly holds on to hope.",
    posterURL: "https://picsum.photos/seed/shawshank/300/450",
    averageRating: 4.5,
    genres: ["Drama", "Crime"],
  },
  {
    id: "7",
    title: "Interstellar",
    year: 2014,
    director: "Christopher Nolan",
    runtime: 169,
    description:
      "With Earth dying, a former pilot leads a mission through a wormhole in search of a new home for humanity.",
    posterURL: "https://picsum.photos/seed/interstellar/300/450",
    averageRating: 4.4,
    genres: ["Sci-Fi", "Adventure", "Drama"],
  },
  {
    id: "8",
    title: "La La Land",
    year: 2016,
    director: "Damien Chazelle",
    runtime: 128,
    description:
      "A jazz pianist and an aspiring actress fall in love while chasing their dreams in Los Angeles.",
    posterURL: "https://picsum.photos/seed/lalaland/300/450",
    averageRating: 4.1,
    genres: ["Romance", "Music", "Drama"],
  },
  {
    id: "9",
    title: "Get Out",
    year: 2017,
    director: "Jordan Peele",
    runtime: 104,
    description:
      "A young Black man visits his white girlfriend's family for the weekend and senses something is deeply wrong.",
    posterURL: "https://picsum.photos/seed/getout/300/450",
    averageRating: 4.1,
    genres: ["Horror", "Thriller", "Mystery"],
  },
  {
    id: "10",
    title: "Mad Max: Fury Road",
    year: 2015,
    director: "George Miller",
    runtime: 120,
    description:
      "In a desert wasteland, a rebel warrior and a drifter flee a tyrant in a relentless high-speed chase.",
    posterURL: "https://picsum.photos/seed/madmax/300/450",
    averageRating: 4.2,
    genres: ["Action", "Adventure", "Sci-Fi"],
  },
  {
    id: "11",
    title: "Arrival",
    year: 2016,
    director: "Denis Villeneuve",
    runtime: 116,
    description:
      "A linguist is recruited to communicate with mysterious visitors after alien ships land around the world.",
    posterURL: "https://picsum.photos/seed/arrival/300/450",
    averageRating: 4.1,
    genres: ["Sci-Fi", "Drama", "Mystery"],
  },
  {
    id: "12",
    title: "Lady Bird",
    year: 2017,
    director: "Greta Gerwig",
    runtime: 94,
    description:
      "A headstrong teenager navigates her final year of high school and a fiery relationship with her mother.",
    posterURL: "https://picsum.photos/seed/ladybird/300/450",
    averageRating: 3.9,
    genres: ["Comedy", "Drama"],
  },
  {
    id: "13",
    title: "Spider-Man: Into the Spider-Verse",
    year: 2018,
    director: "Bob Persichetti, Peter Ramsey, Rodney Rothman",
    runtime: 117,
    description:
      "Teenager Miles Morales becomes Spider-Man and teams up with Spider-People from other dimensions.",
    posterURL: "https://picsum.photos/seed/spiderverse/300/450",
    averageRating: 4.4,
    genres: ["Animation", "Action", "Adventure"],
  },
  {
    id: "14",
    title: "Past Lives",
    year: 2023,
    director: "Celine Song",
    runtime: 106,
    description:
      "Two childhood friends separated by emigration reunite in New York decades later.",
    posterURL: "https://picsum.photos/seed/pastlives/300/450",
    averageRating: 4.2,
    genres: ["Romance", "Drama"],
  },
  {
    id: "15",
    title: "Knives Out",
    year: 2019,
    director: "Rian Johnson",
    runtime: 130,
    description:
      "A celebrated detective investigates the suspicious death of a wealthy crime novelist and his scheming family.",
    posterURL: "https://picsum.photos/seed/knivesout/300/450",
    averageRating: 3.9,
    genres: ["Mystery", "Comedy", "Crime"],
  },
];
