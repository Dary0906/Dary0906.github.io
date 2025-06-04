

/// comprar 
function calculoTotal() {
  // Obtener la cantidad seleccionada
  const quantity = document.getElementById('quantity').value;

  // Precio por aguacate
  const pricePerUnit = 30.99;

  // Calcular el total
  const total = quantity * pricePerUnit;

  // Mostrar el resultado
  document.getElementById('totalPrice').textContent = total.toFixed(2);
}
/// comprar2 
function calculoTotal2() {
  // Obtener la cantidad seleccionada
  const quantity = document.getElementById('quantity2').value;

  // Precio por aguacate
  const pricePerUnit = 40.80;

  // Calcular el total
  const total = quantity * pricePerUnit;

  // Mostrar el resultado
  document.getElementById('totalPrice2').textContent = total.toFixed(2);
}

/// comprar3
function calculoTotal3() {
  // Obtener la cantidad seleccionada
  const quantity = document.getElementById('quantity3').value;

  // Precio por aguacate
  const pricePerUnit = 129.95;

  // Calcular el total
  const total = quantity * pricePerUnit;

  // Mostrar el resultado
  document.getElementById('totalPrice3').textContent = total.toFixed(2);
}
