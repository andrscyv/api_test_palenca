// in real scenario would use a validation library like joi or ClassValidator
module.exports.validateCredentials = function(email, password) {
   // regex for valid email 
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email) && password.length > 0) {
        return true;
    } else {
        return false;
    } 
}
