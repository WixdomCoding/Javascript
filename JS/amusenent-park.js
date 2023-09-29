console.log("\n\nAmusement Park:");

function createVisitor(name, age, ticketId) {
  return { name, age, ticketId };
}
console.log(createVisitor("Verena Nardi", 45, "H32AZ123"));

function revokeTicket(visitor) {
  visitor.ticketId = null;
  return visitor;
}
const visitor = createVisitor("Verena Nardi", 45, "H32AZ123");
console.log(revokeTicket(visitor));

function ticketStatus(ticketList, ticket) {
  if (ticket in ticketList) {
    return ticketList[ticket] ? `Ticket sold to ${ticketList[ticket]}` : "Ticket not sold yet";
  } else {
    return "Unknown ticket id";
  }
}
const tickets = {
  "0H2AZ123": null,
  "23LA9T41": "Verena Nardi",
};
console.log(ticketStatus(tickets, "RE90VAW7"));
console.log(ticketStatus(tickets, "0H2AZ123"));
console.log(ticketStatus(tickets, "23LA9T41"));

function gtcVersion(visitor) {
  return visitor.gtc?.version || "undefined";
}
const visitorNew = {
  name: "Verena Nardi",
  age: 45,
  ticketId: "H32AZ123",
  gtc: {
    signed: true,
    version: "2.1",
  },
};
console.log(gtcVersion(visitorNew));

const visitorOld = {
  name: "Verena Nardi",
  age: 45,
  ticketId: "H32AZ123",
};
console.log(gtcVersion(visitorOld));
