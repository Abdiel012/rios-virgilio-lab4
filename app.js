(()=>{
    const App = {
        HTMLElement: {
            formFibonnacci: document.getElementById("formfibonnacci"),
            formFibonnacciImput: document.getElementById("quantity"),
            fibonnacciNumbersList: document.getElementById("response"),
        },
        init(){
            App.HTMLElement.formFibonnacci.addEventListener("submit",App.handlers.formFibonnacciFormSubmitHandler);
           App.HTMLElement.formFibonnacci.addEventListener("reset" ,App.handlers.formfibonnacciFormResetHandler);
          //  App.HTMLElement.formFibonnacci.getElementById("2", App.handlers.formfibonnacciFormResetHandler);
        },
        handlers: {
            formFibonnacciFormSubmitHandler(event) {
                event.preventDefault();
                const quantity = App.HTMLElement.formFibonnacciImput.value;
                const fibonnacciNumbers = App.methods.getFibonnacciNumbers(quantity);
                App.methods.imprimirFibonnacciNumbers(fibonnacciNumbers);
                //console.log({ fibonnacciNumbers});

              //  App.HTMLElement.formFibonnacciForm
            },
            formfibonnacciFormResetHandler(event){
                App.methods.confirmar("resp");
        //        if ("resp" == true){
//
        //        }
       //         else{}
            },
        },
        methods: {
            getFibonnacciNumbers(quantity) {
                const fibonnacciNumbers = [];
                let fibonnacciNumber = 0;
                for (let i = 0; i < quantity; i++){
                    if (i==0 || i ==1){
                        fibonnacciNumber = i;
                    } else {
                        fibonnacciNumber = fibonnacciNumbers[i - 1] + fibonnacciNumbers[i - 2];
                    }
                    fibonnacciNumbers.push(fibonnacciNumber);
                }
                return fibonnacciNumbers;
            },
            imprimirFibonnacciNumbers(fibonnacciNumbers) {
                const fibonnacciNumbersList = App.HTMLElement.fibonnacciNumbersList;
                fibonnacciNumbersList.innerHTML = "";
                fibonnacciNumbers.forEach((fibonnacciNumber) => {
                    const listItem = document.createElement("div");
                    listItem.textContent = fibonnacciNumber;
                    listItem.classList.add("list-group-item");
                    fibonnacciNumbersList.appendChild(listItem);
                });
            },
            confirmar(){
                var resp = confirm("deceas borrar los datros anteriores?");
                if (resp == true){
                    const quantity = App.HTMLElement.formFibonnacciImput.null;
                    const fibonnacciNumbers = App.methods.getFibonnacciNumbers(null);
                    App.methods.imprimirFibonnacciNumbers(fibonnacciNumbers);
                    return resp;
                }
            else{
                return resp;
            };
            },
        },
    };
    App.init();
})();