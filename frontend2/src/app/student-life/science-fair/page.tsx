import { StudentLifeContent, StudentLifeSubPage } from "@/components/student-life/StudentLifeSubPage";

export default function ScienceFairPage() {
  return (
    <StudentLifeSubPage
      section="/student-life/science-fair"
      title="Science Fair"
      subtitle="Inspiring curiosity, experimentation, and innovation among young scientists."
    >
      <StudentLifeContent title="Discovery & Innovation">
        <p>
          The Playpen Science Fair showcases pupil projects in science, technology, and
          engineering. Participants design experiments, build models, and present findings
          to judges, teachers, and peers.
        </p>
        <p>
          The fair encourages critical thinking and practical application of classroom
          learning, with recognition for creativity, methodology, and presentation.
        </p>
      </StudentLifeContent>
    </StudentLifeSubPage>
  );
}
