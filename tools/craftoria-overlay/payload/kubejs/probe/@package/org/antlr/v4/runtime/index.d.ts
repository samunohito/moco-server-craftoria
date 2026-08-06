import { $PrintStream } from "@package/java/io";
import { $RuleNode, $ParseTreeListener, $ParseTree, $ParseTreeVisitor, $Tree, $ErrorNode, $TerminalNode } from "@package/org/antlr/v4/runtime/tree";
import { $IntervalSet, $IntegerStack, $Interval } from "@package/org/antlr/v4/runtime/misc";
import { $ATNSimulator, $LexerATNSimulator, $ParseInfo, $ATN, $ParserATNSimulator } from "@package/org/antlr/v4/runtime/atn";
import { $ParseTreePattern } from "@package/org/antlr/v4/runtime/tree/pattern";
import { $RuntimeException, $Class } from "@package/java/lang";
import { $List, $Map, $List_ } from "@package/java/util";
export * as misc from "@package/org/antlr/v4/runtime/misc";
export * as tree from "@package/org/antlr/v4/runtime/tree";
export * as atn from "@package/org/antlr/v4/runtime/atn";

declare module "@package/org/antlr/v4/runtime" {
    export class $Recognizer<Symbol, ATNInterpreter extends $ATNSimulator> {
        action(arg0: $RuleContext, arg1: number, arg2: number): void;
        getState(): number;
        setState(arg0: number): void;
        getInputStream(): $IntStream;
        setInputStream(arg0: $IntStream): void;
        /**
         * @deprecated
         */
        getTokenNames(): string[];
        getRuleNames(): string[];
        getGrammarFileName(): string;
        getVocabulary(): $Vocabulary;
        getInterpreter(): ATNInterpreter;
        getSerializedATN(): string;
        getATN(): $ATN;
        getRuleIndexMap(): $Map<string, number>;
        getTokenTypeMap(): $Map<string, number>;
        getErrorListeners(): $List<$ANTLRErrorListener>;
        getParseInfo(): $ParseInfo;
        getErrorHeader(arg0: $RecognitionException): string;
        setInterpreter(arg0: ATNInterpreter): void;
        getTokenType(arg0: string): number;
        getTokenFactory(): $TokenFactory<never>;
        addErrorListener(arg0: $ANTLRErrorListener): void;
        setTokenFactory(arg0: $TokenFactory<never>): void;
        /**
         * @deprecated
         */
        getTokenErrorDisplay(arg0: $Token): string;
        removeErrorListener(arg0: $ANTLRErrorListener): void;
        removeErrorListeners(): void;
        getErrorListenerDispatch(): $ANTLRErrorListener;
        precpred(arg0: $RuleContext, arg1: number): boolean;
        sempred(arg0: $RuleContext, arg1: number, arg2: number): boolean;
        static EOF: number;
        constructor();
        get tokenNames(): string[];
        get ruleNames(): string[];
        get grammarFileName(): string;
        get vocabulary(): $Vocabulary;
        get serializedATN(): string;
        get ATN(): $ATN;
        get ruleIndexMap(): $Map<string, number>;
        get tokenTypeMap(): $Map<string, number>;
        get errorListeners(): $List<$ANTLRErrorListener>;
        get parseInfo(): $ParseInfo;
        get errorListenerDispatch(): $ANTLRErrorListener;
    }
    export class $TokenStream {
    }
    export interface $TokenStream extends $IntStream {
        get(arg0: number): $Token;
        LT(arg0: number): $Token;
        getText(arg0: $RuleContext): string;
        getText(): string;
        getText(arg0: $Token, arg1: $Token): string;
        getText(arg0: $Interval): string;
        getTokenSource(): $TokenSource;
        get tokenSource(): $TokenSource;
    }
    export class $RuleContext implements $RuleNode {
        toString(arg0: $List_<string>): string;
        toString(arg0: $Recognizer<never, never>, arg1: $RuleContext): string;
        toString(arg0: $Recognizer<never, never>): string;
        toString(arg0: $List_<string>, arg1: $RuleContext): string;
        isEmpty(): boolean;
        depth(): number;
        accept<T>(arg0: $ParseTreeVisitor<T>): T;
        getPayload(): $RuleContext;
        getChildCount(): number;
        setParent(arg0: $RuleContext): void;
        getText(): string;
        getRuleIndex(): number;
        getRuleContext(): $RuleContext;
        setAltNumber(arg0: number): void;
        toStringTree(arg0: $Parser): string;
        toStringTree(): string;
        toStringTree(arg0: $List_<string>): string;
        getAltNumber(): number;
        getSourceInterval(): $Interval;
        getParent(): $Tree;
        getChild(arg0: number): $Tree;
        parent: $RuleContext;
        invokingState: number;
        constructor();
        constructor(arg0: $RuleContext, arg1: number);
        get empty(): boolean;
        get payload(): $RuleContext;
        get childCount(): number;
        get text(): string;
        get ruleIndex(): number;
        get ruleContext(): $RuleContext;
        get sourceInterval(): $Interval;
    }
    export class $IntStream {
        static UNKNOWN_SOURCE_NAME: string;
        static EOF: number;
    }
    export interface $IntStream {
        index(): number;
        size(): number;
        release(arg0: number): void;
        mark(): number;
        seek(arg0: number): void;
        consume(): void;
        getSourceName(): string;
        LA(arg0: number): number;
        get sourceName(): string;
    }
    export class $ParserRuleContext extends $RuleContext {
        copyFrom(arg0: $ParserRuleContext): void;
        getChild<T extends $ParseTree>(arg0: $Class<T>, arg1: number): T;
        getStart(): $Token;
        exitRule(arg0: $ParseTreeListener): void;
        getStop(): $Token;
        enterRule(arg0: $ParseTreeListener): void;
        addChild(arg0: $TerminalNode): $TerminalNode;
        addChild(arg0: $RuleContext): $RuleContext;
        /**
         * @deprecated
         */
        addChild(arg0: $Token): $TerminalNode;
        getToken(arg0: number, arg1: number): $TerminalNode;
        getTokens(arg0: number): $List<$TerminalNode>;
        addErrorNode(arg0: $ErrorNode): $ErrorNode;
        /**
         * @deprecated
         */
        addErrorNode(arg0: $Token): $ErrorNode;
        getRuleContext<T extends $ParserRuleContext>(arg0: $Class<T>, arg1: number): T;
        removeLastChild(): void;
        addAnyChild<T extends $ParseTree>(arg0: T): T;
        getRuleContexts<T extends $ParserRuleContext>(arg0: $Class<T>): $List<T>;
        toInfoString(arg0: $Parser): string;
        getParent(): $Tree;
        exception: $RecognitionException;
        parent: $RuleContext;
        stop: $Token;
        children: $List<$ParseTree>;
        start: $Token;
        static EMPTY: $ParserRuleContext;
        invokingState: number;
        constructor();
        constructor(arg0: $ParserRuleContext, arg1: number);
    }
    export class $ANTLRErrorStrategy {
    }
    export interface $ANTLRErrorStrategy {
        reset(arg0: $Parser): void;
        sync(arg0: $Parser): void;
        reportError(arg0: $Parser, arg1: $RecognitionException): void;
        recover(arg0: $Parser, arg1: $RecognitionException): void;
        recoverInline(arg0: $Parser): $Token;
        reportMatch(arg0: $Parser): void;
        inErrorRecoveryMode(arg0: $Parser): boolean;
    }
    export class $CharStream {
    }
    export interface $CharStream extends $IntStream {
        getText(arg0: $Interval): string;
    }
    export class $RecognitionException extends $RuntimeException {
        getInputStream(): $IntStream;
        getExpectedTokens(): $IntervalSet;
        getOffendingState(): number;
        getOffendingToken(): $Token;
        getRecognizer(): $Recognizer<never, never>;
        getCtx(): $RuleContext;
        constructor(arg0: $Recognizer<never, never>, arg1: $IntStream, arg2: $ParserRuleContext);
        constructor(arg0: string, arg1: $Recognizer<never, never>, arg2: $IntStream, arg3: $ParserRuleContext);
        get inputStream(): $IntStream;
        get expectedTokens(): $IntervalSet;
        get offendingState(): number;
        get offendingToken(): $Token;
        get recognizer(): $Recognizer<never, never>;
        get ctx(): $RuleContext;
    }
    export class $Lexer extends $Recognizer<number, $LexerATNSimulator> implements $TokenSource {
        mode(arg0: number): void;
        reset(): void;
        nextToken(): $Token;
        getType(): number;
        skip(): void;
        getChannel(): number;
        more(): void;
        setText(arg0: string): void;
        setType(arg0: number): void;
        getChannelNames(): string[];
        getCharIndex(): number;
        getAllTokens(): $List<$Token>;
        getErrorDisplay(arg0: string): string;
        getErrorDisplay(arg0: number): string;
        getModeNames(): string[];
        pushMode(arg0: number): void;
        popMode(): number;
        getCharPositionInLine(): number;
        getText(): string;
        getLine(): number;
        getSourceName(): string;
        getCharErrorDisplay(arg0: number): string;
        setCharPositionInLine(arg0: number): void;
        emit(arg0: $Token): void;
        emit(): $Token;
        notifyListeners(arg0: $LexerNoViableAltException): void;
        getToken(): $Token;
        recover(arg0: $LexerNoViableAltException): void;
        recover(arg0: $RecognitionException): void;
        setLine(arg0: number): void;
        setChannel(arg0: number): void;
        setToken(arg0: $Token): void;
        emitEOF(): $Token;
        static MAX_CHAR_VALUE: number;
        static DEFAULT_TOKEN_CHANNEL: number;
        _type: number;
        _token: $Token;
        static HIDDEN: number;
        _tokenStartCharPositionInLine: number;
        _hitEOF: boolean;
        _mode: number;
        static MORE: number;
        _modeStack: $IntegerStack;
        _tokenStartLine: number;
        static SKIP: number;
        _tokenStartCharIndex: number;
        _input: $CharStream;
        _text: string;
        static DEFAULT_MODE: number;
        static EOF: number;
        static MIN_CHAR_VALUE: number;
        _channel: number;
        constructor();
        constructor(arg0: $CharStream);
        get channelNames(): string[];
        get charIndex(): number;
        get allTokens(): $List<$Token>;
        get modeNames(): string[];
        get sourceName(): string;
    }
    export class $Parser extends $Recognizer<$Token, $ParserATNSimulator> {
        reset(): void;
        match(arg0: number): $Token;
        getContext(): $ParserRuleContext;
        consume(): $Token;
        getExpectedTokens(): $IntervalSet;
        dumpDFA(): void;
        dumpDFA(arg0: $PrintStream): void;
        setContext(arg0: $ParserRuleContext): void;
        exitRule(): void;
        setProfile(arg0: boolean): void;
        setTrace(arg0: boolean): void;
        inContext(arg0: string): boolean;
        enterRule(arg0: $ParserRuleContext, arg1: number, arg2: number): void;
        isTrace(): boolean;
        getSourceName(): string;
        setErrorHandler(arg0: $ANTLRErrorStrategy): void;
        getErrorHandler(): $ANTLRErrorStrategy;
        getPrecedence(): number;
        setTrimParseTree(arg0: boolean): void;
        createTerminalNode(arg0: $ParserRuleContext, arg1: $Token): $TerminalNode;
        matchWildcard(): $Token;
        isExpectedToken(arg0: number): boolean;
        getTrimParseTree(): boolean;
        enterRecursionRule(arg0: $ParserRuleContext, arg1: number, arg2: number, arg3: number): void;
        /**
         * @deprecated
         */
        enterRecursionRule(arg0: $ParserRuleContext, arg1: number): void;
        isMatchedEOF(): boolean;
        getRuleIndex(arg0: string): number;
        getParseListeners(): $List<$ParseTreeListener>;
        getTokenStream(): $TokenStream;
        getCurrentToken(): $Token;
        createErrorNode(arg0: $ParserRuleContext, arg1: $Token): $ErrorNode;
        getRuleContext(): $ParserRuleContext;
        setTokenStream(arg0: $TokenStream): void;
        getInvokingContext(arg0: number): $ParserRuleContext;
        getDFAStrings(): $List<string>;
        addParseListener(arg0: $ParseTreeListener): void;
        enterOuterAlt(arg0: $ParserRuleContext, arg1: number): void;
        setBuildParseTree(arg0: boolean): void;
        getBuildParseTree(): boolean;
        pushNewRecursionContext(arg0: $ParserRuleContext, arg1: number, arg2: number): void;
        removeParseListeners(): void;
        getNumberOfSyntaxErrors(): number;
        getRuleInvocationStack(): $List<string>;
        getRuleInvocationStack(arg0: $RuleContext): $List<string>;
        getATNWithBypassAlts(): $ATN;
        notifyErrorListeners(arg0: string): void;
        notifyErrorListeners(arg0: $Token, arg1: string, arg2: $RecognitionException): void;
        removeParseListener(arg0: $ParseTreeListener): void;
        unrollRecursionContexts(arg0: $ParserRuleContext): void;
        compileParseTreePattern(arg0: string, arg1: number): $ParseTreePattern;
        compileParseTreePattern(arg0: string, arg1: number, arg2: $Lexer): $ParseTreePattern;
        getExpectedTokensWithinCurrentRule(): $IntervalSet;
        static EOF: number;
        constructor(arg0: $TokenStream);
        get expectedTokens(): $IntervalSet;
        set profile(value: boolean);
        get sourceName(): string;
        get precedence(): number;
        get matchedEOF(): boolean;
        get parseListeners(): $List<$ParseTreeListener>;
        get currentToken(): $Token;
        get ruleContext(): $ParserRuleContext;
        get DFAStrings(): $List<string>;
        get numberOfSyntaxErrors(): number;
        get ATNWithBypassAlts(): $ATN;
        get expectedTokensWithinCurrentRule(): $IntervalSet;
    }
    export class $Token {
        static DEFAULT_CHANNEL: number;
        static HIDDEN_CHANNEL: number;
        static MIN_USER_CHANNEL_VALUE: number;
        static MIN_USER_TOKEN_TYPE: number;
        static INVALID_TYPE: number;
        static EOF: number;
        static EPSILON: number;
    }
    export interface $Token {
        getType(): number;
        getInputStream(): $CharStream;
        getChannel(): number;
        getCharPositionInLine(): number;
        getText(): string;
        getStartIndex(): number;
        getLine(): number;
        getTokenSource(): $TokenSource;
        getTokenIndex(): number;
        getStopIndex(): number;
        get type(): number;
        get inputStream(): $CharStream;
        get channel(): number;
        get charPositionInLine(): number;
        get text(): string;
        get startIndex(): number;
        get line(): number;
        get tokenSource(): $TokenSource;
        get tokenIndex(): number;
        get stopIndex(): number;
    }
    export class $Vocabulary {
    }
    export interface $Vocabulary {
        getDisplayName(arg0: number): string;
        getLiteralName(arg0: number): string;
        getSymbolicName(arg0: number): string;
        getMaxTokenType(): number;
        get maxTokenType(): number;
    }
    export class $TokenSource {
    }
    export interface $TokenSource {
        nextToken(): $Token;
        getInputStream(): $CharStream;
        getCharPositionInLine(): number;
        getLine(): number;
        getTokenFactory(): $TokenFactory<never>;
        getSourceName(): string;
        setTokenFactory(arg0: $TokenFactory<never>): void;
        get inputStream(): $CharStream;
        get charPositionInLine(): number;
        get line(): number;
        get sourceName(): string;
    }
}
