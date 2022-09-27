export function initMap() {
    const mapElement = document.getElementById('map');

    if (!mapElement) {
        return;
    }

    ymaps.ready(init);

    function init() {

        let MyBalloonContentLayoutClass = ymaps.templateLayoutFactory.createClass(
            '<div class="map__balloonContent" >' +
            '<h3>Наш адрес</h3>' +
            '<p>Санкт-Петербург,<br>Владимирский проспект, 23, <br>лит. А, офис 701</p>' +
            '<a href="#">Схема проезда</a>' +
            '</div>'
        );
        var myMap = new ymaps.Map("map", {
                    center: [59.928025, 30.346399],
                    zoom: 14,
                    controls: []
                },
            ),

            myPlacemark = new ymaps.Placemark([59.928025, 30.346399], {

                },

                {
                    balloonContentLayout: MyBalloonContentLayoutClass,
                },);


        myMap.geoObjects.add(myPlacemark);
        myPlacemark.balloon.open();
    }
}