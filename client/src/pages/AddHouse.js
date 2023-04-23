import "./addHouse.css";
import React from "react";
const AddHouse = () => {
  const [houseName, setHouseName] = React.useState("");
  const [roomCount, setRoomCount] = React.useState("");
  const [houseSquere, setHouseSquere] = React.useState("");
  const [adress, setAdress] = React.useState("");
  const [roomState, setRoomState] = React.useState("");
  const [houseDescr, setHouseDescr] = React.useState("");
  const [housePrice, setHousePrice] = React.useState("");
  const [houseImg, setHouseImg] = React.useState("");

  const sendDataToDb = (event) => {
    event.preventDefault();

    // let isImg = false;
    // if (houseImg) {
    //   if (houseImg.type.match(/image.*/)) {
    //     // Создаем новый FileReader
    //     var reader = new FileReader();

    //     // Читаем файл
    //     reader.readAsDataURL(houseImg);

    //     // Когда чтение файла завершено, проверяем, является ли файл картинкой
    //     reader.onload = function () {
    //       var image = new Image();
    //       image.src = reader.result;

    //       // Проверяем, что картинка загрузилась без ошибок и имеет ширину и высоту
    //       image.onload = function () {
    //         if (this.width > 0 && this.height > 0) {
    //           isImg = true;
    //           console.log(true);
    //         } else {
    //           isImg = false;
    //             console.log(false);
    //         }
    //       };
    //     };
    //   } else {
    //     isImg = false;
    //   }
      
    // } 

    if (houseName.trim() === "") {
      alert("Введіть Назву");
      return;
    } else if (roomCount <= 0) {
      alert("Введіть кількість кімнат");
      return;
    } else if (houseSquere <= 0) {
      alert("Введіть площу");
      return;
    } else if (adress.trim() === "") {
      alert("Введіть адресу");
      return;
    } else if (roomState.trim() === "") {
      alert("Введіть стан кімнати");
      return;
    } else if (houseDescr.trim() === "") {
      alert("Введіть опис");
      return;
    } else if (housePrice <= 0) {
      alert("Введіть ціну");
      return;
    } else if (housePrice <= 0) {
      alert("Введіть ціну");
      return;
    } else {
      setHouseName("");
      setRoomCount("");
      setHouseSquere("");
      setAdress("");
      setRoomState("");
      setHouseDescr("");
      setHousePrice("");
      setHouseImg("");
    }

    let FormData = {
      houseName: houseName,
      roomCount: roomCount,
      houseSquere: houseSquere,
      adress: adress,
      roomState: roomState,
      houseDescr: houseDescr,
      housePrice: housePrice,
    };
    console.log(FormData);
  };

  return (
    <>
      <div className="add">
        <div className="container">
          <form onSubmit={sendDataToDb} className="add__form">
            <h3 className="add__title">Додати оголошення</h3>
            <p className="add__name">Введіть Назву</p>
            <input
              onChange={(e) => setHouseName(e.target.value)}
              placeholder="Введіть Назву"
              className="add__input"
              type="text"
            />
            <p className="add__name">Введіть кількість кімнат</p>
            <input
              onChange={(e) => setRoomCount(e.target.value)}
              placeholder="Введіть кількість кімнат"
              className="add__input"
              type="number"
              min={1}
            />
            <p className="add__name">Введіть кількість площу (м^2)</p>
            <input
              onChange={(e) => setHouseSquere(e.target.value)}
              placeholder="Введіть кількість площу (м^2)"
              className="add__input"
              type="number"
              min={1}
            />
            <p className="add__name">Введіть повну адресу</p>
            <input
              onChange={(e) => setAdress(e.target.value)}
              placeholder="Введіть повну адресу"
              className="add__input"
              type="text"
            />
            <p className="add__name">
              Введіть стан (Поганий / Середній / Чудовий)
            </p>
            <input
              onChange={(e) => setRoomState(e.target.value)}
              placeholder="Введіть стан (Поганий / Середній / Чудовий)"
              className="add__input"
              type="text"
            />
            <p className="add__name">Введіть опис</p>
            <textarea
              onChange={(e) => setHouseDescr(e.target.value)}
              placeholder="Введіть опис"
              name=""
              className="add__input add__textarea"
            ></textarea>
            <p className="add__name">Введіть ціну (Грн)</p>
            <input
              onChange={(e) => setHousePrice(e.target.value)}
              placeholder="Введіть ціну (Грн)"
              className="add__input"
              type="number"
            />
            <p className="add__name">Виберіть зображення</p>
            <input
              onChange={(e) => setHouseImg(e.target.files[0])}
              placeholder=""
              className="add__input"
              type="file"
            />
            <button className="add__btn" type="submit">
              Додати оголошення
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddHouse;
