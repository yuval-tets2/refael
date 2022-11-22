import { PlayerCreateNestedManyWithoutGamesInput } from "./PlayerCreateNestedManyWithoutGamesInput";

export type GameCreateInput = {
  description?: string | null;
  name?: string | null;
  players?: PlayerCreateNestedManyWithoutGamesInput;
};
