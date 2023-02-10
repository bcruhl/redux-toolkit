let locale = 'en';
const strings = { en : {
  requestTrackingTitle: 'Customer Request Tracking',
  ticketOwnerAndDate: 'Assigned to {assignee} on {assignedDate}',
  addRequestPlaceholder: 'Add new Customer Request',
  buttonSubmit: 'Submit'
}};

// Convert a message like "Hello, {name}" to "Hello, Chad"
// given the interpolations object {name: "Chad"}
const interpolate = (message, interpolations) => {
  return Object.keys(interpolations).reduce(
    (interpolated, key) => interpolated.replace(
      new RegExp(`{\s*${key}\s*}`, "g"),
      interpolations[key],
    ),
    message,
  );
}

export default {
  /**
   * Returns the localized string for the given key
   * @param key
   * @param args
   *     locale: String - two-letter locale code
   * @returns {(String|Object)}
   */
  str: function(key, options = {}, args = {locale: 'en'}) {
    let myLocale = locale;
    if (args) {
      myLocale = args.locale || locale;
    }
    if (Object.prototype.hasOwnProperty.call(strings, myLocale)) {
      if (Object.prototype.hasOwnProperty.call(strings[locale], key)) {
        return interpolate(strings[myLocale][key], options);
      } else {
        throw new Error(`Unknown string key: ${key} for locale: ${myLocale}`);
      }
    } else {
      throw new Error(`Unknown string locale: ${myLocale}`);
    }
  },

  setLocale: function(loc) {
    locale = loc;
  },
};
