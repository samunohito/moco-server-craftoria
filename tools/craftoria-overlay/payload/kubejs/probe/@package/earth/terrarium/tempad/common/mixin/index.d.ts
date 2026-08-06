
declare module "@package/earth/terrarium/tempad/common/mixin" {
    export class $PlayerModelAccessor {
    }
    export interface $PlayerModelAccessor {
        getSlim(): boolean;
        get slim(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $PlayerModelAccessor}.
     */
    export type $PlayerModelAccessor_ = (() => boolean);
}
