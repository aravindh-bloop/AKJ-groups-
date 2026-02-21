import React, { useState, useEffect, useRef } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

/* ─── Expanded FAQ Knowledge Base ────────────────────────────────── */
const FAQ = [
    // Greetings
    {
        patterns: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'start'],
        answer: `Hello! 👋 Welcome to **AKJ Groups**!\n\nI can help you with:\n• Our services & expertise\n• Project portfolio\n• Pricing & timelines\n• Materials & quality\n• Team & company info\n• Getting a callback\n\nWhat would you like to know? 😊`
    },
    // Services – overview
    {
        patterns: ['service', 'offer', 'what do you do', 'specialise', 'specialize', 'expertise', 'provide'],
        answer: `We offer a comprehensive range of services:\n\n🏗️ **Construction** – Residential & commercial buildings\n🏢 **Consultancy** – End-to-end project planning & management\n🛣️ **Road & Infrastructure** – Roads, bridges & civil works\n🏠 **Interior Design** – Turnkey interior solutions\n📐 **Architecture** – Custom architectural designs\n🔧 **Structural Engineering** – Foundation & structural analysis\n🌿 **Geo-Technical Engineering** – Soil studies & foundation planning\n📋 **Project Supervision** – Site monitoring & quality control\n\nWould you like details about any specific service?`
    },
    // Residential
    {
        patterns: ['residential', 'villa', 'house', 'home', 'apartment', 'flat', 'bungalow', 'row house', 'housing'],
        answer: `We build **premium residential spaces** tailored to your lifestyle:\n\n🏡 Independent villas & bungalows\n🏘️ Row houses & gated communities\n🏢 Apartment complexes (G+1 to G+10)\n🏠 Budget homes & affordable housing\n🌿 Eco-friendly & vastu-compliant constructions\n\nEvery home is built with precision, premium materials, and passion. What type of home are you planning?`
    },
    // Commercial
    {
        patterns: ['commercial', 'office', 'shop', 'mall', 'building', 'showroom', 'warehouse', 'industrial', 'factory', 'hotel'],
        answer: `We deliver world-class **commercial construction** including:\n\n🏢 Office buildings & IT parks\n🏪 Retail showrooms & shopping complexes\n🏭 Industrial facilities & warehouses\n🏨 Hotels, resorts & hospitality spaces\n🏥 Clinics, hospitals & institutional buildings\n\nWe handle everything from planning to handover. Tell us your requirement and we'll give you an estimate!`
    },
    // Cost / Pricing
    {
        patterns: ['cost', 'price', 'rate', 'budget', 'quote', 'estimate', 'charge', 'fee', 'expensive', 'cheap', 'affordable'],
        answer: `Our pricing is **transparent, competitive, and project-specific**.\n\nGeneral construction rates (Tamil Nadu):\n\n🏠 Budget construction – ₹1,500–₹1,800 / sq.ft\n🏡 Standard construction – ₹1,800–₹2,500 / sq.ft\n🏆 Premium construction – ₹2,500–₹4,000+ / sq.ft\n\n*Rates vary based on design, materials, location & finishes.*\n\nFor an accurate quote tailored to your project, share your details and our team will connect with you!`
    },
    // Timeline / Duration
    {
        patterns: ['time', 'duration', 'how long', 'deadline', 'timeline', 'complete', 'finish', 'schedule', 'months', 'days'],
        answer: `Typical project timelines:\n\n🏠 2 BHK / 3 BHK home – 8 to 14 months\n🏡 Individual villa (2,000–4,000 sq.ft) – 12 to 18 months\n🏢 Commercial building – 18 to 36 months\n🛣️ Road & infrastructure – based on scope & length\n\nWe maintain **detailed project schedules** and provide regular progress updates. We are committed to on-time delivery — always!`
    },
    // Materials & Quality
    {
        patterns: ['material', 'quality', 'standard', 'cement', 'steel', 'brand', 'product', 'tile', 'paint', 'wire', 'plumbing', 'sanitary', 'electrical'],
        answer: `We use only **Grade-A materials** from trusted brands:\n\n🔵 **Cement:** UltraTech, Coromandel, Ramco, Dalmia\n🔴 **Steel / TMT:** Tata Steel, ARS Steel, VIZAG Steel, RMC\n🟤 **Plywood:** Greenply, CenturyPly\n⚪ **Tiles:** Kajaria, KAG, Johnson\n🔧 **Plumbing:** Jaquar, Parryware, Kohler\n🎨 **Paints:** Asian Paints, Dulux, Jenson & Nicholson\n⚡ **Electrical:** Panasonic, Anchor, Legrand, Finolex, MK Powering\n\nQuality is never compromised at AKJ Groups!`
    },
    // Experience & Company info
    {
        patterns: ['experience', 'year', 'founded', 'old', 'since', 'history', 'about', 'background', 'company', 'akj'],
        answer: `**AKJ Groups** was founded with a mission to deliver world-class construction with integrity and innovation.\n\n📊 **500+** projects completed\n👥 **50+** expert team members\n⭐ **98%** client satisfaction rate\n📍 Based in **Tamil Nadu, India**\n\nOur leadership team — led by our Chairman, Managing Director and a team of seasoned engineers — ensures every project is executed to the highest standards.`
    },
    // Team
    {
        patterns: ['team', 'who', 'staff', 'engineer', 'architect', 'director', 'chairman', 'founder', 'people', 'expert'],
        answer: `Our expert team includes:\n\n👑 **N. Augustin** – Founder\n🏛️ **A. Kumutha** – Chairman\n💼 **A. Jenson Bright** – Managing Director & Director\n🤝 **S. Nambirajan** – Vice President\n⚙️ **V. Kumaresan** – Project Engineer\n📐 **Saravanan** – Architect\n🏗️ **Prabakar** – Structural Engineer\n🌍 **Sudharshanan** – Geo Technical Engineer\n🛣️ **Alex** – Road & Infrastructure\n📏 **Maridurai** – Survey Specialist\n\nA diverse team of 50+ professionals committed to excellence!`
    },
    // Contact / Location
    {
        patterns: ['contact', 'reach', 'phone', 'email', 'address', 'location', 'office', 'where', 'visit', 'whatsapp'],
        answer: `You can reach us through:\n\n📞 **Phone:** +91 98765 43210\n💬 **WhatsApp:** +91 98765 43210\n📧 **Email:** info@akjgroups.com\n📍 **Office:** Tamil Nadu, India\n🕐 **Working hours:** Mon–Sat, 9 AM – 6 PM\n\nYou can also leave your number below and our team will **call you back within 24 hours!** 🙌`
    },
    // Warranty / Guarantee
    {
        patterns: ['warranty', 'guarantee', 'defect', 'issue', 'problem', 'maintenance', 'after', 'post', 'support'],
        answer: `We stand behind every project we deliver:\n\n✅ **Structural warranty** – 10 years\n✅ **Waterproofing warranty** – 5 years\n✅ **Electrical & plumbing** – 1 year\n✅ **Post-construction support** – dedicated helpline\n\nOur relationship with you doesn't end at handover — we're with you for the long run! 🤝`
    },
    // Vastu / Design
    {
        patterns: ['vastu', 'design', 'plan', 'layout', 'drawing', '3d', 'elevation', 'render', 'blueprint', 'architectural'],
        answer: `Yes! We offer complete **design & planning services**:\n\n📐 Vastu-compliant floor plans\n🖥️ 3D elevation renders & walkthroughs\n📋 Structural drawings & BOQ\n🏠 Interior layout planning\n🌿 Landscape design\n\nOur architects work closely with you to create your dream space before construction even begins. Would you like to discuss your vision?`
    },
    // Road / Infrastructure
    {
        patterns: ['road', 'infrastructure', 'bridge', 'highway', 'civil work', 'government', 'tender', 'public', 'drainage', 'sewage'],
        answer: `We have extensive experience in **road & infrastructure projects**:\n\n🛣️ Village, town & city roads\n🌉 Bridges & culverts\n💧 Drainage & sewage systems\n🏗️ Government & private civil works\n📋 Tender & project management\n\nOur infrastructure team is led by **Alex**, our Road & Infrastructure specialist, with decades of field experience.`
    },
    // Consultancy
    {
        patterns: ['consult', 'advice', 'guidance', 'help', 'planning', 'survey', 'feasibility', 'soil', 'geo'],
        answer: `Our **consultancy services** cover every stage of your project:\n\n📋 Site feasibility studies\n🌍 Geo-technical & soil analysis\n📐 Structural & architectural planning\n💰 Cost estimation & BOQ preparation\n📊 Project management & supervision\n🔍 Quality control & inspection\n\nWhether you're starting from scratch or need expert guidance mid-project, we're here to help!`
    },
    // Process / How it works
    {
        patterns: ['process', 'procedure', 'steps', 'how does', 'how it works', 'start', 'begin', 'initiate'],
        answer: `Here's how a typical project progresses with AKJ Groups:\n\n1️⃣ **Initial Consultation** – Understand your vision & requirements\n2️⃣ **Site Survey & Feasibility** – Ground-level assessment\n3️⃣ **Design & Planning** – Architectural & structural drawings\n4️⃣ **BOQ & Quotation** – Detailed cost breakdown\n5️⃣ **Agreement & Kickoff** – Formal contract signing\n6️⃣ **Construction Phase** – Regular updates & quality checks\n7️⃣ **Handover** – Final inspection & key handover\n8️⃣ **Post-Support** – Warranty & maintenance\n\nReady to start? Share your details and we'll get in touch!`
    },
    // Location / Area of operation
    {
        patterns: ['area', 'region', 'state', 'district', 'operate', 'work', 'city', 'town', 'tamil', 'tamilnadu', 'where do you'],
        answer: `We primarily operate across **Tamil Nadu**, with experience in:\n\n🏙️ Chennai, Coimbatore, Madurai, Salem\n🌆 Trichy, Tirunelveli, Vellore, Erode\n🌄 Smaller towns, villages & rural areas\n\nFor projects outside Tamil Nadu, please contact us directly — we evaluate case by case. 📞`
    },
    // Portfolio / projects
    {
        patterns: ['project', 'portfolio', 'completed', 'done', 'built', 'work', 'sample', 'example', 'photos', 'gallery'],
        answer: `AKJ Groups has a proud portfolio of **500+ completed projects**! 🏆\n\nOur work spans:\n🏠 Luxury villas & budget homes\n🏢 Commercial & office buildings\n🏭 Industrial & warehouse facilities\n🛣️ Roads, bridges & civil infrastructure\n🏗️ Government & private projects\n\nCheck out our **Projects section** on this website for photos, or ask our team to share a curated portfolio tailored to your project type!`
    },
    // Thank you / closure
    {
        patterns: ['thank', 'thanks', 'bye', 'goodbye', 'see you', 'great', 'perfect', 'awesome', 'excellent', 'good'],
        answer: `You're welcome! 😊 It was a pleasure assisting you.\n\nIf you ever have more questions or need expert construction guidance, we're just a message away.\n\n**AKJ Groups** – Building trust, creating homes. 🏗️\n📞 +91 98765 43210`
    },
];

