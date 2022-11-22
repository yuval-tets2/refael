import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";

export type PlayerCreateInput = {
  game?: GameWhereUniqueInput | null;
  name?: string | null;
};
