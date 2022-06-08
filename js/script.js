const cats = [
    {
        breeds: [],
        id: "d5",
        url: "https://cdn2.thecatapi.com/images/d5.png",
        width: 600,
        height: 588
    },
    {
        breeds: [],
        id: "1ck",
        url: "https://cdn2.thecatapi.com/images/1ck.jpg",
        width: 968,
        height: 968
    },
    {
        breeds: [],
        id: "1dl",
        url: "https://cdn2.thecatapi.com/images/1dl.jpg",
        width: 612,
        height: 612
    }
]

let galaryBlockImg = document.querySelector(".galary-block-img");
let iconItem = document.querySelector(".icon-item");
let iconItemActive = document.querySelector(".icon-item-active");
iconItem
.addEventListener('click', function(){
    iconItemActive.style.display = "inline-block";
    iconItem.style.display = "none";
});
iconItemActive.addEventListener('click', function(){
    iconItemActive.style.display = "none";
    iconItem.style.display = "inline-block";
});
