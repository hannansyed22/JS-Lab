window.onload = function () {
  alert("Welcome to the store!");

  const name = prompt("Please enter your name:");
  const item = prompt("What item would you like to order?");
  let quantity = prompt("How many would you like to order? (1-99)");

  // Ensure valid input for quantity
  while (isNaN(quantity) || quantity < 1 || quantity > 99) {
      quantity = prompt("Please enter a valid number between 1 and 99:");
  }

  // Get the current time and decide appropriate greeting
  const currentHour = new Date().getHours();
  let greetingMessage = "Hello";
  if (currentHour < 12) {
      greetingMessage = "Good morning";
  } else if (currentHour < 18) {
      greetingMessage = "Good afternoon";
  } else {
      greetingMessage = "Good evening";
  }

  // Calculate expected delivery date (7 days from today)
  const today = new Date();
  const arrivalDate = new Date(today);
  arrivalDate.setDate(today.getDate() + 7);
  const arrivalDateString = arrivalDate.toDateString();

  // Update HTML with greeting and order details
  document.getElementById("greeting").innerText = `${greetingMessage} ${name}, thank you for your order!`;
  document.getElementById("order-details").innerText = `You ordered ${quantity} ${item}(s).`;
  document.getElementById("arrival-date").innerText = `Your order will arrive on ${arrivalDateString}.`;
};
