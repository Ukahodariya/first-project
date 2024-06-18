import Herobanner from "./herobanner";
import Job from "./job";
import Joke from "./joke";
import Life from "./life";
import Member from "./member";

export default function Home()
{
    return(
        <div>
            <Herobanner/>
            <Joke/>
            <Life/>
            <Job/>
            <Member/>
        </div>
    )
}