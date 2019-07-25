const _ = require("lodash") ;

module.export =  function(errors) {
  const result = {};
  _.forEach(errors, (val, key) => {
    result[key] = val.message;
  });
  return result;
}
