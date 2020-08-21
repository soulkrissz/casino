//preload the six images first   
    var face1=new Image()
    face1.src="img/1.png"
    var face2=new Image()
    face2.src="img/2.png"
    var face3=new Image()
    face3.src="img/3.png"
    //create a random integer between 0 and 5

    let addedBalance =  document.getElementById("addedBalance"); //reference to element 
    let amount =  document.getElementById("amount"); //reference to element 
    let wallet = document.getElementById("wallet"); //reference to element
    let errorElem = document.getElementById("error"); //reference to element
    let totalElem = document.getElementById('displayBalance'); //reference to element 
    let buttonRoll = document.getElementById('roll'); //button reference


    function validate(){
        if(addedBalance.value == '' || wallet.value == ''){
            errorElem.innerHTML = '*Please enter an amount to play with and an amount in your balance';
            addedBalance.style.background = 'rgba(255, 0, 0, .5)';
            wallet.style.background = 'rgba(255, 0, 0, .5)';
        }else{
        errorElem.innerHTML = '';   
        addedBalance.style.background = 'transparent';
        wallet.style.background = 'transparent';
        buttonRoll.addEventListener('click', roll, false); //click event
        }
    }

    function onInput(){
        validate(); //validate function
        amount.innerHTML = wallet.value;
        totalElem.innerHTML = addedBalance.value;
    }



    let count = 0; //global counter




    function roll(){  
        var cash = Number(wallet.value); //input type value
        let spending = Number(addedBalance.value); //input type value

        validate(); //validate function

        var randomicon=(Math.ceil(Math.random()*3));
        var randomicon2=(Math.ceil(Math.random()*3));
        var randomicon3=(Math.ceil(Math.random()*3));
        document.images["myicon3"].src=eval("face"+randomicon+".src");
        document.images["myicon2"].src=eval("face"+randomicon2+".src");
        document.images["myicon"].src=eval("face"+randomicon3+".src");

        if(cash < 0){
            wallet.value = 0;
        }else{
            if(randomicon==randomicon2&&randomicon==randomicon3){

                document.getElementById("result").innerHTML = "You have won!";
                totalElem.innerHTML = spending + (count += cash); 
                //initial balance added to the cash amount that appends the cash amount starting from zero (global variable)
            }else{

                document.getElementById("result").innerHTML = "You lost money!";
                totalElem.innerHTML = spending + (count -= cash);

            }
        }
    }





