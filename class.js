function Class(){
    var newClass = Object.create(Class);
    return newClass;
}

Class.extend = function(subClass, aClass)
{
    for(aClassMethod in aClass)
    {
        if(aClassMethod != "prototype")
        {
            subClass[aClassMethod] = aClass[aClassMethod];
        }
    }

    for(aClassMethod in aClass.prototype)
    {
        if(subClass.prototype[aClassMethod] == null)
        {
            subClass.prototype[aClassMethod] = aClass.prototype[aClassMethod];
        }
    }

    subClass.baseConstructor = aClass;

    return subClass;
}

Class.prototype.isA = function (prototype) {
    var object = this;

    do {
        if (object === prototype) return true;
        var object = Object.getPrototypeOf(object);
    }
    while (object);

    return false;
}

module.exports.Class = Class;