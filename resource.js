
var Class = require(".class.js").Class;

function Resource (object)
{
    Resource.baseConstructor.call(this, object);
    var self = this;

    if(object.uri != null)
    {
        self.uri = object.uri;
    }

    return self;
}

Resource = Class.extend(Resource, Class);

module.exports.Resource = Resource;
