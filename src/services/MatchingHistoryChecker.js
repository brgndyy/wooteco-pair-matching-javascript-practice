class MatchingHistoryChecker {
  static checkMatchingHistoryExists(matchingHistory, courseAndLevelAndMission) {
    return matchingHistory.some(
      (history) =>
        history.level === courseAndLevelAndMission.level &&
        history.mission === courseAndLevelAndMission.mission,
    );
  }

  static;
}

export default MatchingHistoryChecker;
