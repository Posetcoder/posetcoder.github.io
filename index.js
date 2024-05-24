// Prices and constants
const CABINET_PER_METER = 1.259;
const HINGES_PER_METER = 3.407;
const HANDLE_PER_METER = 1.536;
const CARCASS_PER_METER = 1.004;
const COLORBOARD_PER_METER = 0.531;
const SUB_PER_METER = 0.178;
const ASSEMBLE_PRICE_PER_CABINET = 45;
const INSTALLATION_PRICE_PER_CABINET = 55;
const DESIGN_PRICE = 70;
const DRAWER_PRICE = 50;
const MAINTAINENCE_COST_PERCENT = 0.01;
const TRANSPORTATION_COST_PERCENT = 0.005;
const MISCELLANEOUS_EXPENSES_PERCENT = 0.005;
const BUSINESS_EXPENSE_PERCENT = 0.05;
const PROFIT_PERCENT = 0.5;
const HINGE_PRICE = 5;
const HANDLE_PRICE = 4;
const CARCASS_BOARD_PRICE = 80;
const COLORBOARD_PRICE = 150;
const SATINBOARD_PRICE = 160;
const SUB_PRICE = 20;
const PAINT_PRICE_PER_CUBIC_METER = 100;
const BOARD_CUBIC_METER = 2.88



document.getElementById('finishDropdown').addEventListener('change', () => {
  const finish = document.getElementById('finishDropdown').value;
  const additionalInputsContainer = document.getElementById('additional-inputs-container');
  const originalInputs = document.getElementById('original-inputs');

  if (finish === 'both') {
    originalInputs.style.display = 'none';
    additionalInputsContainer.innerHTML = `
      <section>
        <h2>Laminate Section</h2>
        <p>What is the horizontal length of the area that you want to put the laminate cabinet in meters?</p>
        <input type="number" id="laminate-length" />
        <p>How many laminate towers do you have in your plan?</p>
        <input type="number" id="laminate-towers" />
        <div id="laminate-tower-width-container"></div>
        <p>How many laminate drawers do you have in your plan?</p>
        <input type="number" id="laminate-drawers" />
      </section>
      <section>
        <h2>2Pack Section</h2>
        <p>What is the horizontal length of the area that you want to put the 2Pack cabinet in meters?</p>
        <input type="number" id="twopac-length" />
        <p>How many 2Pack towers do you have in your plan?</p>
        <input type="number" id="twopac-towers" />
        <div id="twopac-tower-width-container"></div>
        <p>How many 2Pack drawers do you have in your plan?</p>
        <input type="number" id="twopac-drawers" />
      </section>
    `;
    
    document.getElementById('laminate-towers').addEventListener('input', () => {
      const towers = parseInt(document.getElementById('laminate-towers').value);
      const towerWidthContainer = document.getElementById('laminate-tower-width-container');
    
      if (towers > 0) {
        towerWidthContainer.innerHTML = `
          <p>How much is the width of each laminate tower in meters?</p>
          <input type="number" id="laminate-tower-width" />
        `;
        towerWidthContainer.classList.add('show');
      } else {
        towerWidthContainer.innerHTML = '';
        towerWidthContainer.classList.remove('show');
      }
    });

    document.getElementById('twopac-towers').addEventListener('input', () => {
      const towers = parseInt(document.getElementById('twopac-towers').value);
      const towerWidthContainer = document.getElementById('twopac-tower-width-container');
    
      if (towers > 0) {
        towerWidthContainer.innerHTML = `
          <p>How much is the width of each 2Pack tower in meters?</p>
          <input type="number" id="twopac-tower-width" />
        `;
        towerWidthContainer.classList.add('show');
      } else {
        towerWidthContainer.innerHTML = '';
        towerWidthContainer.classList.remove('show');
      }
    });
  } else {
    originalInputs.style.display = 'block';
    additionalInputsContainer.innerHTML = '';
  }
});

document.getElementById('towers').addEventListener('input', () => {
  const towers = parseInt(document.getElementById('towers').value);
  const towerWidthContainer = document.getElementById('tower-width-container');

  if (towers > 0) {
    towerWidthContainer.innerHTML = `
      <p>How much is the width of each tower in meters?</p>
      <input type="number" id="tower-width" />
    `;
    towerWidthContainer.classList.add('show');
  } else {
    towerWidthContainer.innerHTML = '';
    towerWidthContainer.classList.remove('show');
  }
});







let priceDetails = {}; // Object to store price details
let numberDetails = {};

