var allImages = Array.from(document.querySelectorAll(".item img"));
var anotherImg = document.getElementById("lightBox");
var lightBoxContainer=document.getElementById("lightBoxContainer")
var closeBtn =document.getElementById("closeBtn");
var prevBtun=document.getElementById("prev");
var nextBtun=document.getElementById("next");
var currentIndex;
for (var i=0 ;i<allImages.length;i++){
    allImages[i].addEventListener("click",function(e){
        var imageUrl=e.target.src;
        currentIndex=allImages.indexOf(e.target)
        lightBoxContainer.classList.replace("d-none","d-flex")
        anotherImg.style.backgroundImage=`url(${imageUrl})`

    })
}
closeBtn.addEventListener("click",function(){
    lightBoxContainer.classList.replace("d-flex","d-none")
})
 nextBtun.addEventListener("click",nextBtn)
 function nextBtn(){
    currentIndex ++ ;

    if (currentIndex >= allImages.length){
        currentIndex=0;
    }
    var imageUrl =allImages[currentIndex].src;
    anotherImg.style.backgroundImage= `url(${imageUrl})`

    
 }
 prevBtun.addEventListener("click",prevBtn)
 function prevBtn(){
    currentIndex -- ;
    if (currentIndex < 0){
        currentIndex=allImages.length-1;
    }
    var imageUrl =allImages[currentIndex].src;
    anotherImg.style.backgroundImage= `url(${imageUrl})`

    
 }
 function x(e){
     let exept=e.target.id
     console.log(exept);
     if (exept==='lightBoxContainer') {
        lightBoxContainer.classList.replace("d-flex","d-none")
     }
// document.body.
 }
 document.body.addEventListener('click',x)
