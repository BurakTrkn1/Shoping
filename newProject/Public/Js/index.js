const product = [
    {
        id: 1,
        name: "Dell",
        description: "Dell Inspiron 15 3000 Series",
        price: "2900tl",
        quantity: 0,
        image: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MP_176653388?x=536&y=402&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=536&ey=402&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=536&cdy=402"
    }
    , {
        id: 2,
        name: "DELL Pro",
        description: "DELL Pro P P2726DEB 2560x1440 HDMI DP Type-C HDR10 LCD 27 inç QHD 8 ms 100 Hz Monitör Siyah",
        price: "4000Tl",
        quantity: 0,
        image: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MP_176992236?x=536&y=402&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=536&ey=402&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=536&cdy=402"
    }
    , {
        id: 3,
        name: "ASUS Tuf VG27AQE5A",
        description: "ASUS Tuf VG27AQE5A 27 inç 0.3 ms 165 Hz HDR 2K Fast IPS FreeSync VE G-Sync Gaming Monitör",
        price: "6999Tl",
        quantity: 0,
        image: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_175225026?x=320&y=320&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=320&ey=320&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=320&cdy=320"
    }
    , {
        id: 4,
        name: "SAMSUNG Odyssey G4",
        description: "SAMSUNG LS25HG402EUXUF Odyssey G4 25 inç 1 ms 300 hz FHD Gaming Monitör",
        price: "7000Tl",
        quantity: 0,
        image: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MP_176992236?x=536&y=402&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=536&ey=402&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=536&cdy=402"
    }
    , {
        id: 5,
        name: "MSI Pro MP271 E14A",
        description: "MSI Pro MP271 E14A 27 inç 144 hz 1 ms (MPRT) Flat FHD IPS Freesync Monitör",
        price: "8000Tl",
        quantity: 0,
        image: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MP_176992236?x=536&y=402&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=536&ey=402&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=536&cdy=402"
    }
]

document.addEventListener("DOMContentLoaded", function () {

    const productContainer = document.getElementById("products");

    product.forEach((item) => {
        const card = `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 ">
 <div class="card" style="width: 18rem;" id=${item.id}>
  <img src=${item.image} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${item.name}</h5>
    <p class="card-text">${item.description}</p>
    <p class="card-text">${item.price}</p>
    <div class="d-flex justify-content-between">
  <a href="#" class="btn btn-primary">Go somewhere</a>
  <button  class="btn btn-primary" onclick="addToCart(${item.id})">Sepete Ekle</button>
  
    </div>
  
  </div>
</div>
            </div>
       `
        productContainer.innerHTML += card;
    })
    document.getElementById("basket").style.display = "block";


})
let basket = []
function addToCart(productId) {
    const selectedProduct = product.find(item => item.id === productId);
    console.log(selectedProduct)
    const exitingItem = basket.find(item => item.id === productId);
    console.log(exitingItem)
    if (exitingItem) {
        exitingItem.quantity += 1
        exitingItem.price = parseInt(exitingItem.price) + parseInt(exitingItem.price)
    }
    else {
        console.log("select", selectedProduct)
        basket.push({ ...selectedProduct, quantity: 1 });
        console.log(basket)
    }


    let allItems = ""
    basket.map(item => {
        allItems += `<tr>
    <th scope="row">${item.id}</th>
    <td><img src="${item.image}" style="width:50px;height:50px;"> ${item.name}</td>
    <td>${item.description}</td>
    <td>${item.price} ₺</td>
    <td>${item.quantity} ₺</td>
    <td><button class="btn btn-primary" onclick="increaseQuantity(event,${item.id})">+</button></td>
    <td><button class="btn btn-primary" onclick="decreaseQuantity(event,${item.id})">-</button></td>
    <td><button class="btn btn-danger" onclick="removeFromCart(event,${item.id})">Remove</button></td>
</tr>`

    })
    document.getElementById("basket-items").innerHTML = allItems;
    console.log(basket);
}

function removeFromCart(event, productId) {
    event.target.closest('tr').remove();
    basket = basket.filter(item => item.id != productId);

}
function increaseQuantity(event, id) {
    const item = basket.find(item => item.id === id);
    if (item) {
        item.quantity += 1;
        item.price = parseInt(item.price) + parseInt(item.price);
    }

    let allItems = "";
    basket.forEach(item => {
        allItems += `<tr>
            <th scope="row">${item.id}</th>
            <td><img src="${item.image}" style="width:50px;height:50px;"> ${item.name}</td>
            <td>${item.description}</td>
            <td>${item.price} ₺</td>
            <td>${item.quantity}</td>
            <td><button class="btn btn-primary" onclick="increaseQuantity(event,${item.id})">+</button></td>
            <td><button class="btn btn-primary" onclick="decreaseQuantity(event,${item.id})">-</button></td>
            <td><button class="btn btn-danger" onclick="removeFromCart(event,${item.id})">Remove</button></td>
        </tr>`;
    });
    document.getElementById("basket-items").innerHTML = allItems;

    console.log(basket);
}
function decreaseQuantity(event, id) {
    const item = basket.find(item => item.id === id);
    const price = product.find(item => item.id === id).price
    console.log(price)
    if (item) {
        item.quantity -= 1;
        item.price = parseInt(item.price) - parseInt(price);
    }
    let allItems = "";
    basket.forEach(item => {
        allItems += `<tr>
            <th scope="row">${item.id}</th>
            <td><img src="${item.image}" style="width:50px;height:50px;"> ${item.name}</td>
            <td>${item.description}</td>
            <td>${item.price} ₺</td>
            <td>${item.quantity}</td>
            <td><button class="btn btn-primary" onclick="increaseQuantity(event,${item.id})">+</button></td>
            <td><button class="btn btn-primary" onclick="decreaseQuantity(event,${item.id})">-</button></td>
            <td><button class="btn btn-danger" onclick="removeFromCart(event,${item.id})">Remove</button></td>
        </tr>`;
    });
    document.getElementById("basket-items").innerHTML = allItems;

    console.log(basket);

}
