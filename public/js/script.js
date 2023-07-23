const cardList = [
    {
        title: 'St.Kilda Beach', image: 'image/st.Kilda.png', link: 'About St.Kilda', description: 'St.Kilda description'
    },
    {
        title: 'Altona Beach', image: 'image/Altona Beach.png', link: 'About Altona Beach', description: 'Altona Beach description'
    }
];

const clickMe = () => {
    console.log('clickMe clicked');
}



const submitForm = () => {
    let formData = {};
    formData.first_name = $('#first_name').val();
    formData.last_name = $('#last_name').val();
    formData.email = $('#email').val();
    formData.password = $('#password').val();
    document.getElementById('nametag').innerHTML=formData.first_name;

    console.log('form data: ', formData);
}

$(document).ready(function(){
    $('.materialboxed').materialbox();
    $('.modal').modal();

    addCards(cardList);
    $('#formSubmit').click(()=>{
        submitForm();
        
    })
    
});