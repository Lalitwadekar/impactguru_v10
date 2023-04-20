// Accordion........................................................................
let acc = document.getElementsByClassName("story_box3_accordion")
let accheight = document.getElementById("main")
let i;

for(i = 0; i < acc.length; i++){
    acc[i].addEventListener("click", function(){
        document.body.classList.toggle("active")
        let panel = this.nextElementSibling;
        if(panel.style.display === "block"){
            panel.style.display = "none";
            panel.previousSibling.display='none';
            // accheight.style.grid-template-rows='600px 3533px 1000px 300px 300px 300px';
            
        }
        else{
            panel.style.display = "block";
            panel.previousSibling.display='none';
            console.log(panel.previousSibling.innerHTML)
          
        }
    })
}
















// let acc = document.getElementsByClassName("story_box3_accordion")
// let i;

// for(i = 0; i < acc.length; i++){
//     acc[i].addEventListener("click", function(){
//         document.body.classList.toggle("active")
//         let panel = this.nextElementSibling;
//         if(panel.style.display === "block"){
//             panel.style.display = "none";
//             panel.previousSibling.display='none';

//         }
//         else{
//             panel.style.display = "block";
//             panel.previousSibling.display='none';
          
//         }
//     })
// }


// Medical Documents................................................................
function myFunction(imgs){
let expandedImg = document.getElementById("expanded_img");
expandedImg.src = imgs.src;
expandedImg.parentElement.style.display = "block";

}

// Section5_FAQ's..................................................................

let faqAcc = document.getElementsByClassName("faq_box1_accordion")
let k;

for(k = 0; k < faqAcc.length; k++){
    faqAcc[k].addEventListener("click", function(){
        document.body.classList.toggle("active")
        let faqPanel = this.nextElementSibling;
        if(faqPanel.style.display === "block"){
            faqPanel.style.display = "none";
        }
        else{
            faqPanel.style.display = "block";
        }
    })
}