function calculateBothPrice(laminate_length, laminate_towers, laminate_tower_width, laminate_drawers, twopac_length, twopac_towers, twopac_tower_width, twopac_drawers) {

  let laminatePrice = 0;
  let twopacPrice = 0;

  const NUMBER_OF_CABINETS_LAMINATE = CABINET_PER_METER * laminate_length;
  const PRICE_OF_HINGES_LAMINATE = (HINGES_PER_METER * laminate_length) * HINGE_PRICE;
  const PRICE_OF_HANDLES_LAMINATE = (HANDLE_PER_METER * laminate_length) * HANDLE_PRICE;
  const PRICE_OF_SUB_LAMINATE = (SUB_PER_METER * laminate_length) * SUB_PRICE;
  const PRICE_OF_CARCASS_LAMINATE = (CARCASS_PER_METER * laminate_length) * CARCASS_BOARD_PRICE;
  const PRICE_OF_COLORBOARD_LAMINATE = (COLORBOARD_PER_METER * laminate_length) * COLORBOARD_PRICE;

  const NUMBER_OF_CABINETS_TWOPAC = CABINET_PER_METER * twopac_length;
  const PRICE_OF_HINGES_TWOPAC = (HINGES_PER_METER * twopac_length) * HINGE_PRICE;
  const PRICE_OF_HANDLES_TWOPAC = (HANDLE_PER_METER * twopac_length) * HANDLE_PRICE;
  const PRICE_OF_SUB_TWOPAC = (SUB_PER_METER * twopac_length) * SUB_PRICE;
  const PRICE_OF_CARCASS_TWOPAC = (CARCASS_PER_METER * twopac_length) * CARCASS_BOARD_PRICE;
  const PRICE_OF_COLORBOARD_TWOPAC = (COLORBOARD_PER_METER * twopac_length) * SATINBOARD_PRICE;

  let DELIVERY_PRICE;
  if ((NUMBER_OF_CABINETS_LAMINATE + NUMBER_OF_CABINETS_TWOPAC) <= 20) {
    DELIVERY_PRICE = 400;
  } else {
    DELIVERY_PRICE = 700;
  }

  laminatePrice += PRICE_OF_CARCASS_LAMINATE + PRICE_OF_COLORBOARD_LAMINATE + PRICE_OF_HANDLES_LAMINATE + PRICE_OF_HINGES_LAMINATE +
    PRICE_OF_SUB_LAMINATE + (NUMBER_OF_CABINETS_LAMINATE * ASSEMBLE_PRICE_PER_CABINET) + (NUMBER_OF_CABINETS_LAMINATE * INSTALLATION_PRICE_PER_CABINET) +
    (laminate_drawers * DRAWER_PRICE);

  twopacPrice += PRICE_OF_CARCASS_TWOPAC + PRICE_OF_COLORBOARD_TWOPAC + PRICE_OF_HANDLES_TWOPAC + PRICE_OF_HINGES_TWOPAC + PRICE_OF_SUB_TWOPAC +
    (NUMBER_OF_CABINETS_TWOPAC * ASSEMBLE_PRICE_PER_CABINET) + (NUMBER_OF_CABINETS_TWOPAC * INSTALLATION_PRICE_PER_CABINET) + (twopac_drawers * DRAWER_PRICE) +
    (twopac_length * COLORBOARD_PER_METER * BOARD_CUBIC_METER * PAINT_PRICE_PER_CUBIC_METER);

  let initialPrice = laminatePrice + twopacPrice + DESIGN_PRICE + DELIVERY_PRICE;

  let otherCosts = (MAINTAINENCE_COST_PERCENT * initialPrice) + (TRANSPORTATION_COST_PERCENT * initialPrice) + (MISCELLANEOUS_EXPENSES_PERCENT * initialPrice) +
    (BUSINESS_EXPENSE_PERCENT * initialPrice) + (PROFIT_PERCENT * initialPrice);

  let finalPrice = initialPrice + otherCosts;


  //store amount of things
  numberDetails = {
    laminate: {
      cabinetNumber: Math.ceil(NUMBER_OF_CABINETS_LAMINATE),
      hingeNumber: Math.ceil(HINGES_PER_METER * laminate_length),
      handleNumber: Math.ceil(HANDLE_PER_METER * laminate_length),
      subNumber: Math.ceil(SUB_PER_METER * laminate_length),
      carcassNumber: Math.ceil(CARCASS_PER_METER * laminate_length),
      colorboardNumber: Math.ceil(COLORBOARD_PER_METER * laminate_length) 
    },

    twopac: {
      cabinetNumber: Math.ceil(NUMBER_OF_CABINETS_LAMINATE),
      hingeNumber: Math.ceil(HINGES_PER_METER * twopac_length),
      handleNumber: Math.ceil(HANDLE_PER_METER * twopac_length),
      subNumber: Math.ceil(SUB_PER_METER * twopac_length),
      carcassNumber: Math.ceil(CARCASS_PER_METER * twopac_length),
      satinboardNumber: Math.ceil(COLORBOARD_PER_METER * twopac_length) 
    }
  }

  // Store price details
  priceDetails = {
    laminate: {
      hingePrice: Math.ceil(PRICE_OF_HINGES_LAMINATE),
      handlePrice: Math.ceil(PRICE_OF_HANDLES_LAMINATE),
      carcassPrice: Math.ceil(PRICE_OF_CARCASS_LAMINATE),
      colorboardPrice: Math.ceil(PRICE_OF_COLORBOARD_LAMINATE),
      subPrice: Math.ceil(PRICE_OF_SUB_LAMINATE)
    },
    twopac: {
      hingePrice: Math.ceil(PRICE_OF_HINGES_TWOPAC),
      handlePrice: Math.ceil(PRICE_OF_HANDLES_TWOPAC),
      carcassPrice: Math.ceil(PRICE_OF_CARCASS_TWOPAC),
      satinBoardPrice: Math.ceil(PRICE_OF_COLORBOARD_TWOPAC),
      subPrice: Math.ceil(PRICE_OF_SUB_TWOPAC)
    },
    maintainenceCost: Math.ceil(MAINTAINENCE_COST_PERCENT * initialPrice),
    transportationCost: Math.ceil(TRANSPORTATION_COST_PERCENT * initialPrice),
    miscellaneousExpenses: Math.ceil(MISCELLANEOUS_EXPENSES_PERCENT * initialPrice),
    businessExpenses: Math.ceil(BUSINESS_EXPENSE_PERCENT * initialPrice),
    profit: Math.ceil(PROFIT_PERCENT * initialPrice),
    initialPrice: initialPrice,
    finalPrice: finalPrice
  };

  return finalPrice;
}

