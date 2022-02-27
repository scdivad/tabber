import React, { Component } from 'react';

class Schedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courseToAdd: '',
            courses: {},
            linkToAdd: {},
        };
    }

    addLink = (courseName) => {
        const temp = this.state.courses;
        temp[courseName].push(this.state.linkToAdd[courseName]);
        this.setState({courses: temp});
    }

    addCourse = () => {
        this.setState(prevState => {
            if (this.state.courseToAdd) {
                const tmp = {};
                tmp[this.state.courseToAdd] = [];
                return {
                    courses: {...prevState.courses, ...tmp},
                    courseToAdd: '',
                }
            }
        })
    }
    // https://youtube.com/
    // https://google.com/
    openAllLinks = (courseName) => {
        let i = 0;
        for (const link of (this.state.courses[courseName])) {
            window.open(link, '_wnd' + i);
            i++;
            // if (i == 10) break;
        }
    }

    render() {
            const inputStyle = {
                width: '12vw',
                paddingLeft: '6px',
                paddingRight: '6px',
            }

            const divStyle = {
                padding: '24px'
            }

            const marginStyle = {
                marginTop: '12px',
                marginDown: '12px',
            }

            return <div
            className="body" className="container">

            <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>

            <input class="main" type="text" placeholder="Course name" style={inputStyle} value={this.state.courseToAdd} onChange={(e) => {
                this.setState({courseToAdd: e.target.value});
            }}></input>
            <button style={marginStyle} /*className=".card h3" class="btn btn-primary"*/ onClick={this.addCourse}>Add Course</button>
            {Object.keys(this.state.courses).map(courseName => {
                return <div>
                     <hr></hr>
                    <h1>{courseName}</h1>
                    <button type="button" class="btn btn-primary" onClick={() => {
                        this.openAllLinks(courseName)
                    }}>Open all links</button>
                    <input class="daysofweek" style={{...marginStyle, width: 96, marginLeft: '300px', padding: 6,
                paddingRight: '6px'}} placeholder="MTWRFSU"></input>
                    <input class="timeofday" style={{...marginStyle, width: 84, marginLeft: '10px', padding: 6,
                    paddingRight: '6px'}} placeholder="12:00 PM"></input>
                    <br/>
                    <input style={{...marginStyle, width: 512, paddingLeft: '6px',
                paddingRight: '6px',}} value={this.state.linkToAdd[courseName]} onChange={(e) => {
                        const newLinkToAdd = this.state.linkToAdd;
                        newLinkToAdd[courseName] = e.target.value;
                        this.setState({linkToAdd: newLinkToAdd});
                    }}></input>
                    <button type="button" class="btn btn-info" style={{marginLeft: 12}} onClick={() => {
                        this.addLink(courseName)
                    }}>Add link</button>
                    <br/>
                    <br/>
                    <h2 style={{fontSize: 16, fontWeight: "bold"}}>Links:</h2>
                    {this.state.courses[courseName].map(link => {
                        return <div>
                            <a href={link}>{link}</a>
                        </div>
                        // return <div>{link}</div>
                    })}
                </div>
            })}

<style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 12;
          margin: 12;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
        </div>
        
    }
}

export default Schedule;

/*
import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

class Schedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courseToAdd: '',
            courses: {},
            linkToAdd: {},
        };
    }

    addLink = (courseName) => {
        const temp = this.state.courses;
        temp[courseName].push(this.state.linkToAdd[courseName]);
        this.setState({courses: temp});
    }

    addCourse = () => {
        this.setState(prevState => {
            if (this.state.courseToAdd) {
                const tmp = {};
                tmp[this.state.courseToAdd] = [];
                return {
                    courses: {...prevState.courses, ...tmp},
                }
            }
        })
    }
    // https://youtube.com/
    // https://google.com/
    openAllLinks = (courseName) => {
        let i = 0;
        for (const link of (this.state.courses[courseName])) {
            window.open(link, '_wnd' + i);
            i++;
            // if (i == 10) break;
        }
    }

    render() {
        
            const buttonStyle = {
                color: "yellow",
                backgroundColor: "blue", 
                borderRadius: '12px'
            }

            return <div>
                <button type="button" class="btn btn-primary">Primary</button>
                <button type="button" class="btn btn-outline-primary">Primary</button>
                <button type="button" class="btn btn-outline-light">Light</button>
<button type="button" class="btn btn-outline-dark">Dark</button>
<button type="button" class="btn btn-danger">Danger</button>

            <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>

            <input value={this.state.courseToAdd} onChange={(e) => {
                this.setState({courseToAdd: e.target.value});
            }}></input>

            <button style={buttonStyle} onClick={this.addCourse}>Add Course</button>
            {Object.keys(this.state.courses).map(courseName => {
                return <div>
                    {courseName}
                    <br/>
                    <button onClick={() => {
                        this.openAllLinks(courseName)
                    }}>Open all links</button>
                    <br/>
                    <input value={this.state.linkToAdd[courseName]} onChange={(e) => {
                        const newLinkToAdd = this.state.linkToAdd;
                        newLinkToAdd[courseName] = e.target.value;
                        this.setState({linkToAdd: newLinkToAdd});
                    }}></input>
                    <br/>
                    <button onClick={() => {
                        this.addLink(courseName)
                    }}>Add link</button>
                    <br/>
                    Links:
                    {this.state.courses[courseName].map(link => {
                        return <div>{link}</div>
                    })}
                    <hr></hr>
                </div>
            })}
        </div>
    }
}

export default Schedule;
*/