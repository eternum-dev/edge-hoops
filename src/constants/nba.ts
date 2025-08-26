import type {
  ConferenceNames,
  DivisionNames,
  NBAteam,
  ShortTeamNames,
} from "../types";

export const NBA_TEAMS: NBAteam[] = [
  {
    name: "Boston Celtics",
    shortName: "BOS",
    conference: "EAST",
    division: "ATLANTIC",
    stadium: "TD Garden",
  },
  {
    name: "Brooklyn Nets",
    shortName: "BRK",
    conference: "EAST",
    division: "ATLANTIC",
    stadium: "Barclays Center",
  },
  {
    name: "New York Knicks",
    shortName: "NYK",
    conference: "EAST",
    division: "ATLANTIC",
    stadium: "Madison Square Garden",
  },
  {
    name: "Philadelphia 76ers",
    shortName: "PHI",
    conference: "EAST",
    division: "ATLANTIC",
    stadium: "Wells Fargo Center",
  },
  {
    name: "Toronto Raptors",
    shortName: "TOT",
    conference: "EAST",
    division: "ATLANTIC",
    stadium: "Scotiabank Arena",
  },
  {
    name: "Chicago Bulls",
    shortName: "CHI",
    conference: "EAST",
    division: "CENTRAL",
    stadium: "United Center",
  },
  {
    name: "Cleveland Cavaliers",
    shortName: "CLE",
    conference: "EAST",
    division: "CENTRAL",
    stadium: "Rocket Arena",
  },
  {
    name: "Detroit Pistons",
    shortName: "DET",
    conference: "EAST",
    division: "CENTRAL",
    stadium: "Little Caesars Arena",
  },
  {
    name: "Indiana Pacers",
    shortName: "IND",
    conference: "EAST",
    division: "CENTRAL",
    stadium: "Gainbridge Fieldhouse",
  },
  {
    name: "Milwaukee Bucks",
    shortName: "MIL",
    conference: "EAST",
    division: "CENTRAL",
    stadium: "Fiserv Forum",
  },
  {
    name: "Atlanta Hawks",
    shortName: "ATL",
    conference: "EAST",
    division: "SOUTHEAST",
    stadium: "State Farm Arena",
  },
  {
    name: "Charlotte Hornets",
    shortName: "CHO",
    conference: "EAST",
    division: "SOUTHEAST",
    stadium: "Spectrum Center",
  },
  {
    name: "Miami Heat",
    shortName: "MIA",
    conference: "EAST",
    division: "SOUTHEAST",
    stadium: "Kaseya Center",
  },
  {
    name: "Orlando Magic",
    shortName: "ORL",
    conference: "EAST",
    division: "SOUTHEAST",
    stadium: "Kia Center",
  },
  {
    name: "Washington Wizards",
    shortName: "WAS",
    conference: "EAST",
    division: "SOUTHEAST",
    stadium: "Capital One Arena",
  },
  {
    name: "Denver Nuggets",
    shortName: "DEN",
    conference: "WEST",
    division: "NORTHWEST",
    stadium: "Ball Arena",
  },
  {
    name: "Minnesota Timberwolves",
    shortName: "MIN",
    conference: "WEST",
    division: "NORTHWEST",
    stadium: "Target Center",
  },
  {
    name: "Oklahoma City Thunder",
    shortName: "OKC",
    conference: "WEST",
    division: "NORTHWEST",
    stadium: "Paycom Center",
  },
  {
    name: "Portland Trail Blazers",
    shortName: "POR",
    conference: "WEST",
    division: "NORTHWEST",
    stadium: "Moda Center",
  },
  {
    name: "Utah Jazz",
    shortName: "UTA",
    conference: "WEST",
    division: "NORTHWEST",
    stadium: "Delta Center",
  },
  {
    name: "Golden State Warriors",
    shortName: "GSW",
    conference: "WEST",
    division: "PACIFIC",
    stadium: "Chase Center",
  },
  {
    name: "Los Angeles Clippers",
    shortName: "LAC",
    conference: "WEST",
    division: "PACIFIC",
    stadium: "Intuit Dome",
  },
  {
    name: "Los Angeles Lakers",
    shortName: "LAL",
    conference: "WEST",
    division: "PACIFIC",
    stadium: "Crypto.com Arena",
  },
  {
    name: "Phoenix Suns",
    shortName: "PHO",
    conference: "WEST",
    division: "PACIFIC",
    stadium: "PHX Arena",
  },
  {
    name: "Sacramento Kings",
    shortName: "SAC",
    conference: "WEST",
    division: "PACIFIC",
    stadium: "Golden 1 Center",
  },
  {
    name: "Dallas Mavericks",
    shortName: "DAL",
    conference: "WEST",
    division: "SOUTHWEST",
    stadium: "American Airlines Center",
  },
  {
    name: "Houston Rockets",
    shortName: "HOU",
    conference: "WEST",
    division: "SOUTHWEST",
    stadium: "Toyota Center",
  },
  {
    name: "Memphis Grizzlies",
    shortName: "MEM",
    conference: "WEST",
    division: "SOUTHWEST",
    stadium: "FedExForum",
  },
  {
    name: "New Orleans Pelicans",
    shortName: "NOP",
    conference: "WEST",
    division: "SOUTHWEST",
    stadium: "Smoothie King Center",
  },
  {
    name: "San Antonio Spurs",
    shortName: "SAS",
    conference: "WEST",
    division: "SOUTHWEST",
    stadium: "Frost Bank Center",
  },
];

