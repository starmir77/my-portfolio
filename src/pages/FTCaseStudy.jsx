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
                    title="Designing for Trust"
                    subtitle="Facilitating money transfers without being a financial institution, FriendlyTransfer is a peer-to-peer online platform that helps users save international transaction costs by agreeing to make local transfers."
                    role="Product Design, Experience Strategy"
                    date="2024"
                    image="/assets/FT_MainImage.png"
                    githubUrl="https://github.com/yourusername/future-tech-platform"
                    prototypeUrl="https://future-tech-platform.vercel.app/"
                />
            </section>

            <div style={{ margin: "0rem 0rem 3rem 0rem" }}>
                <IntroHeading
                    headline="OVERVIEW"
                    problem="Modern teams face challenges in collaborating seamlessly across disciplines and time zones. Communication is often fragmented and creativity is hampered by rigid tools."
                    solution="Designed and prototyped a flexible workspace platform that merges real-time collaboration with asynchronous ideation, using smart integrations and intuitive UI."
                    impact="Enabled teams to prototype, brainstorm, and launch ideas more efficiently, resulting in faster innovation cycles and stronger engagement."
                />
            </div>

            <div style={{ margin: "5rem 0rem 3rem 0rem" }}>
                <PageHeading
                    title="Understanding Peer-to-Peer Money Exchanges"
                    body="FriendlyTransfer helps users connect with matching transferring needs based on $ amount, but opposite locations.For example, Tom lives in the U.S. and needs to send $100 to his friend in Ecuador. Meanwhile, Ana needs to send $100 to her mother in the U.S. FriendlyTransfer helps Tom connect with Ana. Tom makes a local transfer to Ana's mother in the U.S., and Ana makes a local transfer to Tom's friend in Ecuador. Both Tom's friend and Ana's mother receive $100 dollars. Tom and Ana save the international transfer costs and the money never moves borders."
                />
                <ImageHeading
                    headline=""
                    title=""
                    image="/assets/FT_explanation.png"
                    alt=""
                />

            </div>

            <div style={{ marginBottom: "2rem" }}>
                <TextHeading
                    headline=""
                    title="Getting to Know Friendly Transfer Users"
                    body="Before delving into the challenge, to fully understand FriendlyTransfer’s users and their pain points, I conducted three remote in-depth interviews. I also analyzed existing surveys conducted by FriendlyTransfer’s founding team."
                />
                <TextList
                    text="Key research insights:"
                    items={[
                        "Three in-depth interviews with existing users",
                        "Analyzed existing surveys & interviews",
                    ]}
                />
                <ImageHeading
                    headline=""
                    title=""
                    image="/assets/FT_AffinityMapping.png"
                    alt=""
                />

            </div>

            <div style={{ marginBottom: "5rem" }}>
                <TextHeading
                    headline="Research"
                    title="What Do Users Think About Friendly Transfer?"
                    body="FriendlyTransfer’s current transaction process, which involves two users with matching needs agreeing to transfer money locally on behalf of the matching user, takes place inside the chat in the form of a conversation. Users found this process to be informal and unreliable."
                />

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', width: '75%', margin: '0 auto 0rem auto', alignItems: 'center' }} >
                    <QuoteGroup
                        quotes={[
                            {
                                text: "The Platform is Confusing",
                                author: ""
                            }]}

                    />
                    <TextHeading
                        headline=""
                        title=""
                        body={
                            <>
                                <p><span style={{ fontWeight: "bold" }}>1. No Process</span></p>
                                <p>Users are unsure who should make the local transfer first. Experienced users had to explain to new users what the process looks like and who makes the local transfer first. New users felt a lack of control not knowing how the process works.</p>
                            </>
                        }
                    />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', width: '75%', margin: '0 auto 0rem auto', alignItems: 'center' }} >
                    <QuoteGroup
                        quotes={[
                            {
                                text: "Once I found users, I left for messaging apps like whatsapp",
                                author: ""
                            }]}

                    />
                    <TextHeading
                        headline=""
                        title=""
                        body={
                            <>
                                <p><span style={{ fontWeight: "bold" }}>2. Untrustworthy</span></p>
                                <p>After exchanging phone numbers in platform, some users left to complete their processes in WhatsApp. Once outside FriendlyTransfer, users found themselves feeling vulnerable and insecure as they would have no proof or guarantee of local transfer.</p>
                            </>
                        }
                    />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', width: '75%', margin: '0 auto 0rem auto', alignItems: 'center' }} >
                    <QuoteGroup
                        quotes={[
                            {
                                text: "I'd feel more comfortable if FT was move involved in the process",
                                author: ""
                            }]}

                    />
                    <TextHeading
                        headline=""
                        title=""
                        body={
                            <>
                                <p><span style={{ fontWeight: "bold" }}>3. No Involvement</span></p>
                                <p>Users felt that aside from facilitating the connection, FriendlyTransfer serves no further purpose. Users feel that FriendlyTransfer is not involved in the transaction at all - making them feel vulnerable to a problem with the local transfer.</p>
                            </>
                        }
                    />
                </div>
            </div>

            <div style={{ marginBottom: "3rem" }}>
                <PageHeading
                    title="Ideating a Solution"
                    body="With these important discoveries, I set out to ideate version one of a possible solution focusing on the following aspects."
                />

                <div style={{ display: 'flex', flexDirection: 'row', width: '85%', margin: '2rem auto 2rem auto', alignItems: 'center', justifyContent: 'center' }} >

                    <TextHeading
                        headline=""
                        title=""
                        body={
                            <>
                                <p><span style={{ fontWeight: 'bold', textDecoration: 'line-through', textTransform: "uppercase" }}>Confusing Process</span></p>
                                <p><span style={{ fontWeight: 'bold', textTransform: "uppercase" }}>Clear & Transparent Process</span></p>
                            </>
                        }
                    />

                    <TextHeading
                        headline=""
                        title=""
                        body={
                            <>
                                <p><span style={{ fontWeight: 'bold', textDecoration: 'line-through', textTransform: "uppercase" }}>Untrustworthy</span></p>
                                <p><span style={{ fontWeight: 'bold', textTransform: "uppercase" }}>Structured for Trust</span></p>
                            </>
                        }
                    />
                    <TextHeading
                        headline=""
                        title=""
                        body={
                            <>
                                <p><span style={{ fontWeight: 'bold', textDecoration: 'line-through', textTransform: "uppercase" }}>No Involvement</span></p>
                                <p><span style={{ fontWeight: 'bold', textTransform: "uppercase" }}>Involvement from Friendly Transfer</span></p>
                            </>
                        }
                    />
                </div>

                <TextHeading
                    headline=""
                    title="1. Structured Transaction Process"
                    body="Through a Step by Step Wizard"
                />
                <ImageHeading
                    headline=""
                    title=""
                    image="/assets/FT_StructuredTransaction.png"
                    alt=""
                />
                <TextHeading
                    headline=""
                    title="2. Transparent Transaction Process"
                    body="Through a Step by Step Wizard & Progress Bar"
                />
                <ImageHeading
                    headline=""
                    title=""
                    image="/assets/FT_TransparentTransaction.png"
                    alt=""
                />
                <TextHeading
                    headline=""
                    title="3. Involvement from Friendly Transfer"
                    body="Through a dependency-based transaction"
                />
                <ImageHeading
                    headline=""
                    title=""
                    image="/assets/FT_Involvement.png"
                    alt=""
                />

            </div>

            <div style={{ marginBottom: "2rem" }}>
                <PageHeading
                    title="Testing Assumptions"
                    body="With a basic wireframe prototype, I started guerrilla testing with one new user and remote testing with three existing users. While the prototype solved most problems, it surfaced a problem I hadn’t anticipated."
                />

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', width: '75%', margin: '0 auto 0rem auto', alignItems: 'center' }} >
                    <QuoteGroup
                        quotes={[
                            {
                                text: "What if I need to contact my match in the middle of the transaction?",
                                author: ""
                            }]}

                    />
                    <TextHeading
                        headline=""
                        title=""
                        body={
                            <>
                                <p><span style={{ fontWeight: "bold" }}>1. Existing users felt they lost control once in the wizard. They wanted the ability to communicate with their match at all times.</span></p>
                            </>
                        }
                    />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', width: '75%', margin: '0 auto 0rem auto', alignItems: 'center' }} >
                    <QuoteGroup
                        quotes={[
                            {
                                text: "What if I need to contact my match in the middle of the transaction?",
                                author: ""
                            }]}

                    />
                    <TextHeading
                        headline=""
                        title=""
                        body={
                            <>
                                <p><span style={{ fontWeight: "bold" }}>2. Existing users felt the wizard reminded them of the negative aspects of a bank.</span></p>
                            </>
                        }
                    />
                </div>
            </div>

            <TextHeading
                headline=""
                title="Adjusting the Solution"
                body=""
            />
            <TextList
                text=""
                items={[
                    "Allow users to contact their matches at all time by bringing the transaction wizard into the chat.",
                    "Without a transaction wizard, no comparison to banks will be made - hopefully.",
                    "Allow first- time users to initiate an exchange only when the match has responded."
                ]}
            />
            <ImageHeading
                headline=""
                title=""
                image="/assets/FT_Adjusting.png"
                alt=""
            />
            <TextHeading
                headline=""
                title="Prototyping the Solution"
                body="From the minimal wireframe, I created a prototype using FriendlyTransfer's existing color palette."
            />

            <ImageHeading
                headline=""
                title=""
                image="public/assets/FT_Prototype1.png"
                alt="Sketches showing early Future Tech concepts"
            />

            <div style={{ marginBottom: "3rem" }}>
                <TextHeading
                    headline="Round 1"
                    title="Usability Testing Round 1"
                    body="With the higher fidelity prototype ready, I set out for testing again. I was looking to get answers to specific prototype questions."
                />

                <TextList
                    text=""
                    items={[
                        "Can participants understand how the platform works and how is involved?",
                        "Can participants understand how to start an exchange?",
                        "Can participants start the exchange successfully?",
                        "Can participants understand the forms and process?"
                    ]}
                />
                <SimpleTable rowLabels={FriendlyTransfer.rowLabels} colLabels={FriendlyTransfer.colLabels} data={FriendlyTransfer.data} />
            </div>
            <div style={{ marginBottom: "3rem" }}>
                <TextHeading
                    headline="Adjusting Again"
                    title="Starting an Exchange Was a Clear Issue"
                    body="Understanding how the exchange works, and how to initiate an exchange were clear issues. To address these challenges, I developed the following solutions:"
                />
                <TextList
                    text=""
                    items={[
                        "Take advantage of empty state - describe first steps to users.",
                        "Reveal exchange steps at the top of the chat - only when match has responded to initial message."
                    ]}
                />
                <ImageHeading
                    headline=""
                    title=""
                    image="/assets/FT_MainImage.png"
                    alt="Sketches showing early Future Tech concepts"
                />
            </div>
            <div style={{ marginBottom: "3rem" }}>
                <TextHeading
                    headline="Usability Testing Round 2"
                    title="Starting an Exchange Was Still a Clear Issue"
                    body="After two formal testing sessions, I realized the problem persisted and decided to make further adjustments to the design before testing with the next participants."
                />

                <SimpleTable rowLabels={FriendlyTransfer.rowLabels2} colLabels={FriendlyTransfer.colLabels2} data={FriendlyTransfer.data2} />
            </div>
            <TextHeading
                headline="Yet Again!"
                title="Adjusting"
                body=""
            />
            <div style={{ marginBottom: "3rem" }}>
                <TextList
                    text=""
                    items={[
                        "Adjusted empty state.",
                        "Revealed the Start button, but did not activate it until the match responds."
                    ]}
                />
                <ImageHeading
                    headline=""
                    title=""
                    image="/assets/FT_MainImage.png"
                    alt="Sketches showing early Future Tech concepts"
                />
            </div>
            <div style={{ marginBottom: "5rem" }}>
                <TextHeading
                    headline="Could not resist the cliche!"
                    title="Third Time's the Charm"
                    body="After the last two simple adjustments, testing participants completed transactions successfully - and joyfully."
                />
                <SimpleTable rowLabels={FriendlyTransfer.rowLabels3} colLabels={FriendlyTransfer.colLabels3} data={FriendlyTransfer.data3} />
            </div>
            <div style={{ marginBottom: "8rem" }}>
                <PageHeading
                    title="Delighting Users with The Final Product"
                    body="The final product offers a clear and transparent process that is structured for trust and has involvement from FriendlyTransfer."
                />
            
                <div style={{ width: "60%", margin: "3rem auto 0rem auto " }}>

                    <LoopingVideo
                        src="public/assets/FT_Movie.mp4"
                        poster=""
                        autoPlay="true"
                        loop="true"
                        muted="true"
                        playsInline
                        controls=""
                        className=""
                    />
                </div>
            </div>
            <NextCaseStudyFooter
                nextTitle="Next Case Study"
                nextPath="/candyverse"
            />

        </main >
    );
}

export default FTCaseStudy;
