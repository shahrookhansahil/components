import { PersonConsumer } from "./PersonContext";
import { UserConsumer } from "./UserContext";
import { SubjectConsumer } from "./SubjectContext";
export default function C(){
    return(
        <>
            <PersonConsumer>
                {b=>(
                    <div><h3>{b}</h3></div>
                )}
                
            </PersonConsumer>
            <UserConsumer>
                {a =>(
                      <h3>{a}</h3>
                )}
            </UserConsumer>
            <SubjectConsumer>
                {
                    a=>(<h1>{a}</h1>)
                }
            </SubjectConsumer>
        </>
    )
}