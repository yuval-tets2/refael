import { SortOrder } from "../../util/SortOrder";

export type PlayerOrderByInput = {
  createdAt?: SortOrder;
  gameId?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
