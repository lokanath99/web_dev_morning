var para = document.createElement("p");
para.innerText = "This is a para";
var body = document.body;

var h1 = `<h1 class="Heading" id="Heading1">Hello world</h1>`;

body.append(h1);

let btn = document.getElementById("btn_click");
console.log(btn.innerText);

function myClick() {
    var img_ele = document.createElement("img");
    img_ele.src = "./laptop-gf19b3cc32_1280.png";
    img_ele.alt = "laptop image";
    body.append(img_ele);
}

// btn.addEventListener('click', e =>{
//     console.log(e);
//     // e.target.innerText = "you clicked on me";
//     var img_ele = document.createElement('img');
//     img_ele.src = './laptop-gf19b3cc32_1280.png';
//     img_ele.alt = "laptop image";
//     body.append(img_ele);
// })
// para.remove();
// var head1 = document.getElementById("Heading1");
// head1.remove()
// head1.removeAttribute('class');
// head1.innerText = "";
// head1.innerHTML = "<strong>YOur Manipulated</strong>"
// head1.className = "asdfasdf";
// var innertextHead = head1.innerText
// head1.innerText = innertextHead+' Welcome...!!!'
// head1.style.color = 'red';
// head1.setAttribute('title', 'this is a title')
// console.log( head1.getAttribute('class'));
// window.scrollTo(0,100);
// alert('Beware of hackers');
