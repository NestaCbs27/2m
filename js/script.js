
let jours = ["Dimanche","Lundi", "Mardi","Mercredi","Jeudi","Vendredi","Samedi"]
let mois = ["Janvier","Février", "Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"]

$( document ).ready(function() {
    document.getElementById('date').valueAsDate = new Date();
    setDate(document.getElementById('date'))
});

function setDate(date){
    let dayNumber = date.valueAsDate.getDay();
    let dayLabel = jours[dayNumber];
    let day =  date.value.split('-')[2];
    let monthNumber = date.value.split('-')[1];
    let year =  date.value.split('-')[0];

    if(monthNumber.startsWith('0')){
        monthNumber = monthNumber.replace('0','')
    }

    let month = mois[monthNumber];

    let labelDate = dayLabel + ' ' + day + ' ' + month + ' ' + year

    if(day === 0 ){
        // dimanche
    }

   $('#labelDate').html(labelDate)

   
}

function goToReservations(){
    location.href = 'reservations.html';
}

function chooseReservation(id){
    if($('#'+id).hasClass('dispo')){
        $('#'+id).removeClass('dispo');
        $('#'+id).addClass('nondispo')
    }
}