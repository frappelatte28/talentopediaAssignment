import Jaipur from "../../images/jaipur.jpg";
import Jaisalmer from "../../images/jaisalmer.jpg";
import Udaipur from "../../images/udaipur.jpg";
import Desert from "../../images/deserts.jpg";
import river from "../../images/river.jpg";
import { Img } from "react-image";
import halfMoon from "../../images/Halfmoon.gif";

function handleImageLoad() {
  console.log("loaded");
}
function handleImageError() {
  console.log("failed");
}
function image(url) {
  return (
    <img
      onLoad={handleImageLoad}
      onError={handleImageError}
      src={url}
      // alt="cdscvds"
      // loader={<img src={halfMoon} alt="loader"></img>}
    ></img>
  );
}

const data = {
  cities: [
    {
      index: 1,
      image: image(Jaipur),
      header: "Jaipur tour",
      info: "Luomo quella e modo nel esso donne ma, si prestasse tutte manifestamente e la tal..",
      backgroundImage: image(Desert),
    },
    {
      index: 2,
      image: image(Udaipur),
      header: "Udaipur tour",
      info: "Luomo quella e modo nel esso donne ma, si prestasse tutte manifestamente e la tal..",
      backgroundImage: image(river),
    },
    {
      index: 3,
      image: image(Jaisalmer),
      header: "Jaisalmer tour",
      info: "Luomo quella e modo nel esso donne ma, si prestasse tutte manifestamente e la tal..",
      backgroundImage: image(Jaisalmer),
    },
  ],
};
function makePromise(src) {
  let img;
  try {
    img = new Image();
    img.src = src;
  } catch (err) {
    console.log(err);
  }
  console.log(img);
  let p = new Promise((resolve, reject) => {
    img.onload = () => {
      console.log("loaded one more image");
      resolve();
    };
  });

  return p;
}

let promises = [
  makePromise(Jaipur),
  makePromise(Udaipur),
  makePromise(Jaisalmer),
  makePromise(river),
  makePromise(Desert),
];
let t = Date.now();
export let finalPromise = Promise.all(promises);
finalPromise.then(() => {
  console.log("loaded all images hurrya", Date.now() - t);
});
export default data;
