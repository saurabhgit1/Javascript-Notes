1. Whenever a function call is made a execution context is pushed.
2. Along with execution context a lexical env is also created.
3. Lexical means Hierarchy or order.
4. Lexical env of any function = Local memory of function + Lexical env of parent.
5. JS searches for any variable in local memory than in lexical env's. ---> Scope chain.
6. Scope is the lexical environment only.

## Hoisted

1. all variables (var, let, const) are hoisted.
2. var is hoisted and initialized with undefined.
3. let and const are hoisted but they are in "temporal dead zone". means we can't access let & const before initialisation.
4. Even if let & const are declared in global scope, if you will see in dev tools scope, it will not be available in global. Instead, it will be available in something as script.
5. Reference Error -> accessing a variable when they are inside temporal dead zone.
6. if we have declared a let variable with some name, we can't redeclare any other variable with same name in the same scope. let a = 10; var a = 11; -> error.
7. Syntax Error, Referenced Error, Type Error.
8. Always move your variables initialization to top of program to reducer temporal dead zone window.

## Scope + Shadowing
1. We group multiple statements together in a block so that we can use where JS expects a single statement.
2. Block Scope - 
3. let and const are block scoped.
4. var is function scoped or global scoped.
5. illegal shadowing