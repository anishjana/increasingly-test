var timeout = null;
var price = 199.99;
let quantity = 1;
let pack = 1
let addOn = 0;
let addQuant = 0

$(document).ready(function () {
    slicePage();
    getTotalPrice();
})

function slicePage() {
    createNavbar()
    createBody();

}

function createNavbar() {
    var nav = document.createElement('nav');
    nav.className = 'navbar navbar-light bg-light'
    var div = document.createElement('div');
    div.className = 'container'
    var a = document.createElement('a');
    a.className = 'navbar-back';
    a.href = '#'
    a.innerHTML = '<i class="material-icons-round">arrow_back</i>&nbsp; Back'
    div.appendChild(a)
    nav.appendChild(div)
    document.body.appendChild(nav)
}

function createBody() {
    var div = document.createElement('div');
    div.className = 'container'
    var row_0 = document.createElement('div');
    row_0.className = "row mt-3";
    var col = document.createElement('div');
    col.className = "col col-9 left-panel"
    var row_1 = document.createElement('div');
    row_1.className = "row ";
    var carousel = createCarousel();
    var prod = createProd();
    var cart  =createCart();
    row_1.appendChild(carousel);
    row_1.appendChild(prod);
    col.appendChild(row_1);
    row_0.appendChild(col);
    row_0.appendChild(cart)
    div.appendChild(row_0);
    document.body.appendChild(div)
}

function createCart() {
    var e_0 = document.createElement("div");
    var e_1 = document.createElement("div");
    e_0.setAttribute("class", "col col-3 right-panel");
    var e_2 = document.createElement("p");
    e_2.setAttribute("class", "prod-name mb-3");
    e_2.appendChild(document.createTextNode("Price Summary"));
    e_1.appendChild(e_2);
    var e_3 = document.createElement("div");
    e_3.setAttribute("class", "cart-price first");
    var e_4 = document.createElement("p");
    e_4.setAttribute("class", "mb-0 mt-3");
    e_4.appendChild(document.createTextNode("Main product"));
    e_3.appendChild(e_4);
    var e_5 = document.createElement("p");
    e_5.setAttribute("class", "mb-0 mt-3");
    e_5.setAttribute("id", "main-price");
    e_5.appendChild(document.createTextNode("$199.99"));
    e_3.appendChild(e_5);
    e_1.appendChild(e_3);
    var e_6 = document.createElement("div");
    e_6.setAttribute("class", "cart-price second mb-2 mt-2");
    var e_7 = document.createElement("p");
    e_7.setAttribute("class", "mb-2");
    var e_8 = document.createElement("span");
    e_8.setAttribute("id", "addOn-q");
    e_8.appendChild(document.createTextNode("3"));
    e_7.appendChild(e_8);
    e_7.appendChild(document.createTextNode(" add-ons selected"));
    e_6.appendChild(e_7);
    var e_9 = document.createElement("p");
    e_9.setAttribute("class", "mb-2");
    e_9.appendChild(document.createTextNode("+ $"));
    var e_10 = document.createElement("span");
    e_10.setAttribute("id", "addOn-price");
    e_10.appendChild(document.createTextNode("242.96"));
    e_9.appendChild(e_10);
    e_6.appendChild(e_9);
    e_1.appendChild(e_6);
    var e_11 = document.createElement("div");
    e_11.setAttribute("class", "final-price mt-2");
    var e_12 = document.createElement("p");
    e_12.setAttribute("class", "mb-2");
    e_12.appendChild(document.createTextNode("Total price"));
    e_11.appendChild(e_12);
    var e_13 = document.createElement("p");
    e_13.setAttribute("class", "mb-2");
    var e_14 = document.createElement("span");
    e_14.setAttribute("id", "total-price");
    e_14.appendChild(document.createTextNode("$441.95"));
    e_13.appendChild(e_14);
    var e_15 = document.createElement("small");
    e_15.setAttribute("class", "save");
    e_15.appendChild(document.createTextNode("SAVE $70.00 (35%)"));
    e_13.appendChild(e_15);
    e_11.appendChild(e_13);
    e_1.appendChild(e_11);
    var e_16 = document.createElement("button");
    e_16.setAttribute("class", "btn checkout mt-2");
    e_16.appendChild(document.createTextNode("Add "));
    var e_17 = document.createElement("span");
    e_17.setAttribute("id", "total-quantity");
    e_16.appendChild(e_17);
    e_16.appendChild(document.createTextNode(" Items to Cart"));
    e_1.appendChild(e_16);
    e_0.appendChild(e_1);
    return e_0;
    }

