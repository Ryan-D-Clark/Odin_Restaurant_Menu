(()=>{"use strict";let e=document.getElementById("content"),n=document.getElementById("content"),t=document.getElementById("content"),i=document.getElementById("content"),a=document.createElement("div"),d=document.createElement("div"),l=document.createElement("div"),c=document.createElement("div"),m=document.createElement("div");a.id="header",d.id="title",c.id="home",l.id="menu",m.id="contact",c.classList.add("tab"),l.classList.add("tab"),m.classList.add("tab"),c.classList.add("active-tab"),i.appendChild(a),a.appendChild(d),a.appendChild(c),a.appendChild(l),a.appendChild(m),d.innerHTML="Clark's Pizza",c.innerHTML="Home",l.innerHTML="Menu",m.innerHTML="Contact",function(){let n=document.createElement("div");n.id="display-home",n.classList.add("tab-content","active-content");let t=document.createElement("div");t.id="home-title",t.innerHTML="Clark's \n Pizza",n.appendChild(t),e.appendChild(n)}(),function(){let e=document.createElement("div");e.id="display-menu",e.classList.add("tab-content"),n.appendChild(e);let t=document.createElement("div");t.id="pizza-menu";let i=document.createElement("div");i.id="menu-title",i.innerHTML="Clark's Pizza",t.appendChild(i);let a=document.createElement("div");a.id="pizza-list",t.appendChild(a);let d=[{name:"Margherita",desc:"Tomato sauce and cheese",price:"£8.40"},{name:"Funghi",desc:"With mushrooms",price:"£11.20"},{name:"Chorizo Pizza",desc:"Chorizo, red onion, mixed bell peppers, fresh cherry tomatoes",price:"£11.20"},{name:"Pepperoni",desc:"With pepperoni",price:"£11.20"},{name:"Tandoori Chicken",desc:"Tandoori chicken and onions",price:"£11.20"},{name:"Mexicana",desc:"Topped with home made bolognese and jalapenos",price:"£12.70"}];for(let e in d){let n=document.createElement("div");n.classList.add("pizza");let t=document.createElement("div");t.innerHTML=d[e].name,t.classList.add("pizza-name");let i=document.createElement("div");i.innerHTML=d[e].desc,i.classList.add("pizza-desc");let l=document.createElement("div");l.innerHTML=d[e].price,l.classList.add("pizza-price"),n.appendChild(t),n.appendChild(i),n.appendChild(l),a.appendChild(n)}e.appendChild(t)}(),function(){console.log("Testing");let e=document.createElement("div");e.id="display-contact",e.classList.add("tab-content"),t.appendChild(e);let n=document.createElement("div");n.id="form-container",e.appendChild(n),n.innerHTML+='\n    <h2 id="form-title">Get in touch with us</h2>\n    <form id="feedback-form" action=".">\n        <label for="fname">First name:</label><br>\n        <input type="text" id="fname" name="fname" placeholder="John">\n\n        <br>\n\n        <label for="lname">Last name:</label><br>\n        <input type="text" id="lname" name="lname" placeholder="Smith">\n\n        <br>\n\n        <label for="mobile">Mobile:</label><br>\n        <input type="mobile" id="mobile" name="mobile">\n\n        <br>\n\n        <label for="mail">Email:</label><br>\n        <input placeholder="John@Smith.com" type="email" id="mail" name="mail">\n\n        <br><br>\n\n        <textarea rows="20" id="feedback" placeholder="Enter your feedback here" id="comments" name="comments"></textarea>\n\n        <br><br>\n        <input id="submit-button" type="submit" value="Submit">\n    </form>'}();let o=["display-home","display-menu","display-contact"],r=document.querySelectorAll(".tab");for(let e=0;e<r.length;e++)r[e].addEventListener("click",(function(){for(let e=0;e<r.length;e++)r[e].classList.remove("active-tab");r[e].classList.add("active-tab");for(let e in o)document.getElementById(o[e]).style.display="none";document.getElementById(o[e]).style.display="block"}))})();