import {
  TeamDetailTemplate,
  type TeamDetailTemplateProps,
} from "../templates/TeamDetailTemplate";

export const TeamDetailPage = () => {
  const TeamDetailData: TeamDetailTemplateProps = {
    graph: {
      typeGraph: "team",
      buttons: [{ label: "btn1" }, { label: "btn2" }, { label: "btn3" }],
      graphs: [
        { titleGraph: "graph1", value: [100] },
        { titleGraph: "graph2", value: [110] },
        { titleGraph: "graph3", value: [111] },
        { titleGraph: "graph4", value: [112] },
      ],
    },
    header: {
      conference: "este",
      division: "",
      shortTeamName: "CHI",
      teamName: "Chicago bulls",
      stadium: "su casa",
    },
    mvp: {
      playerData: {
        imagePlayer: { src: "", alt: "photo" },
        leftStats: [
          { label: "pts", value: 10 },
          { label: "pts", value: 10 },
          { label: "pts", value: 10 },
          { label: "pts", value: 10 },
          { label: "pts", value: 10 },
        ],
        rightStats: [
          { label: "pts", value: 10 },
          { label: "pts", value: 10 },
          { label: "pts", value: 10 },
          { label: "pts", value: 10 },
          { label: "pts", value: 10 },
        ],
        namePlayer: "Michael Jordan",
        positionPlayer: "Central",
        shirtNumber: "15",
      },
    },
    streak: { value: 5 },
    summary: {
      type: "team",
      TeamStatsData: [
        {
          logoCode: "CHI",
          statsLeft: [
            { title: "pts", value: "15" },
            { title: "pts", value: "15" },
            { title: "pts", value: "15" },
            { title: "pts", value: "15" },
            { title: "pts", value: "15" },
          ],
          statsRight: [
            { title: "pts", value: "15" },
            { title: "pts", value: "15" },
            { title: "pts", value: "15" },
            { title: "pts", value: "15" },
            { title: "pts", value: "15" },
          ],
        },
      ],
    },
    table: {
      glossary: [
        { abbreviation: "a", fullWord: "aaaaaa" },
        { abbreviation: "b", fullWord: "bbbbbb" },
        { abbreviation: "c", fullWord: "cccccc" },
        { abbreviation: "d", fullWord: "dddddd" },
        { abbreviation: "e", fullWord: "eeeeee" },
        { abbreviation: "f", fullWord: "ffffff" },
      ],
      tableData: [
        {
          header: "titulo1",
          body: [
            { children: "1" },
            { children: "2" },
            { children: "1" },
            { children: "1" },
          ],
          type: "text",
        },
        {
          header: "titulo1",
          body: [
            { children: "1" },
            { children: "2" },
            { children: "1" },
            { children: "1" },
          ],
          type: "text",
        },
        {
          header: "titulo1",
          body: [
            { children: "1" },
            { children: "2" },
            { children: "1" },
            { children: "1" },
          ],
          type: "text",
        },
        {
          header: "titulo1",
          body: [
            { children: "1" },
            { children: "2" },
            { children: "1" },
            { children: "1" },
          ],
          type: "text",
        },
        {
          header: "titulo1",
          body: [
            { children: "1" },
            { children: "2" },
            { children: "1" },
            { children: "1" },
          ],
          type: "text",
        },
      ],
    },
  };

  return <TeamDetailTemplate {...TeamDetailData} />;
};
