import projects from '@/assets/data/projects.json';
import Card from '../card';

export function CurrentProject() {
  const currentProject = projects.activeProjects.find(project => {
    return project.title === projects.currentProject;
  });

  return (
    <div className='current-project flex-group'>
      <div>
        <h3>Current Project</h3>
        <h4>{currentProject ? currentProject.title : 'Project Not Found'}</h4>
        <a href={currentProject ? currentProject.liveLink : '#'}>
          <button className='button btn-outline'>Live</button>
        </a>
        <a href={currentProject ? currentProject.sourceLink : '#'}>
          <button className='button btn-outline'>Source</button>
        </a>
      </div>
      <img
        src={currentProject ? currentProject.imageURL : '/projectImages/ProjectNotFound.png'}
        alt='current project screenshot'
      />
    </div>
  );
}

export function Projects() {
  return (
    <div className='grid'>
      {projects.activeProjects.map(({ title, tags, description, imageURL, liveLink, sourceLink }) => {
        return (
          <Card
            title={title}
            tags={tags}
            content={description}
            imageURL={imageURL}
            sourceURL={sourceLink}
            liveURL={liveLink}
          />
        );
      })}
    </div>
  );
}
