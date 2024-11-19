import { type Readable } from "readable-stream";

import { type JSONSchemaSourceData, type JSONSourceData } from "quicktype-core-wosherco";
import { type GraphQLSourceData } from "quicktype-graphql-input-wosherco";

export interface JSONTypeSource extends JSONSourceData<Readable> {
    kind: "json";
}

export interface SchemaTypeSource extends JSONSchemaSourceData {
    kind: "schema";
}

export interface GraphQLTypeSource extends GraphQLSourceData {
    kind: "graphql";
}

export type TypeSource = GraphQLTypeSource | JSONTypeSource | SchemaTypeSource;