function calculateIndividualPrice(length, towers, tower_width, drawers, isTwoPac) {

  let initialPrice = 0;

  const NUMBER_OF_CABINETS = CABINET_PER_METER * length;
  const PRICE_OF_HINGES = (HINGES_PER_METER * length) * HINGE_PRICE;
  const PRICE_OF_HANDLES = (HANDLE_PER_METER * length) * HANDLE_PRICE;
  const PRICE_OF_CARCASS = (CARCASS_PER_METER * length) * CARCASS_BOARD_PRICE;
  let PRICE_OF_COLORBOARD;
  if (isTwoPac) {
    PRICE_OF_COLORBOARD = (COLORBOARD_PER_METER * length) * SATINBOARD_PRICE;
  }
  else {
    PRICE_OF_COLORBOARD = (COLORBOARD_PER_METER * length) * COLORBOARD_PRICE;
  }
  const PRICE_OF_SUB = (SUB_PER_METER * length) * SUB_PRICE;
  let DELIVERY_PRICE;
  if (NUMBER_OF_CABINETS <= 20) {
    DELIVERY_PRICE = 400;
  } else {
    DELIVERY_PRICE = 700;
  }

  initialPrice += PRICE_OF_CARCASS + PRICE_OF_COLORBOARD + PRICE_OF_HANDLES + PRICE_OF_HINGES + PRICE_OF_SUB + DELIVERY_PRICE +
    (NUMBER_OF_CABINETS * ASSEMBLE_PRICE_PER_CABINET) + (NUMBER_OF_CABINETS * INSTALLATION_PRICE_PER_CABINET) + DESIGN_PRICE + (drawers * DRAWER_PRICE);

  let otherCosts = (MAINTAINENCE_COST_PERCENT * initialPrice) + (TRANSPORTATION_COST_PERCENT * initialPrice) + (MISCELLANEOUS_EXPENSES_PERCENT * initialPrice) +
    (BUSINESS_EXPENSE_PERCENT * initialPrice) + (PROFIT_PERCENT * initialPrice);

  let finalPrice;

  if (isTwoPac) {
    finalPrice = (length * COLORBOARD_PER_METER * BOARD_CUBIC_METER * PAINT_PRICE_PER_CUBIC_METER) + initialPrice + otherCosts;
  } else {
    finalPrice = initialPrice + otherCosts;
  }

  numberDetails = {
    cabinetNumber: Math.ceil(NUMBER_OF_CABINETS),
    hingeNumber: Math.ceil(HINGES_PER_METER * length),
    handleNumber: Math.ceil(HANDLE_PER_METER * length),
    subNumber: Math.ceil(SUB_PER_METER * length),
    carcassNumber: Math.ceil(CARCASS_PER_METER * length),
    colorboardNumber: Math.ceil(COLORBOARD_PER_METER * length) 
  }

  // Store price details
  priceDetails = {
    hingePrice: Math.ceil(PRICE_OF_HINGES),
    handlePrice: Math.ceil(PRICE_OF_HANDLES),
    carcassPrice: Math.ceil(PRICE_OF_CARCASS),
    colorboardPrice: Math.ceil(PRICE_OF_COLORBOARD),
    subPrice: Math.ceil(PRICE_OF_SUB),
    maintainenceCost: Math.ceil(MAINTAINENCE_COST_PERCENT * initialPrice),
    transportationCost: Math.ceil(TRANSPORTATION_COST_PERCENT * initialPrice),
    miscellaneousExpenses: Math.ceil(MISCELLANEOUS_EXPENSES_PERCENT * initialPrice),
    businessExpenses: Math.ceil(BUSINESS_EXPENSE_PERCENT * initialPrice),
    profit: Math.ceil(PROFIT_PERCENT * initialPrice),
    initialPrice: initialPrice,
    finalPrice: finalPrice
  };

  return finalPrice;
}




