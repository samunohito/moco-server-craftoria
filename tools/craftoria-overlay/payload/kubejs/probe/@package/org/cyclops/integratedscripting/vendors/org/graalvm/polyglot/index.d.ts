import { $Reader, $InputStream, $OutputStream, $File_ } from "@package/java/io";
import { $Annotation } from "@package/java/lang/annotation";
import { $Handler } from "@package/java/util/logging";
import { $Proxy } from "@package/org/cyclops/integratedscripting/vendors/org/graalvm/polyglot/proxy";
import { $OptionDescriptors } from "@package/org/cyclops/integratedscripting/vendors/org/graalvm/options";
import { $Map_, $Map, $Set } from "@package/java/util";
import { $ByteOrder } from "@package/java/nio";
import { $ByteSequence, $IOAccess$Builder, $IOAccess, $MessageTransport_, $ProcessHandler_, $FileSystem } from "@package/org/cyclops/integratedscripting/vendors/org/graalvm/polyglot/io";
import { $LocalDate, $Instant, $LocalTime, $Duration, $Duration_, $ZoneId } from "@package/java/time";
import { $BigInteger } from "@package/java/math";
import { $Function_, $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $WordPointer } from "@package/org/cyclops/integratedscripting/vendors/org/graalvm/nativeimage/c/type";
import { $Path, $Path_ } from "@package/java/nio/file";
import { $URI, $URL } from "@package/java/net";
import { $Field, $Executable, $Type } from "@package/java/lang/reflect";
import { $MethodHandles$Lookup } from "@package/java/lang/invoke";
import { $Charset } from "@package/java/nio/charset";
import { $ClassLoader, $CharSequence, $Enum, $RuntimeException, $AutoCloseable, $Class, $Object } from "@package/java/lang";
export * as io from "@package/org/cyclops/integratedscripting/vendors/org/graalvm/polyglot/io";
export * as proxy from "@package/org/cyclops/integratedscripting/vendors/org/graalvm/polyglot/proxy";

