exports.definition = {
  config: {
    //'URL': 'http://xn--38j8bv87v8z2b18b.com/api/v1/brands',
    //'type': 'GET',
    //'adapter': {
    //  'type': 'restapi',
    //  'collection_name': 'records'
    //}
  },
  extendModel: function extendModel(Model) {
    _.extend(Model.prototype, {
      // extended functions and properties go here
    });

    return Model;
  },
  extendCollection: function extendCollection(Collection) {
    _.extend(Collection.prototype, {
      // extended functions and properties go here
    });

    return Collection;
  }
};
