import React, { useState } from 'react'
import TypographyColoredHeading from '../../components/typography-colored-heading'
import TypographyColoredSmall from '../../components/typography-colored-small'
import InputText from '../../components/input-text'
import InputTextArea from '../../components/input-text-area'
import InputLabel from '../../components/input-label'
import InputButton from '../../components/input-button'
import NavigationBottomBar from '../../components/navigation-bottom-bar'
import api from '../../services/api'
import './index.css'

const AddBookPage = () => {
  const [name, nameInput] = InputText({ placeholder: '' })
  const [author, authorInput] = InputText({ placeholder: '' })
  const [description, descriptionInput] = InputTextArea({ placeholder: '', rows: 5 })

  const [isNameValid, setIsNameValid] = useState(true)
  const [isAuthorValid, setIsAuthorValid] = useState(true)
  const [isDescriptionValid, setIsDescriptionValid] = useState(true)

  const isFormValid = () => {
    setIsNameValid(true)
    setIsAuthorValid(true)
    setIsDescriptionValid(true)
    if (!name) {
      setIsNameValid(false)
    }
    if (!author) {
      setIsAuthorValid(false)
    }
    if (!description) {
      setIsDescriptionValid(false)
    }
    return false
  }

  const onSubmit = async () => {
    if (isFormValid()) {
      create({ name, author, description })
      window.location.reload()
    }
  }

  const create = async ({ name, author, description }) => {
    await api.post('/books', {
      name: name,
      author: author,
      description: description
    })
  }

  return (
    <main className='add-book-page'>
      <TypographyColoredHeading text='Add a new book'/>
      <InputLabel text='Name'/>
      {nameInput}
      {!isNameValid ? (<TypographyColoredSmall text='The name field is required'/>) : <></>}
      <InputLabel text='Author'/>
      {authorInput}
      {!isAuthorValid ? (<TypographyColoredSmall text='The author field is required'/>) : <></>}
      <InputLabel text='Description'/>
      {descriptionInput}
      {!isDescriptionValid ? (<TypographyColoredSmall text='The description field is required'/>) : <></>}
      <InputButton onClick={onSubmit} placeholder='Add new book'/>
      <NavigationBottomBar/>
    </main>
  )
}

export default AddBookPage