function createProd() {
    var e_0 = document.createElement("div");
    e_0.className = "col-7 target-div"
    var e_1 = document.createElement("div");
    e_1.setAttribute("class", "modal");
    e_1.setAttribute("id", "myModal");
    e_1.setAttribute("tabindex", "-1");
    var e_2 = document.createElement("div");
    e_2.setAttribute("class", "modal-dialog");
    var e_3 = document.createElement("div");
    e_3.setAttribute("class", "modal-content");
    var e_4 = document.createElement("div");
    e_4.setAttribute("class", "modal-body");
    var e_5 = document.createElement("img");
    e_5.setAttribute("id", "zoomed-img");
    e_5.setAttribute("src", "");
    e_5.setAttribute("alt", "");
    e_4.appendChild(e_5);
    e_3.appendChild(e_4);
    e_2.appendChild(e_3);
    e_1.appendChild(e_2);
    e_0.appendChild(e_1);
    var e_6 = document.createElement("p");
    e_6.setAttribute("class", "prod-name mb-0");
    e_6.appendChild(document.createTextNode("MPX HD 1080p Outdoor PTZ Camera, 4x Optical Zoom with Color Night Vision, Metal Camera"));
    e_0.appendChild(e_6);
    var e_7 = document.createElement("div");
    e_7.setAttribute("class", "mb-3 ratings-div mt-1");
    var e_8 = document.createElement("i");
    e_8.setAttribute("class", "material-icons-round");
    e_8.appendChild(document.createTextNode("\nstar\n"));
    e_7.appendChild(e_8);
    var e_9 = document.createElement("i");
    e_9.setAttribute("class", "material-icons-round");
    e_9.appendChild(document.createTextNode("\nstar\n"));
    e_7.appendChild(e_9);
    var e_10 = document.createElement("i");
    e_10.setAttribute("class", "material-icons-round");
    e_10.appendChild(document.createTextNode("\nstar\n"));
    e_7.appendChild(e_10);
    var e_11 = document.createElement("i");
    e_11.setAttribute("class", "material-icons-round");
    e_11.appendChild(document.createTextNode("\nstar\n"));
    e_7.appendChild(e_11);
    var e_12 = document.createElement("i");
    e_12.setAttribute("class", "material-icons-round");
    e_12.appendChild(document.createTextNode("\nstar\n"));
    e_7.appendChild(e_12);
    var e_13 = document.createElement("span");
    e_13.setAttribute("class", "mb-0 ml-2");
    e_13.appendChild(document.createTextNode("(12 Review)"));
    e_7.appendChild(e_13);
    e_0.appendChild(e_7);
    var e_14 = document.createElement("small");
    e_14.setAttribute("class", "text-decoration-line-through");
    e_14.appendChild(document.createTextNode("Reg. $299.99"));
    e_0.appendChild(e_14);
    var e_15 = document.createElement("div");
    e_15.setAttribute("class", "price-section");
    var e_16 = document.createElement("small");
    e_16.setAttribute("class", "price");
    e_16.appendChild(document.createTextNode("$199.99"));
    e_15.appendChild(e_16);
    var e_17 = document.createElement("small");
    e_17.setAttribute("class", "save ");
    e_17.innerHTML = "&nbsp; &nbsp;SAVE $70.00 (35%)";
    e_15.appendChild(e_17);
    e_0.appendChild(e_15);
    var e_18 = document.createElement("p");
    e_18.setAttribute("class", "options fw-bold mb-2 mt-3");
    e_18.appendChild(document.createTextNode("Select Options"));
    e_0.appendChild(e_18);
    var e_19 = document.createElement("div");
    e_19.setAttribute("class", "option-sec mb-4");
    var e_20 = document.createElement("div");
    e_20.setAttribute("class", "option active");
    e_20.setAttribute("data-value", "199.99");
    e_20.setAttribute("data-quantity", "1");
    var e_21 = document.createElement("p");
    e_21.setAttribute("class", "mb-0");
    e_21.appendChild(document.createTextNode("SINGLE"));
    e_20.appendChild(e_21);
    var e_22 = document.createElement("p");
    e_22.setAttribute("class", "mb-0");
    e_22.appendChild(document.createTextNode("$199.99"));
    e_20.appendChild(e_22);
    e_19.appendChild(e_20);
    var e_23 = document.createElement("div");
    e_23.setAttribute("class", "option");
    e_23.setAttribute("data-value", "369.99");
    e_23.setAttribute("data-quantity", "2");
    var e_24 = document.createElement("p");
    e_24.setAttribute("class", "mb-0");
    e_24.appendChild(document.createTextNode("2-PACK"));
    e_23.appendChild(e_24);
    var e_25 = document.createElement("p");
    e_25.setAttribute("class", "mb-0");
    e_25.appendChild(document.createTextNode("$369.99"));
    e_23.appendChild(e_25);
    e_19.appendChild(e_23);
    var e_26 = document.createElement("div");
    e_26.setAttribute("class", "option disabled");
    e_26.setAttribute("data-value", "699.99");
    e_26.setAttribute("data-quantity", "4");
    var e_27 = document.createElement("p");
    e_27.setAttribute("class", "mb-0");
    e_27.appendChild(document.createTextNode("4-PACK"));
    e_26.appendChild(e_27);
    var e_28 = document.createElement("p");
    e_28.setAttribute("class", "mb-0");
    e_28.appendChild(document.createTextNode("$699.99"));
    e_26.appendChild(e_28);
    e_19.appendChild(e_26);
    e_0.appendChild(e_19);
    var e_29 = document.createElement("div");
    e_29.setAttribute("class", "quant");
    var e_30 = document.createElement("span");
    e_30.setAttribute("class", "minus_");
    var e_31 = document.createElement("i");
    e_31.setAttribute("class", "material-icons-round");
    e_31.appendChild(document.createTextNode("\nremove\n"));
    e_30.appendChild(e_31);
    e_29.appendChild(e_30);
    var e_32 = document.createElement("span");
    e_32.setAttribute("id", "quantity");
    e_32.appendChild(document.createTextNode("1"));
    e_29.appendChild(e_32);
    var e_33 = document.createElement("span");
    e_33.setAttribute("class", "plus_");
    var e_34 = document.createElement("i");
    e_34.setAttribute("class", "material-icons-round");
    e_34.appendChild(document.createTextNode("\nadd\n"));
    e_33.appendChild(e_34);
    e_29.appendChild(e_33);
    e_0.appendChild(e_29);
    var e_35 = document.createElement("hr");
    e_0.appendChild(e_35);
    var e_36 = document.createElement("p");
    e_36.setAttribute("class", "fw-bold add");
    e_36.appendChild(document.createTextNode("Add-ons Products"));
    e_0.appendChild(e_36);
    var e_37 = document.createElement("div");
    e_37.setAttribute("class", "add-ons row");
    var e_38 = document.createElement("div");
    e_38.setAttribute("class", "col col-1");
    var e_39 = document.createElement("div");
    e_39.setAttribute("class", "form-check");
    var e_40 = document.createElement("input");
    e_40.setAttribute("class", "form-check-input");
    e_40.setAttribute("name", "addOn-check");
    e_40.setAttribute("type", "checkbox");
    e_40.setAttribute("value", "129.99");
    e_40.setAttribute("id", "flexCheckDefault");
    e_39.appendChild(e_40);
    e_38.appendChild(e_39);
    e_37.appendChild(e_38);
    var e_41 = document.createElement("div");
    e_41.setAttribute("class", "col col-5");
    var e_42 = document.createElement("img");
    e_42.setAttribute("src", "./images/prod-1.png");
    e_42.setAttribute("alt", "");
    e_41.appendChild(e_42);
    e_37.appendChild(e_41);
    var e_43 = document.createElement("div");
    e_43.setAttribute("class", "col col-6 mb-2");
    var e_44 = document.createElement("p");
    e_44.setAttribute("class", "mb-0");
    e_44.appendChild(document.createTextNode("DEAL OF THE DAY! 4K Ultra HD 8 Channel ..."));
    e_43.appendChild(e_44);
    var e_45 = document.createElement("div");
    e_45.setAttribute("class", "mb-3 ratings-div mt-1");
    var e_46 = document.createElement("i");
    e_46.setAttribute("class", "material-icons-round");
    e_46.appendChild(document.createTextNode("\nstar\n"));
    e_45.appendChild(e_46);
    var e_47 = document.createElement("i");
    e_47.setAttribute("class", "material-icons-round");
    e_47.appendChild(document.createTextNode("\nstar\n"));
    e_45.appendChild(e_47);
    var e_48 = document.createElement("i");
    e_48.setAttribute("class", "material-icons-round");
    e_48.appendChild(document.createTextNode("\nstar\n"));
    e_45.appendChild(e_48);
    var e_49 = document.createElement("i");
    e_49.setAttribute("class", "material-icons-round");
    e_49.appendChild(document.createTextNode("\nstar\n"));
    e_45.appendChild(e_49);
    var e_50 = document.createElement("i");
    e_50.setAttribute("class", "material-icons-round");
    e_50.appendChild(document.createTextNode("\nstar\n"));
    e_45.appendChild(e_50);
    var e_51 = document.createElement("span");
    e_51.setAttribute("class", "mb-0 ml-2");
    e_51.appendChild(document.createTextNode("(12 Review)"));
    e_45.appendChild(e_51);
    e_43.appendChild(e_45);
    var e_52 = document.createElement("small");
    e_52.setAttribute("class", "text-decoration-line-through");
    e_52.appendChild(document.createTextNode("Reg. $199.99"));
    e_43.appendChild(e_52);
    var e_53 = document.createElement("div");
    e_53.setAttribute("class", "price-section mb-2");
    var e_54 = document.createElement("small");
    e_54.setAttribute("class", "price");
    e_54.appendChild(document.createTextNode("$129.99"));
    e_53.appendChild(e_54);
    var e_55 = document.createElement("small");
    e_55.setAttribute("class", "save");
    e_55.innerHTML = "&nbsp; &nbsp;SAVE $70.00 (35%)";
    e_53.appendChild(e_55);
    e_43.appendChild(e_53);
    var e_56 = document.createElement("small");
    e_56.setAttribute("class", "edit");
    e_56.appendChild(document.createTextNode("SINGLE   "));
    var e_57 = document.createElement("a");
    e_57.setAttribute("href", "#");
    e_57.appendChild(document.createTextNode("Edit"));
    e_56.appendChild(e_57);
    e_43.appendChild(e_56);
    e_37.appendChild(e_43);
    e_0.appendChild(e_37);
    var e_58 = document.createElement("hr");
    e_58.setAttribute("class", "mt-0");
    e_0.appendChild(e_58);
    var e_59 = document.createElement("div");
    e_59.setAttribute("class", "add-ons row");
    var e_60 = document.createElement("div");
    e_60.setAttribute("class", "col col-1");
    var e_61 = document.createElement("div");
    e_61.setAttribute("class", "form-check");
    var e_62 = document.createElement("input");
    e_62.setAttribute("class", "form-check-input");
    e_62.setAttribute("checked", "");
    e_62.setAttribute("name", "addOn-check");
    e_62.setAttribute("type", "checkbox");
    e_62.setAttribute("value", "49.99");
    e_62.setAttribute("id", "flexCheckDefault");
    e_61.appendChild(e_62);
    e_60.appendChild(e_61);
    e_59.appendChild(e_60);
    var e_63 = document.createElement("div");
    e_63.setAttribute("class", "col col-5");
    var e_64 = document.createElement("img");
    e_64.setAttribute("src", "./images/prod-2.png");
    e_64.setAttribute("alt", "");
    e_63.appendChild(e_64);
    e_59.appendChild(e_63);
    var e_65 = document.createElement("div");
    e_65.setAttribute("class", "col col-6");
    var e_66 = document.createElement("p");
    e_66.setAttribute("class", "mb-0");
    e_66.appendChild(document.createTextNode("100ft (30m) Premium 4K RG59/Power Accessory Cable"));
    e_65.appendChild(e_66);
    var e_67 = document.createElement("div");
    e_67.setAttribute("class", "mb-3 ratings-div mt-1");
    var e_68 = document.createElement("i");
    e_68.setAttribute("class", "material-icons-round");
    e_68.appendChild(document.createTextNode("\nstar\n"));
    e_67.appendChild(e_68);
    var e_69 = document.createElement("i");
    e_69.setAttribute("class", "material-icons-round");
    e_69.appendChild(document.createTextNode("\nstar\n"));
    e_67.appendChild(e_69);
    var e_70 = document.createElement("i");
    e_70.setAttribute("class", "material-icons-round");
    e_70.appendChild(document.createTextNode("\nstar\n"));
    e_67.appendChild(e_70);
    var e_71 = document.createElement("i");
    e_71.setAttribute("class", "material-icons-round");
    e_71.appendChild(document.createTextNode("\nstar\n"));
    e_67.appendChild(e_71);
    var e_72 = document.createElement("i");
    e_72.setAttribute("class", "material-icons-round");
    e_72.appendChild(document.createTextNode("\nstar\n"));
    e_67.appendChild(e_72);
    var e_73 = document.createElement("span");
    e_73.setAttribute("class", "mb-0 ml-2");
    e_73.appendChild(document.createTextNode("(12 Review)"));
    e_67.appendChild(e_73);
    e_65.appendChild(e_67);
    var e_74 = document.createElement("div");
    e_74.setAttribute("class", "price-section mb-2");
    var e_75 = document.createElement("small");
    e_75.setAttribute("class", "price");
    e_75.appendChild(document.createTextNode("$49.99"));
    e_74.appendChild(e_75);
    e_65.appendChild(e_74);
    e_59.appendChild(e_65);
    e_0.appendChild(e_59);
    var e_76 = document.createElement("hr");
    e_76.setAttribute("class", "mt-0");
    e_0.appendChild(e_76);
    var e_77 = document.createElement("div");
    e_77.setAttribute("class", "add-ons row");
    var e_78 = document.createElement("div");
    e_78.setAttribute("class", "col col-1");
    var e_79 = document.createElement("div");
    e_79.setAttribute("class", "form-check");
    var e_80 = document.createElement("input");
    e_80.setAttribute("class", "form-check-input");
    e_80.setAttribute("checked", "");
    e_80.setAttribute("type", "checkbox");
    e_80.setAttribute("name", "addOn-check");
    e_80.setAttribute("value", "64.99");
    e_80.setAttribute("id", "flexCheckDefault");
    e_79.appendChild(e_80);
    e_78.appendChild(e_79);
    e_77.appendChild(e_78);
    var e_81 = document.createElement("div");
    e_81.setAttribute("class", "col col-5");
    var e_82 = document.createElement("img");
    e_82.setAttribute("src", "./images/prod-3.png");
    e_82.setAttribute("alt", "");
    e_81.appendChild(e_82);
    e_77.appendChild(e_81);
    var e_83 = document.createElement("div");
    e_83.setAttribute("class", "col col-6");
    var e_84 = document.createElement("p");
    e_84.setAttribute("class", "mb-0");
    e_84.appendChild(document.createTextNode("256GB Surveillance-grade microSD card"));
    e_83.appendChild(e_84);
    var e_85 = document.createElement("div");
    e_85.setAttribute("class", "mb-3 ratings-div mt-1");
    var e_86 = document.createElement("i");
    e_86.setAttribute("class", "material-icons-round");
    e_86.appendChild(document.createTextNode("\nstar\n"));
    e_85.appendChild(e_86);
    var e_87 = document.createElement("i");
    e_87.setAttribute("class", "material-icons-round");
    e_87.appendChild(document.createTextNode("\nstar\n"));
    e_85.appendChild(e_87);
    var e_88 = document.createElement("i");
    e_88.setAttribute("class", "material-icons-round");
    e_88.appendChild(document.createTextNode("\nstar\n"));
    e_85.appendChild(e_88);
    var e_89 = document.createElement("i");
    e_89.setAttribute("class", "material-icons-round");
    e_89.appendChild(document.createTextNode("\nstar\n"));
    e_85.appendChild(e_89);
    var e_90 = document.createElement("i");
    e_90.setAttribute("class", "material-icons-round");
    e_90.appendChild(document.createTextNode("\nstar\n"));
    e_85.appendChild(e_90);
    var e_91 = document.createElement("span");
    e_91.setAttribute("class", "mb-0 ml-2");
    e_91.appendChild(document.createTextNode("(12 Review)"));
    e_85.appendChild(e_91);
    e_83.appendChild(e_85);
    var e_92 = document.createElement("small");
    e_92.setAttribute("class", "text-decoration-line-through");
    e_92.appendChild(document.createTextNode("Reg. $199.99"));
    e_83.appendChild(e_92);
    var e_93 = document.createElement("div");
    e_93.setAttribute("class", "price-section mb-2");
    var e_94 = document.createElement("small");
    e_94.setAttribute("class", "price");
    e_94.appendChild(document.createTextNode("$64.99"));
    e_93.appendChild(e_94);
    e_83.appendChild(e_93);
    e_77.appendChild(e_83);
    e_0.appendChild(e_77);
    var e_95 = document.createElement("hr");
    e_95.setAttribute("class", "mt-0");
    e_0.appendChild(e_95);
    return e_0;
    }

