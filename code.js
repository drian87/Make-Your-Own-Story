// To run this assignment, right click on index.html in the Visual Studio file explorer to the left
// and select "Open with Live Server"

// You can access the story by using the pages array.
// You can find the pages array in story.js
// The first page is at index 0.
console.log(pages[0]);

let endingPages = [4, 9, 13, 17, 19, 20];
let currentPage = 0;
let responsePage

while (currentPage !==null){

     responsePage=(prompt(`${pages[currentPage]}`))
    
    let responsePageNumber= parseInt(responsePage)
    let pageIndex
    let nextPage

     if (responsePage === null || responsePage === ""){
        storyBreak= `<br><h2/>Refresh page and try again, you did not get to the end of the story</h2></br>`
        document.write(`${storyBreak}`)
        break
     } 

    function pageEnd(){
        for (let index =0; index<endingPages.length; index +=1){
            pageIndex=endingPages[index]

            
            if(responsePageNumber === pageIndex){
                currentPage=null
                return true
             }else if (responsePageNumber !== pageIndex){
                currentPage=null
                }
         }
         return false
    }
    
    let pageEndFunction= pageEnd()

 if (pageEndFunction !== false){
         document.write(`<br>${pages[pageIndex]}</br><h2>The End</h2>`)
     }else if (pageEndFunction === false){
         currentPage=responsePageNumber
         let printStory =`<br> ${pages[currentPage]}</br>`
         document.write(printStory)
     } 
}
