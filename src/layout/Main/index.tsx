import { MainItem, MainQuestion } from "..";
import "../../styles/layout/Main/index.css";

import illustration_grow_together from "../../assets/images/illustration-grow-together.svg";
import illustration_flowing_conversation from "../../assets/images/illustration-flowing-conversation.svg";
import illustration_your_users from "../../assets/images/illustration-your-users.svg";


export const Main = () => {
    return (
        <main className="main">
            <MainItem
                src={illustration_grow_together}
                subtitle={"Grow Together"}
                paragraph={"Generare meaningful discussions wit your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with feddback form."}
                bgModifier={"none"}
                inverseImage={"none"}
            />
            <MainItem
                src={illustration_flowing_conversation}
                subtitle={"Flowing Conversations"}
                paragraph={"You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow"}
                bgModifier={"section--white"}
                inverseImage={"section__container--inverse"}
            />
            <MainItem
                src={illustration_your_users}
                subtitle={"Your Users"}
                paragraph={"It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately."}
                bgModifier={"none"}
                inverseImage={"section__container--inverse"}
            />
            <MainQuestion subtitle={"Ready To Build Your Community?"} href={"#"} title={"Get Started For Free"} />
        </main>
    )
}

//
// 