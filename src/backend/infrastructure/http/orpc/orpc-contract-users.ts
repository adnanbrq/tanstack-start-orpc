import { oc } from "@orpc/contract";
import {
  SchemaReceiveUser,
  SchemaRequestUser,
} from "~/shared/schema/schema-user";
import {
  SchemaReceiveUserList,
  SchemaRequestUserList,
} from "~/shared/schema/schema-user-list";

export const orpcContractUsers = {
  list: oc.input(SchemaRequestUserList).output(SchemaReceiveUserList),
  get: oc.input(SchemaRequestUser).output(SchemaReceiveUser),
};
