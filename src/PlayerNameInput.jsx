export const PlayerNameInput = ({ onChange, shape, playerName }) => {
  return (
    <input
      onChange={onChange}
      placeholder={playerName ? playerName : `Set ${shape} player name`}
    />
  );
};