function createCarousel() {
    var e_1 = document.createElement("div");
    e_1.setAttribute("class", "col col-5");
    var e_2 = document.createElement("div");
    e_2.setAttribute("id", "carouselSection");
    e_2.setAttribute("class", "");
    var e_3 = document.createElement("div");
    e_3.setAttribute("class", "carousel-inner");
    e_3.setAttribute("id", "carousel-inner");
    var e_4 = document.createElement("div");
    e_4.setAttribute("class", "carousel-item active");
    var e_5 = document.createElement("img");
    e_5.setAttribute("src", "./images/img-1.png");
    e_5.setAttribute("id", "carousel-img");
    e_5.setAttribute("class", "d-block w-100 h-100 zoom");
    e_5.setAttribute("alt", "...");
    e_4.appendChild(e_5);
    e_3.appendChild(e_4);
    e_2.appendChild(e_3);
    var e_6 = document.createElement("div");
    e_6.setAttribute("class", "carousel-thumbnails");
    var e_7 = document.createElement("button");
    e_7.setAttribute("type", "button");
    e_7.setAttribute("class", "thumbnail active");
    var e_8 = document.createElement("img");
    e_8.setAttribute("src", "./images/img-1.png");
    e_8.setAttribute("class", "d-block w-100");
    e_8.setAttribute("alt", "...");
    e_7.appendChild(e_8);
    e_6.appendChild(e_7);
    var e_9 = document.createElement("button");
    e_9.setAttribute("type", "button");
    e_9.setAttribute("class", "thumbnail");
    var e_10 = document.createElement("img");
    e_10.setAttribute("src", "./images/img-2.png");
    e_10.setAttribute("class", "d-block w-100");
    e_10.setAttribute("alt", "...");
    e_9.appendChild(e_10);
    e_6.appendChild(e_9);
    var e_11 = document.createElement("button");
    e_11.setAttribute("type", "button");
    e_11.setAttribute("class", "thumbnail");
    var e_12 = document.createElement("img");
    e_12.setAttribute("src", "./images/img-3.png");
    e_12.setAttribute("class", "d-block w-100");
    e_12.setAttribute("alt", "...");
    e_11.appendChild(e_12);
    e_6.appendChild(e_11);
    var e_13 = document.createElement("button");
    e_13.setAttribute("type", "button");
    e_13.setAttribute("class", "thumbnail");
    var e_14 = document.createElement("img");
    e_14.setAttribute("src", "./images/img-4.png");
    e_14.setAttribute("class", "d-block w-100");
    e_14.setAttribute("alt", "...");
    e_13.appendChild(e_14);
    e_6.appendChild(e_13);
    e_2.appendChild(e_6);
    e_1.appendChild(e_2);

    return e_1;
}


$(document).off("mouseenter").on("mouseenter", ".carousel-item.active",
    function () {
        let img = $(this).find('img').attr('src');
        var offset = this.getBoundingClientRect().right
        if ($('#zoomed-img').attr('src') != img) {

            $('#zoomed-img').attr('src', img)
        }
        $('.modal').show()
        $('.modal-dialog').css('left', offset)
    });

$(document).off("mouseleave").on("mouseleave", ".carousel-item.active", function () {

    $('.modal').hide();
});

$(document).on('click', 'button.thumbnail', function () {
    $('button.thumbnail').removeClass('active');
    $(this).addClass('active')
    let src = $(this).find('img').attr('src')
    $('#carousel-img').attr('src', src)
})

// price changes events

$(document).on('click', 'div.option', function () {
    $('div.option').removeClass('active');
    $(this).addClass('active')
    let value = this.dataset.value;
    let quantity_ = this.dataset.quantity;
    price = parseFloat(value)
    pack = parseInt(quantity_)
    getTotalPrice()


})

$(document).on('click', '.minus_', function () {
    let q = parseInt($('#quantity').text())
    if (q == 1) {
        return false
    }
    $('#quantity').text(q - 1)
    quantity = q - 1;
    getTotalPrice()
})

$(document).on('click', '.plus_', function () {
    let q = parseInt($('#quantity').text())
    if (q == 10) {
        return false
    }
    $('#quantity').text(q + 1);
    quantity = q + 1;
    getTotalPrice()
})

$(document).on('change', 'input[name="addOn-check"]', function () {
    getTotalPrice()
})




function getTotalPrice() {
    let q = 0;
    let q_price = 0
    $('input[name="addOn-check"]').each(function (i, item) {
        if (item.checked) {
            q++
            q_price += parseFloat(item.value)

        }
    })
    addOn = Math.round((q_price + Number.EPSILON) * 100) / 100;
    addQuant = q;
    $('#main-price').text(`$${price * quantity}`);
    $('#addOn-q').text(`${addQuant}`);
    $('#addOn-price').text(`${addOn}`);
    $('#total-price').text(`$${Math.round(((price * quantity + addOn) + Number.EPSILON) * 100) / 100}`);
    $('#total-quantity').text((quantity * pack) + addQuant)

}


// price changes events