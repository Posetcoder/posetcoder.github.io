// Prices and constants
const CABINET_PER_METER = 1.259;
const HINGES_PER_METER = 3.407;
const HANDLE_PER_METER = 1.536;
const CARCASS_PER_METER = 1.004;
const COLORBOARD_PER_METER = 0.531;
const SUB_PER_METER = 0.178;
const ASSEMBLE_PRICE_PER_CABINET = 50;
const INSTALLATION_PRICE_PER_CABINET = 60;
const DESIGN_PRICE = 70;
const DRAWER_PRICE = 50;
const MAINTAINENCE_COST_PERCENT = 0.03;
const TRANSPORTATION_COST_PERCENT = 300;
const MISCELLANEOUS_EXPENSES_PERCENT = 0.03;
const BUSINESS_EXPENSE_PERCENT = 0.05;
const PROFIT_PERCENT = 0.5;
const HINGE_PRICE = 6;
const HANDLE_PRICE = 6;
const CARCASS_BOARD_PRICE = 80;
const COLORBOARD_PRICE = 150;
const SATINBOARD_PRICE = 220;
const SHAKERBOARD_PRICE = 320;
const PROFILEBOARD_PRICE = 360;
const SUB_PRICE = 20;
const MATT_PAINT_PRICE_PER_CUBIC_METER = 135;
const GLOSS_PAINT_PRICE_PER_CUBIC_METER = 150;
const BOARD_CUBIC_METER = 2.88
const NORMAL_SMOOTH_BOARD_PRICE = 160;
const SMOOTH_GRAIN_BOARD_PRICE = 195;
const WOOD_GRAIN_BOARD_PRICE = 215;
const VENET_BOARD_PRICE = 250



document.getElementById('finishDropdown').addEventListener('change', () => {
  const finish = document.getElementById('finishDropdown').value;
  const additionalInputsContainer = document.getElementById('additional-inputs-container');
  const originalInputs = document.getElementById('original-inputs');
  const originalInputs2 = document.getElementById('original-inputs2');

  originalInputs2.innerHTML = `
    <p>What is the price of extra accessories? *Optional</p>
    <input type="number" id="extra-accessories" />
  `

  if (finish === 'both') {
    originalInputs.innerHTML = '';
    additionalInputsContainer.innerHTML = `
      <section>
        <h2>Laminate Section</h2>
        <p>What is the horizontal length of the area that you want to put the laminate cabinet in meters?</p>
        <input type="number" id="laminate-length" />
        <p>How many laminate drawers do you have in your plan?</p>
        <input type="number" id="laminate-drawers" />
        <p>What type of laminate is it?</p>
        <select id="laminate-type">
          <option value="type-normal-smooth">Normal Smooth</option>
          <option value="type-smooth-grain">Smooth Grain</option>
          <option value="type-wood-grain">Wood Grain</option>
          <option value="type-venet">Venet</option>
        </select>
      </section>
      <section>
        <h2>2Pack Section</h2>
        <p>What type of twopac is it?</p>
        <select id="twopac-type">
          <option value="twopac-type-normal">Normal</option>
          <option value="twopac-type-shaker">Shaker</option>
          <option value="twopac-type-profile">Profile</option>
        </select>
        <p>What is the horizontal length of the area that you want to put the cabinet in meters?</p>
        <input type="number" id="twopac-length" />
        <p>How many drawers do you have in your plan?</p>
        <input type="number" id="twopac-drawers" />
        </p>What type of paint finish is it?</p>
        <select id="twopac-paint-type">
          <option value="twopac-paint-type-matt">Matt</option>
          <option value="twopac-paint-type-gloss">Gloss</option>
        </select>
      </section>
    `;
  } 
  else if (finish === 'melamine-carcass') 
  {
    originalInputs.innerHTML = '';
    additionalInputsContainer.innerHTML = `
      <section>
        <p>What is the horizontal length of the area that you want to put the Melamine cabinet in meters?</p>
        <input type="number" id="melamine-length" />
        <p>How many Hinges you might need?</p>
        <input type="number" id="melamine-hinge-number" />
        <p>How many handles you might need?</p>
        <input type="number" id="melamine-handle-number" />
        <p>How many colorboards you might need</p>
        <input type="number" id="melamine-colorboard" />
        <div id="melamine-colorboard-type-placeholder"></div>
        <p>How many drawers do you have in your plan?</p>
        <input type="number" id="melamine-drawers" />
        <p>Does it have substrate or not?</p>
        <select id="melamine-sub-yes-no">
          <option value="sub-no">No</option>
          <option value="sub-yes">Yes</option>
        </select>
    `;

    document.getElementById('melamine-colorboard').addEventListener('input', () => {

      const colorboardNumber = document.getElementById('melamine-colorboard').value;
      const typePlaceholder = document.getElementById('melamine-colorboard-type-placeholder');
    
      if (colorboardNumber > 0) {
    
        typePlaceholder.innerHTML = `
        <p>What type of colorboard is it?</p>
          <select id="melamine-type">
            <option value="type-normal-smooth-melamine">Normal Smooth</option>
            <option value="type-smooth-grain-melamine">Smooth Grain</option>
            <option value="type-wood-grain-melamine">Wood Grain</option>
            <option value="type-venet-melamine">Venet</option>
          </select>
        `
      }
      else {
        typePlaceholder.innerHTML = ``;
      }
    });

  }
  else if (finish === 'laminate')
  {
    originalInputs.innerHTML = `
      <p>What is the horizontal length of the area that you want to put the cabinet in meters?</p>
      <input type="number" id="length" />
      <p>How many drawers do you have in your plan?</p>
      <input type="number" id="drawers" />
    `
    additionalInputsContainer.innerHTML = `
      <p>What type of laminate is it?</p>
      <select id="laminate-type">
        <option value="type-normal-smooth">Normal Smooth</option>
        <option value="type-smooth-grain">Smooth Grain</option>
        <option value="type-wood-grain">Wood Grain</option>
        <option value="type-venet">Venet</option>
      </select>
    `
  }
  else if (finish === 'twopac')
  {
    originalInputs.innerHTML = `
    <p>What type of twopac is it?</p>
    <select id="twopac-type">
      <option value="twopac-type-normal">Normal</option>
      <option value="twopac-type-shaker">Shaker</option>
      <option value="twopac-type-profile">Profile</option>
    </select>
    <p>What is the horizontal length of the area that you want to put the cabinet in meters?</p>
    <input type="number" id="length" />
    <p>How many drawers do you have in your plan?</p>
    <input type="number" id="drawers" />
    </p>What type of paint finish is it?</p>
    <select id="twopac-paint-type">
      <option value="twopac-paint-type-matt">Matt</option>
      <option value="twopac-paint-type-gloss">Gloss</option>
    </select>
    `
    additionalInputsContainer.innerHTML = '';
  }
});



