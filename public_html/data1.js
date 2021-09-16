//Author name: Jinwei Hu
//Student number: 000849618

var data = null;

//Get matched data from source json file
var searchFor1 = function () {
    let input = document.getElementById('key');
    let inputText = input.value;
    let keyType = document.getElementById("selectKey");
    let keyTypeValue = keyType.value;
    //create filter function
    //reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    let filteredData = data.filter(function (obj) {
        if (keyTypeValue === "info") {
            return (obj.incident_info && obj.incident_info.toUpperCase().startsWith(inputText.toUpperCase()))
        }
        if (keyTypeValue === "des") {
            return (obj.description && obj.description.toUpperCase().startsWith(inputText.toUpperCase()))
        }
        if (keyTypeValue === "date") {
            return (obj.start_dt && obj.start_dt.startsWith(inputText))
        }
        if (keyTypeValue === "count") {
            return (obj.count && obj.count.startsWith(inputText))
        }
        return false;
    })

    if (filteredData.length > 0) showFilteredData1(filteredData);
    else showNotFound();
}
// Print selected data onto screen
var showFilteredData1 = function (data) {
    const sampleElements = data.map((sample) => makeSampleElement1(sample));
    let summary = "<table><tr><td>Incident Info&nbsp;</td> <td>Description&nbsp;</td><td>Date&nbsp;</td><td>Count&nbsp;</td><td>View it in Map&nbsp;</td></tr>"
    for (let element of sampleElements) {
        summary += element;
    }
    summary += "</table>"
    document.getElementById("summary").innerHTML = summary;
}

var makeSampleElement1 = function (sample) {
    return `<tr><td>${sample.incident_info}&nbsp;</td><td>${sample.description}&nbsp;</td><td>${sample.start_dt}&nbsp;</td>
    <td>${sample.count}&nbsp;</td><td><a href='https://www.google.ca/maps/search/?api=1&query=${sample.latitude}%2C${sample.longitude}' target=_blank>click here</a></td></tr>`
}
//Print exception when no client can be found
var showNotFound = function () {
    document.getElementById("summary").innerHTML = "No matched data. Please try again.";
}


// load data while loading the website and save data into a global object
var loadData1 = function () {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            data = JSON.parse(xhr.responseText);
        }
    };
    xhr.open("GET", "https://data.calgary.ca/resource/35ra-9556.json", true);
    xhr.send();
}
