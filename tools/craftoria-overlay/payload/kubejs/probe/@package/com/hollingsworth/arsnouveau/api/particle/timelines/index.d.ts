import { $Level_ } from "@package/net/minecraft/world/level";
import { $BaseProperty } from "@package/com/hollingsworth/arsnouveau/api/particle/configurations/properties";
import { $Supplier_ } from "@package/java/util/function";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $PropertyParticleOptions } from "@package/com/hollingsworth/arsnouveau/api/particle";
import { $AbstractSpellPart, $Spell } from "@package/com/hollingsworth/arsnouveau/api/spell";
import { $ParticleMotion } from "@package/com/hollingsworth/arsnouveau/api/particle/configurations";
import { $Record } from "@package/java/lang";
import { $List, $Map_, $Map } from "@package/java/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/hollingsworth/arsnouveau/api/particle/timelines" {
    export class $TimelineMap extends $Record {
        get<T extends $IParticleTimeline<T>>(arg0: $IParticleTimelineType_<T>): T;
        get<T extends $IParticleTimeline<T>>(arg0: $Supplier_<$IParticleTimelineType<T>>): T;
        put<T extends $IParticleTimeline<T>>(arg0: $IParticleTimelineType_<T>, arg1: T): $TimelineMap;
        mutable(): $TimelineMap$MutableTimelineMap;
        timelines(): $Map<$IParticleTimelineType<never>, $IParticleTimeline<never>>;
        debugPrintHash(arg0: $Spell, arg1: $Level_): void;
        static CODEC: $Codec<$TimelineMap>;
        static STREAM: $StreamCodec<$RegistryFriendlyByteBuf, $TimelineMap>;
        constructor();
        constructor(timelines: $Map_<$IParticleTimelineType_<never>, $IParticleTimeline_<never>>);
    }
    /**
     * Values that may be interpreted as {@link $TimelineMap}.
     */
    export type $TimelineMap_ = { timelines?: $Map_<$IParticleTimelineType_<never>, $IParticleTimeline_<never>>,  } | [timelines?: $Map_<$IParticleTimelineType_<never>, $IParticleTimeline_<never>>, ];
    export class $TimelineEntryData {
        particleOptions(): $PropertyParticleOptions;
        setMotion(arg0: $ParticleMotion): void;
        setOptions(arg0: $PropertyParticleOptions): void;
        motion(): $ParticleMotion;
        static CODEC: $MapCodec<$TimelineEntryData>;
        static STREAM: $StreamCodec<$RegistryFriendlyByteBuf, $TimelineEntryData>;
        constructor();
        constructor(arg0: $ParticleMotion);
        constructor(arg0: $ParticleMotion, arg1: $PropertyParticleOptions);
        set options(value: $PropertyParticleOptions);
    }
    export class $IParticleTimeline<T extends $IParticleTimeline<T>> {
        static CODEC: $Codec<$IParticleTimeline<never>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $IParticleTimeline<never>>;
    }
    export interface $IParticleTimeline<T extends $IParticleTimeline<T>> {
        getProperties(): $List<$BaseProperty<never>>;
        getType(): $IParticleTimelineType<T>;
        get properties(): $List<$BaseProperty<never>>;
        get type(): $IParticleTimelineType<T>;
    }
    /**
     * Values that may be interpreted as {@link $IParticleTimeline}.
     */
    export type $IParticleTimeline_<T> = (() => $IParticleTimelineType_<T>);
    export interface $IParticleTimelineType<T> extends RegistryMarked<RegistryTypes.ArsNouveauParticleTimelinesTag, RegistryTypes.ArsNouveauParticleTimelines> {}
    export class $IParticleTimelineType<T extends $IParticleTimeline<T>> {
        static CODEC: $Codec<$IParticleTimelineType<$IParticleTimeline<never>>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $IParticleTimelineType<never>>;
    }
    export interface $IParticleTimelineType<T extends $IParticleTimeline<T>> {
        create(): T;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        codec(): $MapCodec<T>;
        getSpellPart(): $AbstractSpellPart;
        get spellPart(): $AbstractSpellPart;
    }
    /**
     * Values that may be interpreted as {@link $IParticleTimelineType}.
     */
    export type $IParticleTimelineType_<T> = RegistryTypes.ArsNouveauParticleTimelines;
    export class $TimelineMap$MutableTimelineMap {
        remove(arg0: $IParticleTimelineType_<never>): void;
        put<T extends $IParticleTimeline<T>>(arg0: $IParticleTimelineType_<T>, arg1: T): $IParticleTimeline<any>;
        getOrCreate<T extends $IParticleTimeline<T>>(arg0: $IParticleTimelineType_<T>): T;
        immutable(): $TimelineMap;
        constructor(arg0: $Map_<$IParticleTimelineType_<never>, $IParticleTimeline_<$IParticleTimeline<never>>>);
    }
}
