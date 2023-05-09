// Файл опций для селектов формы

const towerOptions = [{
    value: "А",
    label: "Башня А",
  },{
    value: "Б",
    label: "Башня Б",
  }]

const floorOptions = []

const roomOptions = [];

// Функция заполнения массива опций при большом количестве значений
const fillOptions = (start, end, arr, label) => {
  for(let i = start; i <= end; i++) {
    arr.push({
      value: `${i}`,
      label: `${label} ${i}`,
    })
  }
}

fillOptions(3, 27, floorOptions, "Этаж");
fillOptions(1, 10, roomOptions, "Переговорная №");

export { towerOptions, floorOptions, roomOptions }