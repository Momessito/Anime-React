import '../App.css'
import React from "react"

var isFalse = false

function Burgers(){
return(
<div id='burger' onClick={animationBuger}>
    <div id='b'></div>
    <div id='c'></div>
    <div id='d'></div>

</div>
)

function animationBuger(){
if(isFalse === false){
    document.getElementById('b').style.transform = 'rotate(45deg)translate(3px,01px)'
    document.getElementById('c').style.display = 'none'
    document.getElementById('d').style.transform = 'rotate(315deg)translate(3px,-2px)'
    document.getElementById('sideMenu').style.transform = 'translateX(0px)'
    isFalse = true
}else if(isFalse === true){
    document.getElementById('b').style.transform = 'rotate(0deg)translate(0px,0px)'
    document.getElementById('c').style.display = 'block'
    document.getElementById('d').style.transform = 'rotate(0deg)translate(0px,0px)'
    document.getElementById('sideMenu').style.transform = 'translateX(-200px)'
     isFalse = false
}
    }

}


export default Burgers