const findAnswer = (text) => {
    const lower = text.toLowerCase().trim();
    // Score each FAQ by how many patterns match
    let best = null;
    let bestScore = 0;
    for (const faq of FAQ) {
        const score = faq.patterns.filter(p => lower.includes(p)).length;
        if (score > bestScore) {
            bestScore = score;
            best = faq;
        }
    }
    return bestScore > 0 ? best.answer : null;
};

/* ─── Chat Flow Steps ─────────────────────────────────────────────── */
const FLOW = {
    CHATTING: 'chatting',     // Normal Q&A
    ASK_LEAD: 'ask_lead',     // "Would you like a callback?"
    ASK_NAME: 'ask_name',
    ASK_PHONE: 'ask_phone',
    ASK_QUERY: 'ask_query',
    DONE: 'done',             // Lead submitted — no more collection
};

/* ─── Markdown-lite renderer ──────────────────────────────────────── */
const renderText = (text) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        return part.split('\n').map((line, j, arr) => (
            <span key={`${i}-${j}`}>
                {line}
                {j < arr.length - 1 && <br />}
            </span>
        ));
    });
};

/* ─── Bot message with typing indicator ──────────────────────────── */
const BotMessage = ({ msg }) => {
    const [visible, setVisible] = useState(msg.instant || false);

    useEffect(() => {
        if (!msg.instant) {
            const t = setTimeout(() => setVisible(true), 650);
            return () => clearTimeout(t);
        }
    }, [msg.instant]);

    if (!visible) {
        return (
            <div className="chat-bubble bot">
                <div className="typing-indicator">
                    <span /><span /><span />
                </div>
            </div>
        );
    }

    return (
        <div className="chat-bubble bot">
            <p>{renderText(msg.text)}</p>
        </div>
    );
};

