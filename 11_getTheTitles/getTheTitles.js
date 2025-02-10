const getTheTitles = function(catalog) {
    let titles =[];
    let i=0;
    catalog.forEach(element => {
        titles[i]=element.title;
        i++;
    });
    return titles;
};


// The map() method of Array instances creates a new 
// array populated with the results of calling a 
// provided function on every element in the calling 
// array.
// 
// 
// The solution is:
// 
// const getTheTitles = function (array) {
//     return array.map((book) => book.title);
//   };
  

// Do not edit below this line
module.exports = getTheTitles;