declare module "@package/org/cyclops/integratedscripting/vendors/org/graalvm/polyglot" {
    export class $PolyglotAccess$Builder {
        build(): $PolyglotAccess;
        denyEval(from: string, to: string): $PolyglotAccess$Builder;
        allowBindingsAccess(language: string): $PolyglotAccess$Builder;
        allowEval(from: string, to: string): $PolyglotAccess$Builder;
        allowEvalBetween(...languages: string[]): $PolyglotAccess$Builder;
        denyEvalBetween(...languages: string[]): $PolyglotAccess$Builder;
        denyBindingsAccess(language: string): $PolyglotAccess$Builder;
    }
    export class $Engine$Builder {
        options(options: $Map_<string, string>): $Engine$Builder;
        out(out: $OutputStream): $Engine$Builder;
        err(err: $OutputStream): $Engine$Builder;
        "in"(arg0: $InputStream): $Engine$Builder;
        option(key: string, value: string): $Engine$Builder;
        build(): $Engine;
        sandbox(policy: $SandboxPolicy_): $Engine$Builder;
        logHandler(logHandler: $Handler): $Engine$Builder;
        logHandler(logOut: $OutputStream): $Engine$Builder;
        useSystemProperties(enabled: boolean): $Engine$Builder;
        serverTransport(serverTransport: $MessageTransport_): $Engine$Builder;
        allowExperimentalOptions(enabled: boolean): $Engine$Builder;
    }
    export class $Context implements $AutoCloseable {
        interrupt(timeout: $Duration_): void;
        enter(): void;
        initialize(languageId: string): boolean;
        close(): void;
        close(cancelIfExecuting: boolean): void;
        parse(languageId: string, source: $CharSequence): $Value;
        parse(source: $Source): $Value;
        static create(...permittedLanguages: string[]): $Context;
        static newBuilder(...permittedLanguages: string[]): $Context$Builder;
        getEngine(): $Engine;
        "eval"(languageId: string, source: $CharSequence): $Value;
        "eval"(source: $Source): $Value;
        getBindings(languageId: string): $Value;
        leave(): void;
        static getCurrent(): $Context;
        asValue(hostValue: $Object): $Value;
        resetLimits(): void;
        getPolyglotBindings(): $Value;
        safepoint(): void;
        get engine(): $Engine;
        static get current(): $Context;
        get polyglotBindings(): $Value;
    }
    export class $Source$Builder {
        options(options: $Map_<string, string>): $Source$Builder;
        name(newName: string): $Source$Builder;
        encoding(encoding: $Charset): $Source$Builder;
        uri(newUri: $URI): $Source$Builder;
        option(key: string, value: string): $Source$Builder;
        build(): $Source;
        cached(cached: boolean): $Source$Builder;
        content(bytes: $ByteSequence): $Source$Builder;
        content(characters: $CharSequence): $Source$Builder;
        content(code: string): $Source$Builder;
        internal(internal: boolean): $Source$Builder;
        interactive(interactive: boolean): $Source$Builder;
        mimeType(mimeType: string): $Source$Builder;
        buildLiteral(): $Source;
    }
    export class $SandboxPolicy extends $Enum<$SandboxPolicy> {
        static values(): $SandboxPolicy[];
        static valueOf(name: string): $SandboxPolicy;
        isStricterOrEqual(other: $SandboxPolicy_): boolean;
        isStricterThan(other: $SandboxPolicy_): boolean;
        static CONSTRAINED: $SandboxPolicy;
        static TRUSTED: $SandboxPolicy;
        static UNTRUSTED: $SandboxPolicy;
        static ISOLATED: $SandboxPolicy;
    }
    /**
     * Values that may be interpreted as {@link $SandboxPolicy}.
     */
    export type $SandboxPolicy_ = "trusted" | "constrained" | "isolated" | "untrusted";
    export class $AbstractValue {
    }
    export class $Value extends $AbstractValue {
        pin(): void;
        throwException(): $RuntimeException;
        newInstance(...arg0: $Object[]): $Value;
        getContext(): $Context;
        execute(...arg0: $Object[]): $Value;
        getIterator(): $Value;
        isNull(): boolean;
        as<T>(targetType: $Class<T>): T;
        as<T>(targetType: $TypeLiteral<T>): T;
        canExecute(): boolean;
        asInt(): number;
        readBuffer(byteOffset: number, destination: number[], destinationOffset: number, length: number): void;
        isBoolean(): boolean;
        isNumber(): boolean;
        isString(): boolean;
        fitsInLong(): boolean;
        asDouble(): number;
        getMember(identifier: string): $Value;
        asString(): string;
        getBufferSize(): number;
        hasMembers(): boolean;
        isTime(): boolean;
        isDate(): boolean;
        fitsInInt(): boolean;
        hasMember(identifier: string): boolean;
        getHashSize(): number;
        removeMember(identifier: string): boolean;
        setArrayElement(index: number, value: $Object): void;
        asBoolean(): boolean;
        asFloat(): number;
        asByte(): number;
        asShort(): number;
        getArrayElement(index: number): $Value;
        asBigInteger(): $BigInteger;
        hasArrayElements(): boolean;
        fitsInDouble(): boolean;
        getArraySize(): number;
        asLong(): number;
        isInstant(): boolean;
        static asValue(o: $Object): $Value;
        asProxyObject<T extends $Proxy>(): T;
        isProxyObject(): boolean;
        getSourceLocation(): $SourceSection;
        getMemberKeys(): $Set<string>;
        static fromByteBasedString(bytes: number[], offset: number, length: number, encoding: $Value$StringEncoding, copy: boolean): $Value;
        static fromByteBasedString(bytes: number[], encoding: $Value$StringEncoding): $Value;
        static fromNativeString(basePointer: number, byteOffset: number, byteLength: number, encoding: $Value$StringEncoding, copy: boolean): $Value;
        static fromNativeString(basePointer: number, byteLength: number, encoding: $Value$StringEncoding): $Value;
        asNativePointer(): number;
        isNativePointer(): boolean;
        asStringBytes(encoding: $Value$StringEncoding): number[];
        hasHashEntry(key: $Object): boolean;
        canInstantiate(): boolean;
        getHashValueOrDefault(key: $Object, defaultValue: $Object): $Value;
        putMember(identifier: string, value: $Object): void;
        isException(): boolean;
        invokeMember(identifier: string, ...arg1: $Object[]): $Value;
        getMetaObject(): $Value;
        fitsInBigInteger(): boolean;
        fitsInShort(): boolean;
        fitsInFloat(): boolean;
        isMetaObject(): boolean;
        isHostObject(): boolean;
        removeHashEntry(key: $Object): boolean;
        hasBufferElements(): boolean;
        writeBufferInt(order: $ByteOrder, byteOffset: number, value: number): void;
        readBufferInt(order: $ByteOrder, byteOffset: number): number;
        writeBufferByte(byteOffset: number, value: number): void;
        writeBufferLong(order: $ByteOrder, byteOffset: number, value: number): void;
        writeBufferFloat(order: $ByteOrder, byteOffset: number, value: number): void;
        isBufferWritable(): boolean;
        readBufferByte(byteOffset: number): number;
        readBufferDouble(order: $ByteOrder, byteOffset: number): number;
        getMetaSimpleName(): string;
        hasHashEntries(): boolean;
        isMetaInstance(instance: $Object): boolean;
        readBufferFloat(order: $ByteOrder, byteOffset: number): number;
        writeBufferShort(order: $ByteOrder, byteOffset: number, value: number): void;
        writeBufferDouble(order: $ByteOrder, byteOffset: number, value: number): void;
        hasIterator(): boolean;
        removeArrayElement(index: number): boolean;
        readBufferShort(order: $ByteOrder, byteOffset: number): number;
        readBufferLong(order: $ByteOrder, byteOffset: number): number;
        getMetaParents(): $Value;
        hasMetaParents(): boolean;
        asHostObject<T>(): T;
        executeVoid(...arg0: $Object[]): void;
        getMetaQualifiedName(): string;
        getIteratorNextElement(): $Value;
        hasIteratorNextElement(): boolean;
        getHashValuesIterator(): $Value;
        getHashEntriesIterator(): $Value;
        getHashKeysIterator(): $Value;
        canInvokeMember(identifier: string): boolean;
        fitsInByte(): boolean;
        isTimeZone(): boolean;
        asDate(): $LocalDate;
        asTimeZone(): $ZoneId;
        isDuration(): boolean;
        asInstant(): $Instant;
        isIterator(): boolean;
        asTime(): $LocalTime;
        asDuration(): $Duration;
        getHashValue(key: $Object): $Value;
        putHashEntry(key: $Object, value: $Object): void;
        get context(): $Context;
        get null(): boolean;
        get boolean(): boolean;
        get number(): boolean;
        get string(): boolean;
        get bufferSize(): number;
        get time(): boolean;
        get date(): boolean;
        get hashSize(): number;
        get arraySize(): number;
        get instant(): boolean;
        get proxyObject(): boolean;
        get sourceLocation(): $SourceSection;
        get memberKeys(): $Set<string>;
        get nativePointer(): boolean;
        get exception(): boolean;
        get hostObject(): boolean;
        get bufferWritable(): boolean;
        get metaSimpleName(): string;
        get metaParents(): $Value;
        get metaQualifiedName(): string;
        get iteratorNextElement(): $Value;
        get hashValuesIterator(): $Value;
        get hashEntriesIterator(): $Value;
        get hashKeysIterator(): $Value;
        get timeZone(): boolean;
        get duration(): boolean;
    }
    export class $SourceSection {
        getSource(): $Source;
        getCharIndex(): number;
        isAvailable(): boolean;
        hasLines(): boolean;
        hasColumns(): boolean;
        getEndLine(): number;
        getEndColumn(): number;
        /**
         * @deprecated
         */
        getCode(): $CharSequence;
        hasCharIndex(): boolean;
        getCharacters(): $CharSequence;
        getCharLength(): number;
        getStartColumn(): number;
        getStartLine(): number;
        getCharEndIndex(): number;
        get source(): $Source;
        get charIndex(): number;
        get available(): boolean;
        get endLine(): number;
        get endColumn(): number;
        get code(): $CharSequence;
        get characters(): $CharSequence;
        get charLength(): number;
        get startColumn(): number;
        get startLine(): number;
        get charEndIndex(): number;
    }
    export class $HostAccess {
        static newBuilder(): $HostAccess$Builder;
        static newBuilder(conf: $HostAccess): $HostAccess$Builder;
        static ALL: $HostAccess;
        static SCOPED: $HostAccess;
        static CONSTRAINED: $HostAccess;
        static NONE: $HostAccess;
        static UNTRUSTED: $HostAccess;
        static EXPLICIT: $HostAccess;
        static ISOLATED: $HostAccess;
    }
    export class $PolyglotAccess {
        static newBuilder(): $PolyglotAccess$Builder;
        static ALL: $PolyglotAccess;
        static NONE: $PolyglotAccess;
    }
    export class $Context$Builder {
        options(options: $Map_<string, string>): $Context$Builder;
        apply(action: $Consumer_<$Context$Builder>): $Context$Builder;
        out(out: $OutputStream): $Context$Builder;
        err(err: $OutputStream): $Context$Builder;
        "in"(arg0: $InputStream): $Context$Builder;
        "arguments"(language: string, args: string[]): $Context$Builder;
        option(key: string, value: string): $Context$Builder;
        build(): $Context;
        environment(name: string, value: string): $Context$Builder;
        environment(env: $Map_<string, string>): $Context$Builder;
        /**
         * @deprecated
         */
        fileSystem(fileSystem: $FileSystem): $Context$Builder;
        resourceLimits(limits: $ResourceLimits): $Context$Builder;
        engine(engine: $Engine): $Context$Builder;
        sandbox(policy: $SandboxPolicy_): $Context$Builder;
        timeZone(zone: $ZoneId): $Context$Builder;
        logHandler(logOut: $OutputStream): $Context$Builder;
        logHandler(logHandler: $Handler): $Context$Builder;
        extendIO(defaultInitialValue: $IOAccess, setup: $Consumer_<$IOAccess$Builder>): $Context$Builder;
        hostClassLoader(classLoader: $ClassLoader): $Context$Builder;
        useSystemExit(enabled: boolean): $Context$Builder;
        allowValueSharing(enabled: boolean): $Context$Builder;
        processHandler(handler: $ProcessHandler_): $Context$Builder;
        currentWorkingDirectory(workingDirectory: $Path_): $Context$Builder;
        allowPolyglotAccess(accessPolicy: $PolyglotAccess): $Context$Builder;
        allowHostClassLookup(classFilter: $Predicate_<string>): $Context$Builder;
        allowIO(ioAccess: $IOAccess): $Context$Builder;
        /**
         * @deprecated
         */
        allowIO(enabled: boolean): $Context$Builder;
        allowCreateProcess(enabled: boolean): $Context$Builder;
        allowHostAccess(config: $HostAccess): $Context$Builder;
        /**
         * @deprecated
         */
        allowHostAccess(enabled: boolean): $Context$Builder;
        allowNativeAccess(enabled: boolean): $Context$Builder;
        allowCreateThread(enabled: boolean): $Context$Builder;
        extendHostAccess(defaultInitialValue: $HostAccess, setup: $Consumer_<$HostAccess$Builder>): $Context$Builder;
        serverTransport(serverTransport: $MessageTransport_): $Context$Builder;
        allowAllAccess(enabled: boolean): $Context$Builder;
        /**
         * @deprecated
         */
        hostClassFilter(classFilter: $Predicate_<string>): $Context$Builder;
        allowHostClassLoading(enabled: boolean): $Context$Builder;
        allowInnerContextOptions(enabled: boolean): $Context$Builder;
        allowExperimentalOptions(enabled: boolean): $Context$Builder;
        allowEnvironmentAccess(accessPolicy: $EnvironmentAccess): $Context$Builder;
    }
    export class $Instrument {
        getName(): string;
        lookup<T>(type: $Class<T>): T;
        getId(): string;
        getVersion(): string;
        getOptions(): $OptionDescriptors;
        getWebsite(): string;
        getSourceOptions(): $OptionDescriptors;
        get name(): string;
        get id(): string;
        get version(): string;
        get options(): $OptionDescriptors;
        get website(): string;
        get sourceOptions(): $OptionDescriptors;
    }
    export class $HostAccess$TargetMappingPrecedence extends $Enum<$HostAccess$TargetMappingPrecedence> {
        static values(): $HostAccess$TargetMappingPrecedence[];
        static valueOf(name: string): $HostAccess$TargetMappingPrecedence;
        static LOWEST: $HostAccess$TargetMappingPrecedence;
        static HIGH: $HostAccess$TargetMappingPrecedence;
        static LOW: $HostAccess$TargetMappingPrecedence;
        static HIGHEST: $HostAccess$TargetMappingPrecedence;
    }
    /**
     * Values that may be interpreted as {@link $HostAccess$TargetMappingPrecedence}.
     */
    export type $HostAccess$TargetMappingPrecedence_ = "highest" | "high" | "low" | "lowest";
    export class $ResourceLimits$Builder {
        build(): $ResourceLimits;
        onLimit(onLimit: $Consumer_<$ResourceLimitEvent>): $ResourceLimits$Builder;
        statementLimit(limit: number, sourceFilter: $Predicate_<$Source>): $ResourceLimits$Builder;
    }
    export class $TypeLiteral<T> {
        getType(): $Type;
        getRawType(): $Class<T>;
        get type(): $Type;
        get rawType(): $Class<T>;
    }
    export class $Value$StringEncoding {
        static UTF_16: $Value$StringEncoding;
        static UTF_16_LITTLE_ENDIAN: $Value$StringEncoding;
        static UTF_8: $Value$StringEncoding;
        static UTF_16_BIG_ENDIAN: $Value$StringEncoding;
        static UTF_32_BIG_ENDIAN: $Value$StringEncoding;
        static UTF_32_LITTLE_ENDIAN: $Value$StringEncoding;
        static UTF_32: $Value$StringEncoding;
    }
    export class $HostAccess$Builder {
        build(): $HostAccess;
        denyAccess(clazz: $Class<never>, includeSubclasses: boolean): $HostAccess$Builder;
        denyAccess(clazz: $Class<never>): $HostAccess$Builder;
        allowAllClassImplementations(allow: boolean): $HostAccess$Builder;
        allowMutableTargetMappings(...mapping: $HostAccess$MutableTargetMapping_[]): $HostAccess$Builder;
        allowImplementations(type: $Class<never>): $HostAccess$Builder;
        allowAccessAnnotatedBy(annotation: $Class<$Annotation>): $HostAccess$Builder;
        disableMethodScoping(e: $Executable): $HostAccess$Builder;
        allowPublicAccess(allow: boolean): $HostAccess$Builder;
        allowBufferAccess(bufferAccess: boolean): $HostAccess$Builder;
        allowListAccess(listAccess: boolean): $HostAccess$Builder;
        allowArrayAccess(arrayAccess: boolean): $HostAccess$Builder;
        allowMapAccess(mapAccess: boolean): $HostAccess$Builder;
        allowAccess(element: $Executable): $HostAccess$Builder;
        allowAccess(element: $Field): $HostAccess$Builder;
        targetTypeMapping<S, T>(sourceType: $Class<S>, targetType: $Class<T>, accepts: $Predicate_<S>, converter: $Function_<S, T>): $HostAccess$Builder;
        targetTypeMapping<S, T>(sourceType: $Class<S>, targetType: $Class<T>, accepts: $Predicate_<S>, converter: $Function_<S, T>, precedence: $HostAccess$TargetMappingPrecedence_): $HostAccess$Builder;
        methodScoping(scopingDefault: boolean): $HostAccess$Builder;
        useModuleLookup(lookup: $MethodHandles$Lookup): $HostAccess$Builder;
        allowAllImplementations(allow: boolean): $HostAccess$Builder;
        allowIteratorAccess(iteratorAccess: boolean): $HostAccess$Builder;
        allowIterableAccess(iterableAccess: boolean): $HostAccess$Builder;
        allowAccessInheritance(inheritAccess: boolean): $HostAccess$Builder;
        allowImplementationsAnnotatedBy(annotation: $Class<$Annotation>): $HostAccess$Builder;
        allowBigIntegerNumberAccess(bigIntegerNumberAccess: boolean): $HostAccess$Builder;
        disableMethodScopingAnnotatedBy(annotation: $Class<$Annotation>): $HostAccess$Builder;
    }
    export class $Language {
        getName(): string;
        getId(): string;
        getVersion(): string;
        getOptions(): $OptionDescriptors;
        getImplementationName(): string;
        getMimeTypes(): $Set<string>;
        getWebsite(): string;
        isInteractive(): boolean;
        getSourceOptions(): $OptionDescriptors;
        getDefaultMimeType(): string;
        get name(): string;
        get id(): string;
        get version(): string;
        get options(): $OptionDescriptors;
        get implementationName(): string;
        get mimeTypes(): $Set<string>;
        get website(): string;
        get interactive(): boolean;
        get sourceOptions(): $OptionDescriptors;
        get defaultMimeType(): string;
    }
    export class $EnvironmentAccess {
        static INHERIT: $EnvironmentAccess;
        static NONE: $EnvironmentAccess;
    }
    export class $Source {
        getName(): string;
        getLength(): number;
        getBytes(): $ByteSequence;
        static create(language: string, source: $CharSequence): $Source;
        /**
         * @deprecated
         */
        getInputStream(): $InputStream;
        getPath(): string;
        getLineNumber(offset: number): number;
        getLanguage(): string;
        getURL(): $URL;
        static newBuilder(language: string, source: $Reader, name: string): $Source$Builder;
        static newBuilder(language: string, url: $URL): $Source$Builder;
        static newBuilder(language: string, bytes: $ByteSequence, name: string): $Source$Builder;
        static newBuilder(language: string, characters: $CharSequence, name: string): $Source$Builder;
        static newBuilder(language: string, file: $File_): $Source$Builder;
        getURI(): $URI;
        hasBytes(): boolean;
        getReader(): $Reader;
        getColumnNumber(offset: number): number;
        static findLanguage(url: $URL): string;
        static findLanguage(mimeType: string): string;
        static findLanguage(file: $File_): string;
        isInternal(): boolean;
        getLineCount(): number;
        isInteractive(): boolean;
        getMimeType(): string;
        getLineStartOffset(lineNumber: number): number;
        static findMimeType(file: $File_): string;
        static findMimeType(url: $URL): string;
        hasCharacters(): boolean;
        getLineLength(lineNumber: number): number;
        getCharacters(lineNumber: number): $CharSequence;
        getCharacters(): $CharSequence;
        get name(): string;
        get length(): number;
        get bytes(): $ByteSequence;
        get inputStream(): $InputStream;
        get path(): string;
        get language(): string;
        get URL(): $URL;
        get URI(): $URI;
        get reader(): $Reader;
        get internal(): boolean;
        get lineCount(): number;
        get interactive(): boolean;
        get mimeType(): string;
    }
    export class $HostAccess$MutableTargetMapping extends $Enum<$HostAccess$MutableTargetMapping> {
        static values(): $HostAccess$MutableTargetMapping[];
        static valueOf(name: string): $HostAccess$MutableTargetMapping;
        static ITERABLE_TO_JAVA_ITERABLE: $HostAccess$MutableTargetMapping;
        static HASH_TO_JAVA_MAP: $HostAccess$MutableTargetMapping;
        static ITERATOR_TO_JAVA_ITERATOR: $HostAccess$MutableTargetMapping;
        static EXECUTABLE_TO_JAVA_INTERFACE: $HostAccess$MutableTargetMapping;
        static ARRAY_TO_JAVA_LIST: $HostAccess$MutableTargetMapping;
        static MEMBERS_TO_JAVA_MAP: $HostAccess$MutableTargetMapping;
        static MEMBERS_TO_JAVA_INTERFACE: $HostAccess$MutableTargetMapping;
    }
    /**
     * Values that may be interpreted as {@link $HostAccess$MutableTargetMapping}.
     */
    export type $HostAccess$MutableTargetMapping_ = "array_to_java_list" | "iterator_to_java_iterator" | "iterable_to_java_iterable" | "hash_to_java_map" | "members_to_java_map" | "members_to_java_interface" | "executable_to_java_interface";
    export class $ResourceLimits {
        static newBuilder(): $ResourceLimits$Builder;
    }
    export class $Engine implements $AutoCloseable {
        close(): void;
        close(cancelIfExecuting: boolean): void;
        static create(...permittedLanguages: string[]): $Engine;
        static create(): $Engine;
        getVersion(): string;
        static newBuilder(): $Engine$Builder;
        static newBuilder(...permittedLanguages: string[]): $Engine$Builder;
        getOptions(): $OptionDescriptors;
        getImplementationName(): string;
        storeCache(targetFile: $Path_, cancelledWord: $WordPointer): boolean;
        storeCache(targetFile: $Path_): boolean;
        getLanguages(): $Map<string, $Language>;
        static findHome(): $Path;
        static copyResources(targetFolder: $Path_, ...components: string[]): boolean;
        getCachedSources(): $Set<$Source>;
        getInstruments(): $Map<string, $Instrument>;
        get version(): string;
        get options(): $OptionDescriptors;
        get implementationName(): string;
        get languages(): $Map<string, $Language>;
        get cachedSources(): $Set<$Source>;
        get instruments(): $Map<string, $Instrument>;
    }
}
