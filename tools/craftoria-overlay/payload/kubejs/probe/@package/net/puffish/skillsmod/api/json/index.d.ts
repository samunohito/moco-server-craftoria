import { $Reader } from "@package/java/io";
import { $JsonObject as $JsonObject$1, $JsonArray as $JsonArray$1, $JsonElement as $JsonElement$1 } from "@package/com/google/gson";
import { $Function_, $BiFunction_ } from "@package/java/util/function";
import { $Stream } from "@package/java/util/stream";
import { $Path_ } from "@package/java/nio/file";
import { $List, $Map, $Map$Entry } from "@package/java/util";
import { $Problem, $Result } from "@package/net/puffish/skillsmod/api/util";

declare module "@package/net/puffish/skillsmod/api/json" {
    export class $JsonPath {
        static create(name: string): $JsonPath;
    }
    export interface $JsonPath {
        toString(): string;
        getParent(): ($JsonPath) | undefined;
        getObject(arg0: string): $JsonPath;
        getArray(arg0: number): $JsonPath;
        createProblem(arg0: string): $Problem;
        get parent(): ($JsonPath) | undefined;
    }
    export class $JsonArray {
    }
    export interface $JsonArray {
        getSize(): number;
        stream(): $Stream<$JsonElement>;
        getPath(): $JsonPath;
        getJson(): $JsonArray$1;
        getAsList<S, F>(arg0: $BiFunction_<number, $JsonElement, $Result<S, F>>): $Result<$List<S>, $List<F>>;
        getAsElement(): $JsonElement;
        get size(): number;
        get path(): $JsonPath;
        get json(): $JsonArray$1;
        get asElement(): $JsonElement;
    }
    export class $JsonObject {
    }
    export interface $JsonObject {
        get(arg0: string): $Result<$JsonElement, $Problem>;
        getBoolean(arg0: string): $Result<boolean, $Problem>;
        getInt(arg0: string): $Result<number, $Problem>;
        getFloat(arg0: string): $Result<number, $Problem>;
        getDouble(arg0: string): $Result<number, $Problem>;
        stream(): $Stream<$Map$Entry<string, $JsonElement>>;
        getPath(): $JsonPath;
        getObject(arg0: string): $Result<$JsonObject, $Problem>;
        getArray(arg0: string): $Result<$JsonArray, $Problem>;
        getString(arg0: string): $Result<string, $Problem>;
        getJson(): $JsonObject$1;
        noUnused<S>(arg0: $Function_<$JsonObject, $Result<S, $Problem>>): $Result<S, $Problem>;
        getAsElement(): $JsonElement;
        getAsMap<S, F>(arg0: $BiFunction_<string, $JsonElement, $Result<S, F>>): $Result<$Map<string, S>, $Map<string, F>>;
        get path(): $JsonPath;
        get json(): $JsonObject$1;
        get asElement(): $JsonElement;
    }
    export class $JsonElement {
        static parseString(jsonData: string, jsonPath: $JsonPath): $Result<$JsonElement, $Problem>;
        static parseReader(reader: $Reader, jsonPath: $JsonPath): $Result<$JsonElement, $Problem>;
        static parseFile(filePath: $Path_, jsonPath: $JsonPath): $Result<$JsonElement, $Problem>;
    }
    export interface $JsonElement {
        getPath(): $JsonPath;
        getJson(): $JsonElement$1;
        getAsInt(): $Result<number, $Problem>;
        getAsString(): $Result<string, $Problem>;
        getAsDouble(): $Result<number, $Problem>;
        getAsBoolean(): $Result<boolean, $Problem>;
        getAsFloat(): $Result<number, $Problem>;
        getAsArray(): $Result<$JsonArray, $Problem>;
        getAsObject(): $Result<$JsonObject, $Problem>;
        get path(): $JsonPath;
        get json(): $JsonElement$1;
        get asInt(): $Result<number, $Problem>;
        get asString(): $Result<string, $Problem>;
        get asDouble(): $Result<number, $Problem>;
        get asBoolean(): $Result<boolean, $Problem>;
        get asFloat(): $Result<number, $Problem>;
        get asArray(): $Result<$JsonArray, $Problem>;
        get asObject(): $Result<$JsonObject, $Problem>;
    }
}
