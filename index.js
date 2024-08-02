function submit() {

var templateParams = {
    patient:document.getElementById('name').value,
    receiver:document.getElementById('email').value,
    age:document.getElementById('age').value,
    date:document.getElementById('date').value,
    time:document.getElementById('time').value,
    mobile:document.getElementById('mobile').value,
  };
  
  emailjs.send('service_hqtx5vb', 'template_d2s65ep', templateParams).then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text);
    },
    (error) => {
      console.log('FAILED...', error);
    },
  );
}
