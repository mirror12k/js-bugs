var print;
if (!print) print = console.log;

// the spidermonkey engine's __proto__ setter seems to trigger for when __proto__ is a valid object in the constructor
var magic = {};
var obj = {__proto__ : magic };

print("so this is perfectly normal everwhere");
print("\t", "obj.__proto__ === magic :", obj.__proto__ === magic);

print("though the setter only accepts valid object protos");
print("so this will return false in spidermonkey while returning true in all others");
print("\t", "({__proto__ : null}).__proto__ === null :", ({__proto__ : null}).__proto__ === null);

print("and this will return true in spidermonkey (because as soon as the prototype becomes null, the getter is inaccessible, and __proto__ becomes an ordinary value)");
print("and false in all others");
print("\t", "({__proto__ : null}).__proto__ === undefined :", ({__proto__ : null}).__proto__ === undefined);
