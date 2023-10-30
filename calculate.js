const fileInput = document.getElementById('formFile');
let errorMessage = document.getElementById('errorMessage');
var gradeData = null;
var bounds = [
    document.getElementsByClassName('boundsInput')[0],
    document.getElementsByClassName('boundsInput')[1],
    document.getElementsByClassName('boundsInput')[2],
    document.getElementsByClassName('boundsInput')[3],
    document.getElementsByClassName('boundsInput')[4],
    document.getElementsByClassName('boundsInput')[5],
    document.getElementsByClassName('boundsInput')[6],
    document.getElementsByClassName('boundsInput')[7],
    document.getElementsByClassName('boundsInput')[8],
    document.getElementsByClassName('boundsInput')[9],
    document.getElementsByClassName('boundsInput')[10],
    document.getElementsByClassName('boundsInput')[11]
]

var barGraph = [
    document.getElementsByClassName('bar')[0],
    document.getElementsByClassName('bar')[1],
    document.getElementsByClassName('bar')[2],
    document.getElementsByClassName('bar')[3],
    document.getElementsByClassName('bar')[4],
    document.getElementsByClassName('bar')[5],
    document.getElementsByClassName('bar')[6],
    document.getElementsByClassName('bar')[7],
    document.getElementsByClassName('bar')[8],
    document.getElementsByClassName('bar')[9],
    document.getElementsByClassName('bar')[10],
]

var histogramCount = [
    document.getElementsByClassName('count')[0],
    document.getElementsByClassName('count')[1],
    document.getElementsByClassName('count')[2],
    document.getElementsByClassName('count')[3],
    document.getElementsByClassName('count')[4],
    document.getElementsByClassName('count')[5],
    document.getElementsByClassName('count')[6],
    document.getElementsByClassName('count')[7],
    document.getElementsByClassName('count')[8],
    document.getElementsByClassName('count')[9],
    document.getElementsByClassName('count')[10],
]


fileInput.addEventListener('change', handleFileSelect, false);
var boundsCorrect 
function validateBounds() {
    boundsCorrect = true;
    for (let i = 1; i < 11; i++) {
        if (bounds[i].value === '') {
            boundsCorrect = false;
            break;
        }
        const prevBound = parseFloat(bounds[i - 1].value);
        const currentBound = parseFloat(bounds[i].value);
        const nextBound = parseFloat(bounds[i + 1].value);
        if(bounds[11].value === '') {
            boundsCorrect = false;
            errorMessage.innerHTML = 'Please fill out all bounds.';
            errorMessage.style.display = 'block';
            break;
        }
        if (currentBound <= nextBound) {
            boundsCorrect = false;
            errorMessage.innerHTML = 'Please make sure bounds are in correct order';
            errorMessage.style.display = 'block';
            break;
        }
        if(currentBound >= prevBound) {
            boundsCorrect = false;
            errorMessage.innerHTML = 'Please make sure bounds are in correct order';
            errorMessage.style.display = 'block';
            break;
        }
    }
    if(boundsCorrect) {
        errorMessage.style.display = 'none';
        updateHistogram(gradeData);
    }
    console.log(boundsCorrect);
}

