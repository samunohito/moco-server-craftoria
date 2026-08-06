import { $List_, $List } from "@package/java/util";
import { $Comparable } from "@package/java/lang";
import { $Artifact } from "@package/org/apache/maven/artifact";

declare module "@package/org/apache/maven/artifact/versioning" {
    export class $ArtifactVersion {
    }
    export interface $ArtifactVersion extends $Comparable<$ArtifactVersion> {
        getMajorVersion(): number;
        getMinorVersion(): number;
        getBuildNumber(): number;
        getIncrementalVersion(): number;
        getQualifier(): string;
        parseVersion(arg0: string): void;
        get majorVersion(): number;
        get minorVersion(): number;
        get buildNumber(): number;
        get incrementalVersion(): number;
        get qualifier(): string;
    }
    export class $VersionRange {
        static createFromVersionSpec(arg0: string): $VersionRange;
        getRecommendedVersion(): $ArtifactVersion;
        isSelectedVersionKnown(arg0: $Artifact): boolean;
        containsVersion(arg0: $ArtifactVersion): boolean;
        getSelectedVersion(arg0: $Artifact): $ArtifactVersion;
        hasRestrictions(): boolean;
        matchVersion(arg0: $List_<$ArtifactVersion>): $ArtifactVersion;
        static createFromVersion(arg0: string): $VersionRange;
        getRestrictions(): $List<$Restriction>;
        restrict(arg0: $VersionRange): $VersionRange;
        /**
         * @deprecated
         */
        cloneOf(): $VersionRange;
        get recommendedVersion(): $ArtifactVersion;
        get restrictions(): $List<$Restriction>;
    }
    export class $Restriction {
        isUpperBoundInclusive(): boolean;
        isLowerBoundInclusive(): boolean;
        containsVersion(arg0: $ArtifactVersion): boolean;
        getLowerBound(): $ArtifactVersion;
        getUpperBound(): $ArtifactVersion;
        static EVERYTHING: $Restriction;
        constructor(arg0: $ArtifactVersion, arg1: boolean, arg2: $ArtifactVersion, arg3: boolean);
        get upperBoundInclusive(): boolean;
        get lowerBoundInclusive(): boolean;
        get lowerBound(): $ArtifactVersion;
        get upperBound(): $ArtifactVersion;
    }
}
