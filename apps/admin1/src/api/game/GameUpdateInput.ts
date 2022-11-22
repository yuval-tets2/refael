import { PlayerUpdateManyWithoutGamesInput } from "./PlayerUpdateManyWithoutGamesInput";

export type GameUpdateInput = {
  description?: string | null;
  name?: string | null;
  players?: PlayerUpdateManyWithoutGamesInput;
};
