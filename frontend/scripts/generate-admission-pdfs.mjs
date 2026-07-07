import { mkdirSync, writeFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "forms");

function escapePdf(text) {
  return String(text)
    .replace(/\\/g, "\\\\")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)")
    .replace(/[^\x00-\x7F]/g, "?");
}

class PdfBuilder {
  constructor() {
    this.pages = [];
    this.current = this.newPage();
  }

  newPage() {
    const page = { ops: [], y: 760 };
    this.pages.push(page);
    this.current = page;
    return page;
  }

  setColor(page, stroke = false) {
    page.ops.push(`${stroke ? "0.5 0 0" : "0.5 0 0"} ${stroke ? "RG" : "rg"}`);
  }

  text(page, x, y, text, size = 10, bold = false) {
    page.ops.push("BT");
    page.ops.push(`/F${bold ? 2 : 1} ${size} Tf`);
    page.ops.push("0 0 0 rg");
    page.ops.push(`${x} ${y} Td`);
    page.ops.push(`(${escapePdf(text)}) Tj`);
    page.ops.push("ET");
  }

  line(page, x1, y1, x2, y2, width = 0.5) {
    page.ops.push(`${width} w`);
    page.ops.push("0.5 0 0 RG");
    page.ops.push(`${x1} ${y1} m ${x2} ${y2} l S`);
  }

  rect(page, x, y, w, h, fill = false) {
    page.ops.push(`${x} ${y} ${w} ${h} re`);
    page.ops.push(fill ? "f" : "S");
  }

  fieldRow(page, label, y, x = 40, width = 532, height = 22) {
    this.text(page, x + 4, y + 6, label, 8, true);
    this.rect(page, x, y - height, width, height);
  }

  twoColRow(page, leftLabel, rightLabel, y, height = 22) {
    this.text(page, 44, y + 6, leftLabel, 8, true);
    this.text(page, 316, y + 6, rightLabel, 8, true);
    this.rect(page, 40, y - height, 268, height);
    this.rect(page, 312, y - height, 260, height);
  }

