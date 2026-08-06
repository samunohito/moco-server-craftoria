import { $Interval } from "@package/org/antlr/v4/runtime/misc";
import { $RuleContext, $Parser, $ParserRuleContext, $Token } from "@package/org/antlr/v4/runtime";
import { $Object } from "@package/java/lang";
export * as pattern from "@package/org/antlr/v4/runtime/tree/pattern";

declare module "@package/org/antlr/v4/runtime/tree" {
    export class $RuleNode {
    }
    export interface $RuleNode extends $ParseTree {
        getRuleContext(): $RuleContext;
        get ruleContext(): $RuleContext;
    }
    export class $Tree {
    }
    export interface $Tree {
        getParent(): $Tree;
        getPayload(): $Object;
        getChildCount(): number;
        getChild(arg0: number): $Tree;
        toStringTree(): string;
        get parent(): $Tree;
        get payload(): $Object;
        get childCount(): number;
    }
    export class $SyntaxTree {
    }
    export interface $SyntaxTree extends $Tree {
        getSourceInterval(): $Interval;
        get sourceInterval(): $Interval;
    }
    export class $ParseTree {
    }
    export interface $ParseTree extends $SyntaxTree {
        accept<T>(arg0: $ParseTreeVisitor<T>): T;
        setParent(arg0: $RuleContext): void;
        getText(): string;
        toStringTree(arg0: $Parser): string;
        getParent(): $Tree;
        getChild(arg0: number): $Tree;
        get text(): string;
    }
    export class $ParseTreeVisitor<T> {
    }
    export interface $ParseTreeVisitor<T> {
        visit(arg0: $ParseTree): T;
        visitTerminal(arg0: $TerminalNode): T;
        visitErrorNode(arg0: $ErrorNode): T;
        visitChildren(arg0: $RuleNode): T;
    }
    export class $AbstractParseTreeVisitor<T> implements $ParseTreeVisitor<T> {
        visit(arg0: $ParseTree): T;
        visitTerminal(arg0: $TerminalNode): T;
        visitErrorNode(arg0: $ErrorNode): T;
        visitChildren(arg0: $RuleNode): T;
        constructor();
    }
    export class $ParseTreeListener {
    }
    export interface $ParseTreeListener {
        visitTerminal(arg0: $TerminalNode): void;
        visitErrorNode(arg0: $ErrorNode): void;
        enterEveryRule(arg0: $ParserRuleContext): void;
        exitEveryRule(arg0: $ParserRuleContext): void;
    }
    export class $TerminalNode {
    }
    export interface $TerminalNode extends $ParseTree {
        getSymbol(): $Token;
        get symbol(): $Token;
    }
    export class $ErrorNode {
    }
    export interface $ErrorNode extends $TerminalNode {
    }
}
