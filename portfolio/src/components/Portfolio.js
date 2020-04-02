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
          description: 'Worth Watching is designed with the avid TV watcher in mind, highlighting the overall and weekly trending shows of the season. Showing whats airing today as well as detailed show descriptions and embedded trailers for almost every show using the massive themoviedb.org database as an API call to fill out the details.',
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
          description: 'A full-stack quiz game site that tracks high-scores and allows for user submissions. Admin accounts can approve, edit and delete user submitted questions and answers before entering into the game.',
          tech: ['React  • ', 'Express  • ', 'Sequelize', 'Postgres'],
          link: 'http://quizly.surge.sh/',
          gitlink: 'https://github.com/Tambini/quizly',
        },
        {
          img: '/images/chattyss.png',
          title: 'Chatty',
          description: 'Production site coming soon!  A full re-creation of aol instant messenger with a group chat and direct messenging. Friend("buddy") list can add and remove friends.  Messages, full JWT authentication user creation and login handled by the Ruby/Rails backend server acting as an API.',
          tech: ['React  •  ', 'Ruby  •  ', 'Rails  •  ', 'ActionCable'],
          link: 'https://www.youtube.com/watch?v=o-sFKstuNHM',
          gitlink: 'https://github.com/nolanGHUB/P4_Chatty'
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
              {/* <div className="project-img"> */}
              <div className={key % 2 === 0 ? "project-img" : "project-img  order-swap"}>
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
                  {project.tech.map((tech) =>
                    <span className="project-technology">
                      {tech}
                    </span>
                  )}

                </div>
                <div className="project-link">
                  <a className=" project-link-clickable" href={project.link} target="_blank" rel="noopener noreferrer">{project.title === "Chatty" ? 'Watch demo video' : 'Visit the deployed site'}</a>
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