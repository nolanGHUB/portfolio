import React from 'react'

class Portfolio extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      projects: [
        {
          img: '/images/blackjackss3.png',
          title: 'Blackjack!',
          description: 'A faithful recreation of the popular game Blackjack, playable in the browser with only the use of html, css & javascript.',
          tech: ['HTML  • ', 'CSS  • ', 'Javascript'],
          link: 'https://blackjacknolan.surge.sh',
          gitlink: 'https://github.com/nolanGHUB/project_1',
        },
        {
          img: '/images/worthwatchingss3.png',
          title: 'Worth Watching',
          description: 'Worth Watching is designed with the avid TV watcher in mind, highlighting the overall and weekly trending shows of the season. As well as showing whats airing that day and allowing for further refinded searches. Detailed show descriptions and embedded trailers for almost every show using the massive themoviedb.org database as an API call to fill out the details.',
          tech: ['React  • ', 'Axios  • ', 'themoviedb.org API'],
          link: 'https://worthwatching.surge.sh',
          gitlink: 'https://github.com/nolanGHUB/project_2',
        },
        {
          img: '/images/waverlyinnss.png',
          title: 'Waverly Inn',
          description: "Working in a group of 6, 3 developers and 3 designers. We got together to find a local restaurant that was great but didn't have the site to match.  In an agile development two-week sprint cycle we tackled this project to re-imagine what the restaurants web presence should be.",
          tech: ['React  • ', 'Github'],
          link: 'http://waverlyinn.surge.sh/',
          gitlink: 'https://github.com/cferland/ux-sei-collab',
        },
        {
          img: '/images/quizlyss.png',
          title: 'Quizly',
          description: 'A full-stack quiz game site that tracks high-scores and allows for user submissions.',
          tech: ['React  • ', 'Express  • ', 'Sequelize'],
          link: 'http://quizly.surge.sh/',
          gitlink: 'https://github.com/Tambini/quizly',
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
              <div className="project-text">
                <div className="project-title">
                  {project.title}
                </div>
                <div className="project-description">
                  {project.description}
                </div>
                <div className="project-technologies">
                  {project.tech.map((tech, key) =>
                    <span className="project-technology">
                      {tech}
                    </span>
                  )}

                </div>
                <div className="project-link">
                  <a className=" project-link-clickable" href={project.link} target="_blank" rel="noopener noreferrer"> Visit the deployed site </a>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    )
  }
}

export default Portfolio