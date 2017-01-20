if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      return arr.indexOf(item);
    },

    sum : function(arr) {
      return arr.reduce(function (a, b) {
        return a + b;
      }, 0);
    },

    remove : function(arr, item) {
      while( arr.indexOf(item) !== -1 ) {
        var index = arr.indexOf(item);
        arr.splice(index, 1);
      }

      return arr;
    },

    removeWithoutCopy : function(arr, item) {

    },

    append : function(arr, item) {
      arr.push(item);
      return arr;
    },

    truncate : function(arr) {
      arr.pop();
      return arr;
    },

    concat : function(arr1, arr2) {
      var arr1Str = arr1.map(function(val) {
        return val.toString();
      });

      var arr2Str = arr2.map(function(val) {
        return val.toString();
      });

      return arr1Str.concat(arr2Str);
    },

    insert : function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
    },

    count : function(arr, item) {
      var count = 0;
      while ( arr.indexOf(item) !== -1 ) {
        count = count + 1;
        var index = arr.indexOf(item);
        arr.splice(index, 1);
      }

      return count;
    },

    duplicates : function(arr) {
      var result = [];
      var seen = [];
      for (var i = 0; i < arr.length; i++) {
        if (seen.indexOf(arr[i]) > -1) {
          result.push(arr[i]);
        }
        seen.push(arr[i]);
      }
      return result;
    },

    square : function(arr) {
      return arr.map(function (a) {
        return a * a;
      });
    },

    findAllOccurrences : function(arr, target) {
      var count = 0;
      for (var i = 0; i < arr.length; i++) {
        count = arr[i] == target ? count + 1 : count;
      }
      return count;
    }
  };
});
