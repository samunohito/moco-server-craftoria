
declare module "@package/net/tysontheember/emberstextapi/immersivemessages/effects/params" {
    export class $Params {
    }
    export interface $Params {
        getBoolean(arg0: string): (boolean) | undefined;
        getDouble(arg0: string): (number) | undefined;
        getString(arg0: string): (string) | undefined;
        has(arg0: string): boolean;
        serialize(): string;
    }
}
