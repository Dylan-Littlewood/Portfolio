import { Projects } from './projects';

export default function Portfolio() {
  return (
    <section className='section portfolio' id='portfolio'>
      <h2 className='section-title'>My Portfolio</h2>
      <p className='section-content'>
        These are a few of the projects i have worked on.
        <br />
        If you want to see more of my work visit my github.
      </p>
      <Projects />
    </section>
  );
}
