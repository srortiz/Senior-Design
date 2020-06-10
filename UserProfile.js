var UserProfile = (function() {
    var number = "";
    var mainAdmin = '';
  
    var getNumber = function() {
      return number;    // Or pull this from cookie/localStorage
    };
  
    var setNumber = function(num) {
      number = num;     
      // Also set this in cookie/localStorage
    };

    var getMainAdmin = function() {
      return mainAdmin;
    };

    var setMainAdmin = function(num) {
      mainAdmin = num;
    };
  
    return {
      getNumber: getNumber,
      setNumber: setNumber,
      getMainAdmin: getMainAdmin,
      setMainAdmin: setMainAdmin
    }
  
})();
  
export default UserProfile;