        document.getElementById('getAPI').addEventListener('click', getAPI);

        function getAPI() {

            /*********************************************
           *          Using jsonplaceholder API         *
           * ********************************************/

            fetch('https://jsonplaceholder.typicode.com/users')
                .then((res) => { return res.json() })
                .then((data) => {
                    let result = `<h2 class="w3-center w3-allerta w3-xxlarge"> Random User Info From Jsonplaceholder API</h2>`;
                    data.forEach((user) => {
                        const {id, name, email, address:{city,street}} = user
                        result +=
                            `<div class="w3-panel w3-leftbar w3-border w3-round-small w3-border-blue w3-margin">
                                <h5> User ID: ${id} </h5>
                                <ul class="w3-ul">
                                    <li> User Full Name : ${name}</li>
                                    <li> User Email : ${email} </li>
                                    <li> User Address : ${city}, ${street} </li>
                                </ul>
                             </div>`;
                        document.getElementById('result').innerHTML = result;
                    });
                })

        }