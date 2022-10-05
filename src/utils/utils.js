export default {
  isTouchDevice: () => {
    try {
      let prefixes = " -webkit- -moz- -o- -ms- ".split(" ");

      let mq = function (query) {
        return window.matchMedia(query).matches;
      };

      if (
        "ontouchstart" in window ||
        (typeof window.DocumentTouch !== "undefined" &&
          document instanceof window.DocumentTouch)
      ) {
        return true;
      }

      return mq(["(", prefixes.join("touch-enabled),("), "heartz", ")"].join(""));
    } catch (e) {
      console.error("(Touch detect failed)", e);
      return false;
    }
  },
  transformSnaleToCamelCase: (str) => {
    return str.replace(/([-_][a-z])/g, (group) =>
      group.toUpperCase().replace("-", "").replace("_", "")
    );
  }
};