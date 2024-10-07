function co(){
    let a=document.getElementById('cel').value
    let b=(a*1.8)+32
    document.getElementById('ce').innerHTML=b
    console.log(b)
}


function fa(){
    let c=document.getElementById("far").value
    let d=(c-32)*5/9
    document.getElementById('fa').innerHTML=d
    console.log(d)
}