  build() {
    const pageStreams = this.pages.map((page) => page.ops.join("\n"));
    const pageCount = this.pages.length;
    const kids = [];
    const contents = [];
    const fontRegular = "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>";
    const fontBold = "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>";

    let objIndex = 3;
    const pageObjNums = [];
    for (let i = 0; i < pageCount; i++) {
      pageObjNums.push(objIndex);
      objIndex += 2;
    }

    const objects = [];
    objects.push("<< /Type /Catalog /Pages 2 0 R >>");
    objects.push(`<< /Type /Pages /Kids [${pageObjNums.map((n) => `${n} 0 R`).join(" ")}] /Count ${pageCount} >>`);

    for (let i = 0; i < pageCount; i++) {
      const stream = pageStreams[i];
      objects.push(
        `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1  ${3 + pageCount * 2} 0 R /F2 ${4 + pageCount * 2} 0 R >> >> /Contents ${pageObjNums[i] + 1} 0 R >>`
      );
      objects.push(`<< /Length ${Buffer.byteLength(stream, "utf8")} >>\nstream\n${stream}\nendstream`);
    }

    objects.push(fontRegular);
    objects.push(fontBold);

    let pdf = "%PDF-1.4\n";
    const offsets = [0];
    objects.forEach((obj, index) => {
      offsets.push(Buffer.byteLength(pdf, "utf8"));
      pdf += `${index + 1} 0 obj\n${obj}\nendobj\n`;
    });

    const xrefOffset = Buffer.byteLength(pdf, "utf8");
    pdf += `xref\n0 ${objects.length + 1}\n`;
    pdf += "0000000000 65535 f \n";
    for (let i = 1; i <= objects.length; i++) {
      pdf += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
    }
    pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\n`;
    pdf += `startxref\n${xrefOffset}\n%%EOF`;
    return pdf;
  }
}

function buildPgClassXPdf() {
  const pdf = new PdfBuilder();
  const p = pdf.current;

  pdf.rect(p, 286, 748, 40, 40);
  pdf.text(p, 292, 772, "PLAYPEN", 8, true);
  pdf.text(p, 220, 740, "Admission Form", 12, true);
  pdf.text(p, 400, 740, "Money receipt no. __________", 8);
  pdf.text(p, 175, 722, "PLAYGROUP - CLASS X", 11, true);
  pdf.text(p, 205, 706, "Academic Year: 2025 - 2026", 10, true);
  pdf.text(p, 130, 690, "(Please fill in all information clearly in BLOCKED LETTERS)", 8);
  pdf.text(p, 430, 690, "Date: ____________", 8);

  let y = 672;
  pdf.text(p, 40, y, "A. PERSONAL INFORMATION", 9, true);
  y -= 18;
  pdf.fieldRow(p, "1. Student's Name:", y, 40, 532, 16);
  y -= 18;
  pdf.fieldRow(p, "2. Class applying for:", y, 40, 532, 16);
  y -= 18;
  pdf.twoColRow(p, "3. Date of Birth:", "4. Gender: Male [ ] Female [ ]", y, 16);
  y -= 18;
  pdf.twoColRow(p, "5. Nationality:", "6. Religion:", y, 16);

  y -= 22;
  pdf.text(p, 40, y, "B. FAMILY DETAILS", 9, true);
  y -= 16;
  const familyFields = [
    "1. Father's Full Name:",
    "2. Educational Qualification:",
    "3. Profession:",
    "4. Designation:",
    "5. Office Address & Contact No.:",
    "6. E-mail:",
    "7. Mother's Full Name:",
    "8. Educational Qualification:",
    "9. Occupation:",
    "10. Office Address & Contact No.:",
    "11. E-mail:",
  ];
  familyFields.forEach((field) => {
    pdf.fieldRow(p, field, y, 40, 532, field.includes("Address") ? 24 : 16);
    y -= field.includes("Address") ? 26 : 18;
  });

  y -= 4;
  pdf.fieldRow(p, "C. Residential Address & Contact No.:", y, 40, 532, 36);
  y -= 44;
  pdf.text(p, 40, y, "D. Second Person to be contacted in case of emergency", 9, true);
  y -= 16;
  pdf.fieldRow(p, "1. Name:", y, 40, 532, 16);
  y -= 18;
  pdf.fieldRow(p, "2. Relationship with applicant:", y, 40, 532, 16);
  y -= 18;
  pdf.fieldRow(p, "3. Address & Contact no.:", y, 40, 532, 24);
  y -= 30;
  pdf.text(p, 44, y, "(must be different from the residential address and contact no.)", 7);

  y -= 16;
  pdf.fieldRow(p, "E. Previous School Attended:", y, 40, 532, 16);
  y -= 20;
  pdf.fieldRow(p, "F. Single Parent ( Yes / No ):", y, 40, 532, 16);
  y -= 18;
  pdf.fieldRow(p, "G. Siblings: None ____ Brother(s) ____ Sister(s) ____", y, 40, 532, 16);
  y -= 20;
  pdf.text(p, 40, y, "H. Details of any sibling or cousin studying in PLAYPEN", 8, true);
  y -= 12;
  pdf.text(p, 180, y, "Name", 7, true);
  pdf.text(p, 330, y, "Relationship", 7, true);
  pdf.text(p, 470, y, "Class", 7, true);
  pdf.rect(p, 40, y - 14, 532, 14);
  pdf.rect(p, 40, y - 28, 532, 14);
  y -= 36;
  pdf.fieldRow(p, "I. Referred to Playpen by:", y, 40, 532, 16);

  y -= 24;
  pdf.rect(p, 40, y - 78, 532, 82);
  pdf.text(p, 48, y - 10, "AGE: __________", 8, true);
  pdf.text(p, 220, y - 10, "FOR OFFICIAL USE ONLY", 8, true);
  pdf.text(p, 48, y - 26, "a) [ ] Recommended for Admission to Class: ______ Section: ______", 7);
  pdf.text(p, 48, y - 38, "b) [ ] Recommended for Waiting List", 7);
  pdf.text(p, 48, y - 50, "c) [ ] Not Recommended", 7);
  pdf.text(p, 90, y - 68, "PRINCIPAL", 7);
  pdf.text(p, 360, y - 68, "VICE PRINCIPAL, ACADEMIC", 7);

  pdf.text(p, 40, 42, "* Please submit the form in the School along with Tk. 1000.", 8);

  return pdf.build();
}

function buildALevelPdf() {
  const pdf = new PdfBuilder();
  const p1 = pdf.current;

  pdf.rect(p1, 286, 748, 40, 40);
  pdf.text(p1, 292, 772, "PLAYPEN", 8, true);
  pdf.text(p1, 150, 728, "PLAYPEN", 14, true);
  pdf.text(p1, 95, 708, "ADVANCED SUBSIDIARY (AS) LEVEL", 11, true);
  pdf.text(p1, 220, 692, "ADMISSION FORM", 11, true);
  pdf.text(p1, 205, 676, "SESSION: 2025 - 2026", 10, true);
  pdf.text(
    p1,
    40,
    656,
    "All information below should be written clearly in BLOCK LETTERS. Please complete and return the form with all documents attached.",
    7
  );

  pdf.text(p1, 40, 632, "PERSONAL DETAILS", 9, true);
  pdf.fieldRow(p1, "Student's Name (as in Passport):", 628);
  pdf.twoColRow(p1, "Date of Birth (as in Passport):", "Gender:", 606);
  pdf.fieldRow(p1, "E-mail Address:", 584);
  pdf.twoColRow(p1, "Land Phone:", "Mobile Phone:", 562);
  pdf.twoColRow(p1, "Nationality:", "Religion:", 540);

  pdf.text(p1, 40, 520, "PARENTS' DETAILS", 9, true);
  pdf.text(p1, 140, 506, "Father", 8, true);
  pdf.text(p1, 390, 506, "Mother", 8, true);
  const parentFields = ["Name", "Educational Qualification", "Current Occupation", "Designation", "Office Address", "E-mail Address", "Contact No"];
  let y = 494;
  parentFields.forEach((field) => {
    pdf.text(p1, 44, y + 6, field + ":", 7, true);
    pdf.text(p1, 316, y + 6, field + ":", 7, true);
    pdf.rect(p1, 40, y - 16, 268, 16);
    pdf.rect(p1, 312, y - 16, 260, 16);
    y -= 18;
  });
  pdf.fieldRow(p1, "Residence Address:", y, 40, 532, 18);

  pdf.text(p1, 40, y - 24, "EMERGENCY CONTACT", 9, true);
  y -= 40;
  ["Name", "Relationship with Applicant", "Address", "Contact No."].forEach((field) => {
    pdf.fieldRow(p1, field + ":", y, 40, 532, 16);
    y -= 18;
  });

  pdf.text(p1, 40, y - 8, "ADDITIONAL INFORMATION", 9, true);
  y -= 26;
  pdf.fieldRow(p1, "Single Parent (Yes / No):", y, 40, 532, 16);
  y -= 18;
  pdf.fieldRow(p1, "Health Issue of Student:", y, 40, 532, 16);
  y -= 18;
  pdf.fieldRow(p1, "Siblings (None / Brother(s) / Sister(s)):", y, 40, 532, 16);
  y -= 18;
  pdf.text(p1, 44, y + 4, "Details of siblings/cousins at PLAYPEN", 7, true);
  pdf.text(p1, 180, y + 4, "Name", 7, true);
  pdf.text(p1, 330, y + 4, "Relationship", 7, true);
  pdf.text(p1, 470, y + 4, "Class", 7, true);
  pdf.rect(p1, 40, y - 14, 532, 14);
  pdf.rect(p1, 40, y - 28, 532, 14);

  pdf.text(p1, 40, y - 42, "ACADEMIC PERFORMANCE", 9, true);
  y -= 58;
  pdf.fieldRow(p1, "Last Educational Institution attended:", y, 40, 532, 16);
  y -= 18;
  pdf.fieldRow(p1, "Year of O' Level Exam:", y, 40, 532, 16);
  y -= 18;
  pdf.text(p1, 40, y, "O' LEVEL RESULTS (Mention subjects only if results are not yet published)", 7, true);
  y -= 12;
  pdf.text(p1, 50, y, "Sl#", 7, true);
  pdf.text(p1, 80, y, "Subject", 7, true);
  pdf.text(p1, 210, y, "Grade", 7, true);
  pdf.text(p1, 320, y, "Sl#", 7, true);
  pdf.text(p1, 350, y, "Subject", 7, true);
  pdf.text(p1, 480, y, "Grade", 7, true);
  for (let i = 0; i < 5; i++) {
    const rowY = y - 14 - i * 14;
    const sl = i + 1;
    const sl2 = i + 6;
    pdf.text(p1, 55, rowY + 4, String(sl), 7);
    pdf.rect(p1, 40, rowY - 10, 268, 12);
    pdf.text(p1, 325, rowY + 4, String(sl2), 7);
    pdf.rect(p1, 312, rowY - 10, 260, 12);
  }

  const p2 = pdf.newPage();
  pdf.text(p2, 40, 760, "Tick your Choice of Subjects for A' Levels at PLAYPEN (minimum 3):", 9, true);
  const subjects = [
  ["[ ] English Language", "[ ] Economics"],
  ["[ ] Physics", "[ ] Computer Science"],
  ["[ ] Chemistry    OR    [ ] Business", "[ ] Biology    OR    [ ] Accounting"],
  ["[ ] Further Mathematics    OR    [ ] Psychology", "[ ] Environmental Management"],
  ["[ ] Pure Mathematics (P1) and Mechanics M", ""],
  ];
  let sy = 742;
  subjects.forEach(([left, right]) => {
    pdf.text(p2, 44, sy, left, 8);
    if (right) pdf.text(p2, 316, sy, right, 8);
    sy -= 16;
  });

  sy -= 4;
  pdf.text(p2, 40, sy, "N.B.", 8, true);
  const notes = [
    "(i) At A2 Level, students will be required to take both P3 and S1 together.",
    "(ii) The subjects chosen cannot be dropped or changed after one month.",
    "(iii) A minimum of 10 students must opt for a subject for classes to be conducted.",
    "(iv) All subjects selected for A' Levels must have been appeared for at O' Levels too.",
  ];
  notes.forEach((note) => {
    sy -= 12;
    pdf.text(p2, 44, sy, note, 7);
  });

  sy -= 16;
  pdf.twoColRow(p2, "Total Number of Subjects:", "Hobbies:", sy);
  sy -= 24;
  pdf.fieldRow(p2, "Other Achievements:", sy, 40, 532, 24);

  sy -= 30;
  pdf.text(p2, 40, sy, "UNDERTAKING:", 9, true);
  sy -= 14;
  pdf.text(
    p2,
    40,
    sy,
    "We declare that the information provided in this Admission Form and all of its attachments are true, correct and complete.",
    8
  );
  sy -= 20;
  pdf.twoColRow(p2, "Father's Full Name (USE BLOCK LETTERS)", "Father's Signature", sy);
  sy -= 24;
  pdf.twoColRow(p2, "Mother's Full Name (USE BLOCK LETTERS)", "Mother's Signature", sy);
  sy -= 24;
  pdf.twoColRow(p2, "Student's Full Name (USE BLOCK LETTERS)", "Student's Signature", sy);

  sy -= 28;
  pdf.text(p2, 40, sy, "Please submit this Form along with the following documents:", 8, true);
  const docs = [
    "1. 2 copies of recent Passport Size Photographs of the Student in School Uniform.",
    "2. Copy of Passport.",
    "3. Copy of last Report Card and Mock Results from Previous school (in case of New Student).",
    "4. Copy of O level Statement of Result, when it is published.",
  ];
  docs.forEach((doc) => {
    sy -= 12;
    pdf.text(p2, 44, sy, doc, 7);
  });

  sy -= 20;
  pdf.rect(p2, 40, sy - 70, 532, 78);
  pdf.text(p2, 220, sy - 10, "FOR OFFICE USE ONLY", 8, true);
  pdf.text(p2, 48, sy - 26, "a) ______ Recommended for Admission in A' Level", 7);
  pdf.text(p2, 48, sy - 38, "b) ______ Recommended for Waiting List", 7);
  pdf.text(p2, 48, sy - 50, "c) ______ Not Recommended (reason mentioned below)", 7);
  pdf.text(p2, 48, sy - 62, "d) Comments: ________________________________________________", 7);

  pdf.text(p2, 90, 90, "HOUSE # 545/A, ROAD # 19, BLOCK - J, BASHUNDHARA R/A, DHAKA - 1229, BANGLADESH", 7);
  pdf.text(p2, 170, 78, "Contact Number: 01755693623, 01755515885", 7);
  pdf.text(p2, 130, 66, "E-mail: info@playpen.edu.bd    Website: www.playpen.edu.bd", 7);

  return pdf.build();
}

mkdirSync(outDir, { recursive: true });

writeFileSync(path.join(outDir, "playpen-pg-class-x-admission-form.pdf"), buildPgClassXPdf(), "utf8");
writeFileSync(path.join(outDir, "playpen-a-level-admission-form.pdf"), buildALevelPdf(), "utf8");

console.log("Created playpen-pg-class-x-admission-form.pdf");
console.log("Created playpen-a-level-admission-form.pdf");
