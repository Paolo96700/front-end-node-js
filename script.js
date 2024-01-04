
// Get form values
const email = document.getElementById('email');
const name = document.getElementById('name');
const telephone = document.getElementById('telephone');
const contact = document.getElementsByName('contact');
const sendMail = document.getElementById('sendMail');

const submit = document.getElementById('submit');


submit.addEventListener('click', function() {
    inviaRichiesta(sendMail, email, name, telephone, contact);
});

function inviaRichiesta(sendMail, email, name, telephone, contact) {

    if(sendMail.checked){

        //Test - Dati da inviare al backend
        const dati = {
            email: email.value,
            name: name.value,
            telephone: telephone.value,
            contact: contact[0].checked ? contact[0].value : contact[1].value,
            sendMail:sendMail.checked ? true : false
            
            // Aggiungi altre chiavi e valori secondo necessità
        };

        // Esegui la richiesta POST utilizzando Axios
        axios.post('http://localhost:8000/api/mail/createMail', dati, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-Frontend': 'vincenzo',
                // 'X-Frontend': 'paolo',
            },
            body: JSON.stringify(dati)
        })
        .then(response => {
            alert(response.data.message);
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        });

    }else{
       console.log('errore: devi spuntare la checkbox');
    }

}


// function inviaRichiesta() {
//     // Get form values
//     const email = document.getElementById('email').value;
//     const name = document.getElementById('name').value;
//     const telephone = document.getElementById('telephone').value;
//     const contact = document.getElementById('contact').value;

//     //Test - Dati da inviare al backend
//     const dati = {
//         email: email,
//         name: name,
//         telephone: telephone,
//         contact: contact
        
//         // Aggiungi altre chiavi e valori secondo necessità
//     };

//     // Esegui la richiesta POST utilizzando Axios
//     axios.post('http://localhost:8000/api/mail/createMail', dati, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json',
//         },
//         body: JSON.stringify(dati)
//     })
//     .then(response => {
//         alert(response.data.message);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         alert('An error occurred. Please try again.');
//     });

// }


