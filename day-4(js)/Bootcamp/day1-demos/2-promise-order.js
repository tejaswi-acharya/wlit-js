// LIVE TOGGLE: Change true to false during class to demo error handling!
const kitchenHasIngredients = true;

function orderFood() {
  return new Promise((resolve, reject) => {
    console.log("Receipt printed (Promise is PENDING)...");

    setTimeout(() => {
      if (kitchenHasIngredients) {
        resolve("Here is your hot Chowmein! (RESOLVED)");
      } else {
        reject("Sorry, we ran out of noodles! (REJECTED)");
      }
    }, 1500);
  });
}

async function eatLunch() {
  try {
    const food = await orderFood(); // Pauses cleanly here until receipt finishes
    console.log("SUCCESS:", food);
  } catch (error) {
    console.log("HANDLED ERROR:", error);
  }
}

eatLunch();


//resolve bhayo bhane try ma janxa
//reject bhayo bhane catch ma janxa
//async await is better than callback hence no .then .catch was used 


