const fname = document.getElementById('fname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const slass = document.getElementById('slass');
const anim = document.getElementById('anim');
const db = document.getElementById('db');
const rec = document.getElementById('rec');
const foto = document.getElementById('foto');

const submit = document.getElementById('submit');

submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    let ebody = `
    <p><strong>ФИО:</strong> ${fname.value}</p>
    <p><strong>Почта:</strong> ${email.value}</p>
    <p><strong>Телефон:</strong> ${phone.value}</p>
    <p><strong>Классификация:</strong> ${slass.value}</p>
    <p><strong>Анимации:</strong> ${anim.value}</p>
    <p><strong>Наличие базы данных:</strong> ${db.value}</p>
    <p><strong>Наличие рекламы на сайте:</strong> ${rec.value}</p>
    <p><strong>Дизайн для вёрстки:</strong> ${foto.value}</p>
    `;

    Email.send({
        SecureToken : "8376cccf-506f-4b61-b409-9206d31bfbc6", //add your token here
        To : 'yockbro2021@gmail.com', 
        From : "yockbro2021@gmail.com",
        Subject : "PROWEB",
        Body : ebody
    }).then(
      message => alert(message)
    );
});

// 713CF9BD41D2ACB07C4191BCFB9C553A32DC