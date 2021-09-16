//Author name: Jinwei Hu
//Student number: 000849618

var data = null;

//Get matched data from source json file
var searchFor4 = function () {
    let input = document.getElementById('key');
    let inputText = input.value;
    let keyType = document.getElementById("selectKey");
    let keyTypeValue = keyType.value;
    //create filter function
    //reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    let filteredData = data.filter(function (obj) {
        if (keyTypeValue === "type") {
            return (obj.permittype && obj.permittype.toUpperCase().startsWith(inputText.toUpperCase()))
        }
        if (keyTypeValue === "sta") {
            return (obj.statuscurrent && obj.statuscurrent.toUpperCase().startsWith(inputText.toUpperCase()))
        }
        if (keyTypeValue === "num") {
            return (obj.permitnum && obj.permitnum.toUpperCase().startsWith(inputText.toUpperCase()))
        }
        if (keyTypeValue === "class") {
            return (obj.permitclass && obj.permitclass.toUpperCase().startsWith(inputText.toUpperCase()))
        }
        return false;
    })

    if (filteredData.length > 0) showFilteredData4(filteredData);
    else showNotFound();
}
// Print selected data onto screen
var showFilteredData4 = function (data) {
    const sampleElements = data.map((sample) => makeSampleElement4(sample));
    let summary = "<table><tr><td>Permit type&nbsp;</td><td>Status&nbsp;</td><td>Permit number&nbsp;</td><td>Permit class&nbsp;</td><td>Work class&nbsp;</td><td>View it in Map&nbsp;</td></tr>"
    for (let element of sampleElements) {
        summary += element;
    }
    summary += "</table>"
    document.getElementById("summary").innerHTML = summary;
}

var makeSampleElement4 = function (sample) {
    return `<tr><td>${sample.permittype}&nbsp;</td><td>${sample.statuscurrent}&nbsp;</td><td>${sample.permitnum}&nbsp;</td><td>${sample.permitclass}&nbsp;</td>
    <td>${sample.workclass}&nbsp;</td><td><a href='https://www.google.ca/maps/search/?api=1&query=${sample.latitude}%2C${sample.longitude}' target=_blank>click here</a></td></tr>`
}
//Print exception when no client can be found
var showNotFound = function () {
    document.getElementById("summary").innerHTML = "No matched data. Please try again.";
}


// load data while loading the website and save data into a global object
var loadData4 = function () {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            data = JSON.parse(xhr.responseText);
        }
    };
    xhr.open("GET", "https://data.calgary.ca/resource/c2es-76ed.json", true);
    xhr.send();
}