let priceDetails = {}; // Object to store price details
let numberDetails = {};


function calculateMelaminePrice(melamine_length, hinge_number, handle_number, colorboard, melamine_drawers, hasSubs, colorboardType) {



  let initialPrice = 0;

  const NUMBER_OF_CABINETS_MELAMINE = Math.ceil(CABINET_PER_METER * melamine_length);
  const PRICE_OF_HINGES = Math.ceil(hinge_number * HINGE_PRICE);
  const PRICE_OF_HANDLES = Math.ceil(handle_number * HANDLE_PRICE);

  let PRICE_OF_COLORBOARD;

  if (colorboardType === undefined) {
    PRICE_OF_COLORBOARD = Math.ceil(colorboard * COLORBOARD_PRICE);
  }
  else if (colorboardType == "type-normal-smooth-melamine") {
    PRICE_OF_COLORBOARD = Math.ceil(colorboard * NORMAL_SMOOTH_BOARD_PRICE);
  }
  else if (colorboardType == "type-smooth-grain-melamine") {
    PRICE_OF_COLORBOARD = Math.ceil(colorboard * SMOOTH_GRAIN_BOARD_PRICE);
  }
  else if (colorboardType == "type-wood-grain-melamine") {
    PRICE_OF_COLORBOARD = Math.ceil(colorboard * WOOD_GRAIN_BOARD_PRICE);
  }
  else if (colorboardType == "type-venet-melamine") {
    PRICE_OF_COLORBOARD = Math.ceil(colorboard * VENET_BOARD_PRICE);
  }



  const PRICE_OF_CARCASS = Math.ceil((CARCASS_PER_METER) * melamine_length) * CARCASS_BOARD_PRICE;
  let PRICE_OF_SUB = 0;
  let NUMBER_OF_SUB = 0;
  if (hasSubs) 
  {
    PRICE_OF_SUB = Math.ceil(SUB_PER_METER * melamine_length) * SUB_PRICE
    NUMBER_OF_SUB = Math.ceil(SUB_PER_METER * melamine_length)
  }
  else {
    NUMBER_OF_SUB = ''
  }
   
  

  let DELIVERY_PRICE;
  if ( melamine_length == 0 ) {
    DELIVERY_PRICE = 0 
  } else {if ((NUMBER_OF_CABINETS_MELAMINE) <= 20) {
    DELIVERY_PRICE = 400;
    } else {
    DELIVERY_PRICE = 700;
    }
  } 
  
  // let DESIGN_PRICE;
  // if ( melamine_length == 0 ) {
  //   DESIGN_PRICE = 0 
  // } else {
  //   DESIGN_PRICE = 100
  // }

  initialPrice += PRICE_OF_SUB + PRICE_OF_CARCASS + PRICE_OF_COLORBOARD + PRICE_OF_HANDLES + PRICE_OF_HINGES +  DELIVERY_PRICE +
    (NUMBER_OF_CABINETS_MELAMINE * ASSEMBLE_PRICE_PER_CABINET) + (NUMBER_OF_CABINETS_MELAMINE * INSTALLATION_PRICE_PER_CABINET) + DESIGN_PRICE + (melamine_drawers * DRAWER_PRICE);

  let otherCosts = (MAINTAINENCE_COST_PERCENT * initialPrice) + (TRANSPORTATION_COST_PERCENT) + (MISCELLANEOUS_EXPENSES_PERCENT * initialPrice) + (BUSINESS_EXPENSE_PERCENT * initialPrice) + (PROFIT_PERCENT * initialPrice);

  let finalPrice = initialPrice + otherCosts;
  

  numberDetails = {
    melamineCarcass: {
      cabinetNumber: Math.ceil(NUMBER_OF_CABINETS_MELAMINE),
      hingeNumber: hinge_number,
      handleNumber: handle_number,
      drawerNumber: melamine_drawers,
      subNumber: NUMBER_OF_SUB,
      carcassNumber: Math.ceil(CARCASS_PER_METER * melamine_length),
      colorboardNumber: (colorboard == 0 || colorboard == '') ? '' : Math.ceil(COLORBOARD_PER_METER * melamine_length)
    }
  }

  // Store price details
  priceDetails = {
    melamineCarcass : {
      hingePrice: Math.ceil(PRICE_OF_HINGES),
      handlePrice: Math.ceil(PRICE_OF_HANDLES),
      carcassPrice: Math.ceil(PRICE_OF_CARCASS),
      colorboardPrice: Math.ceil(PRICE_OF_COLORBOARD),
      drawerPrice: Math.ceil(melamine_drawers * DRAWER_PRICE),
      subPrice: PRICE_OF_SUB,
      deliveryPrice: DELIVERY_PRICE,
      designPrice: DESIGN_PRICE, 
      assemblePrice: Math.ceil(NUMBER_OF_CABINETS_MELAMINE * ASSEMBLE_PRICE_PER_CABINET),
      installationPrice: Math.ceil(NUMBER_OF_CABINETS_MELAMINE * INSTALLATION_PRICE_PER_CABINET),
      maintainenceCost: Math.ceil(MAINTAINENCE_COST_PERCENT * initialPrice),
      transportationCost: Math.ceil(TRANSPORTATION_COST_PERCENT),
      miscellaneousExpenses: Math.ceil(MISCELLANEOUS_EXPENSES_PERCENT * initialPrice),
      businessExpenses: Math.ceil(BUSINESS_EXPENSE_PERCENT * initialPrice),
      profit: Math.ceil(PROFIT_PERCENT * initialPrice),
      initialPrice: Math.ceil(initialPrice),
      finalPrice: finalPrice
    }
  };

  return finalPrice;
}


