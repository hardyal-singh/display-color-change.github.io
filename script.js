const funn = () => {
  let color;
  let myfun= (a, b) => {
    return Math.round((a - b) * Math.random());
  };
  const value = myfun(10, 0);
  switch (value) {
    case 0:
      color = "red";
      break;
    case 1:
      color = "green";
      break;
    case 2:
      color = "pink";
      break;
    case 3:
      color = "blue";
      break;
    case 4:
      color = "black";
      break;
    case 5:
      color = "white";
      break;
    case 6:
      color = "cyan";
      break;
    case 7:
      color = "olive";
      break;
    case 8:
      color = "Violet";
      break;
    case 9:
      color = "#FFD700";
      break;

    default:
      color = "pink";
  }
  document.getElementById("bodyy").style.backgroundColor = color;
};
