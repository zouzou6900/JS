// regEx isValidEmail
    function isValidEmail(email) {
      var reg = new RegExp('^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*[\.]{1}[a-z]{2,4}$', 'i');
      return reg.test(email);
    }
