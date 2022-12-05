import React from "react";
import Principle from "../Principle";


const principles = [
    { part: "PART ONE: FUNDAMENTAL TECHNIQUES IN HANDLING PEOPLE", chapter: "If You Want to Gather Honey, Don't Kick Over the Beehive", principle: "Don't Criticize, Condemn or Complain." },
    { part: "PART ONE: FUNDAMENTAL TECHNIQUES IN HANDLING PEOPLE", chapter: "The Big Secret of Dealing with People", principle: "Give Honest and Sincere Appreciation." },
    { part: "PART ONE: FUNDAMENTAL TECHNIQUES IN HANDLING PEOPLE", chapter: "He Who Can Do This Has the Whole World with Him. He Who Cannot Walks a Lonely Way", principle: "Arouse in the Pther Person an Eager Want." },
    { part: "PART TWO: SIX WAYS TO MAKE PEOPLE LIKE YOU", chapter: "Do This and You'll be Welcome Anywhere", principle: "Become Genuinely Interested in Other People." },
    { part: "PART TWO: SIX WAYS TO MAKE PEOPLE LIKE YOU", chapter: "A Simple Way to Make a Good First Imppression", principle: "Smile." },
    { part: "PART TWO: SIX WAYS TO MAKE PEOPLE LIKE YOU", chapter: "If You Don't Do This, You Are Headed for Trouble", principle: "Remember That a Person's Name is to That Person the Sweetest and Most Important Sound in Any Language." },
    { part: "PART TWO: SIX WAYS TO MAKE PEOPLE LIKE YOU", chapter: "An Easy Way to Become a Good Conversationalist", principle: "Be a Good Listener. Encourage Others to Talk About Themselves." },
    { part: "PART TWO: SIX WAYS TO MAKE PEOPLE LIKE YOU", chapter: "How to Interest People", principle: "Talk in Terms of the Other Person's Interests." },
    { part: "PART TWO: SIX WAYS TO MAKE PEOPLE LIKE YOU", chapter: "How to Make People Like You Instantly", principle: "Make the Other Person Feel Important - and Do It Sincerely." },
    { part: "PART THREE: HOW TO WIN PEOPLE TO YOUR WAY OF THINKING", chapter: "You Can't Win an Argument", principle: "The Only Way to Get the Best of an Argumnet is to Avoid It." },
    { part: "PART THREE: HOW TO WIN PEOPLE TO YOUR WAY OF THINKING", chapter: "A Sure Way of Making Enemies - and How to Avoid It", principle: "Show Respect for the Other Peson's opinions. Never Say 'You Are Wrong.'" },
    { part: "PART THREE: HOW TO WIN PEOPLE TO YOUR WAY OF THINKING", chapter: "If You're Wrong, Admit It", principle: "If You Are Wrong, Admit It Quickly and Emphatically." },
    { part: "PART THREE: HOW TO WIN PEOPLE TO YOUR WAY OF THINKING", chapter: "A Drop of Honey", principle: "Begin in a Friendly Way." },
    { part: "PART THREE: HOW TO WIN PEOPLE TO YOUR WAY OF THINKING", chapter: "The Secret of Socrates", principle: "Get The Other Person Saying 'Yes, Yes' Inmediately." },
    { part: "PART THREE: HOW TO WIN PEOPLE TO YOUR WAY OF THINKING", chapter: "The Safety Valve in Handling Complaints", principle: "Let the Other person Do a Great Deal Of the Talking." },
    { part: "PART THREE: HOW TO WIN PEOPLE TO YOUR WAY OF THINKING", chapter: "How to Get Cooperation", principle: "Let the Other Person Feel That the Idea is His or Hers." },
    { part: "PART THREE: HOW TO WIN PEOPLE TO YOUR WAY OF THINKING", chapter: "A Formula That Will Work Wonders for You", principle: "Try Honestly to See Things from the oTher Person's Point of View." },
    { part: "PART THREE: HOW TO WIN PEOPLE TO YOUR WAY OF THINKING", chapter: "What Everybody Wants", principle: "Be Sympathetic with the Other Person's Ideas and Desires." },
    { part: "PART THREE: HOW TO WIN PEOPLE TO YOUR WAY OF THINKING", chapter: "An Appeal That Everybody Likes", principle: "Appeal to the Nobler Motives." },
    { part: "PART THREE: HOW TO WIN PEOPLE TO YOUR WAY OF THINKING", chapter: "The Movies Do It. Why Don't You Do It?", principle: "Dramatise Your ideas." },
    { part: "PART THREE: HOW TO WIN PEOPLE TO YOUR WAY OF THINKING", chapter: "When Nothing Else Works, Try This", principle: "Throw Down a Challenge." },
    { part: "PART FOUR: BE A LEADER: HOW TO CHANGE PEOPLE WITHOUT GIVING OFFENCE OR AROUSING RESENTMENT", chapter: "If You Must Find Fault, This Is the Way to Begin", principle: "Begin with Praise and Honest Appreciation." },
    { part: "PART FOUR: BE A LEADER: HOW TO CHANGE PEOPLE WITHOUT GIVING OFFENCE OR AROUSING RESENTMENT", chapter: "How to Criticize - and Not Be Hated For It", principle: "Call Attention to People's Mistakes Indirectly." },
    { part: "PART FOUR: BE A LEADER: HOW TO CHANGE PEOPLE WITHOUT GIVING OFFENCE OR AROUSING RESENTMENT", chapter: "Talk About Your Own Mistakes First", principle: "Talk About Your Own Mistakes Before Criticizing the Other Person." },
    { part: "PART FOUR: BE A LEADER: HOW TO CHANGE PEOPLE WITHOUT GIVING OFFENCE OR AROUSING RESENTMENT", chapter: "No One Likes to Take Orders", principle: "Ask Questions Instead of Giving Direct orders." },
    { part: "PART FOUR: BE A LEADER: HOW TO CHANGE PEOPLE WITHOUT GIVING OFFENCE OR AROUSING RESENTMENT", chapter: "Let The Other Person Save Face", principle: "Let the Other Person Save Face." },
    { part: "PART FOUR: BE A LEADER: HOW TO CHANGE PEOPLE WITHOUT GIVING OFFENCE OR AROUSING RESENTMENT", chapter: "How To Spur People On to Success", principle: "Praise the Slightest Improvement and Praise Every Improvement. Be 'Hearty in Your Approbation and Lavish in Your Praise.'" },
    { part: "PART FOUR: BE A LEADER: HOW TO CHANGE PEOPLE WITHOUT GIVING OFFENCE OR AROUSING RESENTMENT", chapter: "Give a Dog a Good Name", principle: "Give the Other Person a Fine Reputation to Live Up To." },
    { part: "PART FOUR: BE A LEADER: HOW TO CHANGE PEOPLE WITHOUT GIVING OFFENCE OR AROUSING RESENTMENT", chapter: "Make the Fault Seem Easy to Correct", principle: "Use Encouragement. Make the Fault Seem Easy to Correct." },
    { part: "PART FOUR: BE A LEADER: HOW TO CHANGE PEOPLE WITHOUT GIVING OFFENCE OR AROUSING RESENTMENT", chapter: "Making People Glad to Do What You Want", principle: "Make the Other Person Happy About Doing the Thing You Suggest." },
]

export default function App() {

    const [hasGenerated, setHasGenerated] = React.useState(false)
    const [data, setData] = React.useState({})

    const handleClick = () => {
        setHasGenerated(true)
        setData(principles[Math.floor(Math.random() * principles.length)])
    }

    return (
        <div className="ui container">
            <div className="ui segment">
                    <h1>How to Win Friends and Influence People</h1>
                    <h2>Practice App</h2>
                    <p>Use this App to give you a random principle from 'HTWFAIP' to practice every day, and level up your social skills!</p>
                    {hasGenerated ? <p>* Do the hard work especially when you don't feel like it!</p> : null}
            </div>
            {hasGenerated ? <Principle data={data} /> : null}
            <button className="ui button primary" onClick={() => handleClick()}>Generate Principle</button>
        </div>
    )
}