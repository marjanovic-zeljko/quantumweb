function SubmitForm(event) {
    event.preventDefault(); // Prevent form submission and page reload
  
    const firstName = document.getElementById("firstname").value;
   
    const email = document.getElementById("email").value;
    const phone = document.getElementById("number").value;
    const message = document.getElementById("answer").value;
  
    const formData = {
      firstName: firstName,
      email: email,
      phone: phone,
      message: message,
      access_key: "58c3d361-0103-46a2-af2a-00eb4c55612e",
    };
  
    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(async (response) => {
        let res = await response.json();
        console.log(res);
        alert(
          `Na Vaš zahtev će biti odgovoreno u najbržem mogućem roku. Hvala na poverenju!`
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }