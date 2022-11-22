import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";

export type PlayerUpdateInput = {
  game?: GameWhereUniqueInput | null;
  name?: string | null;
};
