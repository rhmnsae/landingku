const fs = require('fs');
['assets/js/script.src.js', 'assets/js/script.js'].forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  // Removed logic that re-adds "Cocok untuk portfolio" as requested by user.
  fs.writeFileSync(f, c);
});
console.log('Fixed portfolio text logic (removed additions)');
