const constants = {
  REGEX: {
    WHITE_SPACE: /^[\S]+$/,
    NAME: /^([a-zA-Z]+\s)*[a-zA-Z]+$/,
    FULLNAME: /^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/,
    PINCODE: /^[1-9]{1}[0-9]{2}[0-9]{3}$/,
    NAME_REGEX: /^([a-zA-Z ]+\s)*[a-zA-Z ]+$/,
  },
  injectedJavaScript: `
  (function() {
    function wrap(fn) {
      return function wrapper() {
        var res = fn.apply(this, arguments);
        window.ReactNativeWebView.postMessage(window.location.href);
        return res;
      }
    }
    history.pushState = wrap(history.pushState);
    history.replaceState = wrap(history.replaceState);
  })();
  true;
 `,
  FREE: ['2', '5'],

};

export default constants;
