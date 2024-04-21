document.getElementById("addbtn").addEventListener('click', () => {

    document.getElementById("form1").submit();
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
                })

            })
            console.log(res);
            // window.location.href = "http://localhost:3001/";
        } else {
            alert('select for deleting!!');

        }
    }

);