function calculateBothPrice(laminate_length, laminate_drawers, twopac_length, twopac_drawers, laminateType, twopacType, twopacPaintType) {

  let laminatePrice = 0;
  let twopacPrice = 0;

  const NUMBER_OF_CABINETS_LAMINATE = Math.ceil(CABINET_PER_METER * laminate_length);
  const PRICE_OF_HINGES_LAMINATE = Math.ceil(HINGES_PER_METER * laminate_length) * HINGE_PRICE;
  const PRICE_OF_HANDLES_LAMINATE = Math.ceil(HANDLE_PER_METER * laminate_length) * HANDLE_PRICE;
  const PRICE_OF_SUB_LAMINATE = Math.ceil(SUB_PER_METER * laminate_length) * SUB_PRICE;
  const PRICE_OF_CARCASS_LAMINATE = Math.ceil(CARCASS_PER_METER * laminate_length) * CARCASS_BOARD_PRICE;
  let PRICE_OF_COLORBOARD_LAMINATE;
  if (laminateType == "type-normal-smooth") {
    PRICE_OF_COLORBOARD_LAMINATE = Math.ceil(COLORBOARD_PER_METER * laminate_length) * NORMAL_SMOOTH_BOARD_PRICE;
  }
  else if (laminateType == "type-smooth-grain") {
    PRICE_OF_COLORBOARD_LAMINATE = Math.ceil(COLORBOARD_PER_METER * laminate_length) * SMOOTH_GRAIN_BOARD_PRICE;
  }
  else if (laminateType == "type-wood-grain") {
    PRICE_OF_COLORBOARD_LAMINATE = Math.ceil(COLORBOARD_PER_METER * laminate_length) * WOOD_GRAIN_BOARD_PRICE;
  }
  else if (laminateType == "type-venet") {
    PRICE_OF_COLORBOARD_LAMINATE = Math.ceil(COLORBOARD_PER_METER * laminate_length) * VENET_BOARD_PRICE;
  }

  const NUMBER_OF_CABINETS_TWOPAC = Math.ceil(CABINET_PER_METER * twopac_length);
  const PRICE_OF_HINGES_TWOPAC = Math.ceil(HINGES_PER_METER * twopac_length) * HINGE_PRICE;
  const PRICE_OF_HANDLES_TWOPAC = Math.ceil(HANDLE_PER_METER * twopac_length) * HANDLE_PRICE;
  const PRICE_OF_SUB_TWOPAC = Math.ceil(SUB_PER_METER * twopac_length) * SUB_PRICE;
  const PRICE_OF_CARCASS_TWOPAC = Math.ceil(CARCASS_PER_METER * twopac_length) * CARCASS_BOARD_PRICE;

  let PRICE_OF_COLORBOARD_TWOPAC;
  if (twopacType == "twopac-type-normal") {
    PRICE_OF_COLORBOARD_TWOPAC = Math.ceil(COLORBOARD_PER_METER * twopac_length) * SATINBOARD_PRICE;
  }
  else if (twopacType == "twopac-type-shaker") {
    PRICE_OF_COLORBOARD_TWOPAC = Math.ceil(COLORBOARD_PER_METER * twopac_length) * SHAKERBOARD_PRICE;
  }
  else if (twopacType == "twopac-type-profile") {
    PRICE_OF_COLORBOARD_TWOPAC = Math.ceil(COLORBOARD_PER_METER * twopac_length) * PROFILEBOARD_PRICE;
  }

  let PRICE_OF_PAINT;
  if (twopacPaintType == "twopac-paint-type-matt") {
    PRICE_OF_PAINT = Math.ceil(((twopac_length * COLORBOARD_PER_METER)*1.2) * BOARD_CUBIC_METER * MATT_PAINT_PRICE_PER_CUBIC_METER);
  }
  else if (twopacPaintType == "twopac-paint-type-gloss") {
    PRICE_OF_PAINT = Math.ceil(((twopac_length * COLORBOARD_PER_METER)*1.2) * BOARD_CUBIC_METER * GLOSS_PAINT_PRICE_PER_CUBIC_METER);
  }

  const PAINT_RELATED_COST = 400 + Math.ceil(PRICE_OF_PAINT * 0.3);
  
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
    PRICE_OF_PAINT + PAINT_RELATED_COST;

  let initialPrice = laminatePrice + twopacPrice + DESIGN_PRICE + DELIVERY_PRICE;

  let otherCosts = (MAINTAINENCE_COST_PERCENT * initialPrice) + (TRANSPORTATION_COST_PERCENT) + (MISCELLANEOUS_EXPENSES_PERCENT * initialPrice) +
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
      colorboardNumber: Math.ceil(COLORBOARD_PER_METER * laminate_length),
    },

    twopac: {
      cabinetNumberTwopac: Math.ceil(NUMBER_OF_CABINETS_TWOPAC),
      hingeNumberTwopac: Math.ceil(HINGES_PER_METER * twopac_length),
      handleNumberTwopac: Math.ceil(HANDLE_PER_METER * twopac_length),
      subNumberTwopac: Math.ceil(SUB_PER_METER * twopac_length),
      carcassNumberTwopac: Math.ceil(CARCASS_PER_METER * twopac_length),
      satinboardNumber: Math.ceil(COLORBOARD_PER_METER * twopac_length),
      satinboardCubicMeter: Math.ceil(((twopac_length * COLORBOARD_PER_METER)*1.2) * BOARD_CUBIC_METER),
    }
  }

  totalNumber = {
    totalCabinetNumber: numberDetails.laminate.cabinetNumber + numberDetails.twopac.cabinetNumberTwopac,
    totalHingeNumber: numberDetails.laminate.hingeNumber + numberDetails.twopac.hingeNumberTwopac,
    totalHandleNumber: numberDetails.laminate.handleNumber + numberDetails.twopac.handleNumberTwopac,
    totalSubNumber: numberDetails.laminate.subNumber + numberDetails.twopac.subNumberTwopac,
    totalCarcassNumber: numberDetails.laminate.carcassNumber + numberDetails.twopac.carcassNumberTwopac,
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
      subPrice: Math.ceil(PRICE_OF_SUB_TWOPAC),
      paintPrice: Math.ceil(PRICE_OF_PAINT),
      paintRelatedCost: PAINT_RELATED_COST,
    },
    
    total: {
      hingePrice: PRICE_OF_HINGES_LAMINATE + PRICE_OF_HINGES_TWOPAC,
      handlePrice: PRICE_OF_HANDLES_LAMINATE + PRICE_OF_HANDLES_TWOPAC,
      carcassPrice: PRICE_OF_CARCASS_LAMINATE + PRICE_OF_CARCASS_TWOPAC,
      colorBoardPrice: PRICE_OF_COLORBOARD_LAMINATE + PRICE_OF_COLORBOARD_TWOPAC,
      subPrice: PRICE_OF_SUB_LAMINATE + PRICE_OF_SUB_TWOPAC
    },
    
  
    assemblePrice: Math.ceil((NUMBER_OF_CABINETS_LAMINATE + NUMBER_OF_CABINETS_TWOPAC) * ASSEMBLE_PRICE_PER_CABINET),
    installationPrice: Math.ceil((NUMBER_OF_CABINETS_LAMINATE + NUMBER_OF_CABINETS_TWOPAC) * INSTALLATION_PRICE_PER_CABINET),
    deliveryPrice: DELIVERY_PRICE,
    designPrice: DESIGN_PRICE,
    
    
    maintainenceCost: Math.ceil(MAINTAINENCE_COST_PERCENT * initialPrice),
    transportationCost: Math.ceil(TRANSPORTATION_COST_PERCENT),
    miscellaneousExpenses: Math.ceil(MISCELLANEOUS_EXPENSES_PERCENT * initialPrice),
    businessExpenses: Math.ceil(BUSINESS_EXPENSE_PERCENT * initialPrice),
    profit: Math.ceil(PROFIT_PERCENT * initialPrice),
    initialPrice: initialPrice,
    finalPrice: finalPrice
  };

  return finalPrice;
}

