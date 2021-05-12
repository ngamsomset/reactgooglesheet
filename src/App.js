import React, { useState } from 'react'
import { Button, Form, Container, Header } from 'semantic-ui-react'
import axios from 'axios'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [salary, setSalary] = useState('')
  const [hobby, setHobby] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const objt = { name, age, salary, hobby }

    axios
      .post(
        'https://sheet.best/api/sheets/c8c8b864-2766-4560-8648-9dd0da4e2e7e',
        objt
      )
      .then((response) => {
        console.log(response)
      })
  }

  return (
    <Container fluid className="container">
      <Form className="form">
        <Header as="h2">React Google Sheets</Header>
        <Form.Field>
          <label>Name</label>
          <input
            placeholder="Enter Your Name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Age</label>
          <input
            placeholder="Enter Your Age"
            onChange={(e) => setAge(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Salary</label>
          <input
            placeholder="Enter Your Salary"
            onChange={(e) => setSalary(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Hobby</label>
          <input
            placeholder="Enter Your Hobby"
            onChange={(e) => setHobby(e.target.value)}
          />
        </Form.Field>
        <Button type="submit" color="blue" onClick={handleSubmit}>
          Submit
        </Button>
        <Button type="submit" color="black">
          <a
            alt="#"
            href="https://docs.google.com/spreadsheets/d/1rVWyRP6OqGJM81a09QL9dUI3IUQjwnPelgPp2GAT0jo/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Check your Sheet Here
          </a>
        </Button>
      </Form>
    </Container>
  )
}

export default App
