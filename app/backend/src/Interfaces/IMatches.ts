export interface IMatches {
  id: number;
  homeTeam: number;
  homeTeamGoals: number
  awayTeam: number
  awayTeamGoals: number
  inProgress: number
}

export interface IMatchesInfo extends IMatches {
  teamHome: {
    teamName: string
  },
  teamAway: {
    teamName: string,
  }
}
