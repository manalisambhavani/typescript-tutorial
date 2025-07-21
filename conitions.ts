/**.
 * ticketAmount = 0;
 * age 10 to 20 => ticketAmount = 10;
 * age 21 to 30 => ticketAmount = 20;
 * age 31 to 40 => ticketAmount = 30;
 */

let age = 35,
  ticketAmount = 0;

if (age >= 10 && age <= 20) {
  ticketAmount = 10;
} else if (age >= 21 && age <= 30) {
  ticketAmount = 20;
} else if (age >= 31 && age <= 40) {
  ticketAmount = 30;
}

console.log({ ticketAmount });