function updateHistogram(gradeData) {
    if(boundsCorrect) {
        var aPlusCount = 0;
        var aCount = 0;
        var aMinusCount = 0;
        var bPlusCount = 0;
        var bCount = 0;
        var bMinusCount = 0;
        var cPlusCount = 0;
        var cCount = 0;
        var cMinusCount = 0;
        var dCount = 0;
        var fCount = 0;
        var personCount = 650/gradeData.length;
        for(let i = 0; i < gradeData.length; i++) {
            if(parseFloat(gradeData[i].grade) >= parseFloat(bounds[1].value) && parseFloat(gradeData[i].grade) <= parseFloat(bounds[0].value)) {
                aPlusCount++;
            } 
            else if (parseFloat(gradeData[i].grade) >= parseFloat(bounds[2].value) && parseFloat(gradeData[i].grade) < parseFloat(bounds[1].value)) {
                aCount++;
            }
            else if (parseFloat(gradeData[i].grade) >= parseFloat(bounds[3].value) && parseFloat(gradeData[i].grade) < parseFloat(bounds[2].value)) {
                aMinusCount++;
            }
            else if (parseFloat(gradeData[i].grade) >= parseFloat(bounds[4].value) && parseFloat(gradeData[i].grade) < parseFloat(bounds[3].value)) {
                bPlusCount++;
            }
            else if (parseFloat(gradeData[i].grade) >= parseFloat(bounds[5].value) && parseFloat(gradeData[i].grade) < parseFloat(bounds[4].value)) {
                bCount++;
            }
            else if (parseFloat(gradeData[i].grade) >= parseFloat(bounds[6].value) && parseFloat(gradeData[i].grade) < parseFloat(bounds[5].value)) {
                bMinusCount++;
            }
            else if (parseFloat(gradeData[i].grade) >= parseFloat(bounds[7].value) && parseFloat(gradeData[i].grade) < parseFloat(bounds[6].value)) {
                cPlusCount++;
            }
            else if (parseFloat(gradeData[i].grade) >= parseFloat(bounds[8].value) && parseFloat(gradeData[i].grade) < parseFloat(bounds[7].value)) {
                cCount++;
            }
            else if (parseFloat(gradeData[i].grade) >= parseFloat(bounds[9].value) && parseFloat(gradeData[i].grade) < parseFloat(bounds[8].value)) {
                cMinusCount++;
            }
            else if (parseFloat(gradeData[i].grade) >= parseFloat(bounds[10].value) && parseFloat(gradeData[i].grade) < parseFloat(bounds[9].value)) {
                dCount++;
            }
            else if (parseFloat(gradeData[i].grade) >= parseFloat(bounds[11].value) && parseFloat(gradeData[i].grade) < parseFloat(bounds[10].value)) {
                fCount++;
            }
            console.log(aPlusCount);
            console.log(aCount);
            console.log(aMinusCount);
            barGraph[0].style.paddingTop = aPlusCount * personCount + 'px';
            histogramCount[0].innerHTML = aPlusCount;
            barGraph[1].style.paddingTop = aCount * personCount + 'px';
            histogramCount[1].innerHTML = aCount;
            barGraph[2].style.paddingTop = aMinusCount * personCount + 'px';
            histogramCount[2].innerHTML = aMinusCount;
            barGraph[3].style.paddingTop = bPlusCount * personCount + 'px';
            histogramCount[3].innerHTML = bPlusCount;
            barGraph[4].style.paddingTop = bCount * personCount + 'px';
            histogramCount[4].innerHTML = aCount;
            barGraph[5].style.paddingTop = bMinusCount * personCount + 'px';
            histogramCount[5].innerHTML = bMinusCount;
            barGraph[6].style.paddingTop = cPlusCount * personCount + 'px';
            histogramCount[6].innerHTML = cPlusCount;
            barGraph[7].style.paddingTop = cCount * personCount + 'px';
            histogramCount[7].innerHTML = cCount;
            barGraph[8].style.paddingTop = cMinusCount * personCount + 'px';
            histogramCount[8].innerHTML = cMinusCount;
            barGraph[9].style.paddingTop = dCount * personCount + 'px';
            histogramCount[9].innerHTML = dCount;
            barGraph[10].style.paddingTop = fCount * personCount + 'px';
            histogramCount[10].innerHTML = fCount;
        }
    }
}

bounds.forEach(function(input) {
    input.addEventListener('change', validateBounds);
    input.addEventListener('blur', validateBounds);
})


function handleFileSelect(event) {
    const file = event.target.files[0];

    if (file.type === 'text/csv') {
        const reader = new FileReader();

        reader.onload = function(event) {
            const csvContent = event.target.result;
            const rows = csvContent.split('\n');
            const data = [];

            for(let i = 1; i < rows.length; i++) {
                const columns = rows[i].split(',');
                if (columns.length !== 2) {
                    errorMessage.innerHTML = 'Invalid CSV format: Each row must contain only a name and a grade.';
                    errorMessage.style.display = 'block';
                    return;
                }
                const obj = {};
                obj['name'] = columns[0];
                obj['grade'] = columns[1];
                if (isNaN(parseFloat(obj['grade']))) {
                    errorMessage.innerHTML = 'Invalid CSV format: Grades must be numerical values.';
                    errorMessage.style.display = 'block';
                    return;
                }
                data.push(obj);
            };
            gradeData = data;
            
            for(let i = 0; i < gradeData.length; i++) {
                for(let j = 0; j < gradeData.length; j++) {
                    const grade1 = parseFloat(gradeData[i].grade);
                    const grade2 = parseFloat(gradeData[j].grade);
                    if(grade1 > grade2) {
                        let temp = gradeData[i];
                        gradeData[i] = gradeData[j];
                        gradeData[j] = temp;
                    }
                }
            }
            document.getElementsByClassName('statsContent')[0].innerHTML = gradeData[0].name + '(' +gradeData[0].grade + '%)';
            document.getElementsByClassName('statsContent')[1].innerHTML = gradeData[gradeData.length - 1].name + '(' +gradeData[gradeData.length - 1].grade + '%)';
            function averageGrade() {
                let sum = 0;
                for (let i = 0; i < gradeData.length; i++) {
                    sum += parseFloat(gradeData[i].grade);
                }
                return sum/parseFloat(gradeData.length);
            }
            var averageNumber = averageGrade().toFixed(2);
            document.getElementsByClassName('statsContent')[2].innerHTML = averageNumber + ' %';

            function medianGrade() {
                if (gradeData.length % 2 == 0) {
                    let median = (parseFloat(gradeData[gradeData.length/2].grade) + parseFloat(gradeData[(gradeData.length/2) - 1].grade))/2;
                    return median.toFixed(2);
                } else {
                    return gradeData[Math.floor(gradeData.length/2)].grade;
                }
            }
            var medianNumber = medianGrade();
            document.getElementsByClassName('statsContent')[3].innerHTML = medianNumber + '%';
            
            updateHistogram(gradeData);
        };

        reader.readAsText(file);
        errorMessage.style.display = 'none';
    } else {
        errorMessage.innerHTML = 'Please select a valid CSV file.';
        errorMessage.style.display = 'block';
    }
}



