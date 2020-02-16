

function cancel(){
        alert("You canceled your event");
        returntoPreviousPage();
        return false;
}

function formValidation()
{
    let eventTitle = document.getElementById("evt").value;
    let eventDate = document.getElementById("evd").value;
    let NextEventDate = document.getElementById("evd1").value;
    let postingDate = document.getElementById("pd").value;
    if (eventTitle == ""){
        alert("Please fill out the event title.");
        return false;
    }
    else if (eventDate == ""){
        alert("Please fill out the event date.");
        return false;
    }
    else if (NextEventDate == ""){
        alert("Please fill out the next event date but if you plan to make it a one day event, just input the same date.");
        return false;
    }
    else if (postingDate == ""){
        alert("Please fill out the posting date.");
        return false;
    }
    else{
        alert("Event successfully created.")
        return true;
    }

}
