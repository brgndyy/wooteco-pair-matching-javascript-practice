const shuffleParticipants = (participants) => {
  const allParticipants = participants.map((participant) => participant.name);

  return allParticipants.sort(() => Math.random() - 0.5);
};

export default shuffleParticipants;
