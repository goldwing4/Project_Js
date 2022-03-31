/*
alert("Hola")
console.log("Hola")
*/
/*
let n1=parseFloat(prompt("Digite numero uno"))
let n2=parseFloat(prompt("Digite numero dos"))
let suma=n1+n2
alert("La suma es: "+suma)
console.log("La suma es: "+suma)
*/
/*function c_suma() {
    let n1=document.getElementById("txtn1").value
    let n2=document.getElementById("txtn2").value
    let suma=parseInt(n1)+parseInt(n2)
    alert("La suma es: "+suma)
    console.log("La suma es: "+suma)
}
*/
let r_suma=()=> {
    let n1=document.getElementById("txtn1").value
    let n2=document.getElementById("txtn2").value
    let suma=parseInt(n1)+parseInt(n2)
    alert("La suma es: "+suma)
    console.log("La suma es: "+suma)
    document.getElementById("txtres").innerHTML="<b> La respuesta es: "+suma+"</b>"
}
let a_suma=()=> {
    let n1=document.getElementById("txtn1").value
    let n2=document.getElementById("txtn2").value
    let r=parseInt(n1)-parseInt(n2)
    alert("La resta es: "+r)
    console.log("La resta es: "+r)
}
let m_suma=()=> {
    let n1=document.getElementById("txtn1").value
    let n2=document.getElementById("txtn2").value
    let m=parseInt(n1)*parseInt(n2)
    alert("La multiplicación es: "+m)
    console.log("La multiplicación es: "+m)
}