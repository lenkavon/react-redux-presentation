// Import React
import React from 'react';
import ReduxFlow from './images/ReduxFlow.png';
import ReduxLogo from './images/ReduxLogo.png';
import ReactLogo from './images/ReactLogo.png';
import ReduxUpdate from './images/ReduxUpdate.svg';
import ReduxSchema from './images/ReduxSchema.png';
import Dom from './images/DOM.png';
import Render from './images/Render.png';
import ShadowDom from './images/ShadowDom.png';
import Patch from './images/Patch.png';
import Diff from './images/Diff.png';
import DataUpEventsDown from './images/dataEvents.png';
import PassDown from './images/passdown.png';
import EventUp from './images/eventup.png';

// Import Spectacle Core tags
import {
  Link,
  CodePane,
  Deck,
  Heading,
  Image,
  Slide,
  Text,
  Layout,
  Fill,
  List,
  ListItem,
} from 'spectacle';
import { Button, Wrapper } from './state.example';
import { WrapperRedux } from './redux.example';
// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['fade']} bgColor="tertiary">
          <Text margin="40px 0" textColor="primary" size={1} fit bold>
            React Basics
          </Text>
          <Layout>
            <Fill><Image height="250" src={ReactLogo}/></Fill>
          </Layout>
        </Slide>


        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={3} textColor="secondary">
            Basic Terms
          </Heading>
          <List>
            <ListItem>DOM - Document Object Model</ListItem>
            <ListItem>JavaScript, ECMAScript, ES6, ES2015</ListItem>
            <ListItem>AJAX - Asynchronous JavaScript and XML</ListItem>
            <ListItem>SPA - Single Page Application</ListItem>
          </List>
        </Slide>


        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={3} textColor="secondary">
            History of Web
          </Heading>
          <List>
            <ListItem>Static pages: every change = new request</ListItem>
            <ListItem>CSS merely for colors, paddings and margins</ListItem>
            <ListItem>JavaScript for simple dynamic changes (change colors, show/hide elements etc.)</ListItem>
            <ListItem>Later partial renders with AJAX, then SPA</ListItem>
          </List>
        </Slide>


        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={3} textColor="secondary">
            SPA
          </Heading>
          <List>
            <ListItem>Web server returns only one page</ListItem>
            <ListItem>Server only as a data provider</ListItem>
            <ListItem>Less (or zero) refreshes, less data transfer</ListItem>
            <ListItem>More logic on the client side</ListItem>
          </List>
        </Slide>


        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={3} textColor="secondary">
            React
          </Heading>
          <List>
            <ListItem>Library, not framework</ListItem>
            <ListItem>Developed by Facebook</ListItem>
            <ListItem>“Learn once, write anywhere”</ListItem>
          </List>
        </Slide>


        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={3} textColor="secondary">
            JSX
          </Heading>
          <List>
            <ListItem>JS syntax extension</ListItem>
            <ListItem>XML-like syntax</ListItem>
            <ListItem>you don’t have to use it with React</ListItem>
          </List>
          <Layout>
            <Fill><Text>JSX</Text><CodePane lang='jsx' source={`
      const element = (
        <h1 className="greeting">
          Hello, world!
        </h1>
      );
            `}/></Fill>
            <Fill ><Text>JS</Text><CodePane margin="0 10px" lang='jsx' source={`
      const element = React.createElement(
        'h1',
        { className: 'greeting' },
        'Hello, world!'
      );
            `}/></Fill>
          </Layout>
        </Slide>


        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={3} textColor="secondary">
            Component
          </Heading>
          <List>
            <ListItem>Basic block of React architecture</ListItem>
            <ListItem>Split the UI into independent, reusable pieces</ListItem>
            <ListItem>Think about each piece in isolation</ListItem>
            <ListItem>Define component as Function or Class</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={3} textColor="secondary">
            Component
          </Heading>
          <Text> Class </Text>
          <CodePane lang='jsx' source={`
            class Welcome extends React.Component {
              render() {
                return <h1>Hello, {this.props.name}</h1>;
              }
            }
          `}/>
          <Text> Function </Text>
          <CodePane lang='jsx' source={`
            function Welcome(props) {
              return <h1>Hello, {props.name}</h1>;
            }
          `}/>
          <Text> Arrow function </Text>
          <CodePane lang='jsx' source={`
            const Welcome = ({ name }) => <h1>Hello, {name}</h1>
          `}/>
        </Slide>


        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={3} textColor="secondary">
            Virtual DOM
          </Heading>
          <List>
            <ListItem>DOM is slow</ListItem>
            <ListItem>Memory is fast</ListItem>
            <ListItem>Updates only changed elements</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={3} textColor="secondary">
            DOM
          </Heading>
          <Image src={Dom}/>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={3} textColor="secondary">
            Render
          </Heading>
          <Image src={Render}/>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={3} textColor="secondary">
            Shadow DOM
          </Heading>
          <Image src={ShadowDom}/>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={3} textColor="secondary">
            Diff
          </Heading>
          <Image src={Diff}/>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={3} textColor="secondary">
            Patch
          </Heading>
          <Image src={Patch}/>
        </Slide>


        <Slide transition={['fade']} bgColor="tertiary">
          <Text margin="40px 0" textColor="primary" size={1} fit bold>
            State management and Props
          </Text>
          <Layout>
            <Fill><Image height="250" src={ReactLogo}/></Fill>
            <Fill><Image height="250" src={ReduxLogo}/></Fill>
          </Layout>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Image src={DataUpEventsDown}/>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Image src={PassDown}/>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Image src={EventUp}/>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={3} textColor="secondary">
            State
          </Heading>
          <List>
            <ListItem>private and fully controlled by the component</ListItem>
            <ListItem>initialise state in the constructor</ListItem>
            <ListItem>setState when you want to change it</ListItem>
            <ListItem>change in state will trigger rerender</ListItem>
          </List>
          <CodePane lang='jsx' source={`
            constructor(props) {
              super(props)
              this.state = { background: "hotpink" };
            }

            someMethod() {
              ...
              this.setState({ background: this.generateRandomHexColor() }
              ...
            }
          `}/>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={5} textColor="secondary">
            Component State
          </Heading>
          <Layout>
            <Fill>
              <CodePane margin="25px 0" lang="jsx" source={`<Button title="Click Me To Change Color!" />`} />
            </Fill>
            <Fill><Button title="Click Me To Change Color!" /></Fill>
          </Layout>
          <CodePane lang="jsx" source={`
            class Button extends React.Component {
              constructor(props) {
                super(props)
                this.state = { background: "hotpink" };
              }
              render() {
                return (
                  <button
                    style={{ ...styles, background: this.state.background }}
                    onClick={() => this.setState({ background: this.generateRandomHexColor() })}
                  >
                    {title}
                  </button>
                )
              }
            }
          `}/>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={3} textColor="secondary">
            Props
          </Heading>
          <List>
            <ListItem>passed from parent component</ListItem>
            <ListItem>can pass anything: values, objects, functions or components</ListItem>
            <ListItem>read only (no re-assignments)</ListItem>
            <ListItem>change in props will trigger rerender</ListItem>
          </List>
          <CodePane lang='jsx' source={`
            <SimpleButton background="hotpink" title={'Click me!'} />

            ...

            render() {
              return (
                <button
                  className="button"
                  type="button"
                  style={{ ...styles, this.props.background }}
                >
                  {title}
                </button>
              )
            }

          `}/>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary" >
          <Heading size={5} textColor="secondary">
            Props from parent (Child)
          </Heading>
          <Wrapper />
          <CodePane margin="10px 0" lang="jsx" source={`
            const ButtonStateless = ({ title, background, onClickReaction}) => (
              <button
                className="button"
                type="button"
                style={{ ...styles, background }}
                onClick={onClickReaction}
              >
                {title}
              </button>
            );
          `}/>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary" >
          <Heading size={5} textColor="secondary">
            Props from parent (Parent)
          </Heading>
          <Wrapper />
          <Text alignSelf="flex-start" size={6} textColor="secondary" />
          <CodePane margin="10px 0" lang="jsx" source={`
            export class Wrapper extends React.Component {
              ...
              render() {
                return (
                  <div className="wrapper" style={{backgroundColor: 'yellow'}}>
                    <p>{this.state.background}</p>
                    <ButtonStateless
                      title="I am stateless"
                      background={this.state.background}
                      onClickReaction={() => this.setState({ background: this.generateRandomHexColor() })}
                    />
                  </div>
                )
              }
            }
          `}/>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary" >
          <Heading size={5} textColor="secondary">
            Coupling with Redux
          </Heading>
          <WrapperRedux cart background="hotpink" title="Page One"/>
          <Text size={6} textColor="secondary" />
          <WrapperRedux title="Page 2"/>
          <Text size={6} textColor="secondary" />
          <WrapperRedux title="Page 3"/>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary" >
          <Heading size={5} textColor="secondary">
            Coupling with Redux
          </Heading>
          <Image src={ReduxFlow}/>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary" >
          <Heading size={5} textColor="secondary">
            Coupling with Redux
          </Heading>
          <Image src={ReduxUpdate}/>
          <Link textColor="secondary" href="https://css-tricks.com/learning-react-redux/">
            https://css-tricks.com/learning-react-redux/
          </Link>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary" >
          <Heading size={5} textColor="secondary">
            Redux - Schema
          </Heading>
          <Image src={ReduxSchema}/>
          <Link
            textColor="secondary"
            href="https://refactory.id/post/80-penggunaan-redux-untuk-react-native"
          >
            https://refactory.id/post/80-penggunaan-redux-untuk-react-native
          </Link>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary" >
          <Heading size={4} lineHeight={1} textColor="secondary">
            Questions?
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
