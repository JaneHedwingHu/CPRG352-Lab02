//Author name: Jinwei Hu
//Student number: 000849618

var data = null;

//Get matched data from source json file
var searchFor2 = function () {
    let input = document.getElementById('key');
    let inputText = input.value;
    let keyType = document.getElementById("selectKey");
    let keyTypeValue = keyType.value;
    //create filter function
    //reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    let filteredData = data.filter(function (obj) {
        if (keyTypeValue === "code") {
            return (obj.postal_code && obj.postal_code.toUpperCase().startsWith(inputText.toUpperCase()))
        }
        if (keyTypeValue === "name") {
            return (obj.library && obj.library.toUpperCase().startsWith(inputText.toUpperCase()))
        }
        if (keyTypeValue === "phone") {
            return (obj.phone_number && obj.phone_number.startsWith(inputText))
        }
        if (keyTypeValue === "area") {
            return (obj.square_feet && obj.square_feet.startsWith(inputText))
        }
        return false;
    })

    if (filteredData.length > 0) showFilteredData2(filteredData);
    else showNotFound();
}
// Print selected data onto screen
var showFilteredData2 = function (data) {
    const sampleElements = data.map((sample) => makeSampleElement2(sample));
    let summary = "<table><tr><td>Post code&nbsp;</td> <td>Post code&nbsp;</td><td>Phone number&nbsp;</td><td>Library area&nbsp;</td><td>View it in Map&nbsp;</td></tr>"
    for (let element of sampleElements) {
        summary += element;
    }
    summary += "</table>"
    document.getElementById("summary").innerHTML = summary;
}

var makeSampleElement2 = function (sample) {
    return `<tr><td>${sample.postal_code}&nbsp;</td><td>${sample.library}&nbsp;</td><td>${sample.phone_number}&nbsp;</td>
    <td>${sample.square_feet}&nbsp;</td><td><a href='https://www.google.ca/maps/search/?api=1&query=${sample.location.latitude}%2C${sample.location.longitude}' target=_blank>click here</a></td></tr>`
}
//Print exception when no client can be found
var showNotFound = function () {
    document.getElementById("summary").innerHTML = "No matched data. Please try again.";
}


// load data while loading the website and save data into a global object
var loadData2 = function () {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            data = JSON.parse(xhr.responseText);
        }
    };
    xhr.open("GET", "https://data.calgary.ca/resource/m9y7-ui7j.json", true);
    xhr.send();
}
