import { $Level_ } from "@package/net/minecraft/world/level";
import { $ManagerBlockEntity } from "@package/ca/teamdman/sfm/common/blockentity";
import { $Program_ } from "@package/ca/teamdman/sfml/ast";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Enum, $Record } from "@package/java/lang";
import { $LabelPositionHolder_ } from "@package/ca/teamdman/sfm/common/label";
import { $HashSet } from "@package/java/util";
import { $TranslatableContents } from "@package/net/minecraft/network/chat/contents";

declare module "@package/ca/teamdman/sfm/common/program/linting" {
    export class $ProblemTracker$AddProblemResult extends $Enum<$ProblemTracker$AddProblemResult> {
        static values(): $ProblemTracker$AddProblemResult[];
        static valueOf(arg0: string): $ProblemTracker$AddProblemResult;
        isSaturated(): boolean;
        static SUCCESS: $ProblemTracker$AddProblemResult;
        static TOO_MANY_PROBLEMS: $ProblemTracker$AddProblemResult;
        get saturated(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ProblemTracker$AddProblemResult}.
     */
    export type $ProblemTracker$AddProblemResult_ = "success" | "too_many_problems";
    export interface $IProgramLinter extends RegistryMarked<RegistryTypes.SfmProgramLintersTag, RegistryTypes.SfmProgramLinters> {}
    export class $ProblemTracker extends $Record {
        size(): number;
        add(arg0: $TranslatableContents): $ProblemTracker$AddProblemResult;
        isSaturated(): boolean;
        problems(): $HashSet<$TranslatableContents>;
        constructor();
        constructor(problems: $HashSet<$TranslatableContents>);
        get saturated(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ProblemTracker}.
     */
    export type $ProblemTracker_ = { problems?: $HashSet<$TranslatableContents>,  } | [problems?: $HashSet<$TranslatableContents>, ];
    export class $IProgramLinter {
    }
    export interface $IProgramLinter {
        gatherWarnings(arg0: $Program_, arg1: $LabelPositionHolder_, arg2: $ManagerBlockEntity, arg3: $ProblemTracker_): void;
        fixWarnings(arg0: $Program_, arg1: $LabelPositionHolder_, arg2: $ManagerBlockEntity, arg3: $Level_, arg4: $ItemStack_): void;
    }
    /**
     * Values that may be interpreted as {@link $IProgramLinter}.
     */
    export type $IProgramLinter_ = RegistryTypes.SfmProgramLinters;
}
