/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

		/*
    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
		);
		*/

		const SplashContainer = props => (
			<div
				className="homeContainer"
				style={{
					color: 'white',
					position: 'relative',
					overflow: 'hidden',
					background: 'linear-gradient(#6da9e2, #c7def4)',
				}}
			>
				<div className="homeSplashFade"
					style={{
						backgroundColor: 'rgba(0, 0, 0, 0.005)',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center',
						backgroundImage: `url(${baseUrl}img/dandelion-transparent.png)`,
					}}
				>
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo white-text">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle white-text">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection white-text">
        <div className="promoRow white-text">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper white-text">
        <a className="button white-text" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
					color="white"
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            title: 'Feature One',
            content: 'This is the content of my feature',
            image: `${baseUrl}img/051-ladybug.png`,
            imageAlign: 'top',
          },
          {
            title: 'Feature Two',
            content: 'The content of my second feature',
            image: `${baseUrl}img/051-butterfly.png`,
            imageAlign: 'top',
          },
        ]}
      </Block>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>Feature Callout</h2>
				<MarkdownBlock>The main feature of your project/thing</MarkdownBlock>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href="LINK-TO-YOUR-DAO">Link To Your DAO</Button>
          </PromoSection>
        </div>
        <div className="mainContainer">
          <Features />
          <FeatureCallout />
				</div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const Section1 = () => (
      <Block background="light">
        {[
          {
            title: 'Something Interesting About Your Project',
            content:
              'Most users leave a page within seconds, so make the first impression count.',
            image: `${baseUrl}img/051-sun.png`,
            imageAlign: 'right',
          },
        ]}
      </Block>
    );


    const Section2 = () => (
      <Block id="try">
        {[
          {
            title: 'Wonderful Illustrations',
            content:
              'To make your landing page more attractive, use illustrations! Check out ' +
              '[**unDraw**](https://undraw.co/) and [**Flaticon**](https://www.flaticon.com/) for customizable illustrations which are free to use. ' +
              'The illustrations you see on this page are from unDraw and Flaticon.',
						image: `${baseUrl}img/garden/051-rain.png`,
            imageAlign: 'left',
          },
        ]}
      </Block>
    );

    const Section3 = () => (
      <Block background="light">
        {[
          {
            title: 'Description',
            content:
              'This is another description of something awesome about your project!',
						image: `${baseUrl}img/garden/051-tree-1.png`,
            imageAlign: 'right',
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
					<p>People like social proof. Make it easy for new users to justify spending time to learn about and contribute to your project by showing all the people who also used and contributed to your project.</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Section1 />
          <Section2 />
          <Section3 />
          <Showcase />
        </div>
      </div>
		);
  }
}

module.exports = Index;
