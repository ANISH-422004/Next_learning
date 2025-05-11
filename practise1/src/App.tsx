import Button from "./components/Button";
import Card from "./components/Card";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useTheme } from "./context/ThemeContext";
import { useState } from "react";
import type { Listobj } from "./components/List";
import List from "./components/List";
import { UserForm } from "./components/UserForm";

const App = () => {

  const [name, setName] = useLocalStorage<string>("username", "Anish");

  const [list, setList] = useState<Array<Listobj>>([
    { title: "Anish", description: "lorem10" },
    { title: "Kumar", description: "lorem20" },
  ])

  console.log(
    "Name from local storage: ", name
  )

  const handelClick = () => {
    try {
      // Simulate an API call etc (Async Tasks)
      console.log("Button clicked!");
      setName("Anish Kumar");
    } catch (error) {
      console.log(error)
    }
  }


  const { theme, toggleTheme } = useTheme()
  console.log(theme)

  return (
    <>
      <div className="h-screen w-full bg-gray-100 flex items-center justify-center">
        <Button onClick={handelClick} variant="primary" text="click Me  " />
        <Button onClick={handelClick} variant="secondary" text="click Me  " />
        <Card title="Profile 1" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, provident!" footer={"footer Section"}   >
          {/* card(titel , description , {[ReactNode ,ReactNode , ReactNode ]}) */}
          <p>Card Content</p>
          <Button onClick={handelClick} variant="primary" text="click Me  " />
          <Button onClick={toggleTheme} variant="primary" text="ToggleTheme" />

        </Card>


        <List list={list} />

      </div>


<div className="p-8 bg-blue-200 w-full">
  <UserForm />
</div>

    </>

  )

}



export default App;