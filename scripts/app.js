console.log('It works...');
let dropdownLink = document.querySelectorAll('.dropdown__link');
let product_dropdown = document.querySelector('.product_dropdown');
let company_dropdown = document.querySelector('.company_dropdown');
let connect_dropdown = document.querySelector('.connect_dropdown');


dropdownLink.forEach(dropdown => {
  dropdown.addEventListener('mouseover', (e) => {
    let target = e.target;
    if (target.text === 'Product') {
      productFunc();
    } else if (target.text === 'Company') {
        companyFunc();
    } else {
      connectFunc();
    }
  });

  dropdown.addEventListener('mouseout', (e) => {
    let target = e.target;
    if (target.text === 'Product') {
      hideProductFunc();
    } else if (target.text === 'Company') {
      hideCompanyFunc();
    } else {
      hideConnectFunc();
    }
  });
})

// Display
function productFunc() {
  console.log('Product Clicked');
  product_dropdown.style.visibility = 'visible';
  product_dropdown.addEventListener('mouseover', () => {
    product_dropdown.style.visibility = 'visible';
  })
}

function companyFunc() {
  console.log('Company Clicked')
  company_dropdown.style.visibility = 'visible';
  company_dropdown.addEventListener('mouseover', () => {
    company_dropdown.style.visibility = 'visible';
  })
}

function connectFunc() {
  console.log('Connect Clicked');
  connect_dropdown.style.visibility = 'visible';
  connect_dropdown.addEventListener('mouseover', () => {
    connect_dropdown.style.visibility = 'visible';
  })
}

// Hide
function hideProductFunc() {
  console.log('Product Remove Hover');
  product_dropdown.style.visibility = 'hidden';
  product_dropdown.addEventListener('mouseout', () => {
    product_dropdown.style.visibility = 'hidden';
  })
}

function hideCompanyFunc() {
  console.log('Company Remove Hovered')
  company_dropdown.style.visibility = 'hidden';
  company_dropdown.addEventListener('mouseout', () => {
    company_dropdown.style.visibility = 'hidden';
  })
}

function hideConnectFunc() {
  console.log('Connect Remove Hover')
  connect_dropdown.style.visibility = 'hidden';
  connect_dropdown.addEventListener('mouseout', () => {
    connect_dropdown.style.visibility = 'hidden';
  })
}