// Calculate price
document.getElementById('calculate-price').addEventListener('click', () => {
  const finish = document.getElementById('finishDropdown').value;
  let price;

  if (finish == 'laminate') {
    let length = document.getElementById('length').value;
    let towers = document.getElementById('towers').value;
    let towerWidth;
    if (towers > 0) {
      towerWidth = document.getElementById('tower-width').value;
    }
    let drawers = document.getElementById('drawers').value;

    price = calculateIndividualPrice(length, towers, towerWidth, drawers, false);

  } else if (finish == 'twopac') {
    let length = document.getElementById('length').value;
    let towers = document.getElementById('towers').value;
    let towerWidth;
    if (towers > 0) {
      towerWidth = document.getElementById('tower-width').value;
    }
    let drawers = document.getElementById('drawers').value;

    price = calculateIndividualPrice(length, towers, towerWidth, drawers, true);

  } else if (finish == 'both') {
    let laminate_length = document.getElementById('laminate-length').value;
    let laminate_towers = document.getElementById('laminate-towers').value;
    let laminate_tower_width;
    if (laminate_towers > 0) {
      laminate_tower_width = document.getElementById('laminate-tower-width').value;
    }
    let laminate_drawers = document.getElementById('laminate-drawers').value;

    let twopac_length = document.getElementById('twopac-length').value;
    let twopac_towers = document.getElementById('twopac-towers').value;
    let twopac_tower_width;
    if (twopac_towers > 0) {
      twopac_tower_width = document.getElementById('twopac-tower-width').value;
    }
    let twopac_drawers = document.getElementById('twopac-drawers').value;

    price = calculateBothPrice(laminate_length, laminate_towers, laminate_tower_width, laminate_drawers,
      twopac_length, twopac_towers, twopac_tower_width, twopac_drawers
    );
  }

  document.getElementById('price').innerHTML = "Total Price: $" + Math.ceil(price);
  document.getElementById('priceDetails').style.display = 'block'; // Show "Show Details" button
});


{/* <tr><td>Maintainence</td><td></td><td></td><td></td><td></td><td>$${priceDetails.maintainenceCost}</td></tr>
<tr><td>Transportation</td><td></td><td></td><td></td><td></td><td>$${priceDetails.transportationCost}</td></tr>
<tr><td>Miscellaneous</td><td></td><td></td><td></td><td></td><td>$${priceDetails.miscellaneousExpenses}</td></tr>
<tr><td>Business</td><td></td><td></td><td></td><td></td><td>$${priceDetails.businessExpenses}</td></tr>
<tr><td>Profit</td><td></td><td></td><td></td><td></td><td>${priceDetails.profit}</td></tr> */}


