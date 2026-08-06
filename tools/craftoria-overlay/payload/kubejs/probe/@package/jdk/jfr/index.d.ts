import { $Annotation } from "@package/java/lang/annotation";
import { $Event as $Event$1 } from "@package/jdk/internal/event";
import { $List_, $Map_, $List } from "@package/java/util";
import { $Object, $Class } from "@package/java/lang";
export * as consumer from "@package/jdk/jfr/consumer";

declare module "@package/jdk/jfr" {
    export class $Event extends $Event$1 {
    }
    export class $AnnotationElement {
        getValue(arg0: string): $Object;
        getTypeName(): string;
        getAnnotation<A>(arg0: $Class<$Annotation>): A;
        hasValue(arg0: string): boolean;
        getValues(): $List<$Object>;
        getTypeId(): number;
        getAnnotationElements(): $List<$AnnotationElement>;
        getValueDescriptors(): $List<$ValueDescriptor>;
        constructor(arg0: $Class<$Annotation>);
        constructor(arg0: $Class<$Annotation>, arg1: $Object);
        constructor(arg0: $Class<$Annotation>, arg1: $Map_<string, $Object>);
        get typeName(): string;
        get values(): $List<$Object>;
        get typeId(): number;
        get annotationElements(): $List<$AnnotationElement>;
        get valueDescriptors(): $List<$ValueDescriptor>;
    }
    export class $ValueDescriptor {
        getName(): string;
        isArray(): boolean;
        getTypeName(): string;
        getFields(): $List<$ValueDescriptor>;
        getAnnotation<A extends $Annotation>(arg0: $Class<A>): A;
        getContentType(): string;
        getDescription(): string;
        getLabel(): string;
        getTypeId(): number;
        getAnnotationElements(): $List<$AnnotationElement>;
        constructor(arg0: $Class<never>, arg1: string, arg2: $List_<$AnnotationElement>);
        constructor(arg0: $Class<never>, arg1: string);
        get name(): string;
        get array(): boolean;
        get typeName(): string;
        get fields(): $List<$ValueDescriptor>;
        get contentType(): string;
        get description(): string;
        get label(): string;
        get typeId(): number;
        get annotationElements(): $List<$AnnotationElement>;
    }
    export class $EventType {
        getName(): string;
        isEnabled(): boolean;
        getFields(): $List<$ValueDescriptor>;
        getField(arg0: string): $ValueDescriptor;
        getAnnotation<A extends $Annotation>(arg0: $Class<A>): A;
        getId(): number;
        getCategoryNames(): $List<string>;
        getDescription(): string;
        getSettingDescriptors(): $List<$SettingDescriptor>;
        getLabel(): string;
        static getEventType(arg0: $Class<$Event>): $EventType;
        getAnnotationElements(): $List<$AnnotationElement>;
        get name(): string;
        get enabled(): boolean;
        get fields(): $List<$ValueDescriptor>;
        get id(): number;
        get categoryNames(): $List<string>;
        get description(): string;
        get settingDescriptors(): $List<$SettingDescriptor>;
        get label(): string;
        get annotationElements(): $List<$AnnotationElement>;
    }
    export class $SettingDescriptor {
        getDefaultValue(): string;
        getName(): string;
        getTypeName(): string;
        getAnnotation<A extends $Annotation>(arg0: $Class<A>): A;
        getContentType(): string;
        getDescription(): string;
        getLabel(): string;
        getTypeId(): number;
        getAnnotationElements(): $List<$AnnotationElement>;
        get defaultValue(): string;
        get name(): string;
        get typeName(): string;
        get contentType(): string;
        get description(): string;
        get label(): string;
        get typeId(): number;
        get annotationElements(): $List<$AnnotationElement>;
    }
}