function calculateTwopacPrice(length, drawers, twopacType, paintType) {

  let initialPrice = 0;

  const NUMBER_OF_CABINETS = Math.ceil(CABINET_PER_METER * length);
  const PRICE_OF_HINGES = Math.ceil(HINGES_PER_METER * length) * HINGE_PRICE;
  const PRICE_OF_HANDLES = Math.ceil(HANDLE_PER_METER * length) * HANDLE_PRICE;
  const PRICE_OF_CARCASS = Math.ceil(CARCASS_PER_METER * length) * CARCASS_BOARD_PRICE;

  let PRICE_OF_COLORBOARD;
  if (twopacType == "twopac-type-normal") {
    PRICE_OF_COLORBOARD = Math.ceil(COLORBOARD_PER_METER * length) * SATINBOARD_PRICE;
  }
  else if (twopacType == "twopac-type-shaker") {
    PRICE_OF_COLORBOARD = Math.ceil(COLORBOARD_PER_METER * length) * SHAKERBOARD_PRICE;
  }
  else if (twopacType == "twopac-type-profile") {
    PRICE_OF_COLORBOARD = Math.ceil(COLORBOARD_PER_METER * length) * PROFILEBOARD_PRICE;
  }

  const PRICE_OF_SUB = Math.ceil(SUB_PER_METER * length) * SUB_PRICE;

  let PRICE_OF_PAINT;
  if (paintType == "twopac-paint-type-matt") {
    PRICE_OF_PAINT = Math.ceil(((length * COLORBOARD_PER_METER)*1.2) * BOARD_CUBIC_METER * MATT_PAINT_PRICE_PER_CUBIC_METER);
  }
  else if (paintType == "twopac-paint-type-gloss") {
    PRICE_OF_PAINT = Math.ceil(((length * COLORBOARD_PER_METER)*1.2) * BOARD_CUBIC_METER * GLOSS_PAINT_PRICE_PER_CUBIC_METER);
  }
  
  const PAINT_RELATED_COST = 400 + Math.ceil(PRICE_OF_PAINT * 0.3);


  let DELIVERY_PRICE;
  if (NUMBER_OF_CABINETS <= 20) {
    DELIVERY_PRICE = 400;
  } else {
    DELIVERY_PRICE = 700;
  }

  

  initialPrice += PRICE_OF_CARCASS + PRICE_OF_COLORBOARD + PRICE_OF_HANDLES + PRICE_OF_HINGES + PRICE_OF_SUB + DELIVERY_PRICE +
    (NUMBER_OF_CABINETS * ASSEMBLE_PRICE_PER_CABINET) + (NUMBER_OF_CABINETS * INSTALLATION_PRICE_PER_CABINET) + DESIGN_PRICE + (drawers * DRAWER_PRICE);

  let otherCosts = (MAINTAINENCE_COST_PERCENT * initialPrice) + (TRANSPORTATION_COST_PERCENT) + (MISCELLANEOUS_EXPENSES_PERCENT * initialPrice) +
    (BUSINESS_EXPENSE_PERCENT * initialPrice) + (PROFIT_PERCENT * initialPrice);

  let finalPrice;
  finalPrice = PRICE_OF_PAINT + PAINT_RELATED_COST + initialPrice + otherCosts;

  numberDetails = {
    twopac: {
      cabinetNumber: Math.ceil(NUMBER_OF_CABINETS),
      hingeNumber: Math.ceil(HINGES_PER_METER * length),
      handleNumber: Math.ceil(HANDLE_PER_METER * length),
      subNumber: Math.ceil(SUB_PER_METER * length),
      carcassNumber: Math.ceil(CARCASS_PER_METER * length),
      colorboardNumber: Math.ceil(COLORBOARD_PER_METER * length),
      satinboardCubicMeter: Math.ceil(((length * COLORBOARD_PER_METER)*1.2) * BOARD_CUBIC_METER) 
    }
  }

  // Store price details
  priceDetails = {
    twopac: {
      hingePrice: Math.ceil(PRICE_OF_HINGES),
      handlePrice: Math.ceil(PRICE_OF_HANDLES),
      carcassPrice: Math.ceil(PRICE_OF_CARCASS),
      colorboardPrice: Math.ceil(PRICE_OF_COLORBOARD),
      subPrice: Math.ceil(PRICE_OF_SUB),
      deliveryPrice: DELIVERY_PRICE,
      designPrice: DESIGN_PRICE,
      assemblePrice: (NUMBER_OF_CABINETS * ASSEMBLE_PRICE_PER_CABINET),
      installationPrice: (NUMBER_OF_CABINETS * INSTALLATION_PRICE_PER_CABINET),
      paintPrice: Math.ceil(PRICE_OF_PAINT),
      paintRelatedCost: PAINT_RELATED_COST, 
      maintainenceCost: Math.ceil(MAINTAINENCE_COST_PERCENT * initialPrice),
      transportationCost: Math.ceil(TRANSPORTATION_COST_PERCENT),
      miscellaneousExpenses: Math.ceil(MISCELLANEOUS_EXPENSES_PERCENT * initialPrice),
      businessExpenses: Math.ceil(BUSINESS_EXPENSE_PERCENT * initialPrice),
      profit: Math.ceil(PROFIT_PERCENT * initialPrice),
      initialPrice: Math.ceil(initialPrice),
      finalPrice: finalPrice
    }
  };

  return finalPrice;
}
function calculateLaminatePrice(length, drawers, laminateType) {
  let initialPrice = 0;

  const NUMBER_OF_CABINETS = Math.ceil(CABINET_PER_METER * length);
  const PRICE_OF_HINGES = Math.ceil(HINGES_PER_METER * length) * HINGE_PRICE;
  const PRICE_OF_HANDLES = Math.ceil(HANDLE_PER_METER * length) * HANDLE_PRICE;
  const PRICE_OF_CARCASS = Math.ceil(CARCASS_PER_METER * length) * CARCASS_BOARD_PRICE;
  let PRICE_OF_COLORBOARD;

  if (laminateType == "type-normal-smooth") {
    PRICE_OF_COLORBOARD = Math.ceil(COLORBOARD_PER_METER * length) * NORMAL_SMOOTH_BOARD_PRICE;
  }
  else if (laminateType == "type-smooth-grain") {
    PRICE_OF_COLORBOARD = Math.ceil(COLORBOARD_PER_METER * length) * SMOOTH_GRAIN_BOARD_PRICE;
  }
  else if (laminateType == "type-wood-grain") {
    PRICE_OF_COLORBOARD = Math.ceil(COLORBOARD_PER_METER * length) * WOOD_GRAIN_BOARD_PRICE;
  }
  else if (laminateType == "type-venet") {
    PRICE_OF_COLORBOARD = Math.ceil(COLORBOARD_PER_METER * length) * VENET_BOARD_PRICE;
  }

  const PRICE_OF_SUB = Math.ceil(SUB_PER_METER * length) * SUB_PRICE;
  const PRICE_OF_PAINT = Math.ceil(((length * COLORBOARD_PER_METER)*1.2) * BOARD_CUBIC_METER * PAINT_PRICE_PER_CUBIC_METER);
  const PAINT_RELATED_COST = 400 + Math.ceil(PRICE_OF_PAINT * 0.3);
  let DELIVERY_PRICE;
  if (NUMBER_OF_CABINETS <= 20) {
    DELIVERY_PRICE = 400;
  } else {
    DELIVERY_PRICE = 700;
  }

  

  initialPrice += PRICE_OF_CARCASS + PRICE_OF_COLORBOARD + PRICE_OF_HANDLES + PRICE_OF_HINGES + PRICE_OF_SUB + DELIVERY_PRICE +
    (NUMBER_OF_CABINETS * ASSEMBLE_PRICE_PER_CABINET) + (NUMBER_OF_CABINETS * INSTALLATION_PRICE_PER_CABINET) + DESIGN_PRICE + (drawers * DRAWER_PRICE);

  let otherCosts = (MAINTAINENCE_COST_PERCENT * initialPrice) + (TRANSPORTATION_COST_PERCENT) + (MISCELLANEOUS_EXPENSES_PERCENT * initialPrice) +
    (BUSINESS_EXPENSE_PERCENT * initialPrice) + (PROFIT_PERCENT * initialPrice);

  let finalPrice;

  finalPrice = initialPrice + otherCosts;

  numberDetails = {
    laminate: {
      cabinetNumber: Math.ceil(NUMBER_OF_CABINETS),
      hingeNumber: Math.ceil(HINGES_PER_METER * length),
      handleNumber: Math.ceil(HANDLE_PER_METER * length),
      subNumber: Math.ceil(SUB_PER_METER * length),
      carcassNumber: Math.ceil(CARCASS_PER_METER * length),
      colorboardNumber: Math.ceil(COLORBOARD_PER_METER * length),
      satinboardCubicMeter: Math.ceil(((length * COLORBOARD_PER_METER)*1.2) * BOARD_CUBIC_METER) 
    }
  }

  // Store price details
  priceDetails = {
    laminate: {
      hingePrice: Math.ceil(PRICE_OF_HINGES),
      handlePrice: Math.ceil(PRICE_OF_HANDLES),
      carcassPrice: Math.ceil(PRICE_OF_CARCASS),
      colorboardPrice: Math.ceil(PRICE_OF_COLORBOARD),
      subPrice: Math.ceil(PRICE_OF_SUB),
      deliveryPrice: DELIVERY_PRICE,
      designPrice: DESIGN_PRICE,
      assemblePrice: (NUMBER_OF_CABINETS * ASSEMBLE_PRICE_PER_CABINET),
      installationPrice: (NUMBER_OF_CABINETS * INSTALLATION_PRICE_PER_CABINET),
      paintPrice: Math.ceil(PRICE_OF_PAINT),
      paintRelatedCost: PAINT_RELATED_COST, 
      maintainenceCost: Math.ceil(MAINTAINENCE_COST_PERCENT * initialPrice),
      transportationCost: Math.ceil(TRANSPORTATION_COST_PERCENT),
      miscellaneousExpenses: Math.ceil(MISCELLANEOUS_EXPENSES_PERCENT * initialPrice),
      businessExpenses: Math.ceil(BUSINESS_EXPENSE_PERCENT * initialPrice),
      profit: Math.ceil(PROFIT_PERCENT * initialPrice),
      initialPrice: Math.ceil(initialPrice),
      finalPrice: finalPrice
    }
  };

  return finalPrice;
}

