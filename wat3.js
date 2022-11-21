var print;
if (!print) print = console.log;


print("more prototype setter/getter magic:");
var o = {};
o.__proto__ = null;
print("this makes this statement return undefined in spidermonkey, and null in rhino and V8");
print("\t", "o.__proto__ :", o.__proto__);

print("this effect also breaks the entire prototyping properties of objects in spidermonkey");
var spec = { a : 5 };
o.__proto__ = spec;
print("so this statement properly returns 5 in the V8 and rhino engines, while spidermonkey fails to prototype, and returns undefined");
print("\t", "o.a :", o.a);