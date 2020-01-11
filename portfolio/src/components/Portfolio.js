import React from 'react'

class Portfolio extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      projects: [
        {
          img: '/images/blackjackss2.png',
          title: 'blackjack!',
          description: '',
          tech: [],
          link: 'https://blackjacknolan.surge.sh',
          gitlink: '',
        },
        {
          img: '/images/worthwatchingss.png',
          title: 'Worth Watching',
          description: '',
          tech: [],
          link: 'https://worthwatching.surge.sh',
          gitlink: '',
        },
        {
          img: '/images/test-img.png',
          title: 'My Portfolio',
          description: '',
          tech: [],
          link: '',
          gitlink: '',
        },
        {
          img: '/images/test-img.png',
          title: 'coming soon!',
          description: '',
          tech: [],
          link: '',
          gitlink: '',
        },
      ]
    }
  }
  render() {
    return (

      <div id="portfolio" className="portfolio">
        {
          this.state.projects.map((project, key) => (
            <div className="portfolio-project" key={key}>
              <div className="project-img">
                <img src={project.img} alt="project screenshot"></img>
              </div>
              <div className="project-title">
                {project.title}
              </div>
              <div className="project-link">
                View the deployed project <a href={project.link} target="_blank" rel="noopener noreferrer">here</a>.
              </div>
            </div>
          ))
        }
      </div>
    )
  }
}

export default Portfolio