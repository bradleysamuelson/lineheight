import './App.scss';
import Brad from './img/brad-website.png';
import DesignSystemHeader from './img/design-system.png';
import InlineEditHeader from './img/inline-edit.png';
import FocusModeHeader from './img/focus-mode.png';

// const LinkedInIcon = (
	
// )

function App() {
  return (
    <div className="App">
		<header className="App-header">
			<div className='header-left'>
				<div className='mascot-container'>
					<img src={Brad} className='mascot-image' />
				</div>
			</div>
			<div className='header-right'>
				<h1>Brad<br />Samuelson</h1>
				<h2>UX Engineer<br />Designer<br />Illustrator</h2>
				<div className='icons'>
					<a href="https://www.linkedin.com/in/bradsamuelson/" title="LinkedIn" target="_blank" className='icon-link'>
						<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.531 4.86a2.69 2.69 0 0 1 2.671 2.685c-.003 1.542-1.283 2.704-2.689 2.671-1.426.029-2.679-1.162-2.679-2.681 0-1.474 1.214-2.676 2.697-2.675ZM9.088 27.137h-3.14a.738.738 0 0 1-.738-.738V13.003c0-.408.33-.738.738-.738h3.14c.408 0 .738.33.738.738v13.396c0 .407-.33.738-.738.738ZM27.166 16.97a5.085 5.085 0 0 0-5.085-5.085h-.806a4.514 4.514 0 0 0-3.957 2.336.339.339 0 0 0-.042-.005V12.57a.306.306 0 0 0-.307-.306h-3.917a.306.306 0 0 0-.307.306v14.26c0 .169.137.306.306.306h4.004c.169.001.306-.136.306-.306v-8.238c0-1.424 1.136-2.606 2.56-2.622a2.58 2.58 0 0 1 1.86.758c.47.469.759 1.116.759 1.832v8.272c0 .169.137.306.306.306h4.013c.17.001.307-.136.307-.305V16.97Z" fill="CurrentColor"/></svg>
						<span className='icon-tooltip'>LinkedIn</span>
					</a>
					<a href="https://github.com/bradleysamuelson" title="GitHub" target="_blank" className='icon-link'>
						<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.122 8.973a13.94 13.94 0 0 0-5.095-5.095C20.882 2.626 18.54 2 16 2s-4.883.626-7.027 1.878a13.938 13.938 0 0 0-5.095 5.095C2.626 11.118 2 13.46 2 15.999c0 3.051.89 5.794 2.67 8.23 1.78 2.438 4.08 4.123 6.9 5.06.328.06.571.017.73-.128a.713.713 0 0 0 .236-.547l-.01-.984c-.005-.62-.008-1.16-.008-1.622l-.42.072c-.267.05-.604.07-1.011.064a7.71 7.71 0 0 1-1.267-.128 2.83 2.83 0 0 1-1.222-.546 2.313 2.313 0 0 1-.801-1.12l-.183-.42A4.556 4.556 0 0 0 7.04 23c-.261-.34-.525-.571-.793-.693l-.127-.091a1.337 1.337 0 0 1-.237-.219 1 1 0 0 1-.164-.255c-.037-.085-.007-.155.09-.21.098-.055.274-.081.53-.081l.364.054c.243.049.544.194.902.437.359.243.653.56.884.948.28.498.617.878 1.012 1.14.395.26.793.391 1.194.391.4 0 .747-.03 1.039-.09a3.63 3.63 0 0 0 .82-.274c.11-.815.407-1.44.893-1.878a12.478 12.478 0 0 1-1.868-.328 7.438 7.438 0 0 1-1.714-.711 4.908 4.908 0 0 1-1.467-1.222c-.389-.486-.708-1.124-.957-1.914-.249-.79-.374-1.701-.374-2.734 0-1.47.48-2.722 1.44-3.755-.45-1.106-.407-2.346.128-3.719.353-.11.875-.027 1.568.246.693.274 1.2.508 1.522.702.322.194.58.359.775.492a12.943 12.943 0 0 1 3.5-.473c1.203 0 2.37.157 3.5.473l.693-.437a9.812 9.812 0 0 1 1.676-.802c.645-.243 1.137-.31 1.477-.2.547 1.373.596 2.612.146 3.718.96 1.033 1.44 2.285 1.44 3.755 0 1.033-.125 1.947-.373 2.744-.25.796-.571 1.433-.966 1.914-.395.48-.888.884-1.477 1.212-.59.328-1.16.565-1.713.71-.554.147-1.176.256-1.869.33.632.546.948 1.409.948 2.588v3.846c0 .218.076.4.228.546.152.146.392.189.72.128 2.82-.936 5.12-2.622 6.9-5.059C29.11 21.793 30 19.05 30 16c0-2.54-.627-4.881-1.878-7.026Z" fill="CurrentColor"/></svg>
						<span className='icon-tooltip'>GitHub</span>
					</a>
					<a href="https://www.ancientastronaut.co/" title="Illustrations" target="_blank" className='icon-link'>
						<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)" fill="CurrentColor"><path d="M27.82 15.423a13.477 13.477 0 0 1-.271 4.083c-.145.636-.29 1.272-.491 1.89a16.983 16.983 0 0 1-.974 2.294c-.14.285-.267.578-.394.877a9.672 9.672 0 0 1-1.926 2.964 7.814 7.814 0 0 1-3.236 2.066 4.61 4.61 0 0 1-1.916.32c-.439.175-.877.043-1.316.079a5.625 5.625 0 0 1-1.754-.22 13.404 13.404 0 0 1-5.074-2.464 16.659 16.659 0 0 1-2.973-3.013 18.483 18.483 0 0 1-2.377-4.188c-.18-.46-.337-.93-.469-1.408a15.646 15.646 0 0 1-.667-4.016c-.022-1.236.086-2.471.325-3.684a14.61 14.61 0 0 1 .53-1.868c.288-.891.697-1.738 1.215-2.517.406-.62.875-1.196 1.4-1.72A11.147 11.147 0 0 1 9.88 3.146a.833.833 0 0 1 .539-.198.224.224 0 0 0 .15-.048c.247-.162.52-.282.806-.355a11.957 11.957 0 0 1 1.895-.47c.521.053 1.043-.118 1.57-.026.29.043.583.065.877.066.266-.001.53.045.78.136.144.036.29.059.439.066.264.02.522.098.754.228a.5.5 0 0 0 .35.096.338.338 0 0 1 .202.048c.474.26 1.022.338 1.474.667.268.163.552.3.846.408a.686.686 0 0 1 .136.079c.439.36.956.605 1.381.978.29.258.623.465.878.732.438.439.877.908 1.315 1.395.439.486.702.877 1.026 1.341.27.372.519.759.746 1.158.41.704.738 1.453.978 2.232.158.544.364 1.07.495 1.618.185.695.287 1.409.303 2.127Zm-1.152.281a11.07 11.07 0 0 0-.308-1.868 12.85 12.85 0 0 0-1.052-2.877 14.646 14.646 0 0 0-1.294-2.127 15.13 15.13 0 0 0-2.547-2.692c-.281-.237-.632-.4-.82-.741a.144.144 0 0 0-.119-.07c-.145.035-.223-.07-.333-.123-.342-.167-.597-.483-.974-.597-.07-.215-.298-.035-.407-.158a1.11 1.11 0 0 0-.663-.32 1.513 1.513 0 0 1-.67-.237c-.246-.21-.523-.061-.76-.17a1.504 1.504 0 0 0-.192-.084 1.71 1.71 0 0 0-.728-.123.846.846 0 0 1-.364-.03 1.754 1.754 0 0 0-.877-.084c-.294.04-.601-.026-.877 0-.65.065-1.294.19-1.921.373-.268.088-.526.197-.785.298-.259.101-.35.369-.649.29-.03 0-.083.061-.118.096a1.118 1.118 0 0 1-.228.206c-.272.132-.439.439-.724.513-.285.075-.439.439-.737.592a.267.267 0 0 0-.136.15c-.048.188-.197.289-.315.438-.119.15-.22.329-.364.373-.268.079-.167.324-.281.465a3.03 3.03 0 0 0-.776 1.175.403.403 0 0 1-.057.092c-.274.469-.49.97-.64 1.49a19.737 19.737 0 0 0-.518 2.233c-.11.873-.143 1.753-.1 2.631.067 1.133.282 2.252.64 3.329.095.328.208.652.337.969a20.458 20.458 0 0 0 1.908 3.547c.498.731 1.049 1.425 1.649 2.075.676.727 1.418 1.39 2.218 1.977.848.644 1.77 1.185 2.746 1.61 1.259.547 2.638.76 4.003.618a5.845 5.845 0 0 0 2.864-1.052 10.524 10.524 0 0 0 2.162-2.193 1.31 1.31 0 0 0 .083-.241c-.557.17-1.008.526-1.57.399a1.15 1.15 0 0 1-.495-.952 2.993 2.993 0 0 1 0-.74c.105-.575.228-1.145.372-1.711a8.34 8.34 0 0 1 .373-1.162c.413-.986.912-1.934 1.491-2.833.304-.54.646-1.056 1.022-1.548.404-.52.93-.935 1.53-1.206Zm-.334 4.24.075.058v-.044a.441.441 0 0 0-.044-.08l-.03.067Z"/><path d="M16.56 27.014a4.284 4.284 0 0 1-2.912-.592c-.4-.224-.798-.439-1.189-.706a7.305 7.305 0 0 1-2.192-2.193c-.299-.46-.597-.917-.877-1.39a2.745 2.745 0 0 1-.395-1.035c-.044-.311-.15-.618-.202-.93a4.355 4.355 0 0 1 .127-1.842c.11-.415.361-.78.71-1.03a3.156 3.156 0 0 1 2.46-.557 9.377 9.377 0 0 1 1.514.28c.869.24 1.683.645 2.399 1.193.5.395.972.824 1.412 1.285.17.182.328.373.473.575.46.63.84 1.315 1.132 2.039.277.802.44 1.639.482 2.486.033.375-.051.75-.241 1.075-.043.076-.08.155-.114.236a1.446 1.446 0 0 1-.925.82 7.65 7.65 0 0 1-1.031.242c-.21.03-.42.044-.632.044Zm-4.285-6.416-.044-.075s-.035.027-.03.031c.01.027.025.053.043.075l.031-.031Z"/></g><defs><clipPath id="a"><path fill="#fff" transform="translate(4 2)" d="M0 0h23.86v28H0z"/></clipPath></defs></svg>
						<span className='icon-tooltip'>Illustration</span>
					</a>
					<a href="https://bradleysamuelson.github.io/resume/" title="Resume" target="_blank" className='icon-link'>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>
						<span className='icon-tooltip'>Resume</span>
					</a>
					<a href="mailto:brad@lineheight.co" title="Illustrations" target="_blank" className='icon-link'>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-send"><path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
						<span className='icon-tooltip'>Email</span>
					</a>
				</div>
			</div>
			<div className='header-about'>
				<p>
					<span className='text-large'>Hey, I'm Brad.</span> I've been in the User Experience field for well over 15 years in various roles, designing and building 
					websites, apps, prototypes, and design systems.
				</p>
				<p>
					I've worked with, and for, huge companies in the advertising industry, leaders in online education, small tech startups and everything in between.
				</p>
				<p>My goals with every project are to keep a positive attitude in the face of any challenge, lead and learn from everyone on the team, and build amazing software experiences for users.</p>

			</div>
			
			
		</header>
		<main>
			<h3 className='portfolio-header'>Portfolio</h3>
			<section className='portfolio-section'>
				<div className='portfolio-section-header'>
					<h4>Design System &amp; Component Library</h4>
					<img className='portfolio-section-header-image' src={DesignSystemHeader} alt="Design System and Compnent Library" />
				</div>
				<div className='portfolio-subsection'>
					<h5>The Project</h5>
					<p>The creation of a design system and component library is a huge and ongoing undertaking that can span years, but in my opinion is essential to a successful SaaS platform. Not only does it create consistency for the end user, but it also speeds up the process for designers and engineers alike. We set out to create this for VideoAmp's advertising platform to achieve these results. Another goal that we had from the beginning was to make this component library open for anyone to use and eventually contribute to, which meant we wanted to consider not only how we would use these components but also how others outside of our company might use them.</p>
					<h5>My Role</h5>
					<p>Design, Documentation, Component Development, CSS Framework, Icon System Architecture and Creation</p>
					<h5>The Process</h5>
					<p>Creating a design system and component library has to be a collaborative effort across design, product, and engineering teams. The process started with the UX design team creating paradigms and standards, then driving requirements for components to be added to the library. I was in a unique position as a designer and developer that could help guide the process and facilitate collaboration. From the design side, I helped create and review component requirements and visual designs, created interactions and animations to give components life, and wrote standards and documentation to make implementation of the components seamless. As an engineer on the project, I was a key contributor to creating a scalable and theme-able <a href="https://preamp.design/#/mixer/getting-started" target='_blank'>CSS framework</a> that could utilize design tokens such as font styles, color variables, and other utilities. I also directly contributed to the development with production code for several of the components as well as architecting and creating the icon package to easily include the icon set anywhere in the platform. </p>
					<p><a href="https://preamp.design/#/core/buttons/Button" target='_blank'>The Component Library</a></p>
					<p><a href="https://preamp.design/#/mixer/getting-started" target='_blank'>The CSS Framework Documentation </a></p>
					<p><a href="https://preamp.design/#/signal" target='_blank'>The Icon System</a></p>
					<h5>Results</h5>
					<p>While it was meant to be an ongoing process, we immediately felt the results by way of increased speed to design and develop new features. End users saw the benefit of a consistent implementation of common standards and paradigms. An additional advantage was gained in that we could utilize the components in the creation of rapid prototypes to quickly test new features and workflows. Because we separated out the CSS framework, we were also able to use it to quickly align the look and feel of an external product, built on a completely different tech stack, that was added to the product suite through an acquisition, with minimal effort.</p>
				</div>
			</section>
			<section className='portfolio-section'>
				
				<div className='portfolio-section-header'>
					<h4>Design Paradigm for Inline Editing</h4>
					<img className='portfolio-section-header-image' src={InlineEditHeader} alt="Design Paradigm for Inline Editing" />
				</div>
				<div className='portfolio-subsection'>
					<h5>The Project</h5>
					<p>The User Experience team received feedback from client services that editing objects in the UI was tedious and unintuitive. We set out to create a standard paradigm for editing different fields and aspects of an object without the need to enter a complex edit mode.</p>
					<h5>My Role</h5>
					<p>Interaction Design, Prototyping</p>
					<h5>The Process</h5>
					<p>I worked with a visual designer and UX researcher to develop the paradigm and a quantitative research plan. The designer came up with a visual design treatment based on a collaborative discussion around options to solve user needs. I then developed a prototype to showcase the interaction with components and worked with the researcher to create a series of tasks that the user would be asked to accomplish. Using <a href="https://www.hotjar.com/" target='_blank'>Hotjar</a>, we tracked the use of the prototype, giving us quantitative insight into how many users could complete each task. We then referred users to a survey to get their feedback.</p>
					<p><a href="https://bradleysamuelson.github.io/prototyping/inline-edit" target="_blank">View the Prototype</a></p>
					<h5>Results</h5>
					<p>Overall, the design paradigm was validated and users gave positive feedback about the ease of use, however we did discover aspects of the initial design that could be improved. The process was also successful because it allowed us to send the prototype and feedback form to a larger number of users since they could complete it at their own pace and didn’t require organizing meetings, taking up valuable time, to review.</p>
				</div>
			</section>
			<section className='portfolio-section'>
				
				<div className='portfolio-section-header'>
					<h4>Design Paradigm for Focused Workflows</h4>
					<img className='portfolio-section-header-image' src={FocusModeHeader} alt="Design Paradigm for Focused Workflows" />
				</div>
				<div className='portfolio-subsection'>
					<h5>The Project</h5>
					<p>Looking for a way to simplify complex workflows, the UX team wanted to test some ideas that would allow users to focus on smaller chunks of a workflow at a time.</p>
					<h5>My Role</h5>
					<p>Interaction Design, Prototyping</p>
					<h5>The Process</h5>
					<p>I worked with another designer to concept ideas for simplification. I then created a prototype that could be put in front of users to see how well our crazy ideas would be received.</p>
					<p><a href="https://bradleysamuelson.github.io/prototyping/focus-mode" target="_blank">View the Prototype</a></p>
					<h5>Results</h5>
					<p>Sometimes you can have a really cool idea that just doesn’t resonate with your users. 
						As designers, we can create an innovative concept that just might not be the right solution for the 
						audience and how they prefer to work. This was one of those times. 
						While I really like the concept, the experimental paradigm was not something we went forward with. 
						I consider this a success as we did learn a lot from our users and facilitated deeper conversations around less drastic solutions to the complexity issues they were facing. 
						We learned this without spending the time and resources updating the platform and building the wrong thing for our users.</p>
				</div>
			</section>
		</main>
		<footer>
			Copyright &copy; 2023 Brad Samuelson
		</footer>
	</div>
  );
}

export default App;
