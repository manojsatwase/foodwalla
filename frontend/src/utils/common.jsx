String.prototype.capitalize = function () {
    return this.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
};

String.prototype.truncateWithDots = function(maxLength=100) {
    if (this.length > maxLength) {
      return this.slice(0, maxLength) + '...';
    }
    return this.toString();
  };

export const convertMeterToKM = (dist) => Math.floor(dist?.calculated / 1000);
