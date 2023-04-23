let centerMap = [59.937557047314996, 30.322618075393592];

const init = () => {
  let map = new ymaps.Map('ymap', {
    center: centerMap,
    zoom: 16,
  });

  // Кастомная метка
  let kastomPin = new ymaps.Placemark(centerMap, {}, {
    iconLayout: 'default#image',
    iconImageHref: '../../img/svg/pin-map.svg',
    iconImageSize: [18, 22],
    iconImageOffset: [-9, -14]
  });

  map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

  map.geoObjects.add(kastomPin);
};

ymaps.ready(init);