/* ─── Main Chatbot Component ──────────────────────────────────────── */
const Chatbot = () => {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [flow, setFlow] = useState(FLOW.CHATTING);
    const [lead, setLead] = useState({ name: '', phone: '', query: '' });
    const [submitting, setSubmitting] = useState(false);
    const [hasGreeted, setHasGreeted] = useState(false);
    // Count how many FAQ answers have been given — prompt for callback after 2nd answer
    const [faqAnswerCount, setFaqAnswerCount] = useState(0);
    const [leadPrompted, setLeadPrompted] = useState(false); // prompt lead capture only once
    const bottomRef = useRef(null);
    const inputRef = useRef(null);

    const addMessage = (text, sender = 'bot', instant = false) => {
        setMessages(prev => [...prev, { id: Date.now() + Math.random(), text, sender, instant }]);
    };

    // Greeting on first open
    useEffect(() => {
        if (open && !hasGreeted) {
            setHasGreeted(true);
            setTimeout(() => {
                addMessage(
                    'Hello! 👋 Welcome to **AKJ Groups**!\n\nI can help with services, pricing, timelines, materials, and more. Or type **"connect"** to speak with our team directly.\n\nWhat would you like to know?',
                    'bot'
                );
            }, 300);
        }
    }, [open, hasGreeted]);

    // Auto-scroll
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // Focus input on open
    useEffect(() => {
        if (open) setTimeout(() => inputRef.current?.focus(), 300);
    }, [open]);

    /* ── Prompt lead once, after the 2nd FAQ answer ── */
    const maybePromptLead = (currentCount) => {
        if (!leadPrompted && currentCount >= 2) {
            setLeadPrompted(true);
            setTimeout(() => {
                setFlow(FLOW.ASK_LEAD);
                addMessage(
                    '💬 You seem to have a few questions! Would you like our team to **call you back** for a personalised consultation? (Yes / No)',
                    'bot'
                );
            }, 1600);
            return true;
        }
        return false;
    };

    const processUserMessage = (text) => {
        addMessage(text, 'user', true);
        setInput('');

        /* ── Lead capture flow ── */
        if (flow === FLOW.ASK_NAME) {
            const name = text.trim();
            setLead(prev => ({ ...prev, name }));
            setFlow(FLOW.ASK_PHONE);
            setTimeout(() => addMessage(`Nice to meet you, **${name}**! 😊\n\nPlease share your **phone number** so our team can reach you:`), 800);
            return;
        }

        if (flow === FLOW.ASK_PHONE) {
            const phone = text.trim().replace(/\s|-/g, '');
            const phoneRegex = /^(\+91)?[6-9]\d{9}$/;
            if (!phoneRegex.test(phone)) {
                setTimeout(() => addMessage('Please enter a valid **10-digit Indian mobile number** (e.g. 9876543210):'), 800);
                return;
            }
            setLead(prev => ({ ...prev, phone }));
            setFlow(FLOW.ASK_QUERY);
            setTimeout(() => addMessage('Got it! 📝\n\nBriefly describe your **requirement or project**\n(e.g. "3BHK house in Chennai, budget ₹50L"):'), 800);
            return;
        }

        if (flow === FLOW.ASK_QUERY) {
            const query = text.trim();
            setLead(prev => {
                const updatedLead = { ...prev, query };
                submitLead(updatedLead);
                return updatedLead;
            });
            setFlow(FLOW.DONE);
            return;
        }

        if (flow === FLOW.ASK_LEAD) {
            const lower = text.toLowerCase();
            const yes = ['yes', 'sure', 'ok', 'okay', 'please', 'yeah', 'yep', 'y', 'connect', 'call', 'definitely', 'of course'].some(w => lower.includes(w));
            if (yes) {
                setFlow(FLOW.ASK_NAME);
                setTimeout(() => addMessage('Great! Let\'s get you connected. 🤝\n\nMay I know your **full name**?'), 800);
            } else {
                setFlow(FLOW.CHATTING);
                setTimeout(() => addMessage('No problem! Feel free to keep asking questions — I\'m happy to help. 😊\n\nYou can also type **"connect"** anytime to talk to our team.'), 800);
            }
            return;
        }

        /* ── DONE state — still answer FAQs, just no more lead prompts ── */
        if (flow === FLOW.DONE) {
            const answer = findAnswer(text);
            if (answer) {
                setTimeout(() => addMessage(answer, 'bot'), 800);
            } else {
                setTimeout(() => addMessage('Feel free to ask anything else! Type a topic like **"services"**, **"pricing"**, or **"materials"**.', 'bot'), 800);
            }
            return;
        }

        /* ── Normal chatting — FAQ resolution ── */
        const wantsHuman = /callback|call back|speak|talk|agent|human|team|representative|connect|enquire|enquiry/i.test(text);

        if (wantsHuman) {
            setLeadPrompted(true); // prevent double-prompt
            setFlow(FLOW.ASK_NAME);
            setTimeout(() => addMessage('Absolutely! I\'ll connect you with our team right away. 🤝\n\nMay I know your **full name**?'), 800);
            return;
        }

        const answer = findAnswer(text);

        if (answer) {
            setTimeout(() => addMessage(answer, 'bot'), 800);
            const newCount = faqAnswerCount + 1;
            setFaqAnswerCount(newCount);
            // Offer callback after 2nd distinct answer (and only once)
            maybePromptLead(newCount);
        } else {
            setTimeout(() => addMessage(
                'Hmm, I\'m not sure about that specifically! Here are things I can help with:\n\n• **Services** – What we offer\n• **Residential / Commercial** – Types of construction\n• **Pricing** – Cost estimates\n• **Timeline** – Project durations\n• **Materials** – Brands we use\n• **Warranty** – Post-construction support\n• **Process** – How we work\n• **Team** – Meet our experts\n• **Contact** – Reach our office\n\nOr type **"connect"** to speak with our team directly! 📞',
                'bot'
            ), 800);
        }
    };

    const submitLead = async (leadData) => {
        setSubmitting(true);
        try {
            await addDoc(collection(db, 'chatLeads'), {
                name: leadData.name,
                phone: leadData.phone,
                query: leadData.query,
                status: 'new',
                source: 'website_chatbot',
                createdAt: serverTimestamp(),
            });
            setTimeout(() => {
                addMessage(
                    `✅ **All set, ${leadData.name}!**\n\nYour details have been submitted successfully.\n\n📞 Our team will call you at **${leadData.phone}** within 24 hours.\n\nIn the meantime, feel free to ask me anything else! 😊`,
                    'bot'
                );
                setSubmitting(false);
            }, 1000);
        } catch (err) {
            console.error('Firestore error:', err);
            setTimeout(() => {
                addMessage('Sorry, something went wrong submitting your details. Please call us directly at **+91 98765 43210** or email **info@akjgroups.com**.', 'bot');
                setSubmitting(false);
                setFlow(FLOW.CHATTING);
            }, 1000);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmed = input.trim();
        if (!trimmed || submitting) return;
        processUserMessage(trimmed);
    };

    // Quick replies only in normal chatting mode
    const quickReplies =
        flow === FLOW.CHATTING
            ? ['Our Services', 'Cost & Pricing', 'Project Timeline', 'Materials Used', 'Talk to Team']
            : flow === FLOW.ASK_LEAD
                ? ['Yes, call me!', 'No, thanks']
                : [];

    const inputPlaceholder =
        flow === FLOW.ASK_NAME ? 'Enter your full name…' :
            flow === FLOW.ASK_PHONE ? 'Enter your phone number…' :
                flow === FLOW.ASK_QUERY ? 'Describe your project / requirement…' :
                    flow === FLOW.DONE ? 'Ask me anything else…' :
                        'Type a message…';

    return (
        <>
            {/* ── Floating Button ── */}
            <button
                className={`chatbot-fab ${open ? 'open' : ''}`}
                onClick={() => setOpen(prev => !prev)}
                aria-label="Open chat"
            >
                <span className="fab-icon fab-chat">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                </span>
                <span className="fab-icon fab-close">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </span>
            </button>

            {/* ── Chat Window ── */}
            <div className={`chatbot-window ${open ? 'visible' : ''}`}>

                {/* Header */}
                <div className="chat-header">
                    <div className="chat-header-avatar">
                        <span>AK</span>
                        <span className="chat-online-dot" />
                    </div>
                    <div className="chat-header-info">
                        <h4>AKJ Groups Assistant</h4>
                        <span>Online · Typically replies instantly</span>
                    </div>
                    <button className="chat-header-close" onClick={() => setOpen(false)}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" width="18" height="18">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>

                {/* Messages */}
                <div className="chat-messages">
                    {messages.length === 0 && (
                        <div className="chat-empty">
                            <div className="chat-empty-icon">💬</div>
                            <p>Send a message to get started!</p>
                        </div>
                    )}
                    {messages.map(msg =>
                        msg.sender === 'bot'
                            ? <BotMessage key={msg.id} msg={msg} />
                            : <div key={msg.id} className="chat-bubble user"><p>{msg.text}</p></div>
                    )}
                    {submitting && (
                        <div className="chat-bubble bot">
                            <div className="typing-indicator"><span /><span /><span /></div>
                        </div>
                    )}
                    <div ref={bottomRef} />
                </div>

                {/* Quick Replies */}
                {quickReplies.length > 0 && (
                    <div className="chat-quick-replies">
                        {quickReplies.map(reply => (
                            <button key={reply} className="quick-reply-btn" onClick={() => processUserMessage(reply)}>
                                {reply}
                            </button>
                        ))}
                    </div>
                )}

                {/* Input */}
                <form className="chat-input-area" onSubmit={handleSubmit}>
                    <input
                        ref={inputRef}
                        type={flow === FLOW.ASK_PHONE ? 'tel' : 'text'}
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        placeholder={inputPlaceholder}
                        className="chat-input"
                        disabled={submitting}
                        autoComplete="off"
                    />
                    <button
                        type="submit"
                        className="chat-send-btn"
                        disabled={!input.trim() || submitting}
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                            <line x1="22" y1="2" x2="11" y2="13" />
                            <polygon points="22 2 15 22 11 13 2 9 22 2" />
                        </svg>
                    </button>
                </form>

                <div className="chat-footer">
                    Powered by <strong>AKJ Groups</strong>
                </div>
            </div>
        </>
    );
};

export default Chatbot;
