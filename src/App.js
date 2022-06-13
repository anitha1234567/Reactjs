import First from './First'
import ClassComponent from './ClassComponent'
import { StateFunction, StateFunction2 } from './StateFunction'
function App() {
  return (
    <div>
      <h1>hello everyone</h1>
      <p>how are you</p>
      {/*<First />
      <ClassComponent name="Anitha" year="2022" />*/}
      <ClassComponent name="angular">class example</ClassComponent>
      <StateFunction />
      <StateFunction2 />
    </div>
  )

}
export default App;