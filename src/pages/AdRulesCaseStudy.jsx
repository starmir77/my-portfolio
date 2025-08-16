import HeroCS from '../components/HeroCS';
import TextHeading from '../components/TextHeading';
import ImageHeading from '../components/ImageHeading';
import TextList from '../components/TextList';
import PageHeading from '../components/PageHeading';
import QuoteGroup from '../components/QuoteGroup';
import IntroHeading from '../components/IntroHeading';
import Navbar from '../components/Navbar';
import { useEffect } from 'react';
import CanvasHero from '../components/CanvasHero';
import LoopingVideo from '../components/LoopingVideo';

function ARCaseStudy() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <main>

            <Navbar />
            <section className="hero-canvas-wrapper">
                <CanvasHero variant="scoped" />
                <HeroCS
                    title="Redesigned for Speed: From Test to ROAS, in Half the Time"
                    subtitle="AdRules is a SaaS platform that helps Facebook advertisers scale campaigns. As PM for UX, I redesigned its ad creation flow — cutting launch time in half, boosting creative testing by 50%, lifting ROAS by 30%, and increasing revenue by 15%."
                    role="UX Research · UX Design · Workflow Optimization"
                    date=""
                    image="/assets/AR_MainCS.png"
                    githubUrl=""
                    prototypeUrl=""
                />
            </section>

            <div style={{ margin: "0rem 0rem 3rem 0rem" }}>
                <IntroHeading
                    headline="OVERVIEW"
                    problem="Ad launches were slowed down by a fragmented, 14-step manual workflow that wasted time, added stress, and frustrated teams with every new ad launch."
                    solution="As Product Manaager for UX, I led the redesign of the ad launch workflow, reducing a 14-step, two-tool process down to 4 streamlined steps in a single tool."
                    impact={[
                        <>Cut task time by <strong>50%</strong></>,
                        <>Drove a <strong>50%</strong> increase in creative testing launches</>,
                        <><strong>30%</strong> ROAS lift for clients</>,
                        <><strong>15%</strong> revenue boost for the company</>
                    ]}
                />
            </div>

            <div style={{ margin: "5rem 0rem 3rem 0rem" }}>
                <PageHeading
                    title="Understanding the Ad Creation Process"
                    body="To understand the user workflow, I conducted task analysis through screen-sharing sessions with five power users. I observed how they launched new ads using elements from previous campaigns, a process that required navigating between two separate features in AdRules. Users analyzed performance data in Advanced Reporting, manually copied IDs for top-performing assets, and then switched to the AdBuilder tool to recreate campaigns. This workflow was repetitive, error-prone, and involved up to 14 discrete steps." />
                <div className="two-col-eq" style={{ marginTop: "2rem" }}>
                    <ImageHeading
                        headline=""
                        title=""
                        image="/assets/AR_SwimlaneDiagram.png"
                        alt=""
                    />
                    <TextList
                        ordered={true}
                        text=""
                        items={[
                            "Feature 1: Advanced Reporting ",
                            "Analyze results & identify winning ad elements ",
                            "Copy Ad Sets IDs",
                            "Copy Creative Text",
                            "Copy Creative Headline",
                            "Copy Creative CTA",
                            "Copy Video IDs",
                            "Exit Advanced Reporting & Go to Feature 2: AdBuilder",
                            "Start a new campaign or template",
                            "Paste winning elements in the Creative Step",
                            "Paste Ad Sets IDs in the AdSet Step",
                            "Go through all 9 steps of AdBuilder",
                            "Review build",
                            "Launch"
                        ]}
                    />
                </div>

            </div>

            <div style={{ margin: "5rem 0rem 0rem 0rem" }}>
                <PageHeading
                    title="Designing a Solution"
                    body="Through observing users, it was clear that the most important task - identifying the winning elements to be used for the next ad - was being performed inside Advanced Reporting."
                    headline=""
                    image=""
                    alt=""
                />
                <div className="quote-row">
                    <QuoteGroup
                        quotes={[{
                            text: "Could we create a solution where we keep the building inside the Advanced Reporting feature instead of jumping between two features?",
                            author: "Power User"
                        }]}
                    />
                </div>
            </div>

            <div style={{ marginBottom: "5rem" }}>
                <TextHeading
                    headline=""
                    title="Design Considerations"
                    body="Considering my observations, I identified a couple of design considerations to guide my process.
