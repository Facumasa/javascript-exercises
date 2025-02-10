const getTheTitles = function(catalog) {
    let titles =[];
    let i=0;
    catalog.forEach(element => {
        titles[i]=element.title;
        i++;
    });
    return titles;
};



// Do not edit below this line
module.exports = getTheTitles;
