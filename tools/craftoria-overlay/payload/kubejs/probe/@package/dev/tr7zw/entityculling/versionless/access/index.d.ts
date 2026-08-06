
declare module "@package/dev/tr7zw/entityculling/versionless/access" {
    export class $Cullable {
    }
    export interface $Cullable {
        setCulled(arg0: boolean): void;
        setTimeout(): void;
        isForcedVisible(): boolean;
        isCulled(): boolean;
        setOutOfCamera(arg0: boolean): void;
        isOutOfCamera(): boolean;
        get forcedVisible(): boolean;
    }
}
