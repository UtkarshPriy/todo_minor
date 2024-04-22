document.getElementById("addbtn").addEventListener('click', () => {
    if (document.getElementById('form1').checkValidity()) {
        // If all fields are filled, submit the form
        document.getElementById("form1").submit();
    } else {
        // If any required field is empty, display an alert 
        alert('Please fill out all required fields.');
    }


});


document.getElementById('removebtn').addEventListener('click', async () => {
        const radioSelected = document.querySelector('input[name="radio"]:checked');
        if (radioSelected) {

            let res = await fetch('/remove', {
                method: 'POST',
                headers: {
                    'content-Type': 'application/json'
                },

                body: JSON.stringify({
                        desc: radioSelected.value
                    },

                ),
                redirect: "follow"

            })
            window.location.href = "http://localhost:3001";

        } else {
            alert('select for deleting!!');

        }
    }

);