document.getElementById('priceDetails').addEventListener('click', () => {

  let detailsHtml

  if (priceDetails.laminate && priceDetails.twopac) {

    detailsHtml = '<table><tr><th>Component</th><th>Laminate Number</th><th>Laminate</th><th>Twopac Number</th><th>Twopac</th></tr>';

    detailsHtml += `
      <tr><td>Cabinets</td><td>${numberDetails.laminate.cabinetNumber}</td><td></td><td>${numberDetails.twopac.cabinetNumber}</td><td></td></tr>
      <tr><td>Hinges</td><td>${numberDetails.laminate.hingeNumber}</td><td>$${priceDetails.laminate.hingePrice}</td><td>${numberDetails.twopac.hingeNumber}</td><td>$${priceDetails.twopac.hingePrice}</td></tr>
      <tr><td>Handles</td><td>${numberDetails.laminate.handleNumber}</td><td>$${priceDetails.laminate.handlePrice}</td><td>${numberDetails.twopac.handleNumber}</td><td>$${priceDetails.twopac.handlePrice}</td></tr>
      <tr><td>Carcasses</td><td>${numberDetails.laminate.carcassNumber}</td><td>$${priceDetails.laminate.carcassPrice}</td><td>${numberDetails.twopac.carcassNumber}</td><td>$${priceDetails.twopac.carcassPrice}</td></tr>
      <tr><td>Colorboards</td><td>${numberDetails.laminate.colorboardNumber}</td><td>$${priceDetails.laminate.colorboardPrice}</td><td>${numberDetails.twopac.satinboardNumber}</td><td>$${priceDetails.twopac.satinBoardPrice}</td></tr>
      <tr><td>Subs</td><td>${numberDetails.laminate.subNumber}</td><td>$${priceDetails.laminate.subPrice}</td><td>${numberDetails.twopac.subNumber}</td><td>$${priceDetails.twopac.subPrice}</td></tr></table>

      <h3>Initial Price: $${priceDetails.initialPrice}</h3>

      <table><tr><th>Expense</th><th>Cost</th></tr>
      <tr><td>Maintainence</td><td>$${priceDetails.maintainenceCost}</td></tr>
      <tr><td>Transportation</td><td>$${priceDetails.transportationCost}</td></tr>
      <tr><td>Miscellaneous</td><td>$${priceDetails.miscellaneousExpenses}</td></tr>
      <tr><td>Business</td><td>$${priceDetails.businessExpenses}</td></tr>
      <tr><td>Profit</td><td>$${priceDetails.profit}</td></tr>

    `;
  } else {

    detailsHtml = '<table><tr><th>Component</th><th>Number</th><th>Price</th></tr>'

    detailsHtml += `
      <tr><td>Cabinets</td><td>${numberDetails.cabinetNumber}</td><td></td></tr>
      <tr><td>Hinges</td><td>${numberDetails.hingeNumber}</td><td>$${priceDetails.hingePrice}</td></tr>
      <tr><td>Handles</td><td>${numberDetails.handleNumber}</td><td>$${priceDetails.handlePrice}</td></tr>
      <tr><td>Carcasses</td><td>${numberDetails.carcassNumber}</td><td>$${priceDetails.carcassPrice}</td></tr>
      <tr><td>Colorboard/Satinboard</td><td>${numberDetails.colorboardNumber}</td><td>$${priceDetails.colorboardPrice}</td></tr>
      <tr><td>Subs</td><td>${numberDetails.subNumber}</td><td>$${priceDetails.subPrice}</td></tr>

      <h3>Initial Price: $${priceDetails.initialPrice}</h3>

      <table><tr><th>Expense</th><th>Cost</th></tr>
      <tr><td>Maintainence</td><td>$${priceDetails.maintainenceCost}</td></tr>
      <tr><td>Transportation</td><td>$${priceDetails.transportationCost}</td></tr>
      <tr><td>Miscellaneous</td><td>$${priceDetails.miscellaneousExpenses}</td></tr>
      <tr><td>Business</td><td>$${priceDetails.businessExpenses}</td></tr>
      <tr><td>Profit</td><td>$${priceDetails.profit}</td></tr>
    `;
  }

  detailsHtml += '</table>';
  document.getElementById('details-container').innerHTML = detailsHtml;
});

// Initial state of the "Show Details" button and details container
document.getElementById('priceDetails').style.display = 'none';


// <tr><td>NUMBER OF CABINETS</td><td>${priceDetails.laminate.NUMBER_OF_CABINETS}</td><td>${priceDetails.twopac.NUMBER_OF_CABINETS}</td></tr>