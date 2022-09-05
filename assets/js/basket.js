let products = [];

if (localStorage.getItem("products") != null) {
    products = JSON.parse(localStorage.getItem("products"))
}

let tableBody = document.querySelector(".table .table-body");


for (const product of products) {
    tableBody.innerHTML += `<tr>
    <td><img src="${product.image}" height="100px" width="100px" class="card-img-top" alt="..."></td>
    <td>${product.name}</td>
    <td>${product.desc}</td>
    <td>${product.count}</td>
    <td class="deleting" ><i class="fa-solid fa-trash-can"></i></td>
  </tr>`

}

let deleteIcon = document.querySelectorAll(".deleting");

   
deleteIcon.forEach(e => {
    e.addEventListener("click",function(){
        this.parentElement.remove() 
        localStorage.removeItem(parentElement);
        
    })    
});

document.querySelector("sup").innerText = getProductsCount(products);

function getProductsCount(items){

    let resultCount = 0;
    for (const item of items) {
        resultCount += item.count
    }
    return resultCount;
}


