import React, { useState } from "react";
import bs from "./Cards.module.css";

//Boostrap css modülü için
const getBsClass = (classNames = "") =>
  classNames
    .split(" ")
    .map((className) => (bs[className] ? bs[className] : className))
    .join(" ")
    .trim();

function Cards({ getInfo }) {
  const [quotation, setquatation] = useState({
    Resim:
      "https://cdn.midjourney.com/977cbb87-f543-4a0b-b7fa-f1cbe3104112/grid_0.png",
    Irk: "Şimdi sevgili oğullarım, şöyle biliniz: Bu ırk bitiği iyidir. Böylece, herkes kendi kaderinin efendisidir. Genç bir öğrenci olan ben; bu kitabı, pars yılının ikinci ayının on beşinci gününde, Taygün-tan tapınağında, öğretmen Burua’yı dinleyerek yazdım. Sevgili abimiz Sangun İtaçuk’a armağan olsun.",
  });

  function getInfos() {
    getInfo.map((item) => {
      let rand = Math.floor(Math.random() * item.data.length);
      setquatation(item.data[rand]);
    });
  }

  const irkWords = quotation.Irk ? quotation.Irk.split(" ") : [];

  return (
    <div
      className={getBsClass("container-fluid") } 
      style={{ position: "relative",  maxWidth: "1000px" }}
    >
      <div key={quotation.Sıra}>
        <div
          className={getBsClass(
            "row vh-100 d-flex justify-content-center align-items-center"
          )}
        >
          <div
            className={getBsClass(
              "col-sm-12 col-md-4 col-lg-4 mt-5 d-flex justify-content-center align-items-center"
            )}
            style={{ margin: "0 auto",  height: "300px", width: "100%"  }}
          >
            <div
              className={getBsClass(
                "card mb-6 shadow p-3 mb-5 bg-white rounded"
              )}
              style={{
                border:
                  quotation.İşaret === "iyi"
                    ? "5px solid green"
                    : quotation.İşaret === "çok iyi"
                    ? "5px solid green"
                    : quotation.İşaret === "-"
                    ? "5px solid yellow"
                    : "5px solid red",
                display: "flex",
                flexDirection: "row",
                width: "100%",
              }}
            >
              <img
                className={getBsClass(
                  "card-img-top img-fluid rounded embed-responsive embed-responsive-21by9"
                )}
                src={quotation.Resim}
                alt="Card image cap"
                style={{ maxWidth: "50%" }}
              />
              <div
                className={getBsClass(
                  "card-body d-flex flex-column justify-content-center align-items-center"
                )}
              >
                <h2
                  className={getBsClass(
                    "card-title text-center text-uppercase pt-4"
                  )}
                  style={{
                    color:
                      quotation.İşaret === "iyi"
                        ? "green"
                        : quotation.İşaret === "-"
                        ? "yellow"
                        : quotation.İşaret === "çok iyi"
                        ? "darkgreen"
                        : quotation.İşaret === "sıkıntı verici ve çok kötü" &&
                          "çok kötü"
                        ? "darkred"
                        : "red",
                  }}
                >
                  <span id="işaret" className={getBsClass("pt-4")}>
                    {quotation.İşaret}
                  </span>
                </h2>
                <h3
                  className={getBsClass("card-text p-2 m-2 text-center")}
                 /* style={{
                    fontSize:
                      irkWords.length > 250
                        ? "0.7rem"
                        : irkWords.length > 140
                        ? "1rem"
                        : "1.5rem",
                  }} */
                >
                  {quotation.Irk}
                </h3>
                <div className={getBsClass("d-flex justify-content-center")}>
                  <i
                    className={getBsClass(
                      "crosshairs icon fa-solid fa-dice p-2 align-items-start"
                    )}
                  ></i>
                  {quotation.Atışlar}
                  <i className="crosshairs icon fa-solid fa-dice p-2 "></i>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="fixed-bottom w-100">
              <div className="row justify-content-center">
                <div className={getBsClass("col-12")}>
                  <button
                    type="button"
                    className={getBsClass("btn btn-danger  col-12 ")}
                    onClick={getInfos}
                    id="fixedbutton"
                  >
                    <span
                      className={getBsClass("font-weight-bold text-uppercase")}
                    >
                      Kart Çekmek İçin Tıkla
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
