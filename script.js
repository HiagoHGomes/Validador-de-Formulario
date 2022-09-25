let validador = {
    handleSubmit:(event)=> {
        event.preventDefault();
        let sand = true;
        let inputs = form.querySelectorAll('input');

        for(let i=0; i<inputs.length; i++) {
            let input = inputs[i];
            let check = validador.cehckInput(input);
            if (check!==true) {
                sand = false;
                //Eixibir erro:
                console.log(check)
            }
        }


        if(sand) {
            form.submit();
        }
    },

    cehckInput:(input)=> {
        let rules = input.getAttribute('data-rules');
        if (rules !=null) {
            rules = rules.split('|');
            for(let k in rules) {
                let rDetalis = rules[k].split('=');
                switch(rDetalis[0]) {
                    case 'required':
                        if(input.value == '') {
                            return 'It can not be blank.'
                        }
                    break;
                }
            }
        }else {
            return true;
        }
    }

};
let form = document.querySelector('.validator');
form.addEventListener('submit', validador.handleSubmit);