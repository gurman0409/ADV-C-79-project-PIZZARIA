var menu_array = ["Chicken tandoori pizza",
                  "deluxe veggie pizza",
                  "Paneer tikka pizza",
                  "veg supreme pizza", 
                  "Veg extravaganza pizza"
                  ];

          function show_menu(){
              var data_of_hml;
              data_of_hml="<ol class='menulist'>";
              menu_array.sort();
              for(var i=0;i<menu_array.length;i++){
            data_of_hml=data_of_hml+'<li>' + menu_array[i] + '</li>'  
            }
              data_of_hml=data_of_hml+"</ol>"
              document.getElementById("list_of_menu").innerHTML = data_of_hml;
              document.getElementById("list_of_menu").style.color = "white";
          }
   

          function add_item(){
            var data_of_hml;
            var item=document.getElementById("add_item").value;
            menu_array.push(item);
            menu_array.sort()
            data_of_hml="<section class='cards'>";
            for(var i=0;i<menu_array.length;i++){
              data_of_hml=data_of_hml+'<div>' + '<img class="image_of_pizza" src="images/pizzaImg.png"/>' + menu_array[i] + '</div>'
          }
            data_of_hml=data_of_hml+"</section>"
            document.getElementById("display_addedmenu").innerHTML = data_of_hml;
            document.getElementById("display_addedmenu").style.backgroundColor = "white";
          }