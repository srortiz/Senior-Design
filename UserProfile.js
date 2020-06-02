var UserProfile = (function() {
    var number = "";
  
    var getNumber = function() {
      return number;    // Or pull this from cookie/localStorage
    };
  
    var setNumber = function(num) {
      number = num;     
      // Also set this in cookie/localStorage
    };
  
    return {
      getNumber: getNumber,
      setNumber: setNumber
    }
  
})();
  
export default UserProfile;