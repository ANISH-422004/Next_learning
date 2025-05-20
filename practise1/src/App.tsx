import Button from "./components/Button";
import Card from "./components/Card";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useTheme } from "./context/ThemeContext";
import { useState } from "react";
import type { Listobj } from "./components/List";
import List from "./components/List";
import { UserForm } from "./components/UserForm";
import Select from "./components/Select";
import Input from "./components/Input";
import Select2 from "./components/Select2";
import UserCard from "./components/UserCard";
import Clock from "./components/Clock";


type Country = {
  id: number;
  name: string;
  code: string;
};

const countries: Country[] = [
  { id: 1, name: "India", code: "IN" },
  { id: 2, name: "United States", code: "US" },
  { id: 3, name: "Germany", code: "DE" },
];


const App = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);
  const [name, setName] = useLocalStorage<string>("username", "Anish");
  const [user, setUser] = useState<string | number>("");
  const [email, setEmail] = useState<string>("")
  const [list, setList] = useState<Array<Listobj>>([
    { title: "Anish", description: "lorem10" },
    { title: "Kumar", description: "lorem20" },
  ])

  const users = ["John", "Jane", "Paul", "Sara"];

  const handelChangeUser = (user: string | number): void => {
    setUser(user)

  }


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
  // console.log(theme)
  console.log(user)

  return (
    <>
      <div className="h-screen w-full bg-gray-100 flex items-center justify-center">
        <Button onClick={handelClick} variant="primary" text="click 1  " />
        <Button onClick={handelClick} variant="secondary" text="click 2  " />
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

      <div className="p-8 bg-blue-300 w-full">
        <Select options={users} label="SELECT USERS" onChange={handelChangeUser} />
      </div>


      <div className="p-8 bg-blue-400 w-full">
        <Input
          label="email"
          type="email"
          value={email}
          onChange={(email: string) => setEmail(email)}
          palaceholder="Enter your email"
        />
      </div>


      <div className="p-8 bg-blue-500 w-full">

        <div>
          <Select2
            label="Choose a Country"
            options={countries}
            optionLabel="name"
            optionValue="code"
            onChange={(country) => setSelectedCountry(country)}
          />

          <p className="mt-4">
            Selected: <strong>{selectedCountry.name}</strong> ({selectedCountry.code})
          </p>
        </div>


      </div>

    <div className="p-8 bg-blue-600 w-full">

      <UserCard user={{ id: 1, name: "Anish", role: "admin", permissions: ["read", "write"] }} />
      <UserCard user={{ id: 2, name: "Kumar", role: "guest", expiry: new Date() }} />
      <UserCard user={{ id: 3, name: "John", role: "admin", permissions: ["read", "write"] }} />

    </div>


    <div className="p-8 bg-blue-700 w-full">

    <Clock/>

    </div>

    </>


  )

}



export default App;