const template = document.createElement("template");
template.innerHTML = `
      
  <style>
  .circle2{
    width: 20px;
    height:20px;
    border-radius:50%;
    border:2px solid green;
    cursor:pointer;
    background: lawngreen;
    position:relative;
    left:-2rem;
    bottom:-2.5rem
  
  
  

  }
  .container{
    display:flex;
    padding-left:50px;
    flex-direction: column;
    gap:15px;
  
    
  

  }
  
  svg{
    width:10px;
    padding:5px;
  

  }

  .hidden{
    fill: white;
  }

  </style>

  <div class= "container">
   <div class ="circle2" id="circle2"><svg class = "hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
   
   </div>
  <div>
  <slot></slot>
   </div>  
  </div>
  
`



class Main extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

  connectedCallback(){
    const change = document.getElementById("circle2");
    change.addEventListener("click" , () =>{
     document.style.backgroundColor = green;
     
    })
  }
}
window.customElements.define('my-main' , Main);


class Button extends HTMLElement{
  constructor(){
      super()
      const shadow = this.attachShadow({mode: "open"})
      const color = this.getAttribute('color')
      const button = document.createElement('button')
      button.innerHTML =` 
      <slot></slot>
     
      <style>
         button{
             width: 130px;
             height: 40px;
             border-radius: 35px;
             color:#A8A8A8;
             border:none;
             font-size: 18px;
             position:relative;
             right:-6.5rem;
             margin-bottom:20px   
         }

      
      </style>        
      `
      button.style.background = color;
      shadow.appendChild(button)
  }
}

customElements.define("button-comp", Button)


