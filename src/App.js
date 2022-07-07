import logo from './logo.svg';
import './App.css';
import StudentList from './StudentList';

function App() {
const students = [
  {
    name: 'Cait Yomorta',
    bio: "Cait, a 23-year old who loves tea, is afraid of pie. Her fiance cooks romantic dinners for them, and Cait doesn't complain even though they aren't anything special-- just dinner at home. She is recently annoyed that she can't announce their secret long distance relationship of 9 years because she is afraid of pie, and pie is central to celebrations in India.",
    scores: [
      {
        date: '2018-02-08',
        score: 77
      },
      {
        date: '2018-04-22',
        score: 92
      },
      {
        date: '2018-09-15',
        score: 68
      }
    ]
  },
  {
    name: 'Holly Baird',
    bio: "Holly often gets emails proclaiming she isn't human from her phone's assistant. Now, she must report to the Ministry of Real Life to show mandatory signs of living, and many people there find her irksome and bad-smelling.",
    scores: [
      {
        date: '2018-12-14',
        score: 88
      },
      {
        date: '2019-01-09',
        score: 79
      },
      {
        date: '2019-02-23',
        score: 91
      },
      {
        date: '2019-03-01',
        score: 95
      }
    ]
  },
  {
    name: 'Wes Mungia',
    bio: "Wes has the ability to use his brain to control gravity and space. Recently, he received an invitation to run for the US Olympic track team. Curious about who invited him, Wes investigated and learned it was Snoop Dogg, a man from his past. He accepted the invitation and went head-to-head with his nemesis: the talented Proctor. He became the champion of the 50 meter dash with pro agility and experienced the old human feeling of getting high on victory and joy. Wes's transformation is comparable to heros like Godzilla or The Hulk in terms of physique, strength and abilities; they emphasize strength while preserving humility.",
    scores: [
      {
        date: '2018-10-11',
        score: 62
      },
      {
        date: '2018-11-24',
        score: 74
      },
      {
        date: '2018-12-19',
        score: 85
      }
    ]
  }
]


  return (
    <div className="app">
      <StudentList students={students}/>
    </div>
  );
}

export default App;
