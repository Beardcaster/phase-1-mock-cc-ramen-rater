// write your code here

///EXAMPLE DB ENTRY////
// "id": 2,
// "name": "Naruto Ramen",
// "restaurant": "Naruto",
// "image": "./assets/ramen/naruto.jpg",
// "rating": 10,
// "comment": "My absolute fave!"

const fetchURL = "http://localhost:3000/ramens"
const ramenMenu = document.getElementById("ramen-menu")
const details = document.getElementById("ramen-detail")
const ratingLoc = document.getElementById("rating-display")
const ramenForm = document.getElementById("new-ramen")
const newComment = document.getElementById("new-comment")

console.log(ramenForm.name)

ramenForm.addEventListener('submit', e => {
        e.preventDefault();
        const formData = {
            name: ramenForm.name.value,
            restaurant: ramenForm.restaurant.value,
            image: ramenForm.image.value,
            rating: ramenForm.rating.value, 
            comment: newComment.value
        }
        console.log(formData);
        renderMenuImage(formData);
        ramenForm.reset();
})

fetch(fetchURL)
  .then(resp => resp.json())
  .then(data => {
    
    data.forEach(renderMenuImage);
  })

function submitForm (formData) {
    renderMenuImage(formData)
}


function renderMenuImage(menuItems){
    
    const ramenImage = document.createElement("img")
    ramenImage.src = menuItems.image;
    ramenImage.classList = "menu-item"
    ramenMenu.appendChild(ramenImage);
    
    ramenImage.addEventListener("click", e => {

        const detailsImage = document.createElement("img")
        const ramenName = document.createElement("h2")
        const restName = document.createElement("h3")
        
        details.innerHTML = "";
        restName.innerHTML = "";
        
        detailsImage.src = e.target.src;
        detailsImage.classList = "detail-image"
        details.appendChild(detailsImage);
        
        console.log("click")
        ramenName.innerText = menuItems.name;
        ramenName.classList = "name"
        details.appendChild(ramenName)
        
        restName.innerText = menuItems.restaurant;
        restName.classList = "restaurant"
        details.appendChild(restName)
        
        const rating =  document.getElementById("rating-display")  
        rating.innerText = menuItems.rating;

        const comment = document.getElementById("comment-display")
        comment.innerText = menuItems.comment;




        //make image large and populate details
    })
}

