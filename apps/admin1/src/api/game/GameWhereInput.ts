import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PlayerListRelationFilter } from "../player/PlayerListRelationFilter";

export type GameWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  players?: PlayerListRelationFilter;
};
