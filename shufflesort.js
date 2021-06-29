document.addEventListener('DOMContentLoaded', function () {
    const arra1 = [{value: 1, class: 'color1'}, {value: 2, class: 'color2'}, {
        value: 3,
        class: 'color3'
    }, {value: 4, class: 'color2'}, {value: 5, class: 'color3'}, {value: 6, class: 'color4'}, {
        value: 7,
        class: 'color4'
    }, {value: 8, class: 'color1'}, {value: 9, class: 'color3'}];
    render(arra1);
    function render(arra) {
        document.getElementById('container').innerHTML = '';
        for (var i = 0; i < arra1.length; i++) {
            var card = document.createElement("div");
            var value = document.createElement("div");
            card.className = "col-md-4 col-sm-4 col-xs-12 square card " + arra1[i].class;
            value.className = "value";

            value.innerHTML = arra1[i].value;
            card.appendChild(value);

            document.getElementById("container").appendChild(card);
        }
    }
// function to shuffle the list

    shuffle = () => {
        let ln = arra1.length;
        let temp;
        let index;
        // check if there are elements in the array
        while (ln > 0) {
            // Pick a random index
            index = Math.floor(Math.random() * ln);
            // Decrease ctr by 1
            ln--;
            // And swap the last element with it
            temp = arra1[ln];
            arra1[ln] = arra1[index];
            arra1[index] = temp;
        }
        render(arra1);
        }

        // function to sort the list

    sort = () => {
        arra1.sort(function (x, y) {
            return x.value - y.value;
        });
        render(arra1);
    }



});