export default interface IleaderBoardServices<T> {
  getTeamsInfoBoardHome(): Promise<T[]>
  getTeamsInfoBoardAway(): Promise<T[]>
}
