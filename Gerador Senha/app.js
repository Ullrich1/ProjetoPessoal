function clique() { //é executado quando o evento clique é acionado

        let texto = document.getElementById("textInput").value; //pega o texto do input
        let codigo = texto.toLowerCase().charCodeAt(0) - 97 + 1 //converte letras para números
        let res = document.getElementById("res").innerHTML = codigo; //escreve o valor do input na div "res"

        for (let i = 0; i < texto.length; i++) {
                alert(texto.charAt(i));        //codigo que conta letras individualmente, arrumar depois
        }

}
