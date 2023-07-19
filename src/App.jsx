
import AutocompleteText from './autocomplete/AutocompleteText'

function App() {
  const songs = ["Better", "Cruel", "LetMe", "LetMeLove", "Outside", "Pillowtalk", "She", "SheDontLoveMe", "Trampoline", "Vibez"]
  return (
    <>
      <AutocompleteText songs={songs} />
    </>
  )
}

export default App
