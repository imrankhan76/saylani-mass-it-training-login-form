function Submit() {
    
    var country = document.getElementById('country').value;
    var City = document.getElementById('City').value;
    var Course = document.getElementById('Course').value;
    var skill = document.getElementById('skill').value;
    var name = document.getElementById('name').value;
    var fname = document.getElementById('fname').value;
    var mail = document.getElementById('mail').value;
    var phone = document.getElementById('phone').value;
    var cnic = document.getElementById('cnic').value;
    var fcnic = document.getElementById('fcnic').value;
    var date = document.getElementById('date').value;
    var gender = document.getElementById('gender').value;
    var address = document.getElementById('address').value;
    var qualification = document.getElementById('qualification').value;
    var havelaptop = document.getElementById('havelaptop').value;

    
    console.log(`
        Your Form is Submitted Successfully!
    
        Country: ${country}
        City: ${City}
        Course: ${Course}
        Skill: ${skill}
        Name: ${name}
        Father's Name: ${fname}
        Email: ${mail}
        Phone: ${phone}
        CNIC: ${cnic}
        Father's CNIC: ${fcnic}
        Date of Birth: ${date}
        Gender: ${gender}
        Qualification: ${qualification}
        Address: ${address}
        Have Laptop: ${havelaptop}
    `);
}