let isTwoPac = false;
let showDetail = false;
let accessoryPrices = 0;


function showDetailsFunction() {
  let detailsHtml

  if (priceDetails.laminate && priceDetails.twopac) {

    detailsHtml = '<table><tr><th>Component</th><th>Laminate Number</th><th>Laminate</th><th>Twopac Number</th><th>Twopac</th><th>total Number</th><th>Total</th></tr>';

    detailsHtml += `
      <tr><td>Cabinets</td><td>${numberDetails.laminate.cabinetNumber}</td><td></td><td>${numberDetails.twopac.cabinetNumberTwopac}</td><td></td><td>${totalNumber.totalCabinetNumber}</td><td></td></tr>
      <tr><td>Hinges</td><td>${numberDetails.laminate.hingeNumber}</td><td>$${priceDetails.laminate.hingePrice}</td><td>${numberDetails.twopac.hingeNumberTwopac}</td><td>$${priceDetails.twopac.hingePrice}</td><td>${totalNumber.totalHingeNumber}</td><td>$${priceDetails.total.hingePrice}</td></tr>
      <tr><td>Handles</td><td>${numberDetails.laminate.handleNumber}</td><td>$${priceDetails.laminate.handlePrice}</td><td>${numberDetails.twopac.handleNumberTwopac}</td><td>$${priceDetails.twopac.handlePrice}</td><td>${totalNumber.totalHandleNumber}</td><td>$${priceDetails.total.handlePrice}</td></tr>
      <tr><td>Carcasses</td><td>${numberDetails.laminate.carcassNumber}</td><td>$${priceDetails.laminate.carcassPrice}</td><td>${numberDetails.twopac.carcassNumberTwopac}</td><td>$${priceDetails.twopac.carcassPrice}</td><td>${totalNumber.totalCarcassNumber}</td><td>$${priceDetails.total.carcassPrice}</td></tr>
      <tr><td>Color Boards/2pac Board</td><td>${numberDetails.laminate.colorboardNumber}</td><td>$${priceDetails.laminate.colorboardPrice}</td><td>${numberDetails.twopac.satinboardNumber}</td><td>$${priceDetails.twopac.satinBoardPrice}</td><td></td><td>$${priceDetails.total.colorBoardPrice}</td></tr>
      <tr><td>Subs</td><td>${numberDetails.laminate.subNumber}</td><td>$${priceDetails.laminate.subPrice}</td><td>${numberDetails.twopac.subNumberTwopac}</td><td>$${priceDetails.twopac.subPrice}</td><td>${totalNumber.totalSubNumber}</td><td>$${priceDetails.total.subPrice}</td></tr>
      </table>

      <table><tr><th>Component</th><th>Price</th></tr>
      <tr><td>Assembly</td><td>$${priceDetails.assemblePrice}</td></tr>
      <tr><td>Installation</td><td>$${priceDetails.installationPrice}</td></tr>
      <tr><td>Delivery</td><td>$${priceDetails.deliveryPrice}</td></tr>
      <tr><td>Design</td><td>$${priceDetails.designPrice}</td></tr>
      </table>
      
      
      
      <h1>Initial Price: $${priceDetails.initialPrice}</h1>

      <table><tr><th>Component</th><th>Cubic Meter</th><th>Price</th></tr>
      <tr><td>Paint Price</td><td>${numberDetails.twopac.satinboardCubicMeter}</td><td>$${priceDetails.twopac.paintPrice}</td></tr>
      <tr><td>Paint Related Cost</td><td></td><td>$${priceDetails.twopac.paintRelatedCost}</td></tr>


      <table><tr><th>Expense</th><th>Cost</th></tr>
      <tr><td>Maintainence</td><td>$${priceDetails.maintainenceCost}</td></tr>
      <tr><td>Transportation</td><td>$${priceDetails.transportationCost}</td></tr>
      <tr><td>Miscellaneous</td><td>$${priceDetails.miscellaneousExpenses}</td></tr>
      <tr><td>Business</td><td>$${priceDetails.businessExpenses}</td></tr>
      <tr><td>Profit</td><td>$${priceDetails.profit}</td></tr>
      ${(accessoryPrices > 0) ? '<tr><td>Extra Accessories Price</td><td>$' + accessoryPrices + '</td></tr>' : ''}
      </table>

    `;
  }
  else if (priceDetails.melamineCarcass)
  {
    detailsHtml = '<table><tr><th>Component</th><th>Number</th><th>Price</th></tr>'

    detailsHtml += `
      <tr><td>Cabinets</td><td>${numberDetails.melamineCarcass.cabinetNumber}</td><td></td></tr>
      ${(numberDetails.melamineCarcass.hingeNumber>0) ? "<tr><td>Hinges</td><td>"+ numberDetails.melamineCarcass.hingeNumber +"</td><td>$"+priceDetails.melamineCarcass.hingePrice +"</td></tr>" : ''}
      ${(numberDetails.melamineCarcass.handleNumber>0) ? "<tr><td>Handles</td><td>"+ numberDetails.melamineCarcass.handleNumber +"</td><td>$"+priceDetails.melamineCarcass.handlePrice +"</td></tr>" : ''}
      <tr><td>Carcasses</td><td>${numberDetails.melamineCarcass.carcassNumber}</td><td>$${priceDetails.melamineCarcass.carcassPrice}</td></tr>
      ${(numberDetails.melamineCarcass.colorboardNumber>0) ? "<tr><td>Colorboard/Satinboard</td><td>"+numberDetails.melamineCarcass.colorboardNumber +"</td><td>$"+priceDetails.melamineCarcass.colorboardPrice +"</td></tr>" : ''}
      <tr><td>Drawers</td><td>${numberDetails.melamineCarcass.drawerNumber}</td><td>$${priceDetails.melamineCarcass.drawerPrice}</td></tr>
      ${(numberDetails.melamineCarcass.subNumber>0) ? "<tr><td>Substrates</td><td>"+numberDetails.melamineCarcass.subNumber +"</td><td>$"+priceDetails.melamineCarcass.subPrice +"</td></tr>" : ''}
      <tr><td>Delivery</td><td></td><td>$${priceDetails.melamineCarcass.deliveryPrice}</td></tr>
      <tr><td>Design</td><td></td><td>$${priceDetails.melamineCarcass.designPrice}</td></tr>
      <tr><td>Assembly</td><td></td><td>$${priceDetails.melamineCarcass.assemblePrice}</td></tr>
      <tr><td>Installation</td><td></td><td>$${priceDetails.melamineCarcass.installationPrice}</td></tr>
      </table>

      <h1>Initial Price: $${priceDetails.melamineCarcass.initialPrice}</h1>


      <table><tr><th>Expense</th><th>Cost</th></tr>
      <tr><td>Maintainence</td><td>$${priceDetails.melamineCarcass.maintainenceCost}</td></tr>
      <tr><td>Transportation</td><td>$${priceDetails.melamineCarcass.transportationCost}</td></tr>
      <tr><td>Miscellaneous</td><td>$${priceDetails.melamineCarcass.miscellaneousExpenses}</td></tr>
      <tr><td>Business</td><td>$${priceDetails.melamineCarcass.businessExpenses}</td></tr>
      <tr><td>Profit</td><td>$${priceDetails.melamineCarcass.profit}</td></tr>
      ${(accessoryPrices > 0) ? '<tr><td>Extra Accessories Price</td><td>$' + accessoryPrices + '</td></tr>' : ''}
      </table>
    `;
  }
  else if (priceDetails.laminate && !(priceDetails.twopac))
  {

    detailsHtml = '<table><tr><th>Component</th><th>Number</th><th>Price</th></tr>'

    detailsHtml += `
      <tr><td>Cabinets</td><td>${numberDetails.laminate.cabinetNumber}</td><td></td></tr>
      <tr><td>Hinges</td><td>${numberDetails.laminate.hingeNumber}</td><td>$${priceDetails.laminate.hingePrice}</td></tr>
      <tr><td>Handles</td><td>${numberDetails.laminate.handleNumber}</td><td>$${priceDetails.laminate.handlePrice}</td></tr>
      <tr><td>Carcasses</td><td>${numberDetails.laminate.carcassNumber}</td><td>$${priceDetails.laminate.carcassPrice}</td></tr>
      <tr><td>Colorboard/Satinboard</td><td>${numberDetails.laminate.colorboardNumber}</td><td>$${priceDetails.laminate.colorboardPrice}</td></tr>
      <tr><td>Subs</td><td>${numberDetails.laminate.subNumber}</td><td>$${priceDetails.laminate.subPrice}</td></tr>
      <tr><td>Delivery</td><td></td><td>$${priceDetails.laminate.deliveryPrice}</td></tr>
      <tr><td>Design</td><td></td><td>$${priceDetails.laminate.designPrice}</td></tr>
      <tr><td>Assembly</td><td></td><td>$${priceDetails.laminate.assemblePrice}</td></tr>
      <tr><td>Installation</td><td></td><td>$${priceDetails.laminate.installationPrice}</td></tr> </table>

      
      
      <h1>Initial Price: $${priceDetails.laminate.initialPrice}</h1>


      <table><tr><th>Expense</th><th>Cost</th></tr>
      <tr><td>Maintainence</td><td>$${priceDetails.laminate.maintainenceCost}</td></tr>
      <tr><td>Transportation</td><td>$${priceDetails.laminate.transportationCost}</td></tr>
      <tr><td>Miscellaneous</td><td>$${priceDetails.laminate.miscellaneousExpenses}</td></tr>
      <tr><td>Business</td><td>$${priceDetails.laminate.businessExpenses}</td></tr>
      <tr><td>Profit</td><td>$${priceDetails.laminate.profit}</td></tr>
      ${(accessoryPrices > 0) ? '<tr><td>Extra Accessories Price</td><td>$' + accessoryPrices + '</td></tr>' : ''}
      </table>
    `;
  }
  else if (priceDetails.twopac && !(priceDetails.laminate)) 
  {
    detailsHtml = '<table><tr><th>Component</th><th>Number</th><th>Price</th></tr>'

    detailsHtml += `
      <tr><td>Cabinets</td><td>${numberDetails.twopac.cabinetNumber}</td><td></td></tr>
      <tr><td>Hinges</td><td>${numberDetails.twopac.hingeNumber}</td><td>$${priceDetails.twopac.hingePrice}</td></tr>
      <tr><td>Handles</td><td>${numberDetails.twopac.handleNumber}</td><td>$${priceDetails.twopac.handlePrice}</td></tr>
      <tr><td>Carcasses</td><td>${numberDetails.twopac.carcassNumber}</td><td>$${priceDetails.twopac.carcassPrice}</td></tr>
      <tr><td>Colorboard/Satinboard</td><td>${numberDetails.twopac.colorboardNumber}</td><td>$${priceDetails.twopac.colorboardPrice}</td></tr>
      <tr><td>Subs</td><td>${numberDetails.twopac.subNumber}</td><td>$${priceDetails.twopac.subPrice}</td></tr>
      <tr><td>Delivery</td><td></td><td>$${priceDetails.twopac.deliveryPrice}</td></tr>
      <tr><td>Design</td><td></td><td>$${priceDetails.twopac.designPrice}</td></tr>
      <tr><td>Assembly</td><td></td><td>$${priceDetails.twopac.assemblePrice}</td></tr>
      <tr><td>Installation</td><td></td><td>$${priceDetails.twopac.installationPrice}</td></tr> </table>

      
      
      <h1>Initial Price: $${priceDetails.twopac.initialPrice}</h1>


      <table><tr><th>Component</th><th>Cubic Meter</th><th>Price</th></tr><tr><td>Paint Price</td><td>${numberDetails.twopac.satinboardCubicMeter}</td><td>$${priceDetails.twopac.paintPrice}</td></tr><tr><td>Paint Related Cost</td><td></td><td>${priceDetails.twopac.paintRelatedCost}</td></tr>


      <table><tr><th>Expense</th><th>Cost</th></tr>
      <tr><td>Maintainence</td><td>$${priceDetails.twopac.maintainenceCost}</td></tr>
      <tr><td>Transportation</td><td>$${priceDetails.twopac.transportationCost}</td></tr>
      <tr><td>Miscellaneous</td><td>$${priceDetails.twopac.miscellaneousExpenses}</td></tr>
      <tr><td>Business</td><td>$${priceDetails.twopac.businessExpenses}</td></tr>
      <tr><td>Profit</td><td>$${priceDetails.twopac.profit}</td></tr>
      ${(accessoryPrices > 0) ? '<tr><td>Extra Accessories Price</td><td>$' + accessoryPrices + '</td></tr>' : ''}
      </table>
    `;
  }
  return detailsHtml;
}


