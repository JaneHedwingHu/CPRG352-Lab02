//Author name: Jinwei Hu
//Student number: 000849618

var data = null;

//Get matched data from source json file
var searchFor3 = function () {
    let input = document.getElementById('key');
    let inputText = input.value;
    let keyType = document.getElementById("selectKey");
    let keyTypeValue = keyType.value;
    //create filter function
    //reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    let filteredData = data.filter(function (obj) {
        if (keyTypeValue === "sector") {
            return (obj.sector && obj.sector.toUpperCase().startsWith(inputText.toUpperCase()))
        }
        if (keyTypeValue === "year") {
            return (obj.year && obj.year.startsWith(inputText))
        }
        if (keyTypeValue === "comm") {
            return (obj.community_name && obj.community_name.toUpperCase().startsWith(inputText.toUpperCase()))
        }
        if (keyTypeValue === "count") {
            return (obj.count && obj.count.startsWith(inputText))
        }
        return false;
    })

    if (filteredData.length > 0) showFilteredData3(filteredData);
    else showNotFound();
}
// Print selected data onto screen
var showFilteredData3 = function (data) {
    const sampleElements = data.map((sample) => makeSampleElement3(sample));
    let summary = "<table><tr><td>Sector&nbsp;</td><td>Category&nbsp;</td><td>Year&nbsp;</td><td>Community name&nbsp;</td><td>Count&nbsp;</td><td>View it in Map&nbsp;</td></tr>"
    for (let element of sampleElements) {
        summary += element;
    }
    summary += "</table>"
    document.getElementById("summary").innerHTML = summary;
}

var makeSampleElement3 = function (sample) {
    return `<tr><td>${sample.sector}&nbsp;</td><td>${sample.category}&nbsp;</td><td>${sample.year}&nbsp;</td><td>${sample.community_name}&nbsp;</td>
    <td>${sample.count}&nbsp;</td><td><a href='https://www.google.ca/maps/search/?api=1&query=${sample.geocoded_column.latitude}%2C${sample.geocoded_column.longitude}' target=_blank>click here</a></td></tr>`
}
//Print exception when no client can be found
var showNotFound = function () {
    document.getElementById("summary").innerHTML = "No matched data. Please try again.";
}


// load data while loading the website and save data into a global object
var loadData3 = function () {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            data = JSON.parse(xhr.responseText);
        }
    };
    xhr.open("GET", "https://data.calgary.ca/resource/848s-4m4z.json", true);
    xhr.send();
}
