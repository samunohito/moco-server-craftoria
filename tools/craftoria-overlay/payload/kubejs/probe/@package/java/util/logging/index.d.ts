import { $Instant } from "@package/java/time";
import { $Serializable } from "@package/java/io";
import { $ResourceBundle } from "@package/java/util";
import { $Object, $Throwable, $Exception } from "@package/java/lang";

declare module "@package/java/util/logging" {
    export class $LogRecord implements $Serializable {
        getParameters(): $Object[];
        getMessage(): string;
        setInstant(arg0: $Instant): void;
        getMillis(): number;
        /**
         * @deprecated
         */
        setMillis(arg0: number): void;
        getLoggerName(): string;
        getInstant(): $Instant;
        getResourceBundle(): $ResourceBundle;
        setLevel(arg0: $Level): void;
        getResourceBundleName(): string;
        getLevel(): $Level;
        setLoggerName(arg0: string): void;
        setResourceBundleName(arg0: string): void;
        setResourceBundle(arg0: $ResourceBundle): void;
        setParameters(arg0: $Object[]): void;
        setThrown(arg0: $Throwable): void;
        setSourceClassName(arg0: string): void;
        setSourceMethodName(arg0: string): void;
        getThrown(): $Throwable;
        getSequenceNumber(): number;
        setSequenceNumber(arg0: number): void;
        getSourceClassName(): string;
        getSourceMethodName(): string;
        setMessage(arg0: string): void;
        /**
         * @deprecated
         */
        getThreadID(): number;
        /**
         * @deprecated
         */
        setThreadID(arg0: number): void;
        getLongThreadID(): number;
        setLongThreadID(arg0: number): $LogRecord;
        constructor(arg0: $Level, arg1: string);
    }
    export class $Level implements $Serializable {
        getName(): string;
        intValue(): number;
        static parse(arg0: string): $Level;
        getLocalizedName(): string;
        getResourceBundleName(): string;
        static CONFIG: $Level;
        static ALL: $Level;
        static SEVERE: $Level;
        static FINER: $Level;
        static FINEST: $Level;
        static FINE: $Level;
        static INFO: $Level;
        static WARNING: $Level;
        static OFF: $Level;
        get name(): string;
        get localizedName(): string;
        get resourceBundleName(): string;
    }
    export class $Handler {
        flush(): void;
        close(): void;
        getEncoding(): string;
        publish(arg0: $LogRecord): void;
        getFilter(): $Filter;
        setLevel(arg0: $Level): void;
        setFormatter(arg0: $Formatter): void;
        getFormatter(): $Formatter;
        setEncoding(arg0: string): void;
        setErrorManager(arg0: $ErrorManager): void;
        getErrorManager(): $ErrorManager;
        setFilter(arg0: $Filter_): void;
        getLevel(): $Level;
        isLoggable(arg0: $LogRecord): boolean;
    }
    export class $Filter {
    }
    export interface $Filter {
        isLoggable(arg0: $LogRecord): boolean;
    }
    /**
     * Values that may be interpreted as {@link $Filter}.
     */
    export type $Filter_ = ((arg0: $LogRecord) => boolean);
    export class $Formatter {
        format(arg0: $LogRecord): string;
        formatMessage(arg0: $LogRecord): string;
        getHead(arg0: $Handler): string;
        getTail(arg0: $Handler): string;
    }
    export class $ErrorManager {
        error(arg0: string, arg1: $Exception, arg2: number): void;
        static GENERIC_FAILURE: number;
        static CLOSE_FAILURE: number;
        static OPEN_FAILURE: number;
        static FORMAT_FAILURE: number;
        static FLUSH_FAILURE: number;
        static WRITE_FAILURE: number;
        constructor();
    }
}
