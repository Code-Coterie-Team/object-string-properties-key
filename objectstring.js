
// function convertToJson(){
//     let form=document.getElementById('dataForm');
//     let formData={};
//     console.log();
//     for (let i =0; i < form.elements.length; i++){
//         let element=form.elements[i];
//         console.log()
//         if (element.type !== "submit"){
//             formData[element.name]=element.value;
//         }

//     }
//     let jsonData=JSON.stringify(formData);
//     let jsonOutput = document.getElementById("jsonOutput");
//     jsonOutput.innerHTML = "<pre>" + jsonData + "</pre>";
// }
 



function stringSelect(object){
   
    for( const key in object){
        if(typeof object[key]==="string"){
            console.log( `${key}: ${object[key]}`) ;
        }
    }
}
let result=stringSelect({name:'arezoo',family:'amiri',age:20,geneder:"f"})
