
let jours = ["Dimanche","Lundi", "Mardi","Mercredi","Jeudi","Vendredi","Samedi"]
let mois = ["","Janvier","Février", "Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"]
let heures = ["","10h00","10h30", "11h00","11h30","12h00","12h30","13h00","13h30","14h00","14h30","15h00","15h30","16h00","16h30", "17h00","17h30","18h00","18h30","19h00","19h30"];

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

   $('.labelDate').html(labelDate);
   
}

function setLabelHourSelected(){
    
}

function goToReservations(){
    location.href = 'reservations.html';
}

function chooseReservation(id){
    if($('#'+id).hasClass('dispo')){
        $("#resaModal").modal('show');
        $('#labelSelectedHour').html(heures[id]);
    }
}