var print;
if (!print) print = console.log;


print("when no object is specified as this, the global object is assigned to this");
function g () { return this; };

var a = 25;

print("what's funny is that the V8 engine adds ANOTHER scope after the global scope,");
print("making this print false because print is defined in a subscope of global (because it was defined with var)");
print("while js24, rhino, and even JE, properly print true");
print("\t", "g().a === a :", g().a === a);

print("this is also a wierd discrepency in the V8 engine, the global object also has a different prototype object from the default object prototype");
print("so this will return true in all but the V8 engine");
print("\t", "g().__proto__ === {}.__proto__ :", g().__proto__ === {}.__proto__);