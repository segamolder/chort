let cats = [
    {
        'name': 'Барсик',
        'image': 'cat.webp',
        'description': 'На шелковистом фоне багряно-фиолетового заката воздушной красоты пастельные оттенки слива и персика расцветают в густой шубке маленького кота. Его мягкий, пушистый мех словно море нежности, в котором тонут все заботы мира. Глаза этого кота — две искорки живой, игривой умности, они сверкают в темноте, словно две жемчужины, хранящие в себе мудрость веков и загадки ночи. Он сидит, подняв голову, словно наблюдая за танцем звезд и луны на небесном своде, восхищенно вздыхая и загадочно улыбаясь, словно знающий некий великий секрет вселенной. В каждом его движении — грация и элегантность, словно магия, сплетенная из лунного света и теней ночи. Такой кот — мечта и воплощение всего прекрасного, что скрыто в бездонной душе природы.\n'
    },
    {
        'name': 'Мурзик',
        'image': 'cat2.jpeg',
        'description': 'Этот кот - настоящий аристократ в мире кошачьих. Его грациозные движения и изысканный облик заставляют всех вокруг восхищаться. Его мех шелковист и густ, как туманное утро, а глаза - зеленые, как самые изумрудные леса. Он обладает необыкновенным обаянием, которое покоряет сердца даже самых требовательных хозяев. В его взгляде - таинственность древних времен, словно он хранитель мудрости прошлых эпох. Он неприступен и в то же время невероятно предан своему человеку, становясь идеальным компаньоном в домашнем уюте.\n'
    },
    {
        'name': 'Руфус',
        'image': 'cat3.jpg',
        'description': 'Этот кот - воплощение бесшабашности и игривости. Он неутомим в своих приключениях и всегда готов покорять новые вершины. Его окрас напоминает пламя огня, и его глаза сияют яркими бриллиантами, полными жизненной энергии. Он постоянно находится в движении, будь то гонки по дому или ловля лазерного луча. Его харизма и веселый характер заразителен, и в его присутствии невозможно оставаться равнодушным. Этот кот - истинный дух свободы и радости, который делает каждый день ярче и насыщеннее.\n'
    },
];

let catList = document.querySelector('.cat--list');

cats.forEach(function (cat) {
    catList.insertAdjacentHTML('beforeend', `<div class='cat--item'><img src="images/${cat.image}" alt="Cat image">\n<div data-description="${cat.description}" class="cat--name">\n${cat.name}\n</div>\n</div>`)
})

let catItems = document.querySelectorAll('.cat--item');

catItems.forEach(function (cat) {
    cat.addEventListener("click",function (){
        let mainCat = document.querySelector('.main--cat')
        let mainCatImage = document.querySelector('.catimg').querySelector('img');
        let mainCatText = mainCat.querySelector('.cat--text--value');

        let catItemImageNode = cat.querySelector('img')
        let catItemDescriptionNode = cat.querySelector('div');

        mainCatImage.setAttribute('src', catItemImageNode.getAttribute('src'));
        mainCatText.innerText = catItemDescriptionNode.dataset.description
    })
});


document.querySelector('.add-run').addEventListener('click', function () {
    let runCount = document.querySelector('.run-count');
    runCount.innerText = parseInt(runCount.innerText) + parseInt(document.querySelector('.add-run-count').innerText);
});

let interval;

document.querySelector('.add-interval-run').addEventListener('click', function () {
    let runCount = document.querySelector('.run-count');
    let runIntervalCost = document.querySelector('.run-interval-cost');
    if(parseInt(runCount.innerText) < parseInt(runIntervalCost.innerText)){
        alert('не хватает денег, боомжара!');
    } else {
        let addRunCount = document.querySelector('.add-run-count');
        let runCountValue = parseInt(addRunCount.innerText);
        clearInterval(interval);
        runCount.innerText = parseInt(runCount.innerText) - parseInt(runIntervalCost.innerText);
        runIntervalCost.innerText = runIntervalCost.innerText * 2
        interval = setInterval(function () {
            runCount.innerText = parseInt(runCount.innerText) + runCountValue;
        }, 3000);
        addRunCount.innerText = parseInt(addRunCount.innerText) + 1;
    }
});
