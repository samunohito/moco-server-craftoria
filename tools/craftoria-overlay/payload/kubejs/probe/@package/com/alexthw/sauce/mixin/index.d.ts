import { $DocAssets$BlitInfo, $DocAssets$BlitInfo_ } from "@package/com/hollingsworth/arsnouveau/api/documentation";

declare module "@package/com/alexthw/sauce/mixin" {
    export class $SpellSchoolAccessor {
    }
    export interface $SpellSchoolAccessor {
        setDocIcon(arg0: $DocAssets$BlitInfo_): void;
        set docIcon(value: $DocAssets$BlitInfo_);
    }
    /**
     * Values that may be interpreted as {@link $SpellSchoolAccessor}.
     */
    export type $SpellSchoolAccessor_ = ((arg0: $DocAssets$BlitInfo) => void);
}
