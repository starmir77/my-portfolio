import HeroCS from '../components/HeroCS';
import TextHeading from '../components/TextHeading';
import ImageHeading from '../components/ImageHeading';
import TextList from '../components/TextList';
import PageHeading from '../components/PageHeading';
import QuoteGroup from '../components/QuoteGroup';
import IntroHeading from '../components/IntroHeading';
import EmbedFrame from '../components/EmbedFrame';
import LoopingVideo from '../components/LoopingVideo';
import Navbar from '../components/Navbar';
import NextCaseStudyFooter from '../components/NextCaseStudyFooter';
import { useEffect } from 'react';
import CanvasHero from '../components/CanvasHero';
import TextCTA from '../components/TextCTA';


function AACCaseStudy() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <main>

            <Navbar></Navbar>
            <section className="hero-canvas-wrapper">
                <CanvasHero variant="scoped" />
                <HeroCS
                    title="Designing Sarcasm: Reclaiming Voice, Humor & Identity"
                    subtitle="Restoring the ability to express tone, emotion, and humor to users of assistive technology through intentional, human-centered interaction design."
                    role="Design, Prototyping"
                    date="2025"
                    image="/assets/AAC_mainImage.png"
                    githubUrl="https://github.com/starmir77/AAC-Prototype"
                    prototypeUrl="https://aac-prototype.vercel.app/"
                />
            </section>

            <div style={{ margin: "0rem 0rem 3rem 0rem" }}>
                <IntroHeading
                    headline="OVERVIEW"
                    title="hi"
                    problem="People who rely on text-to-speech tools often lose the ability to express tone, sarcasm, or emotion making their communication feel flat and impersonal."
                    solution="Designed and prototyped a voice interface that lets users shape how messages sound using pitch, pacing, and emphasis."
                    impact="Gave users greater control over how they express themselves restoring nuance, personality, and intent to synthetic speech."
                />
            </div>

            <div style={{ margin: "5rem 0rem 3rem 0rem" }}>
                <PageHeading
                    title="Designing Humor into Assistive Speech Technology"
                    body="Most AAC (Augmentative and Alternative Communication) devices help people with speech impairments communicate clearly — but that clarity often comes at the cost of personality. For people with Motor Neuron Disease (MND), who increasingly rely on these tools as speech becomes difficult, this can be especially frustrating. In interviews and literature, a consistent theme emerged: users couldn’t express humor or sarcasm. Timing, pitch, and personality were flattened — and for many, that felt like losing a part of themselves. This project explores how we might restore some of that expressive power. I designed and prototyped an interface that lets AAC users shape how their message is delivered using pitch, speed, emphasis, pauses, and elongation — key elements of sarcastic and humorous tone."
                />
                <QuoteGroup
                    quotes={[
                        {
                            text: "I used to be the one making jokes — the life of the party. I won’t be able to keep that up as this progresses.",
                            author: "Interview Participant"
                        }
                    ]}
                />
            </div>

            < div style={{ marginBottom: "2rem" }}>
                <PageHeading
                    title=" Design Method"
                    body="With a problem statement in place, I used the Double Diamond design method to produce a possible solution. I explored existing literature to deepen my understanding on AAC user needs specific to sarcasm, and also to understand the phonetic qualities of sarcasm. I derived crucial insights from this research that directly guided all ideation and design decisions.
                The first prototype went through a round of feedback from a speech specialist. A second and final version was created after the round of feedback."
                />
            </div>

            < div style={{ marginBottom: "2rem" }}>

                <TextHeading
                    headline="Research"
                    title="Understanding The Problem"
                    body="A study on the use of AAC found that the “ability to add delay and emphasis” to rendered speech and the “ability to change speed of delivered [speech]” were important needs. A participant in this study found that he could not properly convey sarcasm via AAC because “timing is key [for humor].” Another participant stated:"
                />

                <TextList
                    text="Research participants:"
                    items={[
                        "A detailed interview with a person living with MND who had begun losing speech",
                        "A casual conversation with a second person recently diagnosed",
                        "Secondary research on AAC usage and phonetic features of sarcasm"
                    ]}

                />

                <QuoteGroup
                    quotes={[
                        {
                            text: "I want to be able to control spacing and speed and tone, like pitch — if you could have a dial to control the speed as it's playing or just pause it so someone can talk back and you can have a more natural conversation.",
                            author: ""
                        },
                        {
                            text: "Each day presents countless frustrations as humor and incisive comments require timing and inflection",
                            author: ""
                        },
                        {
                            text: "No sense of humor — it [humor] just doesn’t come across in the same way — it doesn’t pause where you would pause, that’s a really big one.",
                            author: ""
                        }

                    ]}

                />

                <TextHeading
                    headline=""
                    title=""
                    body="A study that aimed at finding the phonetic properties of sarcasm found the following general characteristics in utterance.
                (Cheang et al., 2008). These findings correlate with users’ desires and needs and thus guided the design process."
                />

                <TextList
                    text="The Sound of Sarcasm:"
                    items={[
                        "Lowered pitch or heightened pitch variability",
                        "Slower speech rate",
                        "Increased pauses"
                    ]}

                />
            </div>

            < div style={{ marginBottom: "2rem" }}>
                <TextHeading
                    headline="Define"
                    title="Synthesizing Insights"
                    body="From both user research and the science behind sarcasm, it was clear that the following needs exist:"
                />


                <QuoteGroup
                    quotes={[
                        {
                            text: "Control Pitch",
                            author: ""
                        },
                        {
                            text: "Control Speed",
                            author: ""
                        },
                        {
                            text: "Control Pausing",
                            author: ""
                        }
                    ]}
                />
            </div>

            < div style={{ marginBottom: "2rem" }}>

                <TextHeading
                    headline="Develop & Test"
                    title="Early Prototyping"
                    body="I started with paper prototypes and low-fidelity Figma wireframes. The goal was to test how users might control sentence delivery through visual and tactile cues."
                />

                <TextList
                    text="Initial ideas included:"
                    items={[
                        "Floating, draggable words",
                        "Sliders and levers for pitch and speed",
                        "Tap-to-emphasize or pause functionality"
                    ]}

                />

                <ImageHeading
                    headline=""
                    title=""
                    image="/assets/2015Portfolio_AAC_paperProt.jpg"
                    alt="Screenshot of AAC interface with popup voice styling menu"
                />

                <ImageHeading
                    headline=""
                    title=""
                    image="/assets/2025Portfolio_AAC_Image1.png"
                    alt="Screenshot of AAC interface with popup voice styling menu"
                />
            </div>

            <TextHeading
                headline="Develop & Test"
                title="Adding Interactions"
                body="I then prototyped the interactions a user would take to:"
            />

            <TextList
                text=""
                items={[
                    "Add emphasis",
                    "Raise the pitch of one word",
                    "Add a pause",
                    "Slow down delivery"
                ]}

            />

            <ImageHeading
                headline=""
                title=""
                image="/assets/Frame 13.png"
                alt="Screenshot of AAC interface with popup voice styling menu"
            />

            < div style={{ marginBottom: "2rem" }}>

                <TextHeading
                    headline="Develop & Test"
                    title="Receiving Feedback"
                    body="I presented the prototype to an MND specialist. They called the initiative brilliant, suggested the following changes:"
                />

                <QuoteGroup
                    quotes={[
                        {
                            text: "Reduce dragging and spacing effort from user.",
                            author: ""
                        },
                        {
                            text: "Simplify interactions for faster use",
                            author: ""
                        }

                    ]}

                />
            </div>

            < div style={{ marginBottom: "2rem" }}>

                <TextHeading
                    headline="Deliver"
                    title="Final Design"
                    body="Based on feedback, I simplified the interface:"
                />

                <TextList
                    text=""
                    items={[
                        "Replaced drag-and-drop with a popup menu",
                        "Added visual cues for active effects",
                        "Prioritized ease of use on touch interfaces"
                    ]}
                />

                <ImageHeading
                    headline="New Design"
                    title=""
                    image="/assets/2025Portfolio_AAC_After.png"
                    alt="Screenshot of AAC interface with popup voice styling menu"
                />

                <ImageHeading
                    headline="Previous Design"
                    title=""
                    image="/assets/2025Portfolio_AAC_Before.png"
                    alt="Screenshot of AAC interface with popup voice styling menu"
                />
            </div>
            < div style={{ marginBottom: "3rem" }}>

                <TextHeading
                    headline="Deliver"
                    title="Creating a Functional Prototype"
                    body="As the final step in this design process, I created a functional prototype to explore how individuals with speech impairments could express humor, sarcasm, and emotion through synthetic speech. The goal was to build a simple, accessible web-based tool that lets users style their voice output — not just speak, but speak with personality."
                />


                <TextList
                    text="Front End:"
                    items={[
                        "HTML, CSS, JavaScript – Vanilla implementation for accessibility and fast loading",
                        "SSML (Speech Synthesis Markup Language) – Used to dynamically control intonation, emphasis, pitch, rate, and pauses in speech"
                    ]}
                />

                <TextList
                    text="Voice API:"
                    items={[
                        "Amazon Polly – Converts SSML-enhanced text into expressive speech using cloud-based TTS (text-to-speech)"
                    ]}
                />

                <TextList
                    text="Server:"
                    items={[
                        "Node.js (Serverless Function) – Hosted on Vercel to handle API requests to Amazon Polly and return audio responses"
                    ]}
                />

                <TextList
                    text="Deployment:"
                    items={[
                        "Vercel – Both frontend and backend (Polly API handler) are deployed serverlessly for fast, globally accessible performance"
                    ]}
                />
            </div>

            < div style={{ marginBottom: "3rem" }}>

                <TextCTA
                    title="Try the Prototype Yourself"
                    text="Type a sentence, add effects to words or emotions to the whole sentence, then hit Play to hear it come to life."
                    listItems={[
                    ]}
                    buttonUrl="https://aac-prototype.vercel.app/"
                    buttonLabel="Navigate to Prototype"
                />
            </div>

            < div style={{ marginBottom: "5rem" }}>

                <PageHeading
                    title="Concluding Thoughts & Next Steps"
                    body="The final prototype delivered on its goal: empowering AAC users with a way to infuse humor, sarcasm, and personality into their speech. By focusing on how something is said — not just what is said — the tool opens up new dimensions of self-expression, creating room for nuance, tone, and playfulness in a space often defined by limitation. Designing for people with disabilities reminds us that design is never just functional — it’s emotional, contextual, and deeply human. Even when accessibility isn’t the focus, this perspective helps us see that our work shapes more than interactions. It shapes connection. Whether we’re crafting voice, movement, or interface, behind every experience is a person trying to be understood — and our responsibility is to make space for their full expression."
                />

                <TextList
                    text="Next steps:"
                    items={[
                        "Test the prototype with AAC users and real communication partners",
                        "Evaluate if sarcasm/humor is perceived as intended",
                        "Add a preset system to save commonly used voice styles",
                        "Explore more accessible controls for users with motor limitations"
                    ]}
                />
            </div>
            <NextCaseStudyFooter
                nextTitle="Next Case Study"
                nextPath="/stilaxr"
            />

        </main>
    );
}

export default AACCaseStudy;

