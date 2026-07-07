import { StudentLifeContent, StudentLifeSubPage } from "@/components/student-life/StudentLifeSubPage";

export default function AnnualSportsPage() {
  return (
    <StudentLifeSubPage
      section="/student-life/annual-sports"
      title="Annual Sports"
      subtitle="Athletics, team spirit, and healthy competition across all divisions."
    >
      <StudentLifeContent title="Sports at Playpen">
        <p>
          Playpen&apos;s annual sports programme brings together pupils for track and field,
          team games, and house competitions. Sports build fitness, discipline, and camaraderie
          while celebrating effort and fair play.
        </p>
        <p>
          Pupils are encouraged to participate regardless of ability, with coaching and support
          from PE staff and house mentors throughout the season.
        </p>
      </StudentLifeContent>
    </StudentLifeSubPage>
  );
}
