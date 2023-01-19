let arr = [
    { foodName: "burger", foodCategory: "Snacks", isJunkFood: "yes", calories: "400", foodItemImageUrl: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew-207p.jpg" },
    { foodName: "sandwich", foodCategory: "Lunch", isJunkFood: "no", calories: "361", foodItemImageUrl: "https://static.toiimg.com/thumb/83740315.cms?imgsize=361903&width=509&height=340" },
    { foodName: "omlette", foodCategory: "breakfast", isJunkFood: "no", calories: "154", foodItemImageUrl: "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_730,h_913/k%2FPhoto%2FSeries%2F2022-07-How-To-Make-an-Omelet-Step-by-Step%2F2022_July_K_EDR_OMELET_31904" },
    { foodName: "noodles", foodCategory: "snacks", isJunkFood: "yes", calories: "138", foodItemImageUrl: "https://www.whiskaffair.com/wp-content/uploads/2020/10/Veg-Hakka-Noodles-2-1.jpg" },
    { foodName: "taco", foodCategory: "snacks", isJunkFood: "no", calories: "226", foodItemImageUrl: "https://www.bigbasket.com/media/uploads/recipe/w-l/887_1.jpg" },
    { foodName: "grilled chicken ", foodCategory: "Dinner", isJunkFood: "no", calories: "284", foodItemImageUrl: "https://www.simplyrecipes.com/thmb/4NdKHB21lsPJ5NYf2nk9nxIQihg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Grilled-Chicken-LEAD-SEO-Vertical-3c66b6ae87184189920ad84f3f1db6bb.jpg" },
    { foodName: "HotDog", foodCategory: "Lunch", isJunkFood: "no", calories: "290", foodItemImageUrl: "https://5.imimg.com/data5/NV/OA/GLADMIN-14476980/fsdf-250x250.png" },
    { foodName: "Pizza", foodCategory: "snacks", isJunkFood: "yes", calories: "266", foodItemImageUrl: "https://static.toiimg.com/thumb/msid-87930581,imgsize-211826,width-800,height-600,resizemode-75/87930581.jpg" },
    { foodName: "Suffola Oats", foodCategory: "breakfast", isJunkFood: "no", calories: "150", foodItemImageUrl: "https://minimalistbaker.com/wp-content/uploads/2020/09/Instant-Pot-ROLLED-OATS-Perfect-tender-creamy-FAST-instantpot-plantbased-howto-oats-recipe-minimalistbaker-8.jpg" },
    { foodName: "Poha", foodCategory: "breakfast", isJunkFood: "no", calories: "260", foodItemImageUrl: "https://pipingpotcurry.com/wp-content/uploads/2020/12/Poha-Recipe-Piping-Pot-Curry-1131x1536.jpg" },
];
let arrr = "";
arr.filter(function (item) {
    arrr += `<div class="maincontainer">
                                <img src='${item.foodItemImageUrl}'>
                                <ul><li>FoodName - ${item.foodName}</li>
                                <li>FoodCategory - ${item.foodCategory}</li>
                                <li>IsJunkFood - ${item.isJunkFood}</li>
                                <li>Calories - ${item.calories}</li>
                                </ul>
                                </div>`;
    document.querySelector(".first-container").innerHTML = arrr;
});
function filterfun(category) {
    arrr = "";
    if (category === "breakfast") {
        arr.filter(function (item) {
            if (item.foodCategory === "breakfast") {
                arrr += `<div class="maincontainer">
                                <img src='${item.foodItemImageUrl}'>
                                <ul><li>FoodName - ${item.foodName}</li>
                                <li>FoodCategory - ${item.foodCategory}</li>
                                <li>IsJunkFood - ${item.isJunkFood}</li>
                                <li>Calories - ${item.calories}</li>
                                </ul>
                                </div>`;
                document.querySelector(".first-container").innerHTML = arrr;
            }
        });
    }
    else if (category === "calories") {
        arr.filter(function (item) {
            if (item.calories < 300) {
                arrr += `<div class='maincontainer' >
                                <img src='${item.foodItemImageUrl}'>
                                <ul><li>FoodName - ${item.foodName}</li>
                                <li>FoodCategory - ${item.foodCategory}</li>
                                <li>IsJunkFood - ${item.isJunkFood}</li>
                                <li>Calories - ${item.calories}</li>
                                </ul>
                                </div>`;
                document.querySelector(".first-container").innerHTML = arrr;
            }
        });
    }
    else if (category === "junkfood") {
        arr.filter(function (item) {
            if (item.isJunkFood === "yes") {
                arrr += `<div class='maincontainer' >
                                <img src='${item.foodItemImageUrl}'>
                                <ul><li>FoodName - ${item.foodName}</li>
                                <li>FoodCategory - ${item.foodCategory}</li>
                                <li>IsJunkFood - ${item.isJunkFood}</li>
                                <li>Calories - ${item.calories}</li>
                                </ul>
                                </div>`;
                document.querySelector(".first-container").innerHTML = arrr;
            }
        });
    }
    else if (category === "all") {
        arr.filter(function (item) {
            arrr += `<div class='maincontainer'>
                                <img src='${item.foodItemImageUrl}'>
                                <ul><li>FoodName - ${item.foodName}</li>
                                <li>FoodCategory - ${item.foodCategory}</li>
                                <li>IsJunkFood - ${item.isJunkFood}</li>
                                <li>Calories - ${item.calories}</li>
                                </ul>
                                </div>`;
            document.querySelector(".first-container").innerHTML = arrr;
        });
    }


}
