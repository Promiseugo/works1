const contactBook = [];

// 2. Add a contact
function addContact(name, phone, email) {
  contactBook.push({ name, phone, email });
}

// 3. Search by name (case-insensitive)
function searchContact(name) {
  const contact = contactBook.find(
    (c) => c.name.toLowerCase() === name.toLowerCase()
  );
  if (contact) {
    console.log(`Found: ${contact.name} | ${contact.phone} | ${contact.email}`);
  } else {
    console.log(`No contact found for "${name}"`);
  }

function listContacts() {
  const sorted = [...contactBook].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  console.log("--- All Contacts ---");
  sorted.forEach((c) => {
    console.log(`${c.name} | ${c.phone} | ${c.email}`);
  });
}

// --- Add 5 contacts ---
addContact("Tunde Bakare",   "08031234567", "tunde@gmail.com");
addContact("Amaka Obi",      "08059876543", "amaka@yahoo.com");
addContact("Chidi Nwosu",    "07041112233", "chidi@outlook.com");
addContact("Fatima Aliyu",   "08167778899", "fatima@mail.com");
addContact("Emeka Eze",      "09055544433", "emeka@gmail.com");


listContacts();         

console.log("\n--- Search Demo ---");
searchContact("Chidi Nwosu");    
searchContact("Ngozi Adeyemi");  }