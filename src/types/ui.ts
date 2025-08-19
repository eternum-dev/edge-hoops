import type { ShortTeamNames } from "./nba";

// text
export type TextColor = "white" | "black";
export type TextSize = "s" | "m" | "l" | "xl";
export type TextPosition = "left" | "right";
export type StrongSize = "s" | "m" | "l";

// dates
export type DateSize = "s" | "m";

// divider
export type DividerHeigth = "s" | "m" | "l";

// colors
export type TypeColor = "primary" | "secondary";
export type NeutralColor = "white" | "black";

// border 
export type BorderColor = "primary" | "secondary" | "neutral"; 

// table
export type CellType = "header" | "body";
export type CellContentType = "text" | "date" | "team";

// logos
export type TeamLogoSize = "verySmall" | "small" | "medium" | "full";
export type PositionLogo = "left" | "right";

// icons
export type IconSize = "small" | "medium" | "full";
export type IconNames = "Arrow" | "Fire";
export type IconComponentKeys = `${IconNames}Icon`;
export type TeamLogoComponentKeys = `${ShortTeamNames}Logo`;

// tags
export type TitleTagType = "h1" | "h2" | "h3" | "h4";

// component
export type MoleculesSize = "small" | "full";
export type WidthSize = "fit" | "max";
export type ArrayListType = {
  team: ShortTeamNames;
  label: string;
};

export type SizeStylesTypes = { text: "m" | "l"; logo: "small" | "medium" };
// statsBox
export type StatBoxColor = "white" | "blue";

// typeValue 
export type StatValue = number | string;

// table 
export type ColumTableContent = "text" | "date" | "team";