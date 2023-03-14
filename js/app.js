const fs = require("fs");
const path = require("path");
// const {exec} = require("child_process")



var btnComenzar = document.getElementById("btnComenzar");
var seg = document.getElementById("inputSegundos");
var dir = document.getElementById("inputDir");

dir.addEventListener("dragover",e =>{
   e.preventDefault()//* <==
});
dir.addEventListener("drop",e =>{
   e.preventDefault()//* <==
   dir.value = "";
   let files = e.dataTransfer.files;//* <==

   for (let i = 0; i < files.length; i++)
   {
      let camino = files[i].path;
      dir.value += camino+"\n";
   }

   if(document.getElementById("inputSegundos").value != "")
   {
      btnComenzar.removeAttribute("disabled");
   }
});






function elimina(vd)
{
   let arr = vd.split("\n");
   arr.pop();

   arr.forEach(camino=>{
     if(path.extname(camino)!="")
     {
       fs.unlinkSync(camino);
     }
     else
     {
       fs.rmdirSync(camino,{recursive:true});
     }
   });
}









btnComenzar.addEventListener("click",()=>{
   // let dirV = document.getElementById("inputDir").value;

   let segV = parseInt(seg.value);

   let v1 = document.getElementById("v1");
   let v2 = document.getElementById("v2");

   v1.setAttribute("hidden", true);
   v2.removeAttribute("hidden");

   let c = document.getElementById("contador");
   c.innerHTML = segV;

  let t = setInterval(()=>{  
   if (segV != 0){segV--;}
      c.innerHTML = segV;
      if (segV == 0)
      {
        elimina(dir.value); 
        clearInterval(t);
      }
   },1000);
});



function valComienzo()
{
  if(path.isAbsolute(dir.value.replace(/\n/g,"")) && seg.value != "")
  {
   btnComenzar.removeAttribute("disabled");
  }
  else
  {
   btnComenzar.setAttribute("disabled",true);
  }
}


dir.addEventListener("input", e =>{
   valComienzo();
});

seg.addEventListener("input", e =>{
   valComienzo()
 });