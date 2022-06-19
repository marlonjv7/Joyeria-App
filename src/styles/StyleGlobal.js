import styled from "styled-components"

export const DIV = styled.div`
 
 .img1 {
    width: 13px;
    height: 15px;
}

.img2 {
    width: 19px;
    height: 16px;
}

.img3 {
    width: 18px;
    height: 14px;
}
`

export const IMGBG = styled.img`
    mix-blend-mode: multiply;
`

export const BtnVideo = styled.button`
background-color: transparent;
border: none;
`

export const BtnSize = styled.button`
background-color: transparent;
border: none;
width: 30px;
height: 30px;

&&:hover{
    background-color: rgb(203, 203, 203);
    border-radius: 50px;
}
`

export const DivCarrusell = styled.div`

 .car1{
     top: 110px;
     width: 384px;
     height: 390px;
 }
  
 .car1img{
     width: 400px;
     height: 500px;
 }
     
 .car2{
    width: 90px;
    height: 90px;
    top: 79px;
    left: 310px;
}
.car3{
    top: 150px;
    left: 420px;
    font-size: 50px;
}
.car4{
    border-left: 10px solid black;
    width: 700px;
    height: 256px !important;
    left: 350px;
    top: 280px;
}

.car4P{
    top: 470px;
    right: -55px;
    width: 160px;
    line-height: 12px;
    letter-spacing: 3px;
}

.car6{
    top: 460px;
    left: 80px;
}

.car6 img{
    margin: 1%;
}

`

export const IMGLINK = styled.img`
cursor: pointer;
`