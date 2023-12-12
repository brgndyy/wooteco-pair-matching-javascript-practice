import PARTICIPANTS from '../database/participants.js';
import shuffleParticipants from '../utils/shuffleArray.js';

class PairMatchingMachine {
  static generatePairMatchingResult(courseAndLevelAndMission) {
    const { course, level, mission } = courseAndLevelAndMission;
    const participants = PARTICIPANTS.filter((participant) => participant.course === course);

    const shuffledParticipants = PairMatchingMachine.createShuffleParticipants(participants);
    const parsedShuffledParticipants =
      PairMatchingMachine.parseShuffleParticipants(shuffledParticipants);

    return { matchingResult: parsedShuffledParticipants, level, mission };
  }

  static createShuffleParticipants(participants) {
    return shuffleParticipants(participants);
  }

  static parseShuffleParticipants(shuffledParticipants) {
    const groups = [];
    while (shuffledParticipants.length > 0) {
      groups.push(shuffledParticipants.splice(0, 2));
    }
    if (groups.length > 1 && groups[groups.length - 1].length === 1) {
      const lastGroup = groups.pop();
      groups[groups.length - 1].push(...lastGroup);
    }
    return groups;
  }
}

export default PairMatchingMachine;
