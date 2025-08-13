import Navbar from '../components/Navbar';
import HeroCS from '../components/HeroCS';
import IntroHeading from '../components/IntroHeading';
import TextHeading from '../components/TextHeading';
import PageHeading from '../components/PageHeading';
import TextList from '../components/TextList';
import ImageHeading from '../components/ImageHeading';
import { useEffect } from 'react';
import CanvasHero from '../components/CanvasHero';


function CandyverseCaseStudy() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <main>
            <Navbar></Navbar>
            <section className="hero-canvas-wrapper">
                <CanvasHero variant="scoped" />
                <HeroCS
                    title="StilaXR: Helping Buyers Imagine Home in Empty Properties"
                    subtitle="An augmented reality prototype using Unity, ARKit & Vuforia to reimagine home staging."
                    role="Design, Programming"
                    date="2025"
                    image="/assets/StilaXR_HeroImage.png"
                    githubUrl=""
                    prototypeUrl="https://stilastaging.com/"
                />
            </section>

            <IntroHeading
                headline="Overview"
                title="Bringing Rooms to Life"
                body="Stila began as a response to a real, frustrating gap in the homebuying experience: walking into an empty property and struggling to imagine it as a livable space. I set out to build an AR tool that could help buyers see the potential of a home—furnished, styled, and brought to life—right through their phones. The project became a deep dive into spatial interaction, Unity workflows, and mobile AR, combining technical prototyping with product thinking. What started as a curiosity turned into a working app and a pitch-ready product demo, bridging design, technology, and real-world utility."
            />
            <div style={{ margin: "5rem 0rem 3rem 0rem" }}>
                <PageHeading
                    title="Reimagining the Homebuying Experience"
                />

                <TextHeading
                    headline=""
                    title=""
                    body="When buyers walk into an empty house, they’re expected to imagine their future — without much to guide them. The rooms feel cold, the scale is hard to judge, and most people simply don’t have the spatial imagination to picture furniture, light, or life in the space. Traditional home staging tries to solve this, but it comes with a cost: furniture rentals, logistics, and a single fixed aesthetic that might not match every buyer’s taste. Virtual staging is cheaper, but it’s static — just photos. It doesn’t help people move through the home and feel what it’s like to live there."
                />

                <div className="image-div">
                    <ImageHeading
                        headline=""
                        title=""
                        image="/assets/StilaXR_emptyFurnished.png"
                        alt="Screenshot of AAC interface with popup voice styling menu"
                    />
                </div>
            </div>
            <TextHeading
                headline="Concept"
                title="Design Meets Reality, Through AR"
                body="Stila is an augmented reality app that transforms empty properties into styled, furnished homes — right on site. Using a phone or tablet, buyers can walk through a space and see it fully decorated with couches, beds, art, and lighting — all anchored accurately to the room’s dimensions. Rather than offering just one look, Stila supports multiple styles — from minimal to cozy — helping buyers see how different aesthetics can work within the same space. It’s not about selling furniture. It’s about helping people feel at home."
            />

            <TextList
                text="For Realtors: A Smarter Way to Show Homes"
                items={[
                    "Cut Costs: Eliminate the need for traditional staging, which can cost thousands per home.",
                    "Enhance Open Houses: Turn empty properties into immersive, styled environments in real time.",
                    "Engage Clients: Let buyers explore multiple looks and layouts to find what fits their taste.",
                    "Modernize the Experience: Replace static renderings with dynamic, AR-powered walkthroughs."
                ]}
            />

            <TextHeading
                headline="System Design"
                title="From QR Code to AR Experience"
                body="Stila’s system is built for real-world use — fast to deploy, simple for realtors, and seamless for buyers on-site."
            />

            <TextList
                text=""
                items={[
                    "Realtors send us a 3D scan of the empty property. This gives us the layout and dimensions we need to create a tailored AR experience.",
                    "Stila furnishes the virtual home using curated furniture sets in one or more styles. These furnishings are placed to fit the actual rooms — not just in size, but in mood and feel.",
                    "Realtors place a QR code (provided by Stila) at the entrance of the property. This acts as a simple anchor — no setup or tech expertise needed.",
                    "Buyers arrive, download the app, and scan the code. Instantly, the empty rooms are transformed into fully styled interiors through augmented reality.",
                    "Buyers can explore the home in real time, walk through each room, and even swap between different furnishing styles to see what feels right."
                ]}
            />
            <div className="image-div">
                <ImageHeading
                    headline=""
                    title=""
                    image="/assets/StilaXR_fromQRcodetoAR.png"
                />
            </div>
            <TextHeading
                headline="Architecture & Flow"
                title="How it Works Behind the Scenes"
                body="Stila is built in Unity using ARKit and Vuforia for anchoring and tracking. To make the experience fast, flexible, and scalable, it uses a modular architecture that loads only what’s needed for each property in real time."
            />
            <TextList
                text=" QR Code Mapping:"
                items={[
                    "Each property has a printed QR code that maps to a unique property ID. When scanned, the app fetches metadata about the property and associated asset bundles stored in the cloud."
                ]}
            />
            <TextList
                text="Cloud Asset Management:"
                items={[
                    "All 3D scans and furniture groupings are organized as Addressable asset bundles. These are stored using Unity Cloud Content Delivery and loaded at runtime based on the property ID."
                ]}
            />
            <TextList
                text="Spatial Recognition with Vuforia Area Targets:"
                items={[
                    "Vuforia uses an area target generated from the property’s 3D scan to recognize the real-world environment. This enables accurate spatial anchoring, placing virtual furniture in the same positions as originally mapped in the scan."
                ]}
            />
            <TextList
                text="Runtime Scene Assembly:"
                items={[
                    "At runtime, Unity loads the correct furniture layout and uses Vuforia’s area targets to anchor each object precisely where it was placed in the original 3D scan."
                ]}
            />
            <TextList
                text="Cloud-Based, Modular Delivery:"
                items={[
                    "All property mappings and furniture styles are hosted in the cloud. The app dynamically pulls only the required asset bundles per session — no app updates needed — making the system lightweight, scalable, and easy to maintain."
                ]}
            />
            <div className="image-div">
                <ImageHeading
                    headline=""
                    title=""
                    image="/assets/StilaXR_technicalArchitecture.png"
                />
            </div>
            <TextHeading
                headline="Interaction & UX Design"
                title="Letting the Space Speak"
                body="Stila’s interface is intentionally minimal — designed to get out of the way and let the space take center stage. Every design choice focused on clarity, speed, and immersion."
            />

            <TextList
                text="Instant Onboarding:"
                items={[
                    " Users open the app and scan a QR code — no setup, no menus. The correct property is loaded automatically."
                ]}
            />
            <TextList
                text="Style Switching, Simplified:"
                items={[
                    "A single, unobtrusive toggle lets users switch between furniture styles in real time, revealing different looks without interrupting the experience."
                ]}
            />
            <div className="image-div">
                <ImageHeading
                    headline=""
                    title=""
                    image="/assets/StilaXR_minimalUI.png"
                />
            </div>
            <TextHeading
                headline="Reflections"
                title="Anchoring AR Is Hard — But Worth It"
                body="Designing Stila meant diving deep into the nuances of spatial computing, especially the challenge of persistent AR that aligns virtual content with real-world environments. We explored several approaches to anchoring content, from custom mapping to platform-native solutions, and ultimately found Vuforia’s Area Targets to be the most accessible and reliable option for indoor use. AR is easy when content can be placed anywhere. It gets harder — and more interesting — when anchoring that content meaningfully within physical space. Indoors, where GPS is unreliable and lighting varies, those challenges become even more pronounced. This is still an emerging space with plenty of friction points to solve. But with the right tools and a grounded use case, we proved it’s possible to deliver a smooth, high-impact AR experience where it matters most."
            />
        </main>

    )
}

export default CandyverseCaseStudy;