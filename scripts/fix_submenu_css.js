const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/app/services/submenu.scss');
const content = fs.readFileSync(filePath, 'utf8');

// Split the file into lines (handling both CRLF and LF)
const lines = content.split(/\r?\n/);

console.log("Current total lines in file:", lines.length);

if (lines.length >= 4450) {
    // 1. Slice Part 1 (lines 1 to 3883) -> 0 to 3882 inclusive
    const part1 = lines.slice(0, 3883);
    
    // 2. Insert the missing 3 lines of the .sd-hero__btn / .gra_btn button hover pulse ring
    const missingLines = [
        "                  opacity: 0;",
        "                  transform: scale(1);",
        "                  transition: none;"
    ];

    // 3. Slice Part 2 (the shifted original tail of ppc, lines 4409 to 4500) -> index 4408 to the end
    const part2 = lines.slice(4408);

    // 4. Extract our MLM styles from lines 3887 to 4407 -> index 3886 to 4406 inclusive
    const mlmLines = lines.slice(3886, 4407);

    // Reconstruct the file:
    // Combined original file (Part 1 + missing button style lines + Part 2)
    const originalSubmenu = [...part1, ...missingLines, ...part2].join('\r\n');

    // And then append the MLM styles nicely at the end
    const finalContent = originalSubmenu + '\r\n' + mlmLines.join('\r\n');

    fs.writeFileSync(filePath, finalContent, 'utf8');
    console.log("Successfully rebuilt submenu.scss visually and programmatically!");
} else {
    console.log("File is not in the shifted state. Total lines:", lines.length);
}
