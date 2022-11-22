import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PlayerWhereInput = {
  game?: GameWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
};
