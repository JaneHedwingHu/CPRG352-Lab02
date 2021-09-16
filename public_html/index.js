function hide() {
    document.getElementById("container").style.display = 'none';
}

function show() {
    document.getElementById("container").style.display = 'block';
}

function validateData1() {


    let dataType = document.getElementById("selectDataset").value;

    if (dataType === "dataset1") {
        loadData1();
    }
}

function getData1() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("displayApp").innerHTML = xhr.responseText;
        }
    };
    xhr.open("GET", "data1.html", true);
    xhr.send();
}

function datasetOnClick() {
    const element = document.getElementById("selectDataset");
    if (element.value === "dataset1") {
        getData1();
        validateData1();
    }
    if (element.value === "dataset2"){
        getData2();
        validateData2();
    }
    if (element.value === "dataset3"){
        getData3();
        validateData3();
    }
    if (element.value === "dataset4"){
        getData4();
        validateData4();
    }
}



function validateData2() {


    let dataType = document.getElementById("selectDataset").value;

    if (dataType === "dataset2") {
        loadData2();
    }
}

function getData2() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("displayApp").innerHTML = xhr.responseText;
        }
    };
    xhr.open("GET", "data2.html", true);
    xhr.send();
}

function validateData3() {


    let dataType = document.getElementById("selectDataset").value;

    if (dataType === "dataset3") {
        loadData3();
    }
}

function getData3() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("displayApp").innerHTML = xhr.responseText;
        }
    };
    xhr.open("GET", "data3.html", true);
    xhr.send();
}

function validateData4() {


    let dataType = document.getElementById("selectDataset").value;

    if (dataType === "dataset4") {
        loadData4();
    }
}

function getData4() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("displayApp").innerHTML = xhr.responseText;
        }
    };
    xhr.open("GET", "data4.html", true);
    xhr.send();
}