export const NBA_CONFERENCE: ConferenceNames[] = ["EAST", "WEST"];

export const NBA_DIVISION: DivisionNames[] = [
  "ATLANTIC",
  "CENTRAL",
  "NORTHWEST",
  "PACIFIC",
  "SOUTHEAST",
  "SOUTHWEST",
];

export type NBATeam = {
  name: string;
  shortName: ShortTeamNames;
  stadium: string;
};

export type NBADivision = {
  division: DivisionNames;
  teams: NBATeam[];
};

export type NBAConference = {
  conference: ConferenceNames;
  divisions: NBADivision[];
};

export const NBA_STRUCTURE: NBAConference[] = [
  {
    conference: "EAST",
    divisions: [
      {
        division: "ATLANTIC",
        teams: [
          { name: "Boston Celtics", shortName: "BOS", stadium: "TD Garden" },
          {
            name: "Brooklyn Nets",
            shortName: "BRK",
            stadium: "Barclays Center",
          },
          {
            name: "New York Knicks",
            shortName: "NYK",
            stadium: "Madison Square Garden",
          },
          {
            name: "Philadelphia 76ers",
            shortName: "PHI",
            stadium: "Wells Fargo Center",
          },
          {
            name: "Toronto Raptors",
            shortName: "TOT",
            stadium: "Scotiabank Arena",
          },
        ],
      },
      {
        division: "CENTRAL",
        teams: [
          { name: "Chicago Bulls", shortName: "CHI", stadium: "United Center" },
          {
            name: "Cleveland Cavaliers",
            shortName: "CLE",
            stadium: "Rocket Arena",
          },
          {
            name: "Detroit Pistons",
            shortName: "DET",
            stadium: "Little Caesars Arena",
          },
          {
            name: "Indiana Pacers",
            shortName: "IND",
            stadium: "Gainbridge Fieldhouse",
          },
          {
            name: "Milwaukee Bucks",
            shortName: "MIL",
            stadium: "Fiserv Forum",
          },
        ],
      },
      {
        division: "SOUTHEAST",
        teams: [
          {
            name: "Atlanta Hawks",
            shortName: "ATL",
            stadium: "State Farm Arena",
          },
          {
            name: "Charlotte Hornets",
            shortName: "CHO",
            stadium: "Spectrum Center",
          },
          { name: "Miami Heat", shortName: "MIA", stadium: "Kaseya Center" },
          { name: "Orlando Magic", shortName: "ORL", stadium: "Kia Center" },
          {
            name: "Washington Wizards",
            shortName: "WAS",
            stadium: "Capital One Arena",
          },
        ],
      },
    ],
  },
  {
    conference: "WEST",
    divisions: [
      {
        division: "NORTHWEST",
        teams: [
          { name: "Denver Nuggets", shortName: "DEN", stadium: "Ball Arena" },
          {
            name: "Minnesota Timberwolves",
            shortName: "MIN",
            stadium: "Target Center",
          },
          {
            name: "Oklahoma City Thunder",
            shortName: "OKC",
            stadium: "Paycom Center",
          },
          {
            name: "Portland Trail Blazers",
            shortName: "POR",
            stadium: "Moda Center",
          },
          { name: "Utah Jazz", shortName: "UTA", stadium: "Delta Center" },
        ],
      },
      {
        division: "PACIFIC",
        teams: [
          {
            name: "Golden State Warriors",
            shortName: "GSW",
            stadium: "Chase Center",
          },
          {
            name: "Los Angeles Clippers",
            shortName: "LAC",
            stadium: "Intuit Dome",
          },
          {
            name: "Los Angeles Lakers",
            shortName: "LAL",
            stadium: "Crypto.com Arena",
          },
          { name: "Phoenix Suns", shortName: "PHO", stadium: "PHX Arena" },
          {
            name: "Sacramento Kings",
            shortName: "SAC",
            stadium: "Golden 1 Center",
          },
        ],
      },
      {
        division: "SOUTHWEST",
        teams: [
          {
            name: "Dallas Mavericks",
            shortName: "DAL",
            stadium: "American Airlines Center",
          },
          {
            name: "Houston Rockets",
            shortName: "HOU",
            stadium: "Toyota Center",
          },
          {
            name: "Memphis Grizzlies",
            shortName: "MEM",
            stadium: "FedExForum",
          },
          {
            name: "New Orleans Pelicans",
            shortName: "NOP",
            stadium: "Smoothie King Center",
          },
          {
            name: "San Antonio Spurs",
            shortName: "SAS",
            stadium: "Frost Bank Center",
          },
        ],
      },
    ],
  },
];
