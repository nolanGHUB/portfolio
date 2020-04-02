import React from 'react'

class Technologies extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      techList: [
        {
          name: 'HTML5',
          img: '/images/html.svg'
        },
        {
          name: 'CSS3',
          img: '/images/css.svg'
        },
        {
          name: 'Javascript',
          img: '/images/javascript.svg'
        },
        {
          name: 'React',
          img: '/images/react.svg'
        },
        {
          name: 'jQuery',
          img: '/images/jquery.svg'
        },
        {
          name: 'Node.js',
          img: '/images/node.svg'
        },
        {
          name: 'Git',
          img: '/images/git.svg'
        },
        {
          name: 'Github',
          img: '/images/github.svg'
        },
        {
          name: 'Express',
          img: '/images/express.svg'
        },
        {
          name: 'Mysql',
          img: '/images/mysql.png'
        },
        {
          name: 'PSQL',
          img: '/images/postgresql.svg'
        },
        {
          name: 'Sequelize',
          img: '/images/sequelize.svg'
        },
        {
          name: 'JSON',
          img: '/images/json.svg'
        },
        {
          name: 'Ruby',
          img: '/images/ruby.svg'
        },
        {
          name: 'Rails',
          img: '/images/rails.svg'
        }
      ]
    }
  }

  approvedTech = () => {
    const removeTech = ['Mysql', 'Github', 'jQuery', 'Sequelize', 'JSON'];
    const editedTech = this.state.techList.filter(tech => (
      !removeTech.includes(tech.name)
    ))
    return editedTech;
  }

  render() {
    return (
      <div id="technologies" className="technologies" >
        <div className="technologies-title">
          Technologies
        </div>
        <div className="technologies-tech-list">
          {
            this.approvedTech().map((tech, key) => (
              <div key={key} className="tech-list">
                {/* <img src={tech.img} alt="tech-icon" className="tech-img"></img> */}
                <div className="tech-name">{tech.name}</div>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

export default Technologies