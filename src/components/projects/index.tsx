import projects from '@/assets/data/projects.json';

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
          <button className='button outline'>View</button>
        </a>
        <a href={currentProject ? currentProject.sourceLink : '#'}>
          <button className='button outline'>Source</button>
        </a>
      </div>
      <img
        src={currentProject ? currentProject.imageURL : '/projectImages/ProjectNotFound.png'}
        alt='current project screenshot'
      />
    </div>
  );
}
