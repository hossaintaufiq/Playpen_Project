import { mkdirSync, writeFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "forms");

function escapePdf(text) {
  return text.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function buildPdf(title, lines) {
  const contentLines = [
    "BT",
    "/F1 18 Tf",
    "50 740 Td",
    `(${escapePdf(title)}) Tj`,
    "0 -28 Td",
    "/F1 11 Tf",
    `(${escapePdf("Playpen School — Admission Form")}) Tj`,
    "ET",
    "BT",
    "/F1 11 Tf",
    "50 680 Td",
  ];

  lines.forEach((line, index) => {
    if (index > 0) contentLines.push("0 -18 Td");
    contentLines.push(`(${escapePdf(line)}) Tj`);
  });
  contentLines.push("ET");

  const stream = contentLines.join("\n");
  const streamObj = `<< /Length ${Buffer.byteLength(stream, "utf8")} >>\nstream\n${stream}\nendstream`;

  const objects = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 5 0 R >> >> /Contents 4 0 R >>",
    streamObj,
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
  ];

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

const forms = [
  {
    file: "playpen-pg-class-ix-admission-form.pdf",
    title: "PG – Class IX Admission Form",
    lines: [
      "Applicant Information",
      "Pupil's full name: _________________________________",
      "Date of birth: _____________________________________",
      "Gender: __________________________________________",
      "Class applying for: ________________________________",
      "Previous school: ___________________________________",
      "",
      "Parent / Guardian",
      "Name: ____________________________________________",
      "Relationship: ____________________________________",
      "Phone: ___________________________________________",
      "Email: ___________________________________________",
      "Address: _________________________________________",
      "",
      "Submit completed form to the Playpen Admissions Office.",
    ],
  },
  {
    file: "playpen-a-level-admission-form.pdf",
    title: "A' Level Admission Form",
    lines: [
      "Applicant Information",
      "Full name: _______________________________________",
      "Date of birth: _____________________________________",
      "O' Level school: __________________________________",
      "O' Level year: ____________________________________",
      "Subjects & grades: ________________________________",
      "Preferred A' Level subjects: ______________________",
      "",
      "Parent / Guardian",
      "Name: ____________________________________________",
      "Phone: ___________________________________________",
      "Email: ___________________________________________",
      "Address: _________________________________________",
      "",
      "Submit with academic documents to the Admissions Office.",
    ],
  },
];

mkdirSync(outDir, { recursive: true });

for (const form of forms) {
  const pdf = buildPdf(form.title, form.lines);
  writeFileSync(path.join(outDir, form.file), pdf, "utf8");
  console.log(`Created ${form.file}`);
}
