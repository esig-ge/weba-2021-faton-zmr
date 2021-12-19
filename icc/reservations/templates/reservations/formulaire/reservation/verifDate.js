var date = document.getElementById(id_date);

date.value

function errorIfDateIsPast(a){
    if (a.value < Date() ){
        document.body.style.backgroundColor = 'red'
    }
}

function getDateSelected(id_date){
    return document.getElementById(id_date)
}