"
                />
                <div className="quote-row">
                    <QuoteGroup
                        quotes={[{
                            text: "Enable users to stay in Advanced Reporting:",
                            author: ""
                        }]}
                    />
                    <QuoteGroup
                        quotes={[{
                            text: "Enable users to select existing campaign elements such as ad sets, ads & individual creative elements",
                            author: ""
                        }]}
                    />
                </div>
            </div>
            <div style={{ marginBottom: "5rem" }}>
                <PageHeading
                    title="The Solution: Ad Builder Express"
                    body="We built a shopping-cart-style feature in Advanced Reporting, allowing users to add elements to new ads as they searched - completely eliminating the need to copy and paste multiple element IDs."
                />
                <TextList
                    text=""
                    items={[
                        "New button called Ad Builder Express",
                        "An option in the existing Build dropdown menu to add a selected item to Ad Builder Express",
                        "A visual guide to let users know what they need to select or have selected already",
                        "A review pop up modal to launch the campaign"
                    ]}
                />
                <div className="image-div">
                    <ImageHeading
                        image="/assets/AR_AllDesignElements.png"
                    />
                </div>
                <TextHeading
                    headline=""
                    title="1. Starting a Launch in Ad Builder Express"
                    body="Clicking on the Express Build button would prompt a preview of elements needed to start a launch."
                />

                <div className="image-div" style={{ margin: "2rem auto" }}>
                    <LoopingVideo
                        src="/assets/AR_Video1.mp4"
                        autoPlay
                        muted
                        playsInline
                    />
                </div>

                <TextHeading
                    headline=""
                    title="2. Adding Items to Ad Builder Express"
                    body="Users could also select an item from Advanced Reporting and add it via the Build button."
                />
                <div className="image-div" style={{ margin: "2rem auto" }}>
                    <LoopingVideo
                        src="/assets/AR_Video2.mp4"
                        autoPlay
                        muted
                        playsInline
                    />
                </div>

                <TextHeading
                    headline=""
                    title="3. Viewing or Removing Items"
                    body="In addition to this visual guide, users could also remove an existing selection and add a new one."
                />
                <div className="image-div" style={{ margin: "2rem auto" }}>
                    <LoopingVideo
                        src="/assets/AR_Video3.mp4"
                        autoPlay
                        muted
                        playsInline
                    />
                </div>
                <TextHeading
                    headline=""
                    title="4. Launching Ads"
                    body="Once all elements have been selected, the review button would take users to another feature, AdBuilder, to review and launch the campaign."
                />
                <div className="image-div" style={{ margin: "2rem auto" }}>
                    <LoopingVideo
                        src="/assets/AR_Video4.mp4"
                        autoPlay
                        muted
                        playsInline
                    />
                </div>
            </div>
            <div style={{ margin: "5rem 0rem 0rem 0rem" }}>
                <PageHeading
                    title="From Test to ROAS, in Half the Time"
                    body="The time to perform this particular task was cut in half, resulting in an increase of creative testing launches by 50%."
                    headline=""
                    image=""
                    alt=""
                />
            </div>
            <div className="two-col-eq" style={{ marginTop: "0rem" }}>
                <ImageHeading
                    headline="Before"
                    title=""
                    image="/assets/AR_SwimlaneDiagram.png"
                    alt=""
                />
                <ImageHeading
                    headline="After"
                    title=""
                    image="/assets/AR_SwimlaneDiagram2.png"
                    alt=""
                />
            </div>
        </main >
    );
}

export default ARCaseStudy;
