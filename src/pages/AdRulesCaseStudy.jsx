import HeroCS from '../components/HeroCS';
import TextHeading from '../components/TextHeading';
import ImageHeading from '../components/ImageHeading';
import TextList from '../components/TextList';
import PageHeading from '../components/PageHeading';
import QuoteGroup from '../components/QuoteGroup';
import IntroHeading from '../components/IntroHeading';
import Navbar from '../components/Navbar';
import NextCaseStudyFooter from '../components/NextCaseStudyFooter';
import { useEffect } from 'react';
import CanvasHero from '../components/CanvasHero';
import SimpleTable from '../components/SimpleTable';
import LoopingVideo from '../components/LoopingVideo';
import * as FriendlyTransfer from "../data/friendlyTransferCS";



function FTCaseStudy() {
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
                    subtitle="AdRules is a SaaS platform that helps Facebook advertisers scale campaigns through automated workflows and smarter reporting. I redesigned a fragmented ad creation flow into a streamlined, in-context experience, cutting launch time in half and increasing creative testing by 50%."
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
                    problem="Creative testing was slowed down by a fragmented, manual workflow that made launching new ads inefficient "
                    solution="I led the redesign of the creative launch process, embedding a streamlined, in-context workflow directly within AdRules’ reporting interface."
                    impact="The new experience reduced friction, cut task time in half, and led to a 50% increase in creative testing launches."
                />
            </div>

            <div style={{ margin: "5rem 0rem 3rem 0rem" }}>
                <PageHeading
                    title="Understanding the Ad Creation Process"
                    body="To understand the user workflow, I conducted task analysis through screen-sharing sessions with five power users. I observed how they launched new ads using elements from previous campaigns — a process that required navigating between two separate features within AdRules. Users analyzed performance data in Advanced Reporting, manually copied IDs for top-performing assets, and then switched to the AdBuilder tool to recreate campaigns. This workflow was repetitive, error-prone, and involved up to 14 discrete steps." />
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

            <div style={{ margin: "5rem 0rem 0rem 0rem" }}>
                <PageHeading
                    title="Designing a Solution"
                    body="Through observing users, it was clear that the most important task - identifying the winning elements to be used for the next ad - was being performed inside Advanced Reporting."
                    headline=""
                    image=""
                    alt=""
                />
                <QuoteGroup
                    quotes={[{
                        text: "Could we create a solution where we keep the building inside the Advanced Reporting feature instead of jumping between two features?",
                        author: "Power User"
                    }]}
                />

            </div>

            <div style={{ marginBottom: "5rem" }}>
                <TextHeading
                    headline=""
                    title="Design Considerations"
                    body="Considering my observations, I identified a couple of design considerations to guide my process.
"
                />
                <TextList
                    text="1. Allow users to stay in Advanced Reporting:"
                    items={[

                    ]}
                />
                <TextList
                    text="2. Allow users to select existing campaign elements such as:"
                    items={[
                        "Ad Sets",
                        "Ads",
                        "Individual creative elements such as: media, text, headline"
                    ]}
                />

            </div>

            <div style={{ marginBottom: "5rem" }}>

                <PageHeading
                    title="The Solution: Ad builder EXPRESS"
                    body="We created a shopping cart experience inside Advanced Reporting in which users could add elements to build new ads as they searched for them - avoiding entirely the copy/paste of multiple elements IDs."
                />

                <TextList
                    text=""
                    items={[
                        "New button called Ad Builder Express",
                        "AdsAn option in the existing Build dropdown menu to add a selected item to Ad Builder Express",
                        "A visual guide to let users know what they need to select or have selected already"
                    ]}
                />

                <TextHeading
                    headline=""
                    title="1. Starting a Launch in Ad Builder Express"
                    body="Clicking on the Express Build button would prompt a preview of elements needed to start a launch."
                />

                <ImageHeading
                    headline=""
                    title=""
                    image="/assets/AR_Step1.png"
                    alt=""
                />

                <TextHeading
                    headline=""
                    title="2. Adding Items to Ad Builder Express"
                    body="Users could also select an item from Advanced Reporting and add it via the Build button."
                />

                <ImageHeading
                    headline=""
                    title=""
                    image="/assets/AR_Step2.png"
                    alt=""
                />

                <TextHeading
                    headline=""
                    title="3. Viewing or Removing Items"
                    body="In addition to this visual guide, users could also remove an existing selection and add a new one."
                />

                <ImageHeading
                    headline=""
                    title=""
                    image="/assets/AR_Step3.png"
                    alt=""
                />
                <TextHeading
                    headline=""
                    title="4. Launching Ads"
                    body="Once all elements have been selected, the review button would take users to another feature, AdBuilder, to review and launch the campaign."
                />

                <ImageHeading
                    headline=""
                    title=""
                    image="/assets/AR_Step4.png"
                    alt=""
                />
            </div>
            <div style={{ margin: "5rem 0rem 3rem 0rem" }}>
                <PageHeading
                    title="From Test to ROAS, in Half the Time"
                    body="The time to perform this particular task was cut in half, resulting in an increase of creative testing launches by 50%."
                    headline=""
                    image=""
                    alt=""
                />

            </div>

            <div style={{ display: "flex", flexDirection: "row", width: '85%', alignItems: 'flex-start', justifyContent: 'center', margin: "2rem auto 5rem auto" }}>
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
                <TextList
                    ordered={true}
                    text=""
                    items={[
                        "Find ad elements inside of Advanced Reporting",
                        "Add them to AdBuild Express",
                        "Review",
                        "Launch",
                    ]}
                />
            </div>
            <NextCaseStudyFooter
                nextTitle="Next Case Study"
                nextPath="/friendlytransfer"
            />

        </main >
    );
}

export default FTCaseStudy;