// Calculate price
document.getElementById('calculate-price').addEventListener('click', () => {

  accessoryPrices = 0;
  let price = 0;
  const finish = document.getElementById('finishDropdown').value;
  const accessoryPrice = document.getElementById('extra-accessories').value;
  if (!(isNaN(accessoryPrice) || accessoryPrice == 0 || accessoryPrice == '0')) {
    let numAccessoryPrice = parseInt(accessoryPrice)
    price += numAccessoryPrice
    accessoryPrices = numAccessoryPrice;
  }


  if (finish == 'melamine-carcass') 
  {
    isTwoPac = false;

    let length = document.getElementById('melamine-length').value;
    let hingeNumber = document.getElementById('melamine-hinge-number').value;
    let handleNumber = document.getElementById('melamine-handle-number').value;
    let colorboard = document.getElementById('melamine-colorboard').value;
    let drawers = document.getElementById('melamine-drawers').value;
    let subDropdown = document.getElementById('melamine-sub-yes-no').value;
        
    let hasSubs;
    if (subDropdown == 'sub-yes') 
    {
      hasSubs = true;
    }
    else
    {
      hasSubs = false;
    }

    if (length == 0 || isNaN(length)) { alert("Please enter a valid length."); return; }

    if (colorboard > 0) {
      let colorboardType = document.getElementById('melamine-type').value;
      price += calculateMelaminePrice(length, hingeNumber, handleNumber, colorboard, drawers, hasSubs, colorboardType)
    }
    else {
      price += calculateMelaminePrice(length, hingeNumber, handleNumber, colorboard, drawers, hasSubs, undefined)
    }

    if (showDetail) {
      detailsHtml = showDetailsFunction();
      document.getElementById('details-container').innerHTML = detailsHtml;
    }

  }
  else if (finish == 'laminate') {

    isTwoPac = false;

    let length = document.getElementById('length').value;
    let drawers = document.getElementById('drawers').value;
    let laminateTypeDropdown = document.getElementById('laminate-type').value;
  
    console.log(laminateTypeDropdown)

    if (length == 0 || isNaN(length)) { alert("Please enter a valid length."); return; }

    price += calculateLaminatePrice(length, drawers, laminateTypeDropdown);

    if (showDetail) {
      detailsHtml = showDetailsFunction();
      document.getElementById('details-container').innerHTML = detailsHtml;
    }

  } else if (finish == 'twopac') {

    isTwoPac = true;

    let length = document.getElementById('length').value;
    let drawers = document.getElementById('drawers').value;
    let twopacType = document.getElementById('twopac-type').value;
    let paintType = document.getElementById('twopac-paint-type').value;

    if (length == 0 || isNaN(length)) { alert("Please enter a valid length."); return; }

    price += calculateTwopacPrice(length, drawers, twopacType, paintType);

    if (showDetail) {
      detailsHtml = showDetailsFunction();
      document.getElementById('details-container').innerHTML = detailsHtml;
    }

  } else if (finish == 'both') {

    isTwoPac = true;

    let laminate_length = document.getElementById('laminate-length').value;
    let laminate_drawers = document.getElementById('laminate-drawers').value;
    let laminateTypeDropdown = document.getElementById('laminate-type').value;

    let twopac_length = document.getElementById('twopac-length').value;
    let twopac_drawers = document.getElementById('twopac-drawers').value;
    let twopacType = document.getElementById('twopac-type').value;
    let paintType = document.getElementById('twopac-paint-type').value;

    if (laminate_length == 0 || isNaN(laminate_length) || twopac_length == 0 || isNaN(twopac_length)) { alert("Please enter a valid length."); return; }


    price += calculateBothPrice(laminate_length, laminate_drawers,
      twopac_length, twopac_drawers, laminateTypeDropdown, twopacType, paintType
    );

    if (showDetail) {
      detailsHtml = showDetailsFunction();
      document.getElementById('details-container').innerHTML = detailsHtml;
    }
  }
  
  document.getElementById("reset-container").innerHTML = `<button id="reset-button">Reset Page</button>`
  document.getElementById('reset-button').addEventListener('click', () => {location.reload();});

  document.getElementById('price').innerHTML = "Total Price: $" + Math.ceil(price);
  document.getElementById('priceDetails').style.display = 'block'; // Show "Show Details" button
});





document.getElementById('priceDetails').addEventListener('click', () => {
  showDetail = true;

  detailsHtml = showDetailsFunction();

  document.getElementById('details-container').innerHTML = detailsHtml;
});

// Initial state of the "Show Details" button and details container
document.getElementById('priceDetails').style.display = 'none';


