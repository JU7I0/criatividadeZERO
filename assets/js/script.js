let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");
let mapa = document.querySelector("#mapa");
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;

function validaNome() {
    let txtNome = document.querySelector("#txtNome");
    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome inválido";
        txtNome.style.color = "#f00";
        nomeOk = false;
    } else {
        txtNome.innerHTML = "Nome válido";
        txtNome.style.color = "#537A5A";
        nomeOk = true;
    }
}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail");
    if (email.value.indexOf("@") === -1) {
        txtEmail.innerHTML = "Email inválido";
        txtEmail.style.color = "#f00";
        emailOk = false;
    } else {
        txtEmail.innerHTML = "Email válido";
        txtEmail.style.color = "#537A5A";
        emailOk = true;
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto" );

    if (assunto.value.length > 100) {
        txtAssunto.innerHTML = "Texto muito grande. Digite no máximo 100 caracteres";
        txtAssunto.style.color = "#f00";
        txtAssunto.style.display = "block";
        assuntoOk = false;
    } else {
        txtAssunto.style.display = "none";
        assuntoOk = true;
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert("Formulário enviado com sucesso!");
    } else if (nomeOk == true && emailOk == true) {
        alert("Obrigado por assinar nossa NEWSLATTER!!!");
    }else {
        alert("Preencha o formulário corretamente!")
    }
}

anime({
    targets: ".row svg",
    translateY: 10,
    autoplay: true,
    loop: true,
    easing: "easeInOutSine",
    direction: "alternate",
});

anime({
    targets: "#zero",
    translateX: 10,
    autoplay: true,
    loop: true,
    easing: "easeInOutSine",
    direction: "alternate",
    scale: [{ value: 1 }, { value: 1.4 }, { value: 1, delay: 250 }],
    rotateY: { value: "+=180", delay: 200 },
});
