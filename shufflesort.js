document.addEventListener('DOMContentLoaded', function () {
    console.log( "ready!" );
    const arra1 = [{ text:1, class: 'colorGrp1' }, { text:2, class: 'colorGrp2' }, { text:3, class: 'colorGrp3' }, { text:4, class: 'colorGrp2' }, { text:5, class: 'colorGrp3' }, { text:6, class: 'colorGrp4' }, { text: 7, class: 'colorGrp4' },{ text:8, class: 'colorGrp1' }, { text:9, class: 'colorGrp3' }];
    document.getElementById('container').innerHTML = '';
    for(var i = 0; i < arra1.length; i++)
    {
        var card = document.createElement("div");
        var value = document.createElement("div");
        card.className = "col-md-4 col-sm-4 col-xs-12 square card "+ arra1[i].class;
        value.className = "value";

        value.innerHTML = arra1[i].text;
        card.appendChild(value);

        document.getElementById("container").appendChild(card);
    }
});