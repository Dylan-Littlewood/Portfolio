import MyCV from '@/assets/data/Dylan-Littlewood-CV.pdf';

export default function CV() {
  return (
    <div className='section cv' id='cv'>
      <h2 className='test section-title'>My CV</h2>

      <div className='cv-content '>
        <h3>Profile</h3>
        <p>
          I am a Senior Production Technician with experience of working closely with colleagues in a technical role
          producing computers to client specifications. I am looking to develop my passion for programming in a
          professional setting in a role where I can grow and challenge myself.
        </p>
        <h3>Education</h3>
        <h4>2015-2016: Level 3 IT Apprenticeship </h4>
        <p>
          My apprenticeship allowed me to establish my exceptional IT skills through extensive experience of working
          with computer hardware and software to deliver an exceptional final product to the clients. I also developed
          time management skills by balancing the time spent on my coursework with the vocational side of this
          qualification.
        </p>
        <h4>2012-2014: Longley Park College, Sheffield</h4>
        <p>A Levels: Electronics (A), Physics (D), Maths (E), AS Level Art & Design (Graphic Communication) (E) </p>
        <h4>2007-2012: Ecclesfield Comprehensive School, Sheffield</h4>
        <p>
          7 GCSEs (A-C) including English (C), and Maths (A) BTEC Level 2 Diploma in Engineering (Distinction), BTEC
          Level 2 Extended Certificate in Music (Merit), BTEC Level 3 Diploma in Professional Competence for IT and
          Telecoms Professionals, BTEC Level 3 Extended Diploma in ICT Systems and Principles Level 2 National First
          Certificate in ICT (Merit)
        </p>
        <h3>WORK EXPERIENCE</h3>
        <h4>May 2016 – Present: Senior IT Technician at VeryPC, Sheffield</h4>
        <p>
          In this role, I am responsible for ensuring all machines are produced to impeccable quality and to the correct
          specifications of our clients’ quotes. As well as installing software, operating systems and custom BIOSs to
          the clients’ specifications, I also assist across the entire production process, including Goods In, Goods Out
          and Quality Control. As the production team’s Senior Technician, my role also involves creating guides and
          training material for new staff, ensuring standards are adhered to and that all team members are empowered to
          confidently produce jobs independently. This role has allowed me to hone in on my problem-solving skills, as I
          must think on the spot to uncover solutions to issues with incompatible specifications. It has also allowed me
          to enhance my attention to detail as I have developed effective cable management skills to ensure the machines
          look immaculate for the customer. I also volunteer to represent my team in our Events Committee, planning
          team-building activities from company bake sales to gaming competitions. I am also certified to drive a
          counterbalance forklift.
        </p>
        <h3>INTERESTS</h3>
        <p>
          In my spare time, I enjoy playing games on a variety of platforms; some of my favourites include Hollow
          Knight, It Takes Two and The Last of Us. I am also keen to understand the work that goes into creating these
          games and love to listen to Podcasts and watch guides on programming. I am a keen climber and enjoy holding a
          membership at The Climbing Hangar in Sheffield. I’m passionate about both listening to and playing music, and
          have taught myself to play a number of instruments including drums and bass guitar.
        </p>

        <button className='button btn-call-to-action'>
          <a href={MyCV} download='Dylan-Littlewood-CV' target='_blank' rel='noreferrer'>
            Download
          </a>
        </button>
      </div>
    </div>
  );
}
