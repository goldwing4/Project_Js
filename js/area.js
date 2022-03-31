let area_r=()=> {
    let base=document.getElementById("txtbase").value
    let altura=document.getElementById("txtaltura").value
    let a=parseFloat(base)*parseFloat(altura)
    alert("El area del rectangulo es: "+a)
    console.log("El area del rectangulo es: "+a)
    document.getElementById("txtresp").innerHTML="<b> El area del rectangulo es: "+a+"</b>"
}
let limpiar=()=> {
    document.getElementById("txtbase").value=""
    document.getElementById("txtaltura").value